import React from "react";
import { MdOutlineDashboard } from "react-icons/md";
import { AiOutlineUser } from "react-icons/ai";
// import { Link } from "react-router-dom";

const Home = () => {
  const menus = [
    { name: "dashboard", link: "/", icon: MdOutlineDashboard },
    { name: "user", link: "/", icon: AiOutlineUser }
  ];
  return (
    <section className="flex ">
      <div className={`bg-[#0e0e0e] h-full w-48 duration-500 text-gray-100 px-4`} >
        <div className="mt-4 flex flex-col gap-4 relative">
          
          {menus?.map((menu, i) => (
            <a
            //   to={menu?.link}
              key={i}
              className={`  group flex items-center text-sm  gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md`}
            >
              <div>{React.createElement(menu?.icon, { size: "20" })}</div>
              <h2
                style={{
                  transitionDelay: `${i + 3}00ms`,
                }}
              >
                {menu?.name}
              </h2>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home;