'use client';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import React from 'react'


async function BlogsList() {
  const { data } = useSession();
  const email = data?.user?.email as string;
  async function userSender() {
    try {
      const res = await fetch("/api/posts/email", {
        method: "POST",
        body: JSON.stringify({
          email: email,
        })
      });
      const loadBlogs = await res.json();
      console.log(loadBlogs.blog);
    } catch (error) {
      console.log(error)
    }
  }
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
      <button className='flex items-center justify-center px-4 py-2 mt-8 font-medium rounded-md bg-gradient-to-r from-green-400 to-blue-500' onClick={() => userSender()} >Refresh</button>
    </div>
  )
}

export default BlogsList