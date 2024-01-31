import React from 'react';
//import YouTube, { YouTubeProps } from 'react-youtube';
//import { YtVideo } from '../components/YtVideo';
import PageBanner from '../../components/banner';
import SeoMeta from "@/components/seo";
export default function AllPakistanConferences() {
  // const onPlayerReady = (event) => {
  //   event.target.pauseVideo();
  // };
  // const opts = {
  //   playerVars: {
  //     autoplay: 0,
  //   },
  // };

  return (
    <>
      <SeoMeta title="آل پاکستان کانفرنس" description="مرکزی جمعیت اہل حدیث پاکستان اہل حدیث کی نمائندہ مذہبی و سیاسی جماعت ہے" url="all-pakistan-conference" />

      <main>
        <PageBanner
          title="آل پاکستان کانفرنس"
          subTitle=""
          image="/images/banner/conferences.jpg"
          buttontext=""
          buttonLink=""
        />
        <section className="container px-4 md:px-10 mx-auto">
          <div className="items-center font-ahle my-10 md:my-20 md:mt-20 grid gap-10">
            <div className="my-10 grid md:grid-cols-3 grid-cols-1 gap-7">
              {/* <YtVideo opts={opts} onPlayerReady={onPlayerReady} /> */}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
