"use client"
import { reviews } from "@/data/data"
import useScroll from "./custom/scroll";

const Reviews = () => {
  const {ref} =  useScroll({name:"reviews",threshold:0.5});
  return (
    <section ref={ref} id="review">
      <h2 className='font-extrabold text-2xl sm:text-3xl text-textColor text-center'>Reviews</h2>
      <div className="text-textgray">
        {reviews.map((review,index)=>{
          return (
            <div className="text-center" key={index}>
              <h1 className="text-textColor font-semibold text-xl">{review.name}</h1>
              <p className="mt-6 ">{review.review}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Reviews