import { withAuth, NextRequestWithAuth } from "next-auth/middleware";
export default withAuth({
  callbacks: {
    authorized: async ({ req, token }) => {
      const isLogginIn = !!token;
      if(req.nextUrl.pathname.includes("/dashboard") && !isLogginIn) {
        Response.redirect(new URL("/login",req.nextUrl))
        // console.log("ji");
        // return !!token;
      }else 
      if (req.nextUrl.pathname.startsWith("/dashboard/reviews")){
        console.log("ftt");
        
        return token?.role === "owner";
      } 
      return !!token;
    },
  },
});
// export default withAuth(
//   function auth(req:NextRequestWithAuth){
//     console.log(req);
//     console.log(req.nextauth.token);
    
//     console.log(req.nextUrl.pathname);
    
//   }
// )
export const config = {
    matcher: ["/dashboard/profile","/dashboard/reviews"]
}