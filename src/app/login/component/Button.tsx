"use client"
import { signIn } from "next-auth/react"

const Button = () => {
  return (
    <button className="bg-primary rounded-md p-4" onClick={() => signIn("google")}>Sign in with Google</button>
  )
}

export default Button