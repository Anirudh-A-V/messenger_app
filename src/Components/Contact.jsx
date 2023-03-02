import {BiVolumeMute} from 'react-icons/bi';
import {BsPinAngleFill} from 'react-icons/bs';

const Contact = () => {
    return (
        <div className="flex w-full h-20 bg-white items-center border">
            <div className="mt-4 mb-4 ml-4">
                <img src="https://randomuser.me/api/portraits/women/91.jpg" alt="profile" className="w-12 h-12 rounded-full mr-3" />
            </div>
            <div className="flex flex-col justify-between w-full p-3">
                {/* <div className="flex flex-col w-full">
                    <p className="text-gray-900 text-lg font-normal">Jenny</p>
                    <p className="text-gray-700 text-sm font-thin">Hi, how are you?</p>
                </div>
                <div className="flex flex-col justify-center items-end h-full w-full">
                    <p className="text-gray-500 text-xs font-thin">10:00 AM</p>
                    <div className="flex items-center justify-center bg-purple-500 p-1 w-5 h-5 rounded-full">
                        <p className="text-gray-100 text-xs font-thin">1</p>
                    </div>
                </div> */}
                <div className="flex w-full">
                    <div className="flex flex-col w-3/4">
                        <p className="text-gray-900 text-lg font-normal">Jenny</p>
                    </div>
                    <div className="flex flex-col justify-center items-end h-full w-1/4 mr-2">
                        <p className="text-gray-500 text-xs font-thin">10:00 AM</p>
                    </div>
                </div>
                <div className="flex w-full">
                    <div className="flex flex-col w-3/4">
                        <p className="text-gray-700 text-sm font-thin">Hi, how are you?</p>
                    </div>
                    <div className="flex justify-center items-end h-full w-1/4">
                        <BiVolumeMute className="text-gray-500 w-5 h-5 mr-2" />
                        <BsPinAngleFill className="text-gray-500 w-5 h-5 mr-2" />
                        <div className="flex items-center justify-center bg-purple-500 p-1 w-5 h-5 rounded-full">
                            <p className="text-gray-100 text-xs font-thin">1</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;