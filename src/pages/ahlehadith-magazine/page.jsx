"use client"
import React, { useState } from 'react';
import Layout from '@/components/Layout/Layout';
import { Hadith_Data } from '@/const/hadith';
import ModelBox from '@/components/ModelBox/ModelBox';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import PageBanner from '@/components/page-banner/banner';

const Ahlehadith_Magazine = () => {
  const columnsCountBreakPoints = { 200: 1, 280: 2, 900: 3 };
  const [modalIsOpen, setIsOpen] = useState(false);
  const [URL, setURL] = useState('');
  const OpenModelBox = (image) => {
    setURL(image)
    setIsOpen(true);
  }
  return (
    <main>
      <PageBanner
        title="اہلِ حدیث میگزین"
        subTitle=""
        image="/assets/images/contat.jpg"
        buttontext=""
        buttonLink=""
      />
      <section className='container px-4 md:px-10 mx-auto'>
        <div className="my-20">
          <div className="my-10">
            <ResponsiveMasonry columnsCountBreakPoints={columnsCountBreakPoints}>
              <Masonry columnsCount={3} gutter="20px">
                {Hadith_Data?.map((item, idx) => {
                  return <figure key={idx} className="p-1 hover:shadow-lg cursor-pointer">
                    <img src={item.img} className="w-full rounded-xl drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]" onClick={() => OpenModelBox(item)} />
                  </figure>
                })}
              </Masonry>
            </ResponsiveMasonry>
          </div>
          {
            modalIsOpen && <ModelBox modalIsOpen={modalIsOpen} setIsOpen={setIsOpen} URL={URL} />
          }
        </div>
      </section>
    </main>
  )
}

export default Ahlehadith_Magazine