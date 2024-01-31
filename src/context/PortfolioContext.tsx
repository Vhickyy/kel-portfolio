"use client"
import { reviews } from "@/data/data";
import { Dispatch, ReactNode, SetStateAction, createContext, useContext, useEffect, useState } from "react";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
type PortfolioProp = {
    active : string
    changeActive: (active:string,e?:React.MouseEvent<HTMLAnchorElement, MouseEvent>,desktop?:boolean) => void
    clicked: string,
    theme : boolean
    toggleTheme: ()=>void
    setClicked: (link:string) => void
}
const PortfolioContext = createContext({} as PortfolioProp);

export const PortfolioContextProvider = ({children}: {children: ReactNode}) => {
    const [active,setActive] = useState("home");
    const [clicked, setClicked] = useState("")
    const [theme,setTheme] = useState(false);
    const [loaded,setLoaded] = useState(false)
    
    useEffect(()=>{
        setTimeout(()=>{
            setLoaded(true)
        },2000)
    },[])
    // nav
    const changeActive = (active:string,e?:React.MouseEvent<HTMLAnchorElement, MouseEvent>,desktop?:boolean) => {
        e?.preventDefault();
        setActive(active)
        if(e){
            const href = e?.currentTarget.getAttribute("href")!;
            const target:HTMLDivElement = document.querySelector(href)!;
            let scroll = 0;
            if(desktop){
                scroll = target.offsetTop - 70
            }else{
                scroll = target.offsetTop - 50
            }
            if(href == "#home"){
                scroll = 0
            }
            window.scrollTo({
            left: 0,
            top: scroll,
            behavior: "smooth"
            })
        }
    }

    // Theme
    const toggleTheme = () => {
        setTheme(!theme)
        localStorage.setItem("darkTheme",JSON.stringify(!theme));
        document.body.classList.toggle("dark",!theme);
    }
    const getTheme = () =>{
        const theme = JSON.parse(localStorage.getItem("darkTheme") as string) === true;
        document.body.classList.toggle("dark", theme);
        setTheme(theme);
        return theme;
     }
    useEffect(()=>{
        getTheme()
    },[])

    if(!loaded){
        return (
          <div className="loading ">
                {/* <h1 className="text-red-600">loading</h1> */}
                {/* <div className="flex flex-col gap-2">
                    <div className="flex gap-2">
                        <div className="w-6 rounded h-6 bg-primary"></div>
                        <div className="w-6 rounded h-6 bg-primary"></div>
                    </div>
                    <div className="flex gap-2">
                        <div className="w-6 rounded h-6 bg-primary"></div>
                        <div className="w-6 rounded h-6 bg-primary"></div>
                    </div>
                </div> */}
                <p className="text-primary">Canva Made Easy Man!</p>
             </div>
            
        )
    }
    // if(!loaded){
    //     return(
    //         <Swiper
    //             pagination={{clickable:true}}
    //             direction={"horizontal"}
    //             loop={true}
    //             slidesPerView={1.7}
    //             spaceBetween={40}
    //             modules={[Pagination]}
    //             className="text-textColor bg-green-400"
    //             >
    //                 {reviews.map((review,index)=>{
    //                 return (
    //                     <SwiperSlide className="bg-blue-600" key={index}>
    //                     <div className="text-center" >
    //                         <h1 className="text-textColor font-semibold text-xl">{review.name}</h1>
    //                         <p className="mt-6 ">{review.review}</p>
    //                     </div>
    //                     </SwiperSlide>
    //                 )
    //                 })}
    //                 <SwiperSlide>1</SwiperSlide>
    //                 <SwiperSlide>1</SwiperSlide>
    //                 <SwiperSlide>1</SwiperSlide>
        
    //   </Swiper>
    //     )
    // }

    return (
        <PortfolioContext.Provider value={{active, changeActive,clicked, theme, toggleTheme, setClicked}}>
            {children}
        </PortfolioContext.Provider>
    )
};

const usePortfolioContext = () => {
    return useContext(PortfolioContext);
}

export default usePortfolioContext;