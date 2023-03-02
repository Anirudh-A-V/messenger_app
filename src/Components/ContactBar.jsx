import { BiMessage } from 'react-icons/bi'
import {SlOptionsVertical} from 'react-icons/sl'
import Contact from './Contact'

const ContactBar = () => {
    return (
        <div className="flex flex-col w-96 h-screen bg-white top-0 left-0 overflow-hidden">
            <div className="flex flex-row justify-between items-center w-full h-16 bg-[#F0F2F5]">
                <div className="flex flex-row justify-start items-center ml-6 w-1/2 h-16 bg-[#F0F2F5]">
                    {/* <img src="https://randomuser.me/api/portraits/women/90.jpg" alt="profile" className="w-10 h-10 rounded-full mr-3" /> */}
                    {/* <img src="https://randomuser.me/api/portraits/women/32.jpg" alt="profile" className="w-10 h-10 rounded-full mr-3" /> */}
                    {/* <img src="https://randomuser.me/api/portraits/women/91.jpg" alt="profile" className="w-10 h-10 rounded-full mr-3" /> */}
                    <img src="https://randomuser.me/api/portraits/men/94.jpg" alt="profile" className="w-10 h-10 rounded-full mr-3" />
                    <p>Hi, Anirudh</p>
                </div>
                <div className="flex flex-row justify-end items-center mr-6 w-1/2 h-16 bg-[#F0F2F5]">
                    <BiMessage className="w-6 h-6 mr-6" />
                    <SlOptionsVertical className="h-4 w-4" />
                </div>
            </div>  
            <div className='contact-bar overflow-y-scroll '>
                <Contact />
                <Contact />
                <Contact />
                <Contact />
                <Contact />
                <Contact />
                <Contact />
                <Contact />
                <Contact />
                <Contact />
                <Contact />
                <Contact />
                <Contact />
                <Contact />
                <Contact />
                <Contact />

            </div>
        </div>
    )
}

export default ContactBar