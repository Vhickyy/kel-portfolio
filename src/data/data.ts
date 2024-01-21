import { ReactNode } from 'react';
import {FaFacebook, FaYoutube, FaHome} from 'react-icons/fa';
import {BsFillPersonFill, BsFillLaptopFill} from "react-icons/bs"
import { IconType } from 'react-icons';
type nav = {
    name: string;
    link: string;
    icon: IconType;
} 

export const navData:nav[] = [
    {
        name:"home",
        link: "#home",
        // icon: <FaHome />
        icon: FaHome
    },
    {
        name:"about",
        link: "#about",
        icon: BsFillPersonFill
    },
    {
        name:"skills",
        link: "#skill" ,
        icon: BsFillLaptopFill
    },
    {
        name:"projects",
        link: "#projects",
        icon: BsFillLaptopFill
    },
    {
        name:"videos",
        link: "#video",
        icon: FaYoutube
    },
    {
        name:"reviews",
        link: "#review",
        icon: BsFillLaptopFill
    },
]


const reviews = [
    {
        name: "Jacinta Obi",
        review: "Kelechi is a skilled, creative Canva Graphic Designer who effortlessly blends inspiration with careful attention to detail to produce a compelling design. He creates masterpieces that leave a lasting impression, and his ability to connect with customers and bring their ideas and vision to life is outstanding. I've hired him several times for a couple of jobs and also taken his courses, and he always delivers. I recommend him any day, any time."
    },
    {
        name: "Markita Samuel",
        review: "Working with Kelechi was such a pleasure! He was very attentive and dedicated to ensuring the project met all of our specific needs. I would easily work with him again!"
    },
    {
        name: "Lorraine Dzeka",
        review: "Professionalism, Quality, Responsiveness, Value. The best Graphic designer I've ever worked with, he basically brought our Womapreneur brand to life with his attentive eye for beauty and design. He is a positive team player ,always taking on feedback well and continuously improving. He treats your work like his own personal baby as in he goes the extra mile to make sure things look amazing. If you want show stopping designs , Kelechi is your man"
    },
    {
        name: "Sylvia Istrate",
        review: "Professionalism, Quality, Value. Austin is just phenomenal! I worked with him on several projects and his eye for detail and creativity in design just blew my mind!  He is an absolute master in Canva and his designs can easily compete with any photoshop designs. He truly is a gem when it comes at design!"
    },
    {
        name: "Judy Carasco",
        review: "Ever since I've hired Kelechi for my marketing needs and graphics I have noticed a boost in my business.  Not only is he professional but his turnaround time is amazing amazing I always get everything very quick even if it's the last minute I loved his creativity and how he brings my vision to life."
    },
]