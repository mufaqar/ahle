import Gallery_images from "@/components/image-gallery";
import PageBanner from "@/components/banner";
import React from "react";
import SeoMeta from "@/components/seo";
const Islamic_Graphics = () => {
  return (
    <>
      <SeoMeta title="اسلامک گرافکس" description="مرکزی جمعیت اہل حدیث پاکستان اہل حدیث کی نمائندہ مذہبی و سیاسی جماعت ہے" url="islamic-graphics" />

      <main>
        <PageBanner
          title="اسلامک گرافکس"
          subTitle=""
          image="/images/contat.jpg"
          buttontext=""
          buttonLink=""
        />
        <section className='container px-4 md:px-10 mx-auto'>
          <div className="my-10 md:my-16 md:mt-16">
            <div>
              <Gallery_images />
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Islamic_Graphics;
