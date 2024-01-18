
import { getServerSession } from "next-auth/next";
import Button from "./component/Button";
import { getSession, useSession } from "next-auth/react";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

const Login = async () => {
  const session = await getServerSession(authOptions);
  console.log(session,"login");
  // const {data:session} = useSession()
  // console.log(session);
  if(session && session.user){
    return redirect("/dashboard/profile")
  }
  
  return (
    <div className="w-full h-screen flex justify-center items-center flex-col">
      <h2>Log in to leave a review for Kelechi</h2>
      <Button/>
    </div>
  )
}

export default Login