import { authMiddleware } from "@clerk/nextjs";
export default authMiddleware({
  publicRoutes: ["/", "/projects", "/blog", "/timeline", "/resume", /^\/blog\/.*/],
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
