import Button from '@/components/ui/button'
import React from 'react'
import PageBanner from "@/components/page-banner/banner";

const Razakar = () => {
  return (
    <main>
      <PageBanner
        title="رضاکار بنیں"
        subTitle=""
        image="/assets/images/contat.jpg"
        buttontext=""
        buttonLink=""
      />

      <section className='container px-4 md:px-10 mx-auto'>
        <form className="my-12">
          <div className='my-8'>
            <h2 className="text-3xl uppercase font-ahle ahle-heading">
              میسج کے ذریعے فوری رابطہ
            </h2>
            <p className='mt-5 font-ahle text-lg text-gray-600 dark:text-text'>
              درج ذیل فارم کو پر کریں. ہمارا نمائندہ بہت جلد آپ سے رابطہ کرے گا
            </p>
          </div>
          <div className="mt-2 mb-5 md:flex gap-4">
            <input
              type="text"
              className="p-4 bg-gray-100 dark:bg-light-gray w-full text-gray-500 mt-4 md:mt-0 focus:outline-yellow border-none text-sm font-ahle"
              placeholder="آپ کا نام"
            />
            <input
              type="tel"
              className="p-4 bg-gray-100 dark:bg-light-gray w-full text-gray-500 mt-4 md:mt-0 focus:outline-yellow border-none text-sm font-ahle"
              placeholder="فون نمبر"
            />
            <input
              type="email"
              className="p-4 bg-gray-100 dark:bg-light-gray w-full text-gray-500 mt-4 md:mt-0 focus:outline-yellow border-none text-sm font-ahle"
              placeholder="ای میل ایڈریس"
            />
          </div>
          <div className="mt-2 mb-5 ">
            <input
              type="text"
              className="p-4 bg-gray-100 dark:bg-light-gray w-full text-gray-500 mt-4 md:mt-0 focus:outline-yellow border-none text-sm font-ahle"
              placeholder="موجودہ پتہ"
            />
          </div>
          <textarea
            className="w-full h-60 mb-4 bg-gray-100 dark:bg-light-gray text-gray-500 p-4 focus:outline-yellow text-sm font-ahle"
            placeholder="تفصیل"
          ></textarea>
          <div className="flex justify-center items-center font-ahle">
            <Button variants="primary" size="large">
              ارسال کریں
            </Button>
          </div>
        </form>
      </section>
    </main>
  )
}

export default Razakar