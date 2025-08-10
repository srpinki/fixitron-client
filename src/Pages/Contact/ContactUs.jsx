import React, { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);

    try {
      const res = await fetch("https://fixitron-server.vercel.app/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setSuccess(true);
        setFormData({ name: "", email: "", message: "" });
      } else {
        console.error("Failed to send message");
      }
    } catch (err) {
      console.error("Error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-12 px-6 md:px-20">
      <div className="w-11/12 mx-auto">
        <h2 className="text-4xl font-bold text-center mb-6">Contact Us</h2>
        <p className="text-center mb-10">
          Have a question, feedback, or need support? We’d love to hear from you.
        </p>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className="block font-medium mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={handleChange}
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
              value={formData.email}
              onChange={handleChange}
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
              value={formData.message}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 bg-base-100"
              placeholder="Write your message here..."
              required
            ></textarea>
          </div>

          <div className="text-center w-full">
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-primary hover:bg-orange-600 text-white font-semibold px-6 py-2 rounded-lg transition duration-200 cursor-pointer"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </div>
        </form>

        {success && <p className="text-green-500 mt-4">Message sent successfully!</p>}
      </div>
    </section>
  );
};

export default ContactUs;
