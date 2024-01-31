import PageBanner from '../../components/banner';
import PostDesign2 from '../../components/post-design-2';
import SeoMeta from "@/components/seo";
import React from 'react';

const Books_Library = () => {
    return (
        <>
            <SeoMeta title="کتب لائبریری" description="مرکزی جمعیت اہل حدیث پاکستان اہل حدیث کی نمائندہ مذہبی و سیاسی جماعت ہے" url="books-library" />

            <main>
                <PageBanner
                    title="کتب لائبریری"
                    subTitle=""
                    image="/images/contat.jpg"
                    buttontext=""
                    buttonLink=""
                />
                <section className='container px-4 md:px-10 mx-auto'>
                    <div className="my-10 md:my-16 md:mt-16">
                        <div>
                            <PostDesign2 />
                        </div>
                    </div>
                </section>

            </main>
        </>
    )
}

export default Books_Library