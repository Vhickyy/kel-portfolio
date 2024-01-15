"use server"
import { redirect } from "next/navigation"
import prisma from "../../prisma/db"
import * as z from "zod";
import { revalidatePath } from "next/cache";

export const addReview = async (prevState:any,formdata: any) => {
    await new Promise(resolve => setTimeout(resolve, 2000))
    const review = formdata.get("review")
    const reviewer = "vee"
    const ReviewSchema = z.object({
        review: z.string().min(20).max(40),
        reviewer: z.string()
    });
    try {
        ReviewSchema.safeParse({review,reviewer});
        await prisma.review.create({
            data:{
                review,
                reviewer
            }
        })
        return({message:"Review Added Successfully"})
    } catch (error:any) {
        return({message: error.message});
    }
}

export const getReviews = async () => {
    const reviews = await prisma.review.findMany()
    return reviews;
}

export const deleteReview = async (prevState:any,formdata: any) => {
    const id = formdata.get("id");
    try {
        const reviews = await prisma.review.delete({
            where:{
                id,
            }
        })
        revalidatePath("/dashboard/reviews")
        return {message: "success"}
    } catch (error: any) {
        return {error: error.message}
    }
    
}