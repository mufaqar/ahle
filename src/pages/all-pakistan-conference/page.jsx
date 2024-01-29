"use client"
import React from 'react';
import YouTube, { YouTubeProps } from 'react-youtube';
import { YtVideo } from '@/components/ui/YtVideo'
import PageBanner from '@/components/page-banner/banner';

const Page = () => {
  const onPlayerReady = (event) => {
    event.target.pauseVideo();
  }
  const opts = {
    playerVars: {
      autoplay: 0,
    },
  };

  return (
    <main>
      <PageBanner
        title="آل پاکستان کانفرنس"
        subTitle=""
        image="/assets/images/slid1.jpeg"
        buttontext=""
        buttonLink=""
      />
      <section className='container px-4 md:px-10 mx-auto'>
        <div className='items-center font-ahle my-10 md:my-20 md:mt-20 grid gap-10'>
          <div className="my-10 grid md:grid-cols-3 grid-cols-1 gap-7">
            <YtVideo opts={opts} onPlayerReady={onPlayerReady} />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Page;


