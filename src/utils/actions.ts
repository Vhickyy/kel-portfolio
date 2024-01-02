"use server"
import { redirect } from "next/navigation"
import prisma from "../../prisma/db"

export const addReview = async (formdata: any) => {
    await new Promise(resolve => setTimeout(resolve, 2000))
    const review = formdata.get("review")
    const reviewer = "vee"
    console.log(review);
    
    await prisma.review.create({
        data:{
            review,
            reviewer
        }
    })
    // revalidatePath("/dashboard/profile")
    redirect("/dashboard/profile")
}

export const getReviews = async () => {
    const reviews = await prisma.review.findMany()
    return reviews;
}