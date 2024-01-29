
import React from 'react';
import apolloClient from '@/config/client';
import { PictureData } from '@/config/queries';
import Gallery_images from '@/components/image-gallery';
import PageBanner from '@/components/page-banner/banner';

const Print_Media = async () => {
  const {picturesData}:any = await getData()

  return (
    <main>
    <PageBanner
        title="پرنٹ میڈیا کوریج"
        subTitle=""
        image="/assets/images/contat.jpg"
        buttontext=""
        buttonLink=""
      />
      <section className='container px-4 md:px-10 mx-auto'>
        <Gallery_images picturesData={picturesData} />
      </section>
    </main>
  )
}

export default Print_Media


async function getData() {
  const [pictures] = await Promise.all([
    apolloClient.query({
      query: PictureData,
      variables: {
        id: "پرنٹ-میڈیا-کوریج",
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