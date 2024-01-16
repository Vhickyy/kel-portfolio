import { withAuth, NextRequestWithAuth } from "next-auth/middleware";
export default withAuth(
    function middleware(req:NextRequestWithAuth){

    }
)
export const config = {
    matcher: [""]
}