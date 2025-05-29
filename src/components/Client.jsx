import React, { useRef } from 'react';
import PersonOne from '../assets/person1.avif';
import PersonTwo from '../assets/person2.jpg';
import PersonThree from '../assets/person3.jpg';
import { FaStar } from "react-icons/fa";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import { IoIosArrowBack, IoIosArrowForward  } from "react-icons/io";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export function Client() {
  const testimonials = [
    {
      image: PersonOne,
      name: "Luna Belle Grace",
      feedback: "Far far away, behind the world mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast."
    },
    {
      image: PersonTwo,
      name: "Robin Ayala Doe",
      feedback: "Far far away, behind the world mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove."
    },
    {
      image: PersonThree,
      name: "Rowhan Smith",
      feedback: "When she reached the first hills of the Mountains, she had a last view back on the of her hometown Bookmarksgrove, the headline."
    },
    {
      image: PersonOne,
      name: "Luna Belle Grace",
      feedback: "Far far away, behind the world mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast."
    },
    {
      image: PersonTwo,
      name: "Robin Ayala Doe",
      feedback: "Far far away, behind the world mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove."
    },
    {
      image: PersonThree,
      name: "Rowhan Smith",
      feedback: "When she reached the first hills of the Mountains, she had a last view back on the of her hometown Bookmarksgrove, the headline."
    }
  ];

  const swiperRef = useRef(null);

  return (
    <section id="testimonial" className="container px-4 mx-auto py-16">
      <div className="text-center mb-10 pb-10">
        <h1 className="text-2xl md:text-4xl font-bold my-2">What our happy clients say</h1>
        <p className="text-gray-600 text-base font-medium my-2">
          Things that make it the best place to start trading
        </p>
      </div>

      

      <Swiper
       style={{ paddingBottom: '3rem' }}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        slidesPerView={1}
        loop={true}
        spaceBetween={20}
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        modules={[Pagination, Navigation, Autoplay]}
      >
        {testimonials.map((person, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col justify-center items-center bg-white shadow-lg rounded-xl p-6 text-center h-80">
              <img src={person.image} alt="client" className="w-24 h-24 my-3 rounded-full object-cover" />
              <div className="flex justify-center items-center my-3 space-x-1.5">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-blue-500" />
                ))}
              </div>
              <h2 className="text-xl font-bold">{person.name}</h2>
              <p className="text-gray-500 text-sm mt-2">{person.feedback}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation Buttons */}
      <div className="flex justify-center gap-4 mb-6 my-8">
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className="px-4 py-4 bg-white border-1 border-gray-200 transition-all duration-300 hover:text-white rounded-full hover:bg-gray-900 text-gray-600"
        >
          <IoIosArrowBack className="text-xl"/>
        </button>
        <button
          onClick={() => swiperRef.current?.slideNext()}
          className="px-4 py-4 bg-white border-1 border-gray-200 transition-all duration-300 hover:text-white rounded-full hover:bg-gray-900 text-gray-600"
        >
          <IoIosArrowForward className="text-xl" />
        </button>
      </div>
    </section>
  );
}
