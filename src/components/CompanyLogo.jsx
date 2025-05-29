import slack from '../assets/slack.png'
import amazon from '../assets/amazon.png'
import woocommerce from '../assets/woocommerce.png'
import meundies from '../assets/meundies.png'
import sitepoint from '../assets/sitepoint.png'

export function CompanyLogo() {

    const logos = [slack, amazon, woocommerce, meundies, sitepoint];
    return (
        <>
            <div className="container md:mt-30 overflow-x-hidden w-full mx-auto px-4 py-20 gap-8 sm:px-6 lg:px-6 flex sm:flex-row flex-col sm:items-center items-start">
                <div className="w-[300px] shrink-0 px-8 text-gray-600 border-l-4 border-blue-500 bg-white py-2 z-10 sm:text-base text-xl font-semibold text-left">
                    Proud partner at <br /> Hubspot & Segment
                </div>

                <div className="flex-1 overflow-hidden">
                    <div className="flex whitespace-nowrap animate-marquee">
                        {logos.map((logo, index) => {
                            return <img src={logo} key={index} alt="company-logo" className="mx-12 h-8 w-36 object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all" />
                        })}

                        {logos.map((logo, index) => {
                            return <img src={logo} key={`duplicate-${index}`} alt="company-logo" className="mx-12 h-8 w-36 object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all" />
                        })}
                    </div>
                </div>
            </div >
        </>
    )
}