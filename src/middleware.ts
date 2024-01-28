import { withAuth } from "next-auth/middleware";
export default withAuth({
  callbacks: {
    authorized: async ({ req, token }) => {
      if (req.nextUrl.pathname.startsWith("/dashboard")){
        return token?.role === "owner";
      } 
      return !!token;
    },
  },
});
export const config = {
    matcher: ["/dashboard/profile","/dashboard/video"]
}