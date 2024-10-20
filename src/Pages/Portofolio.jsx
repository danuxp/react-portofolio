import React from "react";
import Title from "../components/Title";
import { Button, Modal } from "flowbite-react";
import { useState } from "react";
import { BiLogoTailwindCss } from "react-icons/bi";
import {
  DiHtml5,
  DiCss3,
  DiJqueryLogo,
  DiBootstrap,
  DiPhp,
  DiCodeigniter,
  DiLaravel,
  DiReact,
  DiMysql,
  DiPostgresql,
  DiJavascript,
} from "react-icons/di";

const Portofolio = () => {
  const [openModal, setOpenModal] = useState(false);

  const [project, setProject] = useState({});

  const handleShowModal = (data) => {
    setProject(data);
    setOpenModal(true);
  };

  const tech = [
    {
      logo: <DiHtml5 />,
      color: "text-[#e34923]",
    },
    {
      logo: <DiCss3 />,
      color: "text-[#006ebb]",
    },
    {
      logo: <DiJavascript />,
      color: "text-[#e4a227]",
    },
    {
      logo: <DiJqueryLogo />,
      color: "text-[#0768ac]",
    },
    {
      logo: <DiBootstrap />,
      color: "text-indigo-700",
    },
    {
      logo: <DiPhp />,
      color: "text-[#767bb3]",
    },
    {
      logo: <DiCodeigniter />,
      color: "text-red-600",
    },
    {
      logo: <DiLaravel />,
      color: "text-rose-600",
    },
    {
      logo: <DiMysql />,
      color: "text-blue-600",
    },
    {
      logo: <DiPostgresql />,
      color: "text-indigo-600",
    },
    {
      logo: <DiReact />,
      color: "text-blue-500",
    },
    {
      logo: <BiLogoTailwindCss />,
      color: "text-blue-500",
    },
  ];

  const projects = [
    {
      name: "Sapujagad",
      desc: `<p>Sapujagad adalah sistem administrasi pengelolaan ujian akhir dan graduasi yang digunakan oleh mahasiswa, dosen dan admin untuk mengelola data skripsi hingga wisuda. Sistem ini mempunyai beberapa tahapan diantaranya : </p> 
      <ol style="list-style-type: decimal;"> 
        <li>Plotting dosen pembimbing</li>
        <li>Pemilihan dosen pembimbing</li>
        <li>Persetujan dosen pembimbing</li>
        <li>Bimbingan</li>
        <li>Daftar proposal</li>
        <li>Daftar skripsi</li>
        <li>Daftar yudisium</li>
        <li>Daftar wisuda</li>
      </ol>`,
      img: "./img/1.png",
    },
    {
      name: "Ukom LSP",
      desc: "<p>Ukom LSP adalah sistem uji kompetensi yang digunakan oleh asesi, asesor dan admin untuk pendafataran ujikom sesuai dengan skema prodi nya masing-masing. Pihak admin yang mengelola validasi pendaftaran serta penjadwalan pelaksanaan ujikom pada asesor dan asesi. Pada asesi hanya mengisi form yang sudah ada pada sistem dan asesor yang memvalidasinya sesuai dengan ketentuan yang sudah dibuat</p>",
      img: "./img/2.png",
    },
    {
      name: "Siakad",
      desc: "<p>Siakad adalah sistem akademik yang digunakan oleh direktorat akademik untuk mengelola semua akademik yang ada di universitas mulai dari data mahasiswa, herregistrasi, krs, transkrip dan masih banyak lagi.</p>",
      img: "./img/3.png",
    },
    {
      name: "Sistem Labeling",
      desc: "<p>Sistem labeling adalah sistem yang digunakan untuk melakukan pelabelan pada data tweet yang sudah dikumpulkan pada excell. Setelah itu di import pada sistem dan dilakukan pelabelan tweet tersebut apakah sarkasme atau non sarkasme.</p>",
      img: "./img/4.png",
    },
    {
      name: "Sistem Inventory Lab",
      desc: "<p>Sistem inventory lab adalah sistem yang digunakan untuk mengelola data barang yang ada di laboratorium, selain itu sistem ini bisa digunakan asisten lab untuk pencatatan hasil rapat, mengelola data anggota dan alumni.</p>",
      img: "./img/5.png",
    },
    {
      name: "Sistem Visitasi",
      desc: "<p>Sistem visitasi adalah sistem yang digunakan untuk mengupload dokumen-dokumen untuk digunakan keperluan akreditasi kampus supaya dapat lebih mudah melakukan pencarian file dokumennya.</p>",
      img: "./img/6.png",
    },
    {
      name: "Sistem DSS",
      desc: "<p>Sistem dss (decision support system) adalah sistem yang digunakan untuk merepresentasikan data-data yang ada di kampus seperti jumlah mahasiswa yang her, kelulusan tepat waktu, keberhasilan studi dll. Sistem ini pada awalnya saya yang merancang namum terdapat menu yang belum selesai sehinggan dilanjutkan oleh rekan kerja saya.</p>",
      img: "./img/7.png",
    },
    {
      name: "Portofolio Design",
      desc: "<p>Portofolio ini saya buat untuk melatih skill frontend yang saya miliki supaya kedepannya bisa menghasilkan web yang lebih interaktiv dan responsive.</p>",
      img: "./img/8.png",
    },
  ];

  return (
    <>
      <section className="w-full md:w-[80%] mx-auto bg-white dark:bg-slate-900 p-10 mt-14 rounded-xl">
        <Title title="Portofolio" />
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10">
          {projects.map((project, key) => {
            return (
              <div
                key={key}
                className="w-full  bg-slate-100 dark:bg-slate-900 dark:border-slate-800 dark:border-2 rounded-xl p-5 text-center"
              >
                <figure className="overflow-hidden rounded-xl">
                  <img
                    src={project.img}
                    alt="project"
                    className="rounded-xl transition-transform duration-200 hover:scale-110"
                  />
                </figure>

                <p className="mt-5 font-semibold dark:text-white">
                  {project.name}
                </p>

                <div
                  className="bg-blue-500 p-2 rounded-full text-white font-medium mt-5 cursor-pointer hover:bg-blue-700"
                  onClick={() => {
                    handleShowModal(project);
                  }}
                >
                  Detail
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold text-center dark:text-white">
            Technologies
          </h2>
          <div className="flex flex-wrap gap-8 mt-5 justify-center">
            {tech.map((item, key) => {
              return (
                <div className="bg-slate-100 dark:bg-slate-800 p-1 rounded-lg">
                  <div className={`text-5xl ${item.color}`}>{item.logo}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Modal */}

      {openModal && (
        <Modal
          className="dark:bg-slate-900"
          show={openModal}
          onClose={() => setOpenModal(false)}
        >
          <Modal.Header>{project.name}</Modal.Header>
          <Modal.Body>
            <img
              src={project.img}
              alt="project"
              className="w-full rounded-xl"
            />
            <div className="space-y-6">
              <div
                className="text-base leading-relaxed  dark:text-white mt-4 text-justify"
                dangerouslySetInnerHTML={{ __html: project.desc }}
              ></div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button color="gray" onClick={() => setOpenModal(false)}>
              Tutup
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </>
  );
};

export default Portofolio;
