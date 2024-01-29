import Main1 from "@/components/main1";
import Sub_Nav from "@/components/sub-nav"
import Tabs from "@/components/tabs";
import Link from "next/link";
import { ConvertDateIntoUrdu, GetWordStr } from "@/utils/index";
import { PostMokeData } from "@/const/post"
import Image from "next/image";
import { VideosGallery } from "@/components/videos";
import BooksSection from "@/components/bookssection";
import Team from "@/components/team"
import apolloClient from '@/config/client';
import { AllPosts, Books, Members, UpdatesByCategoryHadees, UpdatesByCategoryQoute, UpdatesByCategoryQuran, Videos } from '@/config/queries';
import { GetServerSideProps } from "next";

export default function Home({postData, dailyHadees, dailyQuran, dailyQoute, videosData, booksData, membersData }:any) {
   
  const posts = postData
  return (
    <>
      <Main1 />
      <Sub_Nav />
      <Tabs />
      <section className='container px-4 md:px-10 mx-auto'>
        <div className="my-10 md:my-20 md:mt-20">
          <div className="my-5">
            <h2 className="text-3xl leading-[4rem] uppercase font-ahle ahle-heading">
              جماعتی خبریں
            </h2>
          </div>
          <div className="md:flex gap-6">
            <div className="md:w-[40%] w-full overflow-hidden inline-block shadow-xl">
              {posts?.slice(0, 1).map((item:any, idx:number) => {
                return (
                  <div key={idx} className="relative h-[540px] w-full bg-black">
                    <Link href={`/blogs/${item.databaseId}`}>
                    <img
                      src={item?.featuredImage?.node?.mediaItemUrl}
                      alt="thumbnil"
                     
                      className="w-full h-full object-cover opacity-60"
                    />
                    </Link>
                    <span className="bg-yellow text-black py-1 !pb-3 px-2 uppercase absolute md:top-5 top-0 md:right-5 right-0 text-sm">
                      {item?.categories?.nodes[0]?.name}
                    </span>
                    <span className="bg-black text-yellow py-1 !pb-3 px-2 uppercase absolute md:top-5 top-0 md:left-5 left-0 text-sm">
                      {ConvertDateIntoUrdu(item?.date)}
                    </span>
                    <div className="absolute bottom-0 md:p-5 p-2 bg-white w-full border-t-4 border-yellow">
                      <Link href={`/blogs/${item.databaseId}`} className="text-2xl font-ahle text-black">
                        {item?.title}
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="flex flex-col mt-5 md:mt-0 justify-between gap-5 md:w-[60%] w-full">
              {posts?.slice(1, 4).map((item:any, idx:number) => {
                return (
                  <div key={idx} className={`group overflow-hidden bg-light-gray shadow-lg md:flex`}
                  >
                    <Link href={`/blogs/${item?.databaseId}`} className={`md:w-1/3`}>
                      <figure
                        className={`overflow-hidden relative md:w-full h-full`}
                      >
                        <Image
                          src={item?.featuredImage?.node?.mediaItemUrl}
                          alt=""
                          width={400}
                          height={400}
                        
                          className={`w-full md:h-full group-hover:scale-110 transition-all duration-300 ease-in-out object-cover h-[240px] sm:h-[190px]`}
                        />
                      </figure>
                    </Link>
                    <div
                      className={`bg-light-gray md:w-2/3 p-6 `}
                    >
                      <div className={``}>
                        <p className="capitalize text-light-blue text-sm">
                          <span className="uppercase">{ConvertDateIntoUrdu(item.date)}</span>
                          <span> - </span>
                          <span>By {item?.author?.node?.name}</span>
                        </p>
                        <Link href={`/blogs/${item?.databaseId}`}>
                        <h2
                          className={`text-[18px] mt-2 leading-[2.3rem] font-medium font-ahle `}
                        >
                          {item?.title}
                        </h2>
                        </Link>
                      </div>
                      <div className="mt-3 text-text leading-8 font-normal" dangerouslySetInnerHTML={{ __html: GetWordStr(item?.excerpt) }} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      <section className='container px-4 md:px-10 mx-auto'>
        <div className="my-10 md:my-20 md:mt-20">
          <div className="grid md:grid-cols-3 grid-cols-1 gap-5 ">
            <div className=" border border-light-gray">
              <div className="bg-[#012f1e] p-5 flex gap-3 items-center">
                <Image src="/images/iqra-icon.png" alt="iqra-icon.png" width={50} height={50} />
                <h2 className="text-3xl leading-[4rem] uppercase font-ahle text-white">
                  روزانہ قرآن
                </h2>
              </div>
              <div className="p-5">
                <p className="font-ahle text-lg text-gray-600 dark:text-text">
                  <span>
                    {/* {dailyQuran[0]?.title} */}
                    وَأَقِيمُوا الصَّلَاةَ وَآتُوا الزَّكَاةَ وَأَطِيعُوا الرَّسُولَ لَعَلَّكُمْ تُرْحَمُونَ
                    : </span>
                  <span>
                    {/* {dailyQuran[0]?.dailyUpdatesInfo?.description} */}
                    اور چاہیے کہ نماز کا اہتمام کرو، زکوۃ ادا کرنے میں سرگرم رہو اور اللہ کے رسول کا کہا مانو، کچھ بعید نہیں کہ رحمت الٰہی کے سزاوار ہو
                  </span>
                </p>

                <p className="font-ahle text-lg text-gray-600 dark:text-text mt-5">
                  {/* {dailyQuran[0]?.dailyUpdatesInfo?.source} */}
                  ۔النور:56
                </p>
              </div>
            </div>
            <div className=" border border-light-gray">
              <div className="bg-[#012f1e] p-5 flex gap-3 items-center">
                <Image src="/images/iqra-icon.png" alt="iqra-icon.png" width={50} height={50} />
                <h2 className="text-3xl leading-[4rem] uppercase font-ahle text-white">
                  روزانہ کی حدیث
                </h2>
              </div>
              <div className="p-5">
                <p className="font-ahle text-lg text-gray-600 dark:text-text">
                  <span>
                    {/* {dailyHadees[0]?.title} */}
                  </span>
                  <span>
                    {/* {dailyHadees[0]?.dailyUpdatesInfo?.description} */}
                    رسول اللہ ﷺ نے فرمایا: تم میں سے جو شخص اس حال میں صبح کرے کہ وہ اپنی جان کی طرف سے بے خوف ہو، جسمانی اعتبار سے صحت مند ہو، ایک دن کی خوراک کا سامان اس کے پاس ہو، تو گویا اس کے لیے ساری دنیا جمع کردی گئی:</span>
                </p>
                <p className="font-ahle text-lg text-gray-600 dark:text-text mt-5">۔
                  {/* {dailyHadees[0]?.dailyUpdatesInfo?.source} */}
                  صحیح الجامع:6042
                </p>
              </div>
            </div>
            <div className=" border border-light-gray">
              <div className="bg-[#012f1e] p-5 flex gap-3 items-center">
                <Image src="/images/iqra-icon.png" alt="iqra-icon.png" width={50} height={50} />
                <h2 className="text-3xl leading-[4rem] uppercase font-ahle text-white">
                  اقوالِ سلف
                </h2>
              </div>
              <div className="px-5">
                <ul className="divide-y divide-border ">
                  <li className="py-3">
                    <p className="font-ahle text-lg text-pure">
                      <span>
                        {/* {dailyQoute[0]?.title} */}
                        تابعی طاؤوس بن كيسان رحمہ اللہ دعا کیا کرتے تھے:
                      </span>
                      <span>
                        {/* {dailyQoute[0]?.dailyUpdatesInfo?.description} */}
                        اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ غِنًى مُبْطِرٍ، وَفَقْرٍ مُلِبٍّ، أَوْ مُرِبٍّ." ”اے اللہ! میں تیری پناہ میں آتا ہوں آپے سے باہر کر دینے والی امیری سے، اور جان نہ چھوڑنے والی فقیری سے
                      </span>
                    </p>
                    <p className="font-ahle text-lg text-pure dark:text-text mt-5">۔
                      {/* {dailyQoute[0]?.dailyUpdatesInfo?.source} */}
                      جامع معمر بن راشد : ١٩٦٣٣
                    </p>
                  </li>
                </ul>

              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 bg-[url('/images/tabdeeli.jpg')] bg-center bg-cover bg-black/50 bg-blend-multiply">
        <section className='container px-4 md:px-10 mx-auto'>
          <div className="flex md:flex-row flex-col gap-5">
            <div className="md:w-1/4 w-full">
            </div>
            <div className="md:w-3/4 w-full flex md:flex-row flex-col gap-5 items-center justify-end">
              <div>
                <h2 className="text-2xl uppercase text-white font-ahle mb-3">
                  اس ملک میں حقیقی تبدیلی کے لئیے
                </h2>
                <h3 className="text-5xl uppercase text-white font-ahle">
                  مرکزی جمعیت اہل حدیث کے ووٹر بنیں
                </h3>
              </div>
              <div>
                <Link href="#"
                  className="bg-yellow text-pure hover:bg-light-blue border-yellow hover:text-white border hover:border-light-blue text-xl px-8 py-2.5 uppercase">
                  ووٹر بنیں
                </Link>
              </div>
            </div>
          </div>
        </section>
      </section>
      <section className='container px-4 md:px-10 mx-auto'>
        <section className="my-10 md:my-16 md:mt-16">
          <div className="">
            <div className="my-20">
              <div className="my-5">
                <div className="flex justify-between items-center">
                  <h2 className="text-3xl leading-[4rem] uppercase font-ahle ahle-heading">
                    تازہ ترین وڈیوز
                  </h2>
                  <Link
                    href="/videos"
                    className="p-2 px-4 rounded-md bg-light-gray active:scale-105 hover:underline hover:shadow-lg"
                  >
                    وڈیو وزٹ  کریں
                  </Link>
                </div>
              </div>
              <VideosGallery videosData={videosData}/>
            </div>

            <div>
              <div className="my-5">
                <div className="flex justify-between items-center">
                  <h2 className="text-3xl leading-[4rem] uppercase font-ahle ahle-heading">
                    کتب لائبریری
                  </h2>
                  <Link
                    href="/books-library"
                    className=" p-2 px-4 rounded-md bg-light-gray active:scale-105 hover:underline hover:shadow-lg"
                  >
                    لائبریری وزٹ کریں
                  </Link>
                </div>
              </div>
              <div className="">
                <BooksSection booksData={booksData} />
              </div>
            </div>
          </div >
        </section >
      </section>
      <section className='container px-4 md:px-10 mx-auto'>
        <div className="my-20">
          <div className="my-14">
            <div className="flex justify-between items-center">
              <h2 className="text-3xl leading-[4rem] uppercase font-ahle ahle-heading">
                مشہور شخصیات
              </h2>
              <Link
                href="/islamic-graphics"
                className="p-2 px-4 rounded-md bg-light-gray active:scale-105 hover:underline hover:shadow-lg"
              >
                مشہور شخصیات
              </Link>
            </div>
          </div>
          <Team />
        </div>
      </section>
    </>
  );
}

export const videosData = [
  {
    id: 1,
    videoUrl: 'https://www.youtube.com/watch?v=mrV98P74wbQ',
  },
  {
    id: 2,
    videoUrl: 'https://www.youtube.com/watch?v=mrV98P74wbQ',
  },
  {
    id: 3,
    videoUrl: 'https://www.youtube.com/watch?v=mrV98P74wbQ',
  },
  {
    id: 4,
    videoUrl: 'https://www.youtube.com/watch?v=mrV98P74wbQ',
  },
];

export const booksData = [
  {
      img: "/images/book1.jpg",
  },
  {
      img: "/images/book2.jpg",
  },
  {
      img: "/images/book3.jpg",
  },
  {
      img: "/images/book4.jpg",
  },
]


async function getData() {
  const [posts, hadees, quran, qoute, videos, books, members] = await Promise.all([
    apolloClient.query({ query: AllPosts }),
    apolloClient.query({ query: UpdatesByCategoryHadees }),
    apolloClient.query({ query: UpdatesByCategoryQuran }),
    apolloClient.query({ query: UpdatesByCategoryQoute }),
    apolloClient.query({ query: Videos }),
    apolloClient.query({ query: Books }),
    apolloClient.query({
        query: Members,
        variables: {
          first: 10,
        },
    }),
  ]);
  const postData = posts?.data?.posts?.nodes
  const dailyHadees = hadees?.data?.updateType?.updates?.nodes
  const dailyQuran = quran?.data?.updateType?.updates?.nodes
  const dailyQoute = qoute?.data?.updateType?.updates?.nodes
  const videosData = videos?.data?.videos?.nodes
  const booksData = books?.data?.books?.edges
  const membersData = members?.data?.members?.nodes

  if (!postData) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  return { postData, dailyHadees, dailyQuran, dailyQoute, videosData, booksData, membersData }
}




export const getServerSideProps: GetServerSideProps = async () => {
  const [posts, hadees, quran, qoute, videos, books, members] = await Promise.all([
    apolloClient.query({ query: AllPosts }),
    apolloClient.query({ query: UpdatesByCategoryHadees }),
    apolloClient.query({ query: UpdatesByCategoryQuran }),
    apolloClient.query({ query: UpdatesByCategoryQoute }),
    apolloClient.query({ query: Videos }),
    apolloClient.query({ query: Books }),
    apolloClient.query({
        query: Members,
        variables: {
          first: 10,
        },
    }),
  ]);
  const postData = posts?.data?.posts?.nodes
  const dailyHadees = hadees?.data?.updateType?.updates?.nodes
  const dailyQuran = quran?.data?.updateType?.updates?.nodes
  const dailyQoute = qoute?.data?.updateType?.updates?.nodes
  const videosData = videos?.data?.videos?.nodes
  const booksData = books?.data?.books?.edges
  const membersData = members?.data?.members?.nodes
  return {
     props: {
      postData, dailyHadees, dailyQuran, dailyQoute, videosData, booksData, membersData 
     },
  };
}