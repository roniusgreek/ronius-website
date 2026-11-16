import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// כל כתובות ה-vercel.app (הזמנית וגם כתובות ה-deploy האקראיות) מפנות לדומיין האמיתי.
export function middleware(request: NextRequest) {
  const host = request.headers.get("host") ?? "";
  if (host.endsWith(".vercel.app")) {
    const url = new URL(request.nextUrl.pathname + request.nextUrl.search, "https://ronius.co.il");
    return NextResponse.redirect(url, 308);
  }
  return NextResponse.next();
}

export const config = {
  matcher: "/((?!_next/static|_next/image|favicon.ico).*)",
};
