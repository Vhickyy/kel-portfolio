"use server"
import prisma from "../../prisma/db"
import { revalidatePath } from "next/cache"

export const addReview = async (formdata: any) => {
    await new Promise(resolve => setTimeout(resolve, 2000))
    const review = formdata.get("review")
    const reviewer = "vee"
    await prisma.review.create({
        data:{
            review,
            reviewer
        }
    })
    revalidatePath("/dashboard/profile")
}

export const getReviews = async () => {
    const reviews = await prisma.review.findMany()
    return reviews;
}