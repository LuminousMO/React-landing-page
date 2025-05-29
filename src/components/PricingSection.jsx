import { useState } from "react"
export function PricingSection() {

    const [productCount, setProductCount] = useState(1);
    const starter = Math.round( 5000 * ( productCount / 50))
    const business = Math.round( 7500 * (productCount / 50))

    return (
        <>
            <section className=" container px-4 mx-auto py-16">
                <div className="text-center">
                    <h1 className="text-3xl md:text-4xl font-bold ">
                        Pricing
                    </h1>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-10">
                    <div className="flex flex-col justify-center items-start w-full h-40 bg-white rounded-lg border-1 border-t-0 border-gray-200 shadow-lg">
                        <p className="text-xl md:text-2xl text-gray-600 mx-8 my-2">Stater</p>
                        <h1 className="mx-8 text-2xl md:text-3xl font-bold ">$ {starter} /month</h1>
                    </div>
                    <div className="flex flex-col justify-center items-start w-full h-40 bg-white rounded-lg border-1 border-t-0 border-gray-200 shadow-lg">
                        <p className="text-xl md:text-2xl text-gray-600 mx-8 my-2">Business</p>
                        <h1 className="mx-8 text-2xl md:text-3xl font-bold ">$ {business} /month</h1>
                    </div>
                </div>

                <div className="mx-auto max-w-lg">
                    <p className="text-center font-medium text-gray-700 my-4">{productCount} products</p>
                    <div className="">
                        <div className="flex items-center gap-2">
                            <span className="text-gray-700 text-xs sm:text-sm">1</span>
                            <input type="range" className="flex-1 h-2 bg-gray-200 rounded-xl appearance-none cursor-pointer"
                            onChange={(e)=> setProductCount(parseInt(e.target.value))} min={1} max={50} defaultValue={1}/>
                            <span className="text-gray-700 text-xs sm:text-sm">50</span>
                        </div>
                    </div>
                </div>

                <div className="py-8 text-center">
                    <p className="text-gray-700 font-medium my-2 text-lg"> Ready to get started?</p>
                    <button className="bg-blue-500 text-white px-5 py-3 rounded-lg font-medium hover:bg-blue-700 transition-all duration-3 my-2">Get Started</button>
                </div>
            </section>
        </>
    )
}