import { ReactNode } from 'react';
// import {FaFacebook, FaYoutube, FaHome} from 'react-icons/fa';
// import {BsFillPersonFill, BsFillLaptopFill} from "react-icons/bs"
type nav = {
    name: string;
    link: string;
    icon?: ReactNode;
} 

export const navData:nav[] = [
    {
        name:"home",
        link: "#home",
        // icon: <FaHome className="h-[1.9rem] w-[1.9rem] sm:h-[2.5rem] sm:w-[2.5rem] text-primary"/>
    },
    {
        name:"about",
        link: "#about",
        // icon: <BsFillPersonFill className="h-[1.9rem] w-[1.9rem] sm:h-[2.5rem] sm:w-[2.5rem] text-primary"/>
    },
    {
        name:"skills",
        link: "#skill" ,
        // icon: <BsFillLaptopFill className="h-[1.9rem] w-[1.9rem] sm:h-[2.5rem] sm:w-[2.5rem] text-primary"/>
    },
    {
        name:"projects",
        link: "#projects",
        // icon: <BsFillLaptopFill className="h-[2.7rem] w-[2.7rem] border border-primary shadow-inner inset p-2 rounded-full grid place-items-center"/>
    },
    {
        name:"videos",
        link: "#video",
        // icon: <FaYoutube className="h-[1.9rem] w-[1.9rem] sm:h-[2.5rem] sm:w-[2.5rem] text-primary"/>
    },
    {
        name:"reviews",
        link: "#review",
        // icon: <BsFillLaptopFill className="h-[1.9rem] w-[1.9rem] sm:h-[2.5rem] sm:w-[2.5rem] text-primary"/>
    },
]