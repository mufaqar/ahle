"use client"
import React from 'react';
import YouTube, { YouTubeProps } from 'react-youtube';
import PageBanner from '@/components/page-banner/banner';

const Page = () => {
  const onPlayerReady: YouTubeProps['onReady'] = (event) => {
    event.target.pauseVideo();
  }

  const opts: YouTubeProps['opts'] = {
    playerVars: {
      autoplay: 0,
    },
  };
  return (
    <main>
      <PageBanner
        title="الیکٹرانک میڈیا کوریج"
        subTitle=""
        image="/assets/images/slid1.jpeg"
        buttontext=""
        buttonLink=""
      />
      <section className='container px-4 md:px-10 mx-auto'>
        <div className='items-center font-ahle my-10 md:my-20 md:mt-20 grid gap-10'>
          <div className="my-10 grid md:grid-cols-3 grid-cols-1 gap-7">
            <YouTube
              videoId="az_4cAYj0Cw"
              opts={opts}
              className={`videocontainer`}
              iframeClassName={`w-full h-full aspect-square`}
              onReady={onPlayerReady}
            />
          </div>
        </div>
        {/* <div className='items-center font-ahle my-10 md:my-20 md:mt-20 grid gap-10'>
          <div className="my-10 grid md:grid-cols-3 grid-cols-1 gap-7">
            <iframe
              src={`https://www.youtube.com/embed/az_4cAYj0Cw`}
              title="YouTube video player"
              frameBorder="0"
              allow=""
              allowFullScreen
              className="w-full h-full aspect-square"></iframe>
          </div>
        </div> */}
      </section>
    </main>
  );
};

export default Page;

