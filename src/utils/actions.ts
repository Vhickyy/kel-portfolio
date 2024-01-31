"use server"
import prisma from "../../prisma/db";
import { revalidatePath, revalidateTag } from "next/cache";
import { v2 as cloudinary } from "cloudinary";
import formatImage from "./formatImage";

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_API_SECRET,
})

// add Project
export const addProject = async (prevState:{message:string},formdata: FormData) => {
    const file = formdata.get("upload") as File;
    const category = formdata.get("category") as string;
    
    if(!file.type.includes("image")){
        return {message:"Not an image, upload an image less than 1mb"}
    }
    if(!category){
        return {message:"category is required"}
    }
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    const formatted = formatImage(file,buffer);
    try {
        const res = await cloudinary.uploader.upload(formatted!,{folder: "kel-portfolio"});
        console.log(res);
        await prisma.project.create({
            data:{
                publicId: res.public_id,
                secureUrl: res.secure_url,
                category: category
            }
        });
        revalidatePath("/dashboard.profile")
        formdata.set("upload","");
        formdata.set("catrgory","");
        return {message: "success"}
    } catch (error:any) {
        console.log(error.message);
        return {message :error.message}
    } 
}

// get projects
export const getProjects = async () => {
    try {
        const projects = await prisma.project.findMany();
        return projects;
    } catch (error:any) {
        // console.log(error);
        // console.log("hi");
        // return  {projects:"An error occurred"};
        return error
    }
}

// delete projects
export const deleteProject = async (prevState:any,formData:FormData) => {
    const id = formData.get("id") as string;
    const publicId = formData.get("publicId") as string;
    try {
        const deleteFromCloud =  cloudinary.uploader.destroy(publicId)
        const deleteproject = prisma.project.delete({
            where:{
                id
            }
        });
        await Promise.all([deleteproject,deleteFromCloud]);
        revalidatePath("/dashboard/profile")
        revalidatePath("/")
        return {message:"deleted successfully"}
    } catch (error:any) {
        console.log(error);
        return {error:error.message}
    }
}

// add Video
export const addVideo = async (_prevState:{message:string},formdata: FormData) => {
    const file = formdata.get("upload") as File;
    const title = formdata.get("title") as string;
    const link = formdata.get("link") as string;
    const description = formdata.get("description") as string;
    if(!file.type.includes("image")){
        return {message:"Not an image, upload an image less than 1mb"}
    }
    if(!title || !description || !link){
        return {message:"Provide all field"}
    }
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    const formatted = formatImage(file,buffer);
    try {
        const res = await cloudinary.uploader.upload(formatted!,{folder: "kel-portfolio"});
        console.log(res);
        const video = await prisma.video.create({
            data:{
                publicId: res.public_id,
                secureUrl: res.secure_url,
                description: description,
                title: title,
                link: link
            }
        })
        revalidatePath("/dashboard/video")
        revalidatePath("/")
        // revalidateTag("10")
        formdata.set("upload","");
        formdata.set("catrgory","");
        return {message: "success"}
    } catch (error:any) {
        return {message :error.message}
    } 
}

// get Videos
export const getVideos = async () => {
    try {
        const videos = await prisma.video.findMany();
        return videos;
    } catch (error:any) {
        console.log(error);
        return error
    }
}

// delete video
export const deleteVideo = async (prevState:{message:string},formData:FormData) => {
    const id = formData.get("id") as string;
    const publicId = formData.get("publicId") as string;
    try {
        const deleteFromCloud = cloudinary.uploader.destroy(publicId);
        const deleteVideo = prisma.video.delete({
            where:{
                id
            }
        });
        await Promise.all([deleteFromCloud,deleteVideo]);
        revalidatePath("/dashboard/video")
        revalidatePath("/")
        return {message: "deleted successfully"};
    } catch (error:any) {
        return {message:error.message};
    }
}

// NESTJS
// ANGULARJS
// REACT NATIVE
// GRAPHQL
// RUST
// DSA

// delete other users and navigate them elsewhere