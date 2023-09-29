import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header/Header'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'

function App() {

  const[bookmarks,setBookmarks]=useState([]);
  const[readingTime,setReadingTime]=useState(0);



  const handleAddToBookmark=blog=>{
    const newBookMarks=[...bookmarks,blog];
    setBookmarks(newBookMarks);
  }

  const handleMarkAsRead=(time)=>{
    setReadingTime(readingTime+time);
  }

  return (
    <>
      <Header></Header>
      <div className='md:flex max-w-7xl mx-auto'>

        <Blogs handleAddToBookmark={handleAddToBookmark} handleMarkAsRead={handleMarkAsRead}>

        </Blogs>
        <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
      </div>
    </>
  )
}

export default App


