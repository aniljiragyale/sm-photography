'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import {
  galleryCategories,
  getAllGalleryItems,
  getCustomGalleryItems,
  isAdminLoggedIn,
  saveCustomGalleryItems,
  setAdminLoggedIn,
  type GalleryItem,
} from '@/lib/admin-data';

const initialForm = {
  title: '',
  category: 'wedding',
  image: '',
  description: '',
};

export default function AdminPage() {
  const router = useRouter();
  const [isReady, setIsReady] = useState(false);
  const [form, setForm] = useState(initialForm);
  const [items, setItems] = useState<GalleryItem[]>([]);
  const [message, setMessage] = useState('');
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (!isAdminLoggedIn()) {
      router.replace('/admin/login');
      return;
    }

    setItems(getAllGalleryItems());
    setIsReady(true);
  }, [router]);

  const customItems = useMemo(() => getCustomGalleryItems(), [items]);

  const updateField = (field: keyof typeof initialForm, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      const result = typeof reader.result === 'string' ? reader.result : '';
      if (!result) {
        setMessage('Image upload failed. Please try again.');
        return;
      }

      setForm((prev) => ({ ...prev, image: result }));
      setMessage('Image uploaded successfully.');
    };

    reader.readAsDataURL(file);
  };

  const saveItem = () => {
    if (!form.title.trim() || !form.image.trim()) {
      setMessage('Please add a title and image URL.');
      return;
    }

    const newItem: GalleryItem = {
      id: `${form.category}-${Date.now()}`,
      title: form.title.trim(),
      category: form.category,
      image: form.image.trim(),
      description: form.description.trim(),
    };

    const nextItems = [...getCustomGalleryItems(), newItem];
    saveCustomGalleryItems(nextItems);
    setItems(getAllGalleryItems());
    setForm(initialForm);
    setMessage('New gallery item added successfully.');
  };

  const removeItem = (id: string) => {
    const nextItems = getCustomGalleryItems().filter((item) => item.id !== id);
    saveCustomGalleryItems(nextItems);
    setItems(getAllGalleryItems());
    setMessage('Item removed from the public gallery.');
  };

  const logout = () => {
    setAdminLoggedIn(false);
    router.push('/');
  };

  if (!isReady) {
    return <div className="page-shell"><div className="page-content"><p>Loading admin panel...</p></div></div>;
  }

  return (
    <div className="page-shell admin-shell">
      <div className="page-header admin-header-row">
        <div>
          <div className="page-actions page-actions-top">
            <Link href="/" className="page-back">← Back</Link>
          </div>
          <p className="eyebrow">Private dashboard</p>
          <h1>Admin Panel</h1>
        </div>
        <button type="button" className="btn btn-secondary" onClick={logout}>
          Logout
        </button>
      </div>

      <div className="page-content admin-panel">
        <div className="admin-layout">
          <section className="admin-card">
            <h2>Add a new photo</h2>
            <div className="admin-form grid-form">
              <label>
                Title
                <input
                  className="field"
                  value={form.title}
                  onChange={(event) => updateField('title', event.target.value)}
                  placeholder="Example: Sunset Couple Session"
                />
              </label>

              <label>
                Category
                <select
                  className="field"
                  value={form.category}
                  onChange={(event) => updateField('category', event.target.value)}
                >
                  {galleryCategories.filter((item) => item !== 'all').map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </label>

              <label>
                Image URL
                <div className="upload-row">
                  <input
                    className="field"
                    value={form.image}
                    onChange={(event) => updateField('image', event.target.value)}
                    placeholder="https://example.com/photo.jpg"
                  />
                  <button
                    type="button"
                    className="btn btn-secondary upload-button"
                    onClick={() => fileInputRef.current?.click()}
                  >
                    Upload Image
                  </button>
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    hidden
                    onChange={handleFileUpload}
                  />
                </div>
              </label>

              <label>
                Description
                <textarea
                  className="field"
                  value={form.description}
                  onChange={(event) => updateField('description', event.target.value)}
                  placeholder="Add a short story or caption for this photo"
                />
              </label>

              <div className="admin-actions">
                <button type="button" className="submit-btn" onClick={saveItem}>
                  Save photo
                </button>
                <Link href="/gallery" className="page-back">
                  View gallery
                </Link>
              </div>

              {message ? <p className="form-status">{message}</p> : null}
            </div>
          </section>

          <section className="admin-card">
            <h2>Live gallery items</h2>
            <div className="admin-item-list">
              {customItems.length === 0 ? (
                <p className="form-note">No custom items yet. Add your first image to make it visible on the site.</p>
              ) : (
                customItems.map((item) => (
                  <div key={item.id} className="admin-item-card">
                    <div className="admin-thumb" style={{ backgroundImage: `url("${encodeURI(item.image)}")` }} />
                    <div>
                      <h3>{item.title}</h3>
                      <p>{item.description || 'New gallery moment added by admin.'}</p>
                      <span className="admin-tag">{item.category}</span>
                    </div>
                    <button type="button" className="remove-btn" onClick={() => removeItem(item.id)}>
                      Remove
                    </button>
                  </div>
                ))
              )}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
