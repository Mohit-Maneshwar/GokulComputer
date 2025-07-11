import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_2opw9cf",      // 🔁 Replace with actual
        "template_j42ljds",     // 🔁 Replace with actual
        form.current,
        "CWd5NY_svPB9CIqok"       // 🔁 Replace with actual
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          alert("Failed to send message. Please try again.");
          console.error(error);
        }
      );
  };

  return (
    <div className="bg-white font-[Poppins] min-h-screen py-16 px-6 pt-[6rem]">
      <h1 className="text-4xl md:text-6xl font-bold text-blue-600 text-center mb-12">
        Contact Us
      </h1>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Contact Form */}
        <form
          ref={form}
          onSubmit={sendEmail}
          className="space-y-6 bg-gray-50 p-8 rounded-lg shadow-md"
        >
          <div>
            <label className="block text-sm font-semibold mb-1">Full Name</label>
            <input
              type="text"
              name="name"
              required
              placeholder="Enter your name"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1">Email</label>
            <input
              type="email"
              name="email"
              required
              placeholder="Enter your email"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1">Phone</label>
            <input
              type="tel"
              name="phone"
              placeholder="Enter your phone number"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1">Message</label>
            <textarea
              name="message"
              rows="4"
              required
              placeholder="Type your message"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>

        {/* Contact Info */}
        <div className="bg-blue-50 p-8 rounded-lg shadow-md space-y-6">
          <h2 className="text-2xl font-bold text-blue-700 mb-4">Get in Touch</h2>
          <p className="text-gray-700">
            Have questions about our courses, faculty, or facilities? Reach out to us anytime.
          </p>

          <div className="text-gray-800 space-y-4">
            <div>
              <span className="font-semibold">Address:</span><br />
              Gokul Computers, Main Road, Gondia, Maharashtra – 441601
            </div>
            <div>
              <span className="font-semibold">Phone:</span><br />
              +91-12345-67890
            </div>
            <div>
              <span className="font-semibold">Email:</span><br />
              gokulcomputers@gmail.com
            </div>
            <div>
              <span className="font-semibold">Hours:</span><br />
              Mon – Sat: 9:00 AM – 7:00 PM
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
