
// import { WithClerkMiddleware } from "@clerk/nextjs/server";
// import type { NextRequest } from "next/server";
// import type { NextResponse } from "next/server";

// export default withClerkMiddleware((_req: NextRequest) => {
//   NextResponse.next()

// })

// export const config = {
//   matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
// };


import { authMiddleware } from "@clerk/nextjs";
export default authMiddleware({
  publicRoutes: ["/", "/projects", "/blog", "/timeline", "/resume", /^\/blog\/.*/, "/contact", "/api/send", "/services", "/api/revalidate", "/portfolio", "/autobiography"],
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};