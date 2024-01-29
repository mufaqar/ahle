import Gallery_images from "@/components/image-gallery";
import PageBanner from "@/components/page-banner/banner";
import React from "react";

const Islamic_Graphics = () => {
  return (
    <main>
      <PageBanner
        title="اسلامک گرافکس"
        subTitle=""
        image="/assets/images/contat.jpg"
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
  );
};

export default Islamic_Graphics;
