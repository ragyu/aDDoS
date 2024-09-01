import type { NextAuthConfig } from 'next-auth';
import { NextResponse } from 'next/server';

export const authConfig = {
  pages: {
    signIn: '/sign-in',
  },
  providers: [
    // 여기에 사용할 인증 공급자를 추가합니다.
    // 예: TwitterProvider, GitHubProvider 등
  ],
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      // 유저 인증 확인
      const isLoggedIn = !!auth?.user;
      // 보호하고 싶은 경로 설정
      // 여기서는 /sign-in 경로를 제외한 모든 경로가 보호 되었다
      // const isOnProtected = !nextUrl.pathname.startsWith('/sign-in');
      const isOnSignInPage = nextUrl.pathname === '/sign-in';
      const isOnProtectedPage = nextUrl.pathname === '/mypage';

      if (isOnProtectedPage && !isLoggedIn) {
        // 로그인하지 않은 사용자가 보호된 페이지에 접근하려고 할 때
        return NextResponse.redirect(new URL('/sign-in', nextUrl));
      }

      if (isOnSignInPage && isLoggedIn) {
        // 로그인한 사용자가 로그인 페이지에 접근하려고 할 때
        return NextResponse.redirect(new URL('/mypage', nextUrl));
      }
      return true;
    },
  },
} satisfies NextAuthConfig;
