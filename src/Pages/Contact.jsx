import React from "react";
import Title from "../components/Title";
import { Label, TextInput, Textarea, Button } from "flowbite-react";
import { FiUser, FiMail, FiPhone, FiMap } from "react-icons/fi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";

const Contact = () => {
  const dataInfo = [
    {
      label: "Phone",
      value: "089672008829",
      icon: <FiPhone />,
      color: "text-blue-500",
    },
    {
      label: "Email",
      value: "pamungkasdanu123@gmail.com",
      icon: <FiMail />,
      color: "text-red-500",
    },
    {
      label: "Lokasi",
      value: "Losari, Taman, Sidoarjo",
      icon: <FiMap />,
      color: "text-green-500",
    },
  ];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = {};

    if (!formData.name.trim()) {
      validationErrors.name = "name is required";
    }

    if (!formData.email.trim()) {
      validationErrors.email = "email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      validationErrors.email = "email is not valid";
    }

    if (!formData.message.trim()) {
      validationErrors.message = "message is required";
    }

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
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
    }
  };

  return (
    <section className="w-full md:w-[80%] mx-auto bg-white dark:bg-slate-900 p-10 mt-14 rounded-xl">
      <Title title="Contact" />

      <div className="contact mt-10 rounded-lg grid grid-cols-1 lg:grid-cols-2">
        <div className="flex flex-col lg:justify-center lg:items-center">
          <div className="flex flex-col gap-3">
            {dataInfo.map((item, key) => {
              return (
                <div key={key} className="flex gap-4">
                  <div className="h-16 w-16 dark:bg-slate-800 rounded-lg shadow-[0_4px_6px_0_rgba(0,0,0,.08)] flex justify-center items-center">
                    <div className={`${item.color} text-xl`}>{item.icon}</div>
                  </div>

                  <div className="text-sm flex flex-col justify-center">
                    <small className="text-slate-400 text-sm">
                      {item.label}
                    </small>
                    <p className="dark:text-white text-md">{item.value}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Contact US */}
        <div className="mt-10 lg:mt-0">
          <h2 className="text-lg md:text-2xl font-semibold dark:text-white text-center">
            Send Message
          </h2>

          <form onSubmit={handleSubmit} className="mt-5">
            <div className="w-full">
              <div className="mb-2">
                <Label htmlFor="user" value="Name" />
              </div>
              <TextInput
                id="user"
                type="text"
                icon={FiUser}
                placeholder="John Doe"
                name="name"
                onChange={handleChange}
                color={errors.name ? "failure" : "gray"}
                helperText={
                  errors.name ? (
                    <>
                      <span className="font-medium">{errors.name}</span>
                    </>
                  ) : (
                    ""
                  )
                }
              />
            </div>

            <div className="w-full my-3">
              <div className="mb-2">
                <Label htmlFor="email4" value="Email" />
              </div>
              <TextInput
                id="email4"
                type="text"
                icon={FiMail}
                placeholder="johndoe@gmail.com"
                name="email"
                onChange={handleChange}
                color={errors.email ? "failure" : "gray"}
                helperText={
                  errors.email ? (
                    <>
                      <span className="font-medium">{errors.email}</span>
                    </>
                  ) : (
                    ""
                  )
                }
              />
            </div>

            <div className="w-full">
              <div className="mb-2">
                <Label htmlFor="comment" value="Your message" />
              </div>
              <Textarea
                id="comment"
                placeholder="Leave a comment..."
                rows={4}
                name="message"
                onChange={handleChange}
                color={errors.message ? "failure" : "gray"}
                helperText={
                  errors.message ? (
                    <>
                      <span className="font-medium">{errors.message}</span>
                    </>
                  ) : (
                    ""
                  )
                }
              />
            </div>

            <Button type="submit" color="blue" pill className="mt-5">
              Send
            </Button>
          </form>
          <ToastContainer className="mt-24" />
        </div>
      </div>
    </section>
  );
};

export default Contact;
