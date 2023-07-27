'use client';
import Popup from '@/components/Popup';
import { BlogProps } from '@/type';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { MdDeleteOutline } from 'react-icons/md'
import { MdSecurityUpdateGood } from 'react-icons/md'



async function BlogsList() {
  const [blogs, setBlogs] = useState<BlogProps[]>();
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [deleteId, setDeletedId] = useState("");
  const [deleteTitle, setDeletedTitle] = useState("");

  const handleOpenPopup = (id: string, title: string) => {
    setIsPopupOpen(true);
    setDeletedId(id);
    setDeletedTitle(title);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

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
      return new Error("Failed Fetch Error");
    }
  };

  useEffect(() => {
    userSender(email);
  }, [email]);

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
                  <button className='mx-4 my-2 text-4xl text-green-500'><MdSecurityUpdateGood /></button>
                  <button onClick={() => handleOpenPopup(item.id as string, item.title)} className='mx-4 my-2 text-4xl text-red-500'><MdDeleteOutline /></button>
                </div>
              </div>
              <Popup userSender={userSender} email={email} deleteId={deleteId} deleteTitle={deleteTitle} isOpen={isPopupOpen} onClose={handleClosePopup} />
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default BlogsList