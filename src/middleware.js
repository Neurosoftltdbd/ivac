import { NextResponse } from 'next/server';
import { isAuthenticated } from '@/lib/auth';

export async function middleware(request) {
  const { pathname } = request.nextUrl;

  let isValidUser = await isAuthenticated(request);

  const isPublicPath = pathname === '/';

  if (isValidUser && isPublicPath) {
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }

  if (!isValidUser && pathname.startsWith('/dashboard')) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/', '/dashboard/:path*'],
};