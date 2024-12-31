import { NextResponse } from 'next/server';

export async function middleware(request) {
  console.log("request.nextUrl.origin===>", request.nextUrl.origin)
  const response = await fetch(`${request.nextUrl.origin}/api/auth/session`, {
    headers: { cookie: request.headers.get('cookie') || '' },
  });

  const session = await response.json();
  console.log("response-------->", session)

  // If session exists, allow access to the profile page
  if (session?.user) {
    return NextResponse.next();
  }

  // If no session, redirect to the home page
  return NextResponse.redirect(new URL('/', request.url));
}

// Matching the /profile route
export const config = {
  matcher: '/profile',
};
