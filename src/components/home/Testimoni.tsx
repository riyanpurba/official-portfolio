import Slider from "react-slick";

import { testimonials } from "@/json/testimoni";
  
const Testimoni = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        arrows: false,
    };

    return (
        <section className="relative w-full h-full py-10 2xl:py-20 xl:py-20 lg:py-20 md:py-20 bg-black flex items-center">
            <div className="w-full bg-white">
                <div className="max-w-xl mx-auto py-10">
                    <h2 className="text-3xl font-bold text-center mb-8 text-black">Apa Kata Mereka</h2>
                    <Slider {...settings}>
                        {testimonials.map(({ name, role, message }, idx) => (
                        <div key={idx} className="p-6 bg-white border rounded-xl shadow">
                            <p className="text-gray-700 italic mb-6"><blockquote className="font-semibold text-black text-lg">{message}</blockquote></p>
                            <div className="flex items-center space-x-4">
                            <div className="bg-black text-yellow rounded-full w-12 h-12 flex items-center justify-center font-bold uppercase">
                                {name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </div>
                            <div>
                                <h4 className="text-gray-900 font-semibold">{name}</h4>
                                <p className="text-sm text-gray-500">{role}</p>
                            </div>
                            </div>
                        </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </section>
    )
}

export { Testimoni };