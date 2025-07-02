import React from "react";

const About = () => {
  return (
    <section className="py-12 px-6 md:px-20">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">About Fixitron</h2>
        <p className="text-gray-600 text-lg mb-6">
          Fixitron is a modern, user-friendly platform designed to seamlessly connect users with professional service providers. Whether you're offering a skill or in need of expert help, Fixitron makes the process fast, easy, and intuitive.
        </p>
        <p className="text-gray-600 text-base mb-4">
          With a sleek interface, dynamic animations, and mobile-first responsiveness, Fixitron delivers a polished experience across devices. Users can securely sign in, browse and book services, and enjoy real-time feedback through interactive alerts and animations.
        </p>
        <p className="text-gray-600 text-base">
          Built with cutting-edge technologies like <strong>React</strong>, <strong>Tailwind CSS</strong>, <strong>Firebase</strong>, and <strong>MongoDB</strong>, Fixitron ensures speed, security, and scalability. It’s more than a service-sharing platform — it’s a smarter way to connect.
        </p>
      </div>
    </section>
  );
};

export default About;
