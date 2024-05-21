import React from 'react'
import {FaGithub,FaLinkedin} from "react-icons/fa";
import {HiOutlineMail} from "react-icons/hi";
import {BsFillPersonLinesFill} from "react-icons/bs";

function SocialLink() {
  const links = [
    {
      id: 1,
      child: (
        <span>
          LinkedIn <FaLinkedin size={30}/>
        </span>
      ),
      href: 'https://www.linkedin.com/in/amisha-kumari-544977226/',
      style: 'rounded-tr-md'
    },
    {
      id: 2,
      child: (
        <span>
          Github <FaGithub size={30}/>
        </span>
      ),
      href: 'https://github.com/AmishaKri',
      
    },
    {
      id: 3,
      child: (
        <span>
          Mail <HiOutlineMail size={30}/>
        </span>
      ),
      href: 'mailto:amishagwp123@gmail.com',
     
    },
    {
      id: 4,
      child: (
        <span>
          Resume <BsFillPersonLinesFill size={30}/>
        </span>
      ),
      href: '../assets/AmishaKumari_Resume',
      style: 'rounded-br-md',
      download: true
    }

  ]
  return (
    <div className=' flex flex-col top-[35%] left-0 fixed'>
       <ul>
         {links.map(({ id, child, href, style, download}) => {
            <li className='flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500'>
            <a
             href={href}
             className='flex justify-between items-center w-full text-white'
             download={download}
             target="_noreferrer"
             >
               {child}
 
             </a>
          </li>
         })}
         
       </ul>

      
    </div>
  )
}

export default SocialLink
