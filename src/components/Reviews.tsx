import { reviews } from "@/data/data"

const Reviews = () => {
  return (
    <section>
      <h2 className='font-extrabold text-2xl sm:text-3xl text-textColor text-center'>Reviews</h2>
      <div className="text-textgray">
        {reviews.map(review=>{
          return (
            <>hi</>
          )
        })}
      </div>
    </section>
  )
}

export default Reviews