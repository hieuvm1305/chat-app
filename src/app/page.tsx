import React from 'react'
import Chat from '@/layout/Chat'
import ChatNav from '@/layout/ChatNav'
function Home() {
  return (
    <div>
      <div className='w-full flex'>
        <div className='w-[350px] h-screen border-r'>
          <ChatNav />
        </div>
        <div className='flex-1'>
          <Chat />
        </div>
      </div>
    </div>
  )
}

export default Home