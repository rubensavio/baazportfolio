import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * 301 www → apex so crawlers see a single host (SEO audit).
 * Keep NEXT_PUBLIC_SITE_URL=https://baaz.pro (no www).
 */
export function proxy(request: NextRequest) {
  const host = request.headers.get("host")?.split(":")[0] ?? "";
  if (host !== "www.baaz.pro") {
    return NextResponse.next();
  }

  const url = request.nextUrl.clone();
  url.hostname = "baaz.pro";
  url.protocol = "https:";
  url.port = "";
  return NextResponse.redirect(url, 301);
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico).*)",
    "/",
  ],
};
