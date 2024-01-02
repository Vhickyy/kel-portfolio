"use client"
import { Dispatch, ReactNode, SetStateAction, createContext, useContext, useEffect, useState } from "react";
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
    const [mode,setMode] = useState("")
    // const [show, setShow] = useState("review")
    
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