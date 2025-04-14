import React, { useEffect } from 'react'
import Profile from '../../assets/i.png'
import { IoHomeOutline, IoSettingsOutline } from "react-icons/io5";
import { LuMessageCircleMore } from 'react-icons/lu';
import { IoMdCloudUpload, IoMdNotificationsOutline } from 'react-icons/io';
import { GrLogout } from 'react-icons/gr';
import { Link, useLocation, useNavigate } from 'react-router';

const Navbar = () => {
  const navigate= useNavigate();
  const location= useLocation();
    const NavItem=[
        {
            id:1,
            path:'/',
            icon:<IoHomeOutline />
        },
        {
          id:2,
          path:'/Messenger',
          icon:<LuMessageCircleMore />

      },
      {
        id:3,
        path:'/Notification',
        icon:<IoMdNotificationsOutline />
    },
    {
      id:4,
      path:'/Setting',
      icon:<IoSettingsOutline />
  },
  {
    id:5,
    path:'/singIn',
    icon:<GrLogout />
  }

    ]

  //  todo: handleUpload function

  const handleUpload=()=>{
    cloudinary.openUploadWidget({
      cloudName: "dgqtlndtb",
      uploadPreset: "cheatapp",
      sources: [ 'local', 'url', 'image_search','google_drive', 'unsplash', 'dropbox', 'camera'],
      googleApiKey: 'AIzaSyCLqnYeTL3nNOqzZ_mpyfQEroe8AxpKCGI',
      searchBySites: ["all", "cloudinary.com"],
      searchByRights: true 
    },
    (error, result)=>{
      if(error){
        throw new Error("img upload failed")
      }else if(result.event==='success'){
        console.log("hello",result.info.secure_url);
      }
     
      
    })
  }



  // use useffact
 useEffect(()=>{
  const script=document.createElement("script")
  script.src=`https://upload-widget.cloudinary.com/latest/global/all.js`
  script.async=true
  document.body.appendChild(script)
 },[])
 console.log(window.cloudinary);
 

  return (
    <>
      <nav>
            <div className='w-[200px] h-[922px] m-6 rounded-2xl bg-bandColor px-[20px] py-[40px] flex justify-center items-center flex-col'>
                <div className='w-[100px] h-[100px] relative group rounded-full'>
                    <picture>
                        <img src={Profile} alt={Profile}  className='w-full h-full profli object-fill rounded-full'/>
                    </picture>
                    <span onClick={handleUpload} className='text-2xl text-white absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] transition-all invisible group-hover:visible'><IoMdCloudUpload /></span>
                </div>
                <div className='flex flex-col gap-[80px] items-center mt-12'>
                  {
                    NavItem?.map((item , index)=>(
                      NavItem.length -1==index ? (<Link to={item.path} key={item.id} className='mt-[50px] text-[40px] text-white '>{item.icon}</Link>):( <Link to={item.path}  key={item.id} className={ location.pathname==item.path?'text-[40px] active  text-white ':'text-[40px] text-white '} >{item.icon}</Link>)
                      
                      )
                    )
                  }
                </div>
            </div>
      </nav>
    </>
  )
}

export default Navbar
