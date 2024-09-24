

function Footer() {
  return (
    <div>
      <div className="h-2 bg-gradient-to-b from-transparent to-green-800"></div>
    <section className="p-5 bg-green-800 text-white ">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-5">
    <div className="w-full h-full rounded-md">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2798.136017863397!2d-122.75355893437461!3d45.46706386491967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54950c7be4372a05%3A0x422825b5c33f3063!2sFunny%20Farm%20Early%20Learning%20Center!5e0!3m2!1sen!2sus!4v1717700649714!5m2!1sen!2sus"
              className="w-full h-full border rounded-md"

              style={{ border: 3 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade" 
      />
    </div>
        <div className="">
            <div className="flex flex-col mt-5">
            <div className="flex flex-row gap-x-5 pb-5 text-center sm:text-start">
              <span className="[&>svg]:h-5 [&>svg]:w-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 320 512">
                <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
              </svg>
            </span>
            <a href="https://www.facebook.com/funnyfarmelc/events/?ref=page_internal&paipv=0&eav=AfYDFM45KkkMNZWFRV9tfACKry13kq5kvWWe7Kz1dJ2DGOI0uo0hV65-c7Qo1Uk9tAs&_rdr">We are on Facebook!</a>
            </div>
            <div className='flex flex-row gap-x-5 pb-0'>
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke-width="1.5" 
                  stroke="currentColor" 
                  className="size-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z" />
                </svg>
              </span>
              <h6>Locate Us</h6>
            </div>
            <div className="grid grid-cols-1 text-start pb-5">
                <p className="ps-11">7475 SW Oleson Rd #13a</p>
                <p className="ps-11">Portland, OR 97223</p>
            </div>
            <div className="flex flex-row gap-x-5 pb-0">
                <span className="">
                  <svg xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke-width="1.5" 
                    stroke="currentColor" 
                    className="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                  </svg>
                </span>
                <h6>503.321.5000</h6>
            </div>
              <div className="grid grid-cols-1 text-start pb-5">
                <a href="mailto:funnyfarmelc@yahoo.com" className="ps-11">funnyfarmelc@yahoo.com</a>
            </div>
          </div>
        </div>
    </div>
</section>
<div className="bg-gradient-to-b from-green-900 to-blue-950 h-2"></div>
<footer className="bg-blue-950 text-gray-300 py-4">
    <p className="lead text-center font-light">&copy; 2024 Funny Farm Early Learning Center, Inc.</p>
</footer>
    </div>
  )
}

export default Footer
