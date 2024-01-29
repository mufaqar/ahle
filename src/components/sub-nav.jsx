import React from 'react'
import Slider from 'react-slick';
import Layout from './layout'
import Image from 'next/image';
import Link from 'next/link';

const Sub_Nav = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 5,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 5,
              slidesToScroll: 1,
              autoplay: true,
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
              autoplay: true,
            }
          }
        ]
      };
      return (
        <>
          <div className='py-10 max-w-[950px] mx-auto'>
            <Layout>
              <Slider {...settings}>
                {Nav_data.map((item, idx) => {
                  return (
                    <div key={idx} className='px-5'>
                      <div className={``}>
                        <Image
                          src={item?.img}
                          alt="img"
                          height={50}
                          width={50}
                          className="mx-auto"
                        />
                      </div>
                      <div className='text-center mt-2'>
                        <Link href={item?.link} className='text-xl font-ahle text-pure'>
                          {item?.name}
                        </Link>
                      </div>
                    </div>
                  );
                })}
              </Slider>
            </Layout>
          </div>
        </>
      )
}

export default Sub_Nav

export const Nav_data = [
  {
    img: "/images/siteicon.png",
    link: "/introduction",
    name: "تعارف",
  },
  {
    img: "/images/tareekh.png",
    link: "/#history",
    name: "تاریخ",
  },
  {
    img: "/images/kyadat.png",
    link: "/leadership",
    name: "قیادت",
  },
  {
    img: "/images/book.png",
    link: "/books-library",
    name: "کتابیں",
  },
  {
    img: "/images/dastoor.png",
    link: "/dastoor",
    name: "دستور",
  },
];