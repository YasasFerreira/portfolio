import React ,{useState} from 'react'
// import underline from "../../assets/nav_underline.svg"
import "./Navbar.css"
import AnchorLink from 'react-anchor-link-smooth-scroll'
const Navbar = () => {

  const [menu,setMenu]=useState("home")
  return (

    <div className='navbar'>
        <div></div>

        <ul className="nav-menu">
            <li><AnchorLink className='anchor-link' offset={50} href='#home'><p onClick={()=>setMenu("home")}>Home</p></AnchorLink>{menu==="home"?<img src="" alt=''/>:<></>}</li>
            <li><AnchorLink className='anchor-link' offset={50} href='#about'><p onClick={()=>setMenu("about")}>About</p></AnchorLink>{menu==="about"?<img src="" alt=''/>:<></>}</li>
            <li><AnchorLink className='anchor-link' offset={50} href='#services'><p onClick={()=>setMenu("services")}>Services</p></AnchorLink>{menu==="services"?<img src="" alt=''/>:<></>}</li>
            <li><AnchorLink className='anchor-link' offset={50} href='#work'><p onClick={()=>setMenu("work")}>Portfolio</p></AnchorLink>{menu==="work"?<img src="" alt=''/>:<></>}</li>
            <li><AnchorLink className='anchor-link' offset={50} href='#contact'><p onClick={()=>setMenu("contact ")}>Contact</p></AnchorLink>{menu==="contact"?<img src="" alt=''/>:<></>}</li>
        </ul>
        <div className="nav-connect">
           <AnchorLink className='anchor-link' offset={50} href='#contact'>
            Connect with me
            </AnchorLink>
        </div>
      
    </div>
  )
}

export default Navbar
