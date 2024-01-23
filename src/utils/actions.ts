"use server"
import { redirect } from "next/navigation"
import prisma from "../../prisma/db";
import { revalidatePath } from "next/cache";
import { v2 as cloudinary } from "cloudinary";
import os from "os";
import fs from "fs/promises"
import {v4 as uuidv4} from "uuid";
import path from "path";

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_API_SECRET,
})

// add Project
export const addProject = async (_prevState:{message:string},formdata: FormData) => {
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
    const filename = `${uuidv4()}.${file.type.split("/")[1]}`;
    const tempDir = os.tmpdir();
    const uploadDir = path.join(tempDir, `/${filename}`);
    fs.writeFile(uploadDir,buffer)
    const res = await cloudinary.uploader.upload(uploadDir,{folder: "kel-portfolio"});
    fs.unlink(uploadDir);
    try {
        const photo = await prisma.project.create({
            data:{
                publicId: res.public_id,
                secureUrl: res.secure_url,
                category: category
            }
        })
        console.log(photo);
        return {message:photo}
    } catch (error:any) {
        return {message :error.message}
    }
}

// get projects
export const getProjects = async () => {
    try {
        const projects = await prisma.project.findMany();
        console.log(projects);
        return projects;
    } catch (error:any) {
        console.log(error);
        console.log("hi");
        
        return error
    }
}

// delete projects
export const deleteProjects = async (prevState:any,formData:any) => {
    const {id} = formData.get("id");
    try {
        const projects = await prisma.project.findMany();
        console.log(projects);
        return projects;
    } catch (error:any) {
        console.log(error);
        console.log("hi");
        
        return error
    }
}

// add Video
export const addVideo = async (prevState:any,formdata: any) => {
    const img = formdata.get("img");
    const category = formdata.get("link");
    const title = formdata.get("title");
    const detail = formdata.get("detail");
    try {
        return {message:""}
    } catch (error) {
        return {message:""}
    }
}


// NESTJS
// ANGULARJS
// REACT NATIVE
// GRAPHQL
// RUST