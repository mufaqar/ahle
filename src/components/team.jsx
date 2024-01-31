
import React, { useState } from 'react'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import Slider from 'react-slick';
import ModelBox from '../components/modelbox';
import Image from 'next/image';

const Team = ({membersData}) => {
    console.log("🚀 ~ Team ~ membersData:", membersData)
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    const slider = React.useRef(null);

    const [modalIsOpen, setIsOpen] = useState(false);
    const [URL, setURL] = useState('');
    const OpenModelBox = (image) => {
        setURL(image)
        setIsOpen(true);
    }
    return (
        <>
            <section className="relative blogs ">
                <Slider ref={slider} {...settings}>
                    {membersData?.map((item) => {
                        return (
                           <div className='px-3' key={item.img}>
                            <div  className='h-[590px] relative before:content-[" "] before:absolute before:top-3 before:bottom-3 before:left-3 before:right-3 before:border-white before:border group'>
                            <div className='h-full w-full '>
                                <Image src={item?.featuredImage?.node?.mediaItemUrl}
                                    alt='image'
                                    height={300}
                                    width={300}
                                    className='h-full w-full z-[1] object-cover ' />
                                <div className='absolute bottom-8 right-5 z-[1]'>
                                    <p
                                        className="bg-yellow text-black group-hover:bg-light-blue group-hover:text-white text-base px-8 py-2.5 uppercase ">
                                        {item?.title}
                                    </p>
                                </div>
                            </div>
                            <div className="overlay bg-black/30 -z-0 absolute top-0 left-0 h-full w-full before:content-[' '] before:absolute before:top-3 before:bottom-3 before:left-3 before:right-3 before:border-yellow before:border-y before:scale-x-0 group-hover:before:scale-x-100 before:transform before:transition before:duration-700 before:ease-in-out 
                                    after:content-[' '] after:absolute after:top-3 after:bottom-3 after:left-3 after:right-3 after:border-yellow after:border-x after:scale-y-0 group-hover:after:scale-y-100 after:transform after:transition after:duration-700 after:ease-in-out "
                            ></div>
                            </div></div>
                        );
                    })}
                </Slider>
                <button className="absolute -top-10 left-auto right-20 transform -translate-y-1/2 bg-dark-gray rounded-full  active:scale-105 text-yellow  p-3 text-2xl " onClick={() => slider?.current?.slickPrev()}><IoIosArrowBack /></button>
                <button className="absolute -top-10 right-4 transform -translate-y-1/2 bg-dark-gray rounded-full  active:scale-105 text-yellow  p-3 text-2xl " onClick={() => slider?.current?.slickNext()}><IoIosArrowForward /></button>
            </section>
            {
                modalIsOpen && <ModelBox modalIsOpen={modalIsOpen} setIsOpen={setIsOpen} URL={URL} />
            }
        </>
    )
}

export default Team

// export const Team_data = [
//     {
//         name: "سید داؤد غزنوی",
//         img: "/images/team/1.jpg",
//     },
//     {
//         name: "مولانا ابراہیم میر سیالکوٹی",
//         img: "/images/team/2.jpg",
//     },
//     {
//         name: "مولانا اسماعیل سلفی",
//         img: "/images/team/3.jpg",
//     },
//     {
//         name: "حافظ عبداللہ بڈھیمالوی",
//         img: "/images/team/4.jpg",
//     },
//     {
//         name: "علامہ احسان الہی ظہیر",
//         img: "/images/team/5.jpg",
//     },
//     {
//         name: "مولانا معین الدین لکھوی",
//         img: "/images/team/6.jpg",
//     },
//     {
//         name: "مولانا حبیب الرحمان یزدانی",
//         img: "/images/team/7.jpg",
//     },
// ];