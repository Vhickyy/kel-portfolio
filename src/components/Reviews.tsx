"use client"
import { reviews } from "@/data/data"
import useScroll from "./custom/scroll";
import { Swiper,SwiperSlide } from "swiper/react";
import "swiper/css"
import "swiper/css/pagination"
import { Pagination } from "swiper/modules";

const Reviews = () => {
  const {ref} =  useScroll({name:"reviews",threshold:0.5});
  return (
    <section ref={ref} id="review">
      <h2 className='font-extrabold text-2xl sm:text-3xl text-textColor text-center'>Reviews</h2>
      <Swiper
      pagination={{clickable:true}}
      direction={"horizontal"}
      loop={true}
      slidesPerView={1}
      // spaceBetween={40}
      modules={[Pagination]}
      className="text-textColor h-[22rem] md:h-[17rem] w-full md:w-[70%] mx-auto "
      >
        {reviews.map((review,index)=>{
          return (
            <SwiperSlide className=" h-full grid place-items-center" key={index}>
              <div className="text-center pt-10 md:px-6" >
                <h1 className="text-textColor font-semibold text-xl">{review.name}</h1>
                <p className="mt-6 ">{review.review}</p>
              </div>
            </SwiperSlide>
          )
        })}
        {/* <SwiperSlide>1</SwiperSlide>
        <SwiperSlide>2</SwiperSlide>
        <SwiperSlide>3</SwiperSlide> */}
        
      </Swiper>
      {/* <div className="text-textgray">
        {reviews.map((review,index)=>{
          return (
            <div className="text-center" key={index}>
              <h1 className="text-textColor font-semibold text-xl">{review.name}</h1>
              <p className="mt-6 ">{review.review}</p>
            </div>
          )
        })}
      </div> */}
    </section>
  )
}

export default Reviews