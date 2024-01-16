"use client"
import { signIn } from "next-auth/react"
const Login = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center flex-col">
      <h2>Log in to leave a review for Kelechi</h2>
      <button className="bg-primary rounded-md p-4" onClick={() => signIn()}>Sign in with Google</button>
    </div>
  )
}

export default Login