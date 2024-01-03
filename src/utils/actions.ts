"use server"
import { redirect } from "next/navigation"
import prisma from "../../prisma/db"

export const addReview = async (prevState:any,formdata: any) => {
    await new Promise(resolve => setTimeout(resolve, 2000))
    const review = formdata.get("review")
    const reviewer = "vee"
    console.log(review);
    try {
        await prisma.review.create({
            data:{
                review,
                reviewer
            }
        })
        return({message:"Review Added Successfully"})
    } catch (error) {
        return({message:"error"})
    }
}

export const getReviews = async () => {
    const reviews = await prisma.review.findMany()
    return reviews;
}