import { ratecard } from "@/json/ratecard";

const RateCard = () => {
    return (
        <div className="min-h-screen bg-black flex flex-wrap items-center justify-center">
            <div className="flex flex-col sm:flex-col lg:flex-col xl:flex-row md:flex-col justify-center items-center container gap-4 p-4">
                {ratecard.map((item, index) => {
                    return (
                    <div key={index} className="py-10 px-8 w-full md:max-w-sm bg-white z-30 rounded-xl shadow-md">
                        <h2 className="text-center text-black font-bold text-2xl mb-2">{item.type}</h2>
                        <div className="text-center py-2">
                            <h1 className="text-gray-700 text-4xl font-black">{item.price}</h1>
                            <p className="text-xs text-gray-400 mt-1">*Belum termasuk domain & hosting</p>
                        </div>
                        <div className="mt-4">
                            <ul className="text-sm text-gray-600 space-y-2">
                                {
                                    item.description.map((desc, j) => (
                                        <li key={j}>{desc}</li>
                                    ))
                                }
                            </ul>
                        </div>
                        <div className="relative w-full flex items-center justify-center">
                        <a
                            href={item.whatsappLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full block mt-6 py-2 text-center text-white font-semibold bg-gray-700 hover:bg-gray-800 transition rounded"
                        >
                        Start Now
                        </a>

                        </div>
                    </div>
                    )
                })}
            </div>
        </div>
    );
};

export { RateCard };
