import PageBanner from "@/components/page-banner/banner";
import VideosGallery from "@/components/videos-gallery/videos";
import apolloClient from "@/config/client";
import { VideoType, Videos as VideoQ } from "@/config/queries";
import React from "react";

const Videos = async () => {
  const { videosData, videoTypeData } = await getData();

  return (
    <main>
      <PageBanner
        title="وڈیوز"
        subTitle=""
        image="/assets/images/contat.jpg"
        buttontext=""
        buttonLink=""
      />
      <section className='container px-4 md:px-10 mx-auto'>
        {videoTypeData?.map((item, idx) => {
          return (
            <div className="my-10 md:my-16 md:mt-16" key={idx}>
              <div>
                <div className="my-5">
                  <h2 className="text-2xl uppercase font-ahle">
                    {item?.name}
                  </h2>
                </div>
                <VideosGallery type={item?.name} videosData={videosData} />
              </div>
            </div>
          );
        })}
      </section>
    </main>
  );
};

export default Videos;

async function getData() {
  const [videos, videoType] = await Promise.all([
    apolloClient.query({ query: VideoQ }),
    apolloClient.query({ query: VideoType }),
  ]);
  const videosData = videos?.data?.videos?.nodes;
  const videoTypeData = videoType?.data?.videoTypes?.nodes;

  if (!videos) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return { videosData, videoTypeData };
}
