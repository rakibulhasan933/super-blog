'use client';
import { BlogProps } from '@/type';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import React, { useState } from 'react'



async function BlogsList() {
  const [blogs, setBlogs] = useState<BlogProps[]>();
  console.log(blogs);
  const { data } = useSession();
  const email = data?.user?.email as string;
  const userSender = async (email: string) => {
    try {
      const res = await fetch("/api/posts/email", {
        method: "POST",
        body: JSON.stringify({
          email: email,
        })
      });
      const loadBlogs = await res.json();
      setBlogs(loadBlogs.blog);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className=''>
      <h2 className="flex justify-start my-3 text-2xl"> Your blogs list</h2>
      <div className="flex flex-col gap-4 p-4">
        {
          blogs?.map((item) => (
            <div key={item.id} className="flex flex-row p-4 py-2 border-2 border-orange-500 rounded-md">
              <div className="mx-4">
                <Image src={item.imageUrl} className='rounded-md' width={200} height={80} priority alt="title" />
              </div>
              <div className="flex flex-col justify-between gap-2">
                <h2 className="text-2xl font-medium">{item.title}</h2>
                <h4 className="text-sm font-normal ">{item.description}</h4>
                <h4 className="text-xs font-medium text-blue-500">{item.createdTime}</h4>
                <div className="flex flex-row gap-4">
                  <button>Update</button>
                  <button>Deleted</button>
                </div>
              </div>
            </div>
          ))
        }
      </div>
      <button className='flex items-center justify-center px-4 py-2 mx-8 mt-8 font-medium rounded-md bg-gradient-to-r from-green-400 to-blue-500' onClick={() => userSender(email)} >Refresh</button>
    </div>
  )
}

export default BlogsList