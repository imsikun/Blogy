import React from 'react';
import Image from 'next/image';
function Author({ author }) {
  return (
    <div className='max-w-sm w-full lg:max-w-full lg:flex'>
      <div className='border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 leading-normal shadow-lg'>
        <div class='flex items-center'>
          <Image
            unoptimized
            src={author.photo.url}
            alt={author.name}
            height='100px'
            width='100px'
            className='align-middle rounded-full'
          />
          <div className='text-sm ml-8'>
            <p className='text-gray-900 leading-none text-gray-700 text-xl mb-3'>
              {author.name}
            </p>
            <p className='text-gray-600'>{author.bio}</p>
          </div>
        </div>
      </div>
    </div>

    // <div className='text-center mt-20 mb-8 pb-12 rounded-lg bg-black bg-opacity-20 relative'>
    //   <div className='absolute right-0 left-0 -top-14 '>
    //     <Image
    //       unoptimized
    //       src={author.photo.url}
    //       alt={author.name}
    //       height={'100px'}
    //       width={'100px'}
    //       className='align-middle rounded-full'
    //     />
    //   </div>
    //   <h3 className='text-white my- text-xl font-bold'>{author.name}</h3>
    //   <p className='text-white text-lg'>{author.bio}</p>
    // </div>
  );
}

export default Author;
