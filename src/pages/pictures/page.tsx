import React from 'react';
import Gallery_images from '@/components/image-gallery';
import apolloClient from '@/config/client';
import { PictureData } from '@/config/queries';
import PageBanner from '@/components/page-banner/banner';

const Pictures = async () => {

  const { picturesData }: any = await getData()

  return (
    <main>
      <PageBanner
        title="تصاویر"
        subTitle=""
        image="/assets/images/contat.jpg"
        buttontext=""
        buttonLink=""
      />
      <section className='container px-4 md:px-10 mx-auto'>
        <div className="my-20">
          <h2 className="text-2xl font-ahle capitalize">
            صدر آزاد جموں کشمیر سردار مسعود خاں
          </h2>
          <Gallery_images picturesData={picturesData} />
        </div>
      </section>
    </main>
  )
}

export default Pictures


async function getData() {
  const [pictures] = await Promise.all([
    apolloClient.query({
      query: PictureData,
      variables: {
        id: "صدر-آزاد-جموں-کشمیر-سردار-مسعود-خاں",
      }
    }),
  ]);
  const picturesData = pictures?.data?.picture;

  if (!pictures) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return { picturesData };
}