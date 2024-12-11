import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
 
export default NextAuth(authConfig).auth;
 
export const config = {
  // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};

// export default async function middleware(req) {
//   // Optionally implement custom logic
//   // e.g., route protection or additional checks

//   const response = NextResponse.next();
//   return response;
// }