import {
  BsFillArrowLeftCircleFill,
  BiSolidDashboard,
  BsFillImageFill,
  BsReverseLayoutSidebarReverse,
  BsPerson,
} from "react-icons/bs";
import { useState } from "react";
import {
  AiFillEnvironment,
  AiOutlineMail,
  AiOutlineBarChart,
  AiOutlineFileText,
  AiOutlineSetting,
  AiFillAliwangwang,
  AiOutlineLogout,
} from "react-icons/ai";
import Logo from "../src/customlogo/logo";

import { RiDashboardFill } from "react-icons/ri";
function App() {
  const [open, setopen] = useState(true);
  const menu = [
    {
      title: "Dashboard",
    },
    {
      title: "Pages",
      icon: <AiOutlineFileText color="orange" />,
    },
    {
      title: "Media",
      icon: <BsFillImageFill color="orange" />,
    },
    {
      title: "Projects",
      icon: <BsReverseLayoutSidebarReverse color="orange"  />,
    },
    {
      title: "Analystics",
      icon: <AiOutlineBarChart color="orange" />,
    },
    {
      title: "Inbox",
      icon: <AiOutlineMail color="orange" />,
    },
    {
      title: "Profile",
      icon: <BsPerson color="orange" />,
    },
    {
      title: "Settings",
      icon: <AiOutlineSetting color="orange" />,
    },
    {
      title: "Person",
      icon: <BsPerson color="orange" />,
    },
    {
      title: "aliwan",
      icon: <AiFillAliwangwang color="orange" />,
    },
    {
      title: "logout",
      icon: <AiOutlineLogout color="orange" />,
    },
  ];
  return (
    <div className="flex">
      <div
        className='bg-dark-purpel duration-300 h-screen p-5 pt-8 ${
          "w-20"
        }  relative'
      >
        <Logo />

        <ul className="pt-2">
          {menu.map((menu, index) => {
            return (
              <>
                <li
                  className="text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md mt-2 "
                  key={index}
                >
                  <span className="text-2xl block float-left ">
                    {menu.icon}
                  </span>
                </li>
              </>
            );
          })}
        </ul>
      </div>

      <div className="p-7">
        <h1 className="text-2xl font-semibold">HomePage</h1>
      </div>
    </div>
  );
}

export default App;
