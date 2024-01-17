import NextAuth, { DefaultSession } from "next-auth";
import { User } from "@prisma/client";
import { JWT } from "next-auth/jwt";

declare module "next-auth" {
  interface Session {
    user: DefaultSession & {
      role: string
    }; 
  }
}

declare module "next-auth/jwt" {
  type JWT = {role:string};
}