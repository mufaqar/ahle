import PageBanner from "@/components/page-banner/banner";
import React from "react";

const Page = () => {
  return (
    <main>
     <PageBanner
          title="ذیلی تنظیمات"
          subTitle=""
          image="/assets/images/slid1.jpeg"
          buttontext=""
          buttonLink=""
        />
    <section className='container px-4 md:px-10 mx-auto'>
        <div className='my-10 md:my-20 md:mt-20 file:grid gap-10'>
          <div>
            <h2 className="text-2xl uppercase font-ahle mb-5">
              مرکزی جمعیت اہلحدیث پاکستان کی تمام ذیلی تنظیمات کے سربراہ ڈاکٹر عبدالغفور راشد ہیں ۔
            </h2>
            <h3 className='font-ahle text-xl text-gray-600 dark:text-text mb-5'>
              جمعیت کے ذیلی تنظیمات کے نام درج ذیل ہیں
            </h3>
          </div>
          <div>
            <ul className="grid gap-7">
              <li className="font-ahle text-lg text-gray-600 dark:text-text ">
                اہل حدیث یوتھ فورس
              </li>
              <li className="font-ahle text-lg text-gray-600 dark:text-text ">
                اہل حدیث سٹوڈنٹس فیڈریشن
              </li>
              <li className="font-ahle text-lg text-gray-600 dark:text-text ">
                جمیعت اساتذہ پاکستان
              </li>
              <li className="font-ahle text-lg text-gray-600 dark:text-text ">
                جمعیت طلبہ اہلحدیث
              </li>
              <li className="font-ahle text-lg text-gray-600 dark:text-text ">
                متحدہ حکماء محاذ
              </li>
              <li className="font-ahle text-lg text-gray-600 dark:text-text ">
                اہلحدیث نعت کونسل
              </li>
              <li className="font-ahle text-lg text-gray-600 dark:text-text ">
                وکلاء سلفیہ پاکستان
              </li>
              <li className="font-ahle text-lg text-gray-600 dark:text-text ">
                جمعیت اہلحدیث خواتین ونگ</li>
              <li className="font-ahle text-lg text-gray-600 dark:text-text ">
                جمعیت القراء اہلحدیث پاکستان
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Page;
