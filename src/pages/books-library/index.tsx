import PageBanner from '../components/banner';
import PostDesign2 from '../components/post-design-2';

import React from 'react';

const Books_Library = () => {
    return (
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
    )
}

export default Books_Library