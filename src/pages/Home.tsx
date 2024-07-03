import Background from '../assets/images/Funny Farm Logo.svg'

function Home() {
  return (
    <div
      style={{ backgroundImage: `url(${ Background })`}}
      className='flex flex-row justify-center mx-auto bg-no-repeat bg-center'
      >
        <div className="flex flex-col p-10 place-items-center justify-center h-min sm:h-auto m-10 sm:my-32 sm:w-2/3 md:w-1/2 bg-white bg-opacity-80 text-black font-semibold border rounded-lg text-start">
            <h3 className="w-full font-bold">With a cluck-cluck here, and a quack-quack there, welcome to the Funny Farm Early Learning Center!</h3>
            <br /> 
            <p>Our one-of-a-kind, full day preschool program provides families with the perfect balance between the structure and professionalism of a corporate childcare center and 
            the personal attention of in-home care.</p>
            <br />
            <p>Top-notch curriculum, fun-loving teachers and a truly unique, community-centered environment make Funny Farm Early Learning Center the needle in the haystack you've 
            been looking for! So take the bull by the horns and come check us out...</p>
            <br />
            <p>we'll leave the barn door open!</p>
        </div>
    </div>
  )
}

export default Home
