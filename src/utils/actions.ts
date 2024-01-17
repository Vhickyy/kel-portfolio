"use server"
import { redirect } from "next/navigation"
import prisma from "../../prisma/db"
import * as z from "zod";
import { revalidatePath } from "next/cache";


// get user and their review
export const getUser = async () => {
    try {
        const user = await prisma.user.findUnique({
            where:{
                email: ""
            }
        })
        return user;
    } catch (error) {
        console.log(error);
        return error
    }
}
// add review
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

// edit user profile
export const editProfile = async (prevState:any,formdata: any) => {
    const name = formdata.get("name");
    const company = formdata.get("company");
    const status = formdata.get("status");
    const id = formdata.get("id");
    const ProfileSchema = z.object({
        name: z.string().max(50),
        company: z.string().max(15),
        status: z.string()
    });
    try {
        ProfileSchema.safeParse({name,company,status});
        await prisma.user.update({
            where:{
                id
            },
            data:{
                name,
                // company,
                status
            }
        })
        return({message:"Review Added Successfully"})
    } catch (error:any) {
        return({message: error.message});
    }
}

// get review by owner
export const getReviews = async () => {
    try {
        const reviews = await prisma.review.findMany()
        return reviews;
    } catch (error) {
        console.log(error);
        return error
    }
}

// delete review by owner or reviewer
export const deleteReview = async (prevState:any,formdata: any) => {
    const id = formdata.get("id");
    try {
        await prisma.review.delete({
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

// delete user by owner and reviewer
export const deleteUser = async (prevState:any,formdata: any) => {
    const id = formdata.get("id");
    try {
        await prisma.user.delete({
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

// hide oe show review in main page
export const toggleReview = async (prevState:any,formdata: any) => {
    const hide = formdata.get("hide");
    const id = formdata.get("id");
    try {
        await prisma.user.update({
            where:{
                id,
            },
            data:{
                showReview: hide === "on" ? true : false
            }
        })
        revalidatePath("/dashboard/reviews")
        return {message: "success"}
    } catch (error: any) {
        return {error: error.message}
    }
}