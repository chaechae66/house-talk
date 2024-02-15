import { getToken } from "next-auth/jwt";
import {
  type NextRequest,
  type NextFetchEvent,
  NextResponse,
} from "next/server";

export async function middleware(req: NextRequest, event: NextFetchEvent) {
  const session = await getToken({
    req,
    secret: process.env.NEXTAUTH_SECRET,
  });
  const { pathname } = req.nextUrl;

  if (pathname.startsWith("/home") || pathname.startsWith("/message")) {
    if (!session) {
      return NextResponse.redirect(new URL("/", req.url));
    }
  }

  if (pathname.startsWith("/auth") || pathname === "/") {
    if (session) {
      return NextResponse.redirect(new URL("/home", req.url));
    }
  }
}

export const config = {
  matchter: ["/", "/home", "/message", "/auth/:path*"],
};
