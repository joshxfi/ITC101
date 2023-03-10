import React, { useState } from "react";
import toast from "react-hot-toast";
import { IoMdSend } from "react-icons/io";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <section className="flex flex-col md:flex-row justify-between">
      <div className="mb-20 md:mb-0">
        <h1 className="text-5xl font-bold mb-8">Hit me up!</h1>

        <div className="mb-4">
          <div className="flex items-center space-x-2">
            <AiOutlineMail />
            <p>Email</p>
          </div>
          <a
            className="text-secondary hover:underline"
            href="mailto:joshxfi.dev@gmail.com"
          >
            joshxfi.dev@gmail.com
          </a>
        </div>

        <div>
          <div className="flex items-center space-x-2">
            <AiOutlinePhone />
            <p>Phone</p>
          </div>
          <p className="text-secondary">(+63) 992 905 5602</p>
        </div>
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          setName("");
          setEmail("");
          setMessage("");
          toast.success("Message sent!");
        }}
      >
        <div className="flex bg-two h-12 w-[350px] rounded-t items-center space-x-2 pl-4">
          {["bg-red-500", "bg-amber-500", "bg-green-500"].map((color) => (
            <i key={color} className={`${color} rounded-full p-[6px]`} />
          ))}
        </div>

        <div className="w-[350px] bg-[#F9FAFB] pt-8 px-8 pb-4 rounded-b font-medium text-primary space-y-8">
          <div>
            <p className="mb-2">Name</p>
            <input
              type="text"
              className="input"
              placeholder="(optional)"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div>
            <p className="mb-2">Email</p>
            <input
              required
              type="email"
              className="input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <p className="mb-2">Message</p>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              className="input min-h-[80px] max-h-[200px]"
            />
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-two px-4 py-2 hover:bg-primary transition-colors text-white flex space-x-3 rounded font-medium items-center mt-4"
            >
              <p>Send</p> <IoMdSend />
            </button>
          </div>
        </div>
      </form>
    </section>
  );
};

export default Contact;
