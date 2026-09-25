import { Redis } from '@upstash/redis';
import { NextResponse } from 'next/server';
import { ADMIN_PASSWORD, defaultPackages, defaultServices, type PackageItem, type ServiceItem } from '@/lib/admin-data';

const CONTENT_KEY = 'sm-photography:published-content';

type PublishedContent = {
  packages: PackageItem[];
  services: ServiceItem[];
};

function hasRedisConfig(): boolean {
  return Boolean(process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN);
}

function getDefaults(): PublishedContent {
  return { packages: defaultPackages, services: defaultServices };
}

function getRedis(): Redis {
  return Redis.fromEnv();
}

export async function GET() {
  if (!hasRedisConfig()) return NextResponse.json(getDefaults());

  try {
    const content = await getRedis().get<PublishedContent>(CONTENT_KEY);
    return NextResponse.json(content || getDefaults());
  } catch {
    return NextResponse.json(getDefaults());
  }
}

export async function POST(request: Request) {
  if (request.headers.get('x-admin-password') !== ADMIN_PASSWORD) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  if (!hasRedisConfig()) {
    return NextResponse.json({ error: 'Shared storage is not configured in Vercel.' }, { status: 503 });
  }

  try {
    const content = (await request.json()) as PublishedContent;
    if (!Array.isArray(content.packages) || !Array.isArray(content.services)) {
      return NextResponse.json({ error: 'Invalid content.' }, { status: 400 });
    }

    await getRedis().set(CONTENT_KEY, content);
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: 'Unable to save content.' }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  if (request.headers.get('x-admin-password') !== ADMIN_PASSWORD) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  if (!hasRedisConfig()) {
    return NextResponse.json({ error: 'Shared storage is not configured in Vercel.' }, { status: 503 });
  }

  try {
    await getRedis().del(CONTENT_KEY);
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: 'Unable to reset content.' }, { status: 500 });
  }
}
