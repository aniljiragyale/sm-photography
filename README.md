# 📸 SM Photography

Welcome to **SM Photography** – a modern and responsive photography portfolio website designed to showcase stunning visual works.

## Run locally

From the repository root:

```bash
npm install
npm run dev
```

The app runs at `http://localhost:3000`.

## Deploy on Vercel

Set the Vercel **Root Directory** to `sm-photography`, then use the detected Next.js framework and deploy from the `master` branch. If the Root Directory is left at the repository root, use the root build command `npm run build`.

### Enable shared admin updates

The admin editor publishes package and service changes through `/api/content`. Connect an **Upstash Redis** integration to the Vercel project so these environment variables are available:

- `UPSTASH_REDIS_REST_URL`
- `UPSTASH_REDIS_REST_TOKEN`

After connecting the integration, redeploy the `master` branch. Without this storage connection, the editor can only save changes in the current browser.

## Project Structure

- **HTML** – Semantic markup for a well-structured layout
- **CSS** – Clean styling for responsiveness and visual appeal
- **JavaScript** – (Optional) for interactivity (if added)

## ✨ Features

- Fully responsive design for all screen sizes
- Elegant layout to highlight photography work
- Clean, minimalistic style
- Contact and social media integration (if added)

## 🛠️ Tech Stack

- HTML5
- CSS3
- (Optional) JavaScript
- Hosted on **Vercel**

## 📷 Preview

![Website Preview](relative/path/to/screenshot.png)

> Replace `relative/path/to/screenshot.png` with the actual path to your screenshot image in the repo

---

## 📬 Contact

Feel free to connect or collaborate!

- 📧 aniljiragyale213@gmail.com
- 💼 [LinkedIn](https://linkedin.com/in/aniljiragyale)

---

> Project maintained by [Anil Jiragyale](https://github.com/aniljiragyale)
