

const Footer = () => {
    return (
        <div className="md:relative w-full  ">

            <div className="md:absolute md:bottom-1/2 md:left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2 md:mx-0 mx-2 ">
            <div className="  bg-transparent backdrop-blur-sm sm:w-[90%] md:w-[1200px] mx-auto pt-4 pb-4 rounded-2xl border-2 border-white mt-10">
                <div className="bg-white bg-center bg-cover max-w-[1160px] mx-auto pt-14 pb-14 rounded-2xl flex flex-col justify-center border-2 border-slate-200 items-center gap-4 bg-[url('https://i.ibb.co.com/2jKKJgk/bg-shadow.png')]">
                    <h1 className="text-2xl font-bold text-center">Subscribe to our Newsletter</h1>
                    <p className="text-[#131313bd] text-center">Get the latest updates and news right in your inbox!</p>
                    <div className="flex gap-2 md:gap-5">
                        <input className="md:w-80 w-48  px-3 py-1 md:py-3 rounded-xl border border-black/60" type="text" placeholder="Enter your email" />
                        <button className="bg-gradient-to-tr from-yellow-500 to-purple-500 text-white rounded-lg px-4 md:text-base text-sm">Subscribe</button>
                    </div>
                </div>
            </div>
            </div>

            <footer className=" flex flex-col justify-center items-center gap-6 bg-black pt-20 md:pt-48 pb-10 mt-10 md:mt-52 ">
                <img className="mb-4" src={'logoFooter.png'} alt="" />

                <div className="flex md:flex-row flex-col gap-10 md:gap-56 text-white md:text-start text-center ">
                    <div className="flex flex-col md:items-start gap-2">
                        <h4 className="font-bold">About Us</h4>
                        <p className="text-white/60 text-sm">We are a passionate team <br /> dedicated to providing the best <br />services to our customers.</p>
                    </div>

                    <div className="flex flex-col items-center gap-2">
                        <h4 className="font-bold">Quick Links</h4>
                        <ul className="list-disc text-white/60 text-sm">
                            <li>Home</li>
                            <li>Service</li>
                            <li>Account</li>
                            <li>Contact</li>
                        </ul>
                    </div>

                    <div className="flex flex-col  gap-2">
                        <h4 className="font-bold">Subscribe</h4>
                        <p className="text-white/60 text-sm">Subscribe to our newsletter for the <br /> latest updates.</p>
                        <div className="join">
                            <input className="join-item pl-3 w-44 md:w-64" type="text" placeholder="Enter Your Email" />
                            <button className="join-item btn px-6 md:px-10 bg-gradient-to-tr from-yellow-500 to-pink-500 font-bold text-sm md:text-base">Subscribe </button>
                        </div>
                    </div>
                </div>
                <hr className="  border-gray-500 w-full" />
                <p className="text-xs text-slate-500">@2024 Your Company All Rights Reserved.</p>
            </footer>
        </div>
    );
};

export default Footer;