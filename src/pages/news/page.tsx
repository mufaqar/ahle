"use client"
import React from 'react';
import { News_Data } from '@/const/news';
import Image from 'next/image';
import PageBanner from '@/components/page-banner/banner';

const Page = () => {

  return (
    <main>
      <PageBanner
        title="جماعتی خبریں"
        subTitle=""
        image="/assets/images/slid1.jpeg"
        buttontext=""
        buttonLink=""
      />
      <section className='container px-4 md:px-10 mx-auto'>
        <div className="my-24">
          <div className="grid md:grid-cols-2 grid-cols-1 gap-7">
            {News_Data.map((item, idx) => {
              return (
                <div key={idx} className='w-full overflow-hidden shadow-xl'>
                  <div className="relative h-[540px]. w-full bg-black">
                    <Image
                      src={item.img}
                      alt="thumbnil"
                      width={900}
                      height={500}
                      className="w-full h-full object-cover opacity-60"
                    />
                    <span className="bg-black text-yellow py-1 px-2 uppercase absolute md:top-5 top-0 md:left-5 left-0 text-sm">
                      22 فروری
                    </span>
                    <div className="absolute bottom-0 md:p-5 p-2 bg-white w-full border-t-4 border-yellow">
                      <p className="text-2xl font-ahle text-black">
                        {item.title}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Page;