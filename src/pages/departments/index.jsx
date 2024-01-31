
import { useState } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
//import ModelBox from '../../components/ModelBox'
import { Gallery } from "@/const/exports";
import PageBanner from "@/components/banner";
import SeoMeta from "@/components/seo";
const Page = () => {
  const columnsCountBreakPoints = { 200: 1, 280: 2, 900: 3 };
  const [modalIsOpen, setIsOpen] = useState(false);
  const [URL, setURL] = useState('');
  const OpenModelBox = (image) => {
    setURL(image)
    setIsOpen(true);
  }
  return (
    <>
      <SeoMeta title="شعبہ جات" description="مرکزی جمعیت اہل حدیث پاکستان اہل حدیث کی نمائندہ مذہبی و سیاسی جماعت ہے" url="departments" />

      <main>
        <PageBanner
          title="شعبہ جات"
          subTitle=""
          image="/images/banner/departments.jpg"
          buttontext=""
          buttonLink=""
        />
        <section className='container px-4 md:px-10 mx-auto'>
          <div className='items-center font-ahle my-10 md:my-20 md:mt-20 grid gap-10'>
            <div>
              <h2 className="text-2xl uppercase font-ahle mb-5">
                خدمت خلق
              </h2>
            </div>
            <div className="my-10">
              <ResponsiveMasonry columnsCountBreakPoints={columnsCountBreakPoints}>
                <Masonry columnsCount={3} gutter="20px">
                  {Gallery.map((image) => (
                    <figure key={image.img} className="p-1 hover:shadow-lg cursor-pointer">
                      <img src={image.img} alt="Gallery" className="w-full rounded-xl drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]" onClick={() => OpenModelBox(image)} />
                    </figure>
                  ))}
                </Masonry>
              </ResponsiveMasonry>
            </div>
            {/* {
            modalIsOpen && <ModelBox modalIsOpen={modalIsOpen} setIsOpen={setIsOpen} URL={URL} />
          } */}
          </div>
        </section>
      </main>
    </>
  );
};

export default Page;
