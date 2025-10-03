import React from "react";
import { FaInstagram, FaGithub, FaFacebook, FaLinkedin } from "react-icons/fa";
import "react-toastify/dist/ReactToastify.css";

const Home = () => {
  const sosmed = [
    {
      icon: <FaInstagram className="text-pink-500" />,
      link: "https://www.instagram.com/danuxpamungkas/",
    },
    {
      icon: <FaGithub className="text-slate-600 dark:text-slate-100" />,
      link: "https://github.com/danuxp",
    },
    {
      icon: <FaFacebook className="text-blue-800" />,
      link: "https://www.facebook.com/danu.pamungkas.77",
    },
    {
      icon: <FaLinkedin className="text-blue-600" />,
      link: "https://www.linkedin.com/in/danu-pamungkas-299b55119/",
    },
  ];

  const notify = () => {
    toast.success("Message Sent Success!!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  return (
    <section className=" text-center flex flex-col justify-center items-center h-full gap-5">
      <div className="relative bg-slate-50 dark:bg-slate-900 p-3 rounded-full overflow-hidden mx-auto">
        <img
          src="./img/profile.jpg"
          alt="foto"
          className="mx-auto w-56 md:w-60 rounded-full"
        />
      </div>
      <h1 className="dark:text-white font-roboto-slab text-2xl md:text-3xl font-semibold">
        Danu Pamungkas
      </h1>
      <p className="text-slate-500 dark:text-slate-400 text-[15px] font-medium mx-auto  dark:bg-slate-900 w-40  p-1 rounded-md">
        Web Developer
      </p>

      <div className="flex justify-center gap-3 w-60 mx-auto">
        {sosmed.map((item, key) => {
          return (
            <div
              key={key}
              className="w-10 h-10 bg-white dark:bg-slate-900 rounded-lg flex justify-center items-center "
            >
              <a href={item.link} className="text-2xl">
                {item.icon}
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Home;
