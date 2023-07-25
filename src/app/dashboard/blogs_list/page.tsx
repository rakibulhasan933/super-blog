"use client";
import { useSession } from 'next-auth/react'
import Image from 'next/image';
import React from 'react'

interface IUser {
  name: string,
  image: string,
  email: string,
}

function BlogsList() {
  const { data } = useSession();
  return (
    <div className='mx-[20px]'>
      <h2 className="flex justify-start my-3">{data?.user?.name} All Blogs List</h2>
      <div className="flex flex-col gap-x-3">
        <div className="px-3 py-2 border-blue-300">
          <div className="flex flex-row items-center gap-2">
            <div className="w-1/3 ">
              <Image src={data?.user?.image as string} className='rounded-md' width={200} height={140} priority alt="title" />
            </div>
            <div className="w-1/3 p-2">
              <Image src={data?.user?.image as string} width={200} height={140} priority alt="title" />
            </div>
            <div className="w-1/3 ">
              <Image src={data?.user?.image as string} width={200} height={140} priority alt="title" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogsList