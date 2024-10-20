import React from "react";
import Title from "../components/Title";
import {
  FiMap,
  FiActivity,
  FiMonitor,
  FiPenTool,
  FiCode,
  FiFigma,
  FiCalendar,
} from "react-icons/fi";

const About = () => {
  const dataInfo = [
    {
      label: "Hobi",
      value: "Olahraga, Game, Futsal",
      icon: <FiActivity />,
      color: "text-indigo-500",
    },
    {
      label: "Birthday",
      value: "14 Maret 1999",
      icon: <FiCalendar />,
      color: "text-red-500",
    },

    {
      label: "City",
      value: "Sidoarjo",
      icon: <FiMap />,
      color: "text-green-500",
    },
  ];

  const dataKemampuan = [
    {
      icon: <FiMonitor />,
      title: "Web Design",
      desc: "Web design mencakup proses merancang antarmuka dan pengalaman pengguna pada situs web, memadukan estetika visual, navigasi intuitif, serta responsif agar memenuhi kebutuhan pengguna dengan optimal.",
      bg: "bg-indigo-100",
      color: "text-indigo-500",
      border: "from-indigo-500 to-indigo-300",
    },
    {
      icon: <FiFigma />,
      title: "UI / UX",
      desc: "UI/UX adalah desain antarmuka dan pengalaman pengguna yang berfokus pada menciptakan tampilan menarik, interaksi intuitif, serta meningkatkan kepuasan pengguna melalui kenyamanan dan fungsionalitas optimal.",
      bg: "bg-red-100",
      color: "text-red-500",
      border: "from-red-500 to-red-300",
    },
    {
      icon: <FiCode />,
      title: "Web Development",
      desc: "Web development adalah proses membangun dan memelihara situs web menggunakan teknologi seperti HTML, CSS, dan JavaScript, serta mencakup pengembangan front-end, back-end, dan database.",
      bg: "bg-blue-100",
      color: "text-blue-500",
      border: "from-blue-500 to-blue-300",
    },
    {
      icon: <FiPenTool />,
      title: "Design Grafis",
      desc: "Desain grafis adalah seni menggabungkan elemen visual seperti gambar, teks, dan warna untuk menyampaikan pesan, menciptakan identitas merek, serta memikat audiens secara estetis.",
      bg: "bg-orange-100",
      color: "text-orange-500",
      border: "from-orange-500 to-orange-300",
    },
  ];
  return (
    <section className="w-full md:w-[80%] mx-auto bg-white p-10 mt-14 rounded-xl dark:bg-slate-900">
      <Title title="About" />

      <div className="flex flex-col justify-center items-center lg:flex-row gap-5 mt-10">
        <div className="w-full lg:w-1/2 lg:h-auto xl:max-h-[380px] lg:relative bg-slate-100 dark:bg-slate-800 rounded-xl pt-3">
          <img
            src="./img/foto.png"
            alt="foto"
            className="mx-auto  pt-3 lg:pt-0"
          />
        </div>

        <div className="w-full">
          <h2 className="text-lg md:text-xl font-semibold dark:text-white">
            Kenalan dulu, gak sih..
          </h2>
          <div className="leading-7 text-justify my-2 text-sm dark:text-slate-400">
            <p>
              Hai namaku <span className="font-bold">Danu Pamungkas</span>,
              seorang web developer di suatu universitas. Saya sangat menikmati
              pekerjaan ini karena coding adalah passion saya. Saya akan terus
              belajar dan berlatih untuk memperbanyak portofolio, agar kemampuan
              saya semakin berkembang. Tujuan saya membuat portofolio ini untuk
              melatih skill frontend saya dengan melihat referensi desain web
              yang ada lalu diimplementasikan kedalam coding.{" "}
              <span className="italic font-bold">
                Enjoy your coding and don't forget to clean code.
              </span>
            </p>
          </div>

          <div className="flex flex-wrap gap-4 mt-4">
            {dataInfo.map((item, key) => {
              return (
                <div className="flex gap-3 py-0 xl:py-2" key={key}>
                  <div className="h-10 w-10 bg-white dark:bg-slate-800 rounded-lg shadow-[0_4px_6px_0_rgba(0,0,0,.08)] flex justify-center items-center">
                    <div className={`text-xl ${item.color}`}>{item.icon}</div>
                  </div>
                  <div className="block text-sm">
                    <small className="text-slate-400">{item.label}</small>
                    <p className="dark:text-white">{item.value}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Kemampuan */}
      <div className="mt-5">
        <h2 className="text-lg font-semibold dark:text-white">
          Beberapa kemampuan saya dalam bidang berikut :
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4 gap-5 mt-5">
          {dataKemampuan.map((item, key) => {
            return (
              <div
                key={key}
                className="shadow-[0_4px_6px_0_rgba(0,0,0,.09)] p-7 rounded-xl flex flex-col gap-4 dark:border-slate-800 dark:border-2"
              >
                <div
                  className={`w-16 h-16 ${item.bg} rounded-full flex justify-center items-center shadow-[0_4px_6px_0_rgba(59,130,246,.2)]`}
                >
                  <div className={`text-3xl ${item.color}`}>{item.icon}</div>
                </div>
                <h4 className="text-lg font-bold font-roboto-slab dark:text-white">
                  {item.title}
                </h4>
                <div
                  className={`w-20 h-1 bg-gradient-to-r ${item.border} rounded-full`}
                ></div>
                <p className="text-sm text-slate-400 text-justify lg:text-left leading-6">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
