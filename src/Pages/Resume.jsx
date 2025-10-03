import React from "react";
import Title from "../components/Title";
import { FiBookOpen, FiBriefcase } from "react-icons/fi";

const Resume = () => {
  const education = [
    {
      tahun: "2005 - 2011",
      sekolah: "SDN Kletek Taman",
      color: "border-b-blue-400",
      img: "./img/sd.png",
    },
    {
      tahun: "2011 - 2014",
      sekolah: "SMPN 1 Taman",
      color: "border-b-indigo-400",
      img: "./img/smp.png",
    },
    {
      tahun: "2014 - 2017",
      sekolah: "SMK YPM 1 Taman",
      color: "border-b-green-400",
      img: "./img/smk.png",
    },
    {
      tahun: "2018 - 2022",
      sekolah: "Universitas Muhammadiyah Sidoarjo",
      color: "border-b-red-400",
      img: "./img/univ.png",
    },
  ];

  const experience = [
    {
      tahun: "2017",
      desc: "Setelah lulus smk saya mencoba mendaftar di BLK Surabaya untuk pelatihan kerja teknisi jaringan komputer selama 1 bulan.",
    },
    {
      tahun: "2017",
      desc: "Saya melanjutkan bekerja di tempat magang dulu menjadi IT Support di Toko yang ada di Hitech Mall Surabaya selama 7 bulan.",
    },
    {
      tahun: "2022 - Sekarang",
      desc: "Setelah lulus kuliah saya mendapat tawaran bekerja di kampus sendiri sebagai programmer untuk melanjutkan project skripsi saya tentang sistem administrasi pengelolaan ujian akhir dan graduasi.",
    },
  ];
  return (
    <section className="w-full md:w-[80%] mx-auto bg-white dark:bg-slate-900 p-10 mt-14 rounded-xl">
      <Title title="Resume" />

      <div className="mt-10">
        <div className="text-2xl md:text-3xl flex items-center gap-2">
          <div className="h-11 w-11 md:w-12 md:h-12 bg-blue-500 rounded-full flex items-center justify-center">
            <FiBookOpen className="text-white" />
          </div>
          <h2 className="font-medium dark:text-white">Education</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 mt-5 gap-5 ">
          {education.map((item, key) => {
            return (
              <div
                key={key}
                className={`shadow-[0_4px_6px_0_rgba(0,0,0,.08)] p-5 rounded-xl text-center border-b-[15px] ${item.color} dark:border-x-slate-800 dark:border-t-slate-800 dark:border-x-2 dark:border-t-2`}
              >
                <figure className="overflow-hidden rounded-xl">
                  <img
                    src={item.img}
                    alt="sd"
                    className="w-full rounded-xl mx-auto mb-5 transition-transform duration-200 hover:scale-110"
                  />
                </figure>
                <span className="font-semibold pb-2 dark:text-white">
                  {item.tahun}{" "}
                </span>
                <p className="dark:text-slate-400">{item.sekolah}</p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-20">
        <div className="text-2xl md:text-3xl flex items-center gap-2">
          <div className="h-11 w-11 md:w-12 md:h-12 bg-orange-500 rounded-full flex items-center justify-center">
            <FiBriefcase className="text-white" />
          </div>
          <h2 className="font-medium dark:text-white">Experience</h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-5">
          {experience.map((item, key) => {
            return (
              <div
                key={key}
                className="shadow-[0_4px_6px_0_rgba(0,0,0,.08)] rounded-xl p-5 border-t-4 border-t-orange-400 dark:border-x-slate-800 dark:border-b-slate-800 dark:border-x-2 dark:border-b-2"
              >
                <span className="font-semibold dark:text-white">
                  {item.tahun}
                </span>
                <p className="text-sm mt-2 dark:text-slate-400">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Resume;
