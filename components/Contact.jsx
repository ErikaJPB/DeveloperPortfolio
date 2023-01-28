import React, { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { TfiArrowCircleUp } from "react-icons/tfi";
import Link from "next/link";

function Contact() {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState(null);

  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    emailjs
      .sendForm(
        "service_2dc9iqr",
        "template_efv5aqt",
        formRef.current,
        "AylC8SYvovoqGOB_4"
      )
      .then(
        (result) => {
          console.log(result.text);
          setStatus("success");
        },
        (error) => {
          console.log(error.text);
          setStatus("error");
        }
      );
    setTimeout(() => {
      setStatus(null);
    }, 5000);
    event.target.reset();
  }

  useEffect(() => {
    if (status === "success") {
      setFormData({
        user_name: "",
        user_email: "",
        subject: "",
        message: "",
      });
    }
  }, [status]);

  return (
    <div className="max-w-[1240px] m-auto p-6 py-10">
      <h1 className="text-4xl font-bold shadow-gray-400  text-center p-6">
        Let's build the web together!
      </h1>
      <form
        ref={formRef}
        className="max-w-[600px] m-auto"
        onSubmit={handleSubmit}
      >
        <div className="grid grid-cols-2 gap-4 mt-4">
          <input
            className="border shadow-lg  shadow-gray-400 p-6 "
            type="text"
            placeholder="Name"
            name="user_name"
            onChange={handleChange}
            value={formData.user_name}
            required
          />
          <input
            className="border shadow-lg  shadow-gray-400 p-6 "
            type="email"
            placeholder="Email"
            name="user_email"
            onChange={handleChange}
            value={formData.user_email}
            required
          />
        </div>
        <input
          className="border shadow-lg  shadow-gray-400 p-6 w-full mt-4"
          type="text"
          placeholder="Subject"
          name="subject"
          onChange={handleChange}
          value={formData.subject}
          required
        />
        <textarea
          className="border shadow-lg  shadow-gray-400 p-6 w-full mt-4"
          cols="30"
          rows="10"
          placeholder="Message"
          name="message"
          onChange={handleChange}
          value={formData.message}
          required
        ></textarea>

        <button
          className="border shadow-lg  shadow-gray-400 p-8 w-full mt-4 font-semibold"
          type="submit"
        >
          Submit
        </button>

        {status === "success" ? (
          <p className="text-4xl font-bold text-center p-6">
            Thank you for reaching out!
          </p>
        ) : null}
        {status === "error" ? (
          <p className="text-4xl font-bold text-center p-6">
            Something went wrong. Please try again.
          </p>
        ) : null}
      </form>

      <div className="flex justify-center py-12 font-semibold">
        <Link href="/">
          <div className="rounded-full shadow-lg shadow-gray-600 p-8 cursor-pointer hover:scale-100 ease-in duration-300 ">
            <TfiArrowCircleUp />
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Contact;
