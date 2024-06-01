import React from "react";

const ContactUs = () => {
  return (
    <div className="bg-redishWhite  p-5 flex-col h-fit space-y-5 md:flex md:flex-row md:mx-20 md:bg relative">
      <div className="md:w-1/2 md:mx-5 ">
        <button className="border bg-white text-greenCustom  border-greenCustom w-fit px-5 md:mb-5">
          Send Us a Message
        </button>{" "}
        <div
          id="contact_us"
          className="flex flex-col items-center text-center space-y-1 bg-redishWhite d md:text-3xl md:mx-10"
        >
          <p className=" text-black text-start">
            Use the contact form below to drop us a message. Whether it&apos;s a
            question, feedback, or collaboration proposal, we value your input.
          </p>
        </div>
        <div className="md:mt-5">
          {" "}
          <form
            className="space-y-2 items-center text-center"
            action="Post"
            id="message-form"
          >
            <input
              className="border border-greenCustom p-5 w-full"
              type="text"
              placeholder="Your Name"
            />
            <input
              className="border border-greenCustom p-5 w-full"
              type="email"
              placeholder="Your Email"
            />
            <input
              className="border border-greenCustom p-5 w-full"
              type="text"
              placeholder="Your Phone"
            />
            <textarea
              id="message"
              name="message"
              rows="4"
              className="border border-greenCustom px-5 py-10 w-full"
              placeholder="Your Message"
            />
            <br />
            <button className="bg-greenCustom w-full p-5 px-10">Submit</button>
          </form>
        </div>
      </div>
      <div
        className="md:w-1/2 hidden md:block max-h-max w-full bg-regal-blue
      "
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5840.471061634937!2d31.05678342919797!3d-17.785704873014982!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1931a5673118070f%3A0xb9107787eed9e671!2sUniversity%20of%20Zimbabwe!5e0!3m2!1sen!2szw!4v1716951980110!5m2!1sen!2szw"
          width="600"
          height="450"
          className="border-0 w-full h-full"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="absolute bottom-10 right-20 bg-blue-500 text-white bg-greenCustom bg-opacity-90 p-2 rounded max-w-sm w-64 hidden md:block">
        <h2 className="font-semibold text-xl">Contact Us</h2>
        <ul>
          <li>
            <b>Phone: </b>+263782130698
          </li>
          <li>
            {" "}
            <b>Email:</b> info@magutacapital.com
          </li>
        </ul>
        <p>
          {" "}
          <b>Visit Us:</b>
        </p>
        <p>
          Please note that our physical office space is in the process of being
          established. We appreciate your understanding, and we&apos;ll update
          our address once it&apos;s ready.
        </p>
      </div>
    </div>
  );
};

export default ContactUs;
