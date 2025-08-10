import React from "react";

const ContactUs = () => {
  return (
    <section className="py-12 px-6 md:px-20">
      <div className="w-11/12 mx-auto">
        <h2 className="text-4xl font-bold text-center mb-6">
          Contact Us
        </h2>
        <p className="text-center mb-10">
          Have a question, feedback, or need support? We’d love to hear from you. Fill out the form below and our team will get back to you as soon as possible.
        </p>

        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block font-medium mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 bg-base-100"
              placeholder="Your name"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 bg-base-100"
              placeholder="your@email.com"
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="block font-medium mb-1">
              Message
            </label>
            <textarea
              id="message"
              rows="5"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none  focus:border-orange-500 focus:ring-1 focus:ring-orange-500 bg-base-100"
              placeholder="Write your message here..."
              required
            ></textarea>
          </div>

          <div className="text-center w-full">
            <button
              type="submit"
              className="w-full bg-primary hover:bg-orange-600 text-white font-semibold px-6 py-2 rounded-lg transition duration-200 cursor-pointer"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
