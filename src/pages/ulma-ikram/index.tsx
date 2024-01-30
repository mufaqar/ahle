import React from "react";
import apolloClient from "../../config/client";
import { Members } from "../../config/queries";
import PageBanner from "../../components/banner";
import { GetServerSideProps } from "next";
import Image from "next/image";



    export default function UlmaKaram({members}:any) {
    // const [modalIsOpen, setIsOpen] = useState(false);
    // const [URL, setURL] = useState('');
    // const OpenModelBox = (image) => {
    //     setURL(image)
    //     setIsOpen(true);
    // }  

    return (
        <main>
            <PageBanner
                title="علمائےکرام/معروف شخصیات"
                subTitle=""
                image="/images/banner/ulma.jpeg"
                buttontext=""
                buttonLink=""
            />
            <section className="relative blogs">
                <div className='container px-4 md:px-10 mx-auto'>
                    <div className='my-10 md:my-20 md:mt-20 file:grid gap-10'>
                        <div className="grid md:grid-cols-4 grid-cols-1 gap-7">
                            {members?.map((item:any, idx:number) => {
                                return (
                                    <div key={idx} className=''>
                                        <div className='shadow-md'>
                                            <div className={`relative h-[300px] w-full`}
                                                // onClick={() => OpenModelBox(item)} 
                                                >
                                                <Image
                                                    src={item?.featuredImage?.node?.mediaItemUrl}
                                                    alt="img"
                                                    width={250}
                                                    height={250}
                                                    className="h-full w-full object-cover object-center"
                                                />
                                            </div>
                                            <div className='p-5 text-center'>
                                                <h3 className='text-xl font-ahle text-yellow mb-5'>
                                                    {item?.title}
                                                </h3>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>
            {/* {
                modalIsOpen && <ModelBox modalIsOpen={modalIsOpen} setIsOpen={setIsOpen} URL={URL} />
            } */}
        </main>
    )
}

export const getServerSideProps: GetServerSideProps = async () => {
    const [memberRes] = await Promise.all([
      apolloClient.query({ 
        query: Members,
        variables: {
            first: 100,
        }
       }),
    ]);
    const members = memberRes?.data?.members.nodes
   
    return {
        props: {
            members
        },
     };
}
