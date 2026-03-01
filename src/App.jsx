import React from "react";
import {
  FaRocket,
  FaMobileAlt,
  FaWhatsapp,
  FaHeadset,
  FaArrowRight,
  FaEnvelope,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

import Gym from "./assest/Gym.PNG";
import Travel from "./assest/Travel.PNG";
import Cafe from "./assest/Cafe.PNG";

export default function App() {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div className="font-sans antialiased text-gray-800">
      <nav className="fixed top-0 w-full z-50 backdrop-blur-xl bg-white/70 border-b border-white/20">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <h1 className="text-2xl font-extrabold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Irfan.dev
          </h1>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-10 font-medium text-gray-700">
            <a href="#services" className="hover:text-indigo-600">
              Services
            </a>
            <a href="#projects" className="hover:text-indigo-600">
              Projects
            </a>
            <a href="#contact" className="hover:text-indigo-600">
              Contact
            </a>
          </div>

          {/* Desktop CTA */}
          <a
            href="https://wa.me/918392092388?text=Hi%20Irfan,%20I%20want%20a%20website"
            target="_blank"
            className="hidden md:flex items-center gap-2 bg-indigo-600 text-white px-6 py-2.5 rounded-xl shadow-lg hover:scale-105 transition text-sm font-semibold"
          >
            <FaWhatsapp size={15} />
            Get Quote
          </a>

          {/* Mobile Toggle Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-2xl text-indigo-600"
          >
            {isOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Mobile Dropdown */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-white shadow-lg px-6 py-6 space-y-6 text-center"
            >
              <a
                href="#services"
                onClick={() => setIsOpen(false)}
                className="block text-gray-700 hover:text-indigo-600"
              >
                Services
              </a>

              <a
                href="#projects"
                onClick={() => setIsOpen(false)}
                className="block text-gray-700 hover:text-indigo-600"
              >
                Projects
              </a>

              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="block text-gray-700 hover:text-indigo-600"
              >
                Contact
              </a>

              <a
                href="https://wa.me/918392092388"
                target="_blank"
                className="inline-flex items-center justify-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-xl font-semibold"
              >
                <FaWhatsapp size={15} />
                Get Quote
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* ================= HERO ================= */}
      <section className="relative pt-40 pb-32 px-6 overflow-hidden text-center">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-purple-100 -z-10"></div>

        {/* Glow Effects */}
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-indigo-400 opacity-30 blur-3xl rounded-full"></div>
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-purple-400 opacity-30 blur-3xl rounded-full"></div>

        <div className="max-w-5xl mx-auto">
          {/* Small Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block mb-6 px-5 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium"
          >
            🚀 Available for Freelance Projects
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-extrabold leading-tight"
          >
            I Build Modern Websites <br />
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              That Grow Your Business
            </span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mt-8 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto"
          >
            I help local businesses get more bookings, more leads, and more
            trust online with fast, high-converting websites.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mt-12 flex flex-wrap justify-center gap-6"
          >
            <a
              href="#projects"
              className="bg-indigo-600 text-white px-8 py-4 rounded-xl shadow-xl hover:shadow-2xl hover:scale-105 transition duration-300 font-semibold"
            >
              View My Work
            </a>

            <a
              href="https://wa.me/918392092388?text=Hi%20Irfan,%20I%20want%20a%20website"
              target="_blank"
              className="border border-indigo-600 text-indigo-600 px-8 py-4 rounded-xl hover:bg-indigo-600 hover:text-white transition duration-300 font-semibold"
            >
              Get Free Consultation
            </a>
          </motion.div>

          {/* Trust Line */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-12 flex flex-wrap justify-center gap-8 text-sm text-gray-500"
          >
            <span>⚡ 3–5 Days Delivery</span>
            <span>⚡ Affordable Pricing</span>
            <span>⚡ WhatsApp Integration</span>
          </motion.div>
        </div>
      </section>
      {/* ================= SERVICES ================= */}
      <section
        id="services"
        className="py-28 px-6 bg-gradient-to-b from-gray-50 to-white"
      >
        <div className="max-w-6xl mx-auto text-center">
          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold mb-4"
          >
            Services & Pricing
          </motion.h3>

          <p className="text-gray-600 mb-16">
            Affordable website solutions for growing businesses
          </p>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                title: "Starter Website",
                price: "₹5,000",
                desc: "Perfect for small local businesses.",
                features: [
                  "Up to 5 Pages",
                  "Mobile Responsive",
                  "WhatsApp Button",
                ],
              },
              {
                title: "Business Pro",
                price: "₹8,000",
                highlight: true,
                desc: "Best for serious business growth.",
                features: [
                  "Everything in Starter",
                  "SEO Optimization",
                  "Speed Optimization",
                  "Free 3 Months Support",
                ],
              },
              {
                title: "Landing Page",
                price: "₹4,000",
                desc: "High-converting single page website.",
                features: [
                  "Conversion Focused",
                  "Fast Loading",
                  "WhatsApp Integration",
                ],
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className={`p-10 rounded-3xl transition duration-300 relative
            ${
              service.highlight
                ? "bg-indigo-600 text-white shadow-2xl scale-105"
                : "bg-white shadow-md hover:shadow-xl hover:-translate-y-3"
            }`}
              >
                {service.highlight && (
                  <span className="absolute top-4 right-4 bg-white text-indigo-600 text-xs px-3 py-1 rounded-full font-semibold">
                    Most Popular
                  </span>
                )}

                <h4 className="text-2xl font-bold mb-4">{service.title}</h4>

                <p className="text-3xl font-extrabold mb-6">{service.price}</p>

                <p className="mb-6 text-sm opacity-80">{service.desc}</p>

                <ul className="space-y-2 text-sm mb-8">
                  {service.features.map((feature, i) => (
                    <li key={i}>✓ {feature}</li>
                  ))}
                </ul>

                <button
                  className={`px-6 py-3 rounded-xl font-semibold transition
              ${
                service.highlight
                  ? "bg-white text-indigo-600 hover:bg-gray-200"
                  : "bg-indigo-600 text-white hover:bg-indigo-700"
              }`}
                >
                  Get Started
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE ME ================= */}
      <section className="py-28 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-center mb-16"
          >
            Why Work With Me?
          </motion.h3>

          <div className="grid md:grid-cols-2 gap-12">
            {[
              {
                icon: <FaRocket />,
                title: "Fast Delivery",
                desc: "Your website goes live within 3–5 days.",
              },
              {
                icon: <FaMobileAlt />,
                title: "Mobile First Design",
                desc: "Optimized for mobile, tablet & desktop.",
              },
              {
                icon: <FaWhatsapp />,
                title: "WhatsApp Integration",
                desc: "Direct client bookings via WhatsApp.",
              },
              {
                icon: <FaHeadset />,
                title: "Free Support",
                desc: "3 months of free maintenance support.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="flex gap-6 items-start p-6 rounded-2xl hover:bg-gray-50 transition"
              >
                <div className="text-indigo-600 text-3xl">{item.icon}</div>

                <div>
                  <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PROJECTS ================= */}
      <section id="projects" className="py-28 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold mb-16"
          >
            Recent Projects
          </motion.h3>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                title: "Travel Agency Website",
                image: Travel,
                description:
                  "Modern travel booking website with WhatsApp inquiry system and destination showcase.",
                link: "https://trialtravel.netlify.app",
              },
              {
                title: "Iron Plus Gym Website",
                image: Gym,
                description:
                  "Modern gym website showcasing facilities, trainer profiles, and membership plans with a responsive design.",
                link: "https://ironplusgym.netlify.app",
              },
              {
                title: "Brew Haven Cafe Website",
                image: Cafe,
                description:
                  "Interactive cafe website featuring dynamic menu, table reservations, and a cozy, user-friendly interface.",
                link: "https://trialcafewebsite.netlify.app",
              },
            ].map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="group rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-500"
              >
                <div className="h-56 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  />
                </div>

                <div className="p-8 bg-white text-left">
                  <h4 className="text-xl font-semibold mb-3">
                    {project.title}
                  </h4>

                  <p className="text-gray-600 text-sm mb-4">
                    {project.description}
                  </p>

                  {/* <button className="text-indigo-600 font-semibold flex items-center gap-2 group-hover:gap-4 transition-all">
                    View Case Study
                    <FaArrowRight />
                  </button> */}
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-600 font-semibold flex items-center gap-2 group-hover:gap-4 transition-all"
                  >
                    Visit Website
                    <FaArrowRight />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CONTACT CTA ================= */}
      <section id="contact" className="relative py-28 px-6 overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-indigo-700 to-purple-700 -z-10"></div>

        {/* Glow Effect */}
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-indigo-400 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-purple-400 rounded-full blur-3xl opacity-30"></div>

        <div className="max-w-4xl mx-auto text-center text-white">
          <motion.h3
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight"
          >
            Let’s Build a Website <br /> That Grows Your Business 🚀
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="text-lg md:text-xl text-indigo-100 mb-10"
          >
            I help businesses get more bookings, more leads, and more trust
            online. Let’s start today.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="flex flex-wrap justify-center gap-6"
          >
            {/* WhatsApp Button */}
            <a
              href="https://wa.me/919876543210?text=Hi%20Irfan,%20I%20want%20a%20website"
              target="_blank"
              className="bg-white text-indigo-700 px-8 py-4 rounded-xl font-semibold shadow-xl hover:scale-105 hover:shadow-2xl transition duration-300"
            >
              Chat on WhatsApp
            </a>

            {/* Email Button */}
            <a
              href="mailto:ansarisikkim5@gmail.com?subject=Project%20Inquiry&body=Hi%20Irfan,%20I%20want%20to%20build%20a%20website."
              className="border border-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-indigo-700 transition duration-300"
            >
              Send an Email
            </a>
          </motion.div>

          {/* Small Trust Line */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-8 text-sm text-indigo-200"
          >
            ⚡ Fast Response • ⚡ Affordable Pricing • ⚡ Free Consultation
          </motion.p>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="relative bg-gray-950 text-gray-300 pt-20 pb-10 px-6 overflow-hidden">
        {/* Background Glow */}
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-indigo-600 opacity-20 blur-3xl rounded-full"></div>
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-purple-600 opacity-20 blur-3xl rounded-full"></div>

        <div className="relative max-w-6xl mx-auto grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <h4 className="text-3xl font-extrabold text-white mb-4">
              Irfan.dev
            </h4>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              I build modern, fast and high-converting websites that help
              businesses grow and get more bookings.
            </p>

            <p className="text-indigo-400 text-sm font-medium">
              🚀 Available for freelance projects
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-6 text-lg">
              Quick Links
            </h4>

            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="#services"
                  className="hover:text-indigo-400 transition duration-300"
                >
                  → Services
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="hover:text-indigo-400 transition duration-300"
                >
                  → Projects
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-indigo-400 transition duration-300"
                >
                  → Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white mb-6 text-lg">Contact</h4>

            <p className="flex items-center gap-3 text-sm mb-4 text-gray-400">
              <FaEnvelope className="text-indigo-400" />
              ansarisikkim5@gmail.com
            </p>

            <a
              href="https://wa.me/918392092388?text=Hi%20Irfan,%20I%20want%20a%20website"
              target="_blank"
              className="inline-flex items-center gap-2 bg-indigo-600 px-6 py-3 rounded-xl text-white font-semibold shadow-lg hover:bg-indigo-500 hover:scale-105 transition duration-300"
            >
              <FaWhatsapp size={16} />
              Chat on WhatsApp
            </a>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="relative text-center text-gray-500 text-sm mt-16 border-t border-gray-800 pt-6">
          © {new Date().getFullYear()} Irfan Ansari. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
