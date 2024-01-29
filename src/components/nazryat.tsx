import React from 'react'
import {Data} from "@/const/jammattest"

interface NazryatProps {
    selectedName: string;
  }

const Nazryat = ({ selectedName }: any) => {
    const filteredData = Data.filter(item => item.Name === selectedName);
    return (
        <div className='items-center font-ahle mt-7 '>
            {filteredData.map((item, idx) => (
                <div key={idx} className=''>
                    <div className="flex md:flex-row flex-col justify-between gap-8">
                        <div className="md:w-1/3 w-full">
                            <div className="">
                                <img className='' src={item.img} alt="img" />
                            </div>
                            {
                                item?.info ? (
                                    <div className=" bg-[#012f1e] text-white py-5 px-3">
                                        {item?.info?.map((info: any, _idx: any) => {
                                            return <div key={_idx}>
                                                <h6 className='mb-3 text-xl font-ahle'>{info?.position}</h6>
                                                <h4 className='mb-3 text-2xl font-ahle'>{info?.name}</h4>

                                            </div>
                                        })}
                                    </div>
                                ) :
                                    ''
                            }

                        </div>

                        <div className="md:w-2/3 w-full">
                            {item?.content?.map((contnt: any, _idx: any) => {
                                return <p key={_idx} className='font-ahle text-base leading-[2.3rem] text-gray-600 dark:text-text mb-3'>{contnt?.para}</p>
                            })}
                            {/* <Link className=" lg:py-[8px] px-[36px] font-ahle bg-yellow text-black float-right mt-[20px] text-[20px] " href={"/"}
            >تفصیل جانیے
            </Link> */}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Nazryat