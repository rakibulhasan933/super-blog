import Image from 'next/image';
import React from 'react'


async function getAllBlogs() {
  const res = await fetch('http://localhost:3000/api/posts', {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
};

async function BlogsList() {
  const data = await getAllBlogs();
  return (
    <div className='mx-[20px]'>
      <h2 className="flex justify-start my-3 text-2xl"> Your blogs list</h2>
      <div className="flex flex-col gap-x-3">
        <div className="px-3 py-2 border-blue-300">
          <div className="flex flex-row items-center justify-center gap-2 p-4 border-2 rounded bg-slate-100">
            <div className="w-1/3 ">
              <Image src="/hero.png" className='rounded-md' width={400} height={100} priority alt="title" />
            </div>
            <div className="w-2/3 ">
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogsList