import { useState, useEffect } from 'react';
import moment from 'moment';
import Link from 'next/link';
import { getRecentPost, getSimilarPost } from '../services';

function PostWidget({ categories, slug }) {
  const [relatedPosts, setRelatedPosts] = useState([]);

  useEffect(() => {
    if (slug) {
      getSimilarPost(categories, slug).then((result) =>
        setRelatedPosts(result)
      );
    } else {
      getRecentPost().then((result) => setRelatedPosts(result));
    }
    // return () => {
    //   cleanup;
    // };
  }, [slug]);

  // console.log(relatedPosts);

  return (
    <div className='bg-white shadow-lg rounded-lg p-8 mb-8'>
      <h3 className='text-xl mb-8 font-semibold border-b pb-4'>
        {slug ? 'Related Posts' : 'Recent Posts'}
      </h3>
      {relatedPosts.map((relPost) => (
        <div key={relPost.title} className='flex items-center w-full mb-4'>
          <div className='w-16 flex-none'>
            <img
              src={relPost.featuredImage.url}
              alt={relPost.title}
              height={'60px'}
              width={'60px'}
              className='align-middle rounded-full'
            />
          </div>
          <div className='flex-grow ml-4'>
            <p className='text-gray-500 font-xs'>
              {moment(relPost.createdAt).format('MMM DD, YYYY')}
            </p>
            <Link href={`/post/${relPost.slug}`}>{relPost.title}</Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default PostWidget;
