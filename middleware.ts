import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * Redirect www domain to apex in production so canonical URLs match hreflang / metadata.
 */
export function middleware(request: NextRequest) {
  if (process.env.NODE_ENV !== "production") {
    return NextResponse.next();
  }

  const host = request.headers.get("host")?.split(":")[0] ?? "";
  if (host !== "www.baaz.pro") {
    return NextResponse.next();
  }

  const url = request.nextUrl.clone();
  url.hostname = "baaz.pro";
  url.protocol = "https:";
  return NextResponse.redirect(url, 308);
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|.*\\..*).*)"],
};
