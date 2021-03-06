import Head from 'next/head';
import {
  PostCard,
  Categories,
  PostWidget,
  FeaturedPostCard,
} from '../components/index';
import { getPosts } from '../services';
import FeaturedPosts from '../sections/FeaturedPosts';

export default function Home({ posts }) {
  return (
    <div className='container mx-auto px-10 mb-8'>
      <Head>
        <title>Blogy</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      {/* <FeaturedPostCard /> */}
      <FeaturedPosts />
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
        <div className='lg:col-span-8 col-span-1'>
          {posts.map((post, idx) => (
            <div>
              <PostCard key={idx} post={post.node} />
            </div>
          ))}
        </div>
        <div className='lg:col-span-4 col-span-1'>
          <div className='lg:sticky relative top-8'>
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const posts = (await getPosts()) || [];
  return {
    props: { posts },
  };
}
