import { SideBarHeading } from "@/components/aside";
import PostDesign from "@/components/post-design/post-design";
import apolloClient from "@/config/client";
import { AllPosts } from "@/config/queries";
import React from "react";


const Blog = async () => {
  const { postData } = await getData()

  return (
    <main>
      <section className="md:mt-28 sm:mt-14 mt-10 pt-3">
        {/* <Featured_News data={data.posts.nodes.slice(0,3)}/> */}
      </section>
      <section className='container px-4 md:px-10 mx-auto'>
        <div className="my-24">
          <SideBarHeading className="max-w-[18rem] mx-auto mb-12">
            جماعتی خبریں
          </SideBarHeading>
          <div className="grid grid-cols-1 lg:grid-cols-1 gap-4">
            {postData?.map((post, idx) => {
              return (
                <PostDesign post={post} idx={idx} layout={2} key={idx} />
              );
            })}
          </div>
        </div>
        {/* 
          <Pagination data={data?.posts?.nodes.slice(5)} PaginatedData={data?.posts?.nodes.slice(3)} />
         */}
      </section>
    </main>
  );
};

export default Blog;


async function getData() {
  const [posts] = await Promise.all([
    apolloClient.query({ query: AllPosts }),
  ]);
  const postData = posts?.data?.posts?.nodes

  if (!postData) {
    throw new Error('Failed to fetch data')
  }

  return { postData }
}