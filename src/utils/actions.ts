"use server"
import { redirect } from "next/navigation"
import prisma from "../../prisma/db"
import * as z from "zod";

export const addReview = async (prevState:any,formdata: any) => {
    await new Promise(resolve => setTimeout(resolve, 2000))
    const review = formdata.get("review")
    const reviewer = "vee"
    const ReviewSchema = z.object({
        review: z.string().max(40),
        reviewer: z.string()
    });
    try {
        ReviewSchema.parse({review,reviewer});
        await prisma.review.create({
            data:{
                review,
                reviewer
            }
        })
        return({message:"Review Added Successfully"})
    } catch (error) {
        return({message:"error"});
    }
}

export const getReviews = async () => {
    const reviews = await prisma.review.findMany()
    return reviews;
}