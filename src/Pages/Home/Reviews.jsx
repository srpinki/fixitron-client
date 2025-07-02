import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

const reviews = [
  {
    name: "Sarah Johnson",
    role: "Laptop Screen Repair",
    message:
      "Amazing service! They fixed my laptop screen in just one day. Professional and affordable.",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Mike Chen",
    role: "Phone Repair",
    message:
      "My phone was completely dead, but they brought it back to life. Excellent work!",
    img: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    name: "Emma Davis",
    role: "Gaming Console Fix",
    message:
      "Fast, reliable, and great customer service. I’ll definitely use them again.",
    img: "https://randomuser.me/api/portraits/women/46.jpg",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6 },
  }),
};

const Review = () => (
  <div className="py-20 text-center px-4 bg-base-200">
    <motion.h2
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-3xl md:text-5xl font-bold "
    >
      What Our Customers Say
    </motion.h2>
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
      className="text-base-content mt-2 mb-8"
    >
      Don’t just take our word for it – hear from our satisfied customers
    </motion.p>

    <div className="grid gap-6 md:grid-cols-3 max-w-7xl mx-auto">
      {reviews.map((review, idx) => (
        <motion.div
          key={idx}
          className="card bg-white shadow-md rounded-lg p-6 text-left"
          custom={idx}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={cardVariants}
        >
          <div className="flex mb-4 text-orange-500">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} />
            ))}
          </div>
          <p className="italic mb-4 text-neutral">"{review.message}"</p>
          <div className="flex items-center gap-4">
            <img
              src={review.img}
              alt={review.name}
              className="w-10 h-10 rounded-full object-cover"
            />
            <div>
              <p className="font-semibold text-neutral">{review.name}</p>
              <p className="text-sm text-neutral">{review.role}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
);

export default Review;
