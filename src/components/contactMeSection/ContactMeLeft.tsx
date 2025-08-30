import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useState } from "react";

const ContactMeLeft = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState("");

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleMessage = (e) => {
    setMessage(e.target.value);
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_2ct662h", "template_pqxxixc", form.current, {
        publicKey: "bQKY3v5qtRL9qlMRA",
      })
      .then(
        () => {
          setName("");
          setEmail("");
          setMessage("");
          setSuccess("Message sent successfully");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      sendEmail(e);
    }
  };

  return (
    <div className=" w-full">
      <div>
        <h1 className="text-2xl font-bold text-orange animate-pulse">
          Get In Touch
        </h1>
        <p className="text-sm font-bold text-white my-3">
          Feel free to rech out if you'd like to colaborate <br />
          You are just a few clicks away!
        </p>
      </div>

      <form
        className="flex flex-col gap-2 text-[1.2em] font-bold"
        ref={form}
        onSubmit={sendEmail}
      >
        <input
          type="text"
          name="from_name"
          placeholder="Your Name"
          value={name}
          onChange={handleName}
          required
          className="bg-lightGrey/70 relative rounded-lg p-2 text-white/95 hover:border-transparent focus:outline-none focus:border focus:border-cyan/70"
        />
        <input
          type="email"
          name="from_email"
          placeholder="Your Email"
          value={email}
          onChange={handleEmail}
          required
          className="bg-lightGrey/70 rounded-lg p-2  text-white/95 focus:outline-none focus:border focus:border-cyan/70 "
        />
        <textarea
          name="message"
          id="message"
          value={message}
          onChange={handleMessage}
          placeholder="Message"
          className="bg-lightGrey/70 rounded-lg p-2 h-50 text-white/95 focus:outline-none focus:ring-0 hover:border-transparent focus:border focus:border-cyan/70"
        ></textarea>
        <button
          type="submit"
          onKeyDown={handleKeyDown}
          className="rounded-lg py-2 text-white cursor-pointer font-bold flex justify-center items-center h-10 bg-cyan text-[1em] hover:bg-cyan/90 transition-all duration-300 mt-2"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default ContactMeLeft;
