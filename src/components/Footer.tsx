import { motion } from "motion/react";
import { Link } from "react-router-dom";
import {
  Instagram,
  Facebook,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import logoImage  from "../assets/bem.png";



export function Footer() {
  const navigationLinks = [
    { name: "Beranda", href: "/" },
    { name: "Tentang Kami", href: "/#tentang" },
    { name: "Program Kerja", href: "/#proker" },
    { name: "Berita", href: "/berita" },
    { name: "Struktur Organisasi", href: "/#struktur" },
    { name: "Hubungi Kami", href: "/hubungi-kami" },
  ];

  const socialLinks = [
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    
  ];

  return (
    <footer
      id="hubungi"
      className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white pt-16 pb-8"
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
          {/* Logo and Social Media */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="flex flex-col items-start gap-4">
              <div className="flex items-center gap-4">
                <img
                  src={logoImage}
                  alt="BEM Fasilkom Logo"
                  className="h-24 w-24 object-contain"
                />
                <div>
                  <p
                    className="text-orange-400"
                    style={{ fontSize: "18px", fontWeight: 700 }}
                  >
                    BEM FASILKOM UPNVJT
                  </p>
                  <p
                    className="text-blue-200"
                    style={{ fontSize: "14px", fontWeight: 600 }}
                  >
                    ASTRANOVA
                  </p>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-lg bg-blue-700 hover:bg-orange-500 flex items-center justify-center transition-colors duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Navigation Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3
              className="text-white mb-6"
              style={{ fontSize: "20px", fontWeight: 700 }}
            >
              Navigasi
            </h3>
            <ul className="space-y-3">
              {navigationLinks.map((link, index) =>
                link.href.startsWith("/#") ? (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-blue-200 hover:text-orange-400 transition-colors duration-200 inline-block"
                      style={{ fontSize: "14px" }}
                    >
                      {link.name}
                    </a>
                  </li>
                ) : (
                  <li key={index}>
                    <Link
                      to={link.href}
                      className="text-blue-200 hover:text-orange-400 transition-colors duration-200 inline-block"
                      style={{ fontSize: "14px" }}
                    >
                      {link.name}
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3
              className="text-white mb-6"
              style={{ fontSize: "20px", fontWeight: 700 }}
            >
              Sekretariat
            </h3>
            <div className="space-y-4">
              <div className="flex gap-3 items-start">
                <MapPin className="h-5 w-5 text-orange-400 flex-shrink-0 mt-1" />
                <div
                  className="text-blue-200"
                  style={{ fontSize: "14px" }}
                >
                  <p style={{ fontWeight: 600 }}>
                    Gedung 901 Santika 11.3
                  </p>
                  <p>Fakultas Ilmu Komputer</p>
                  <p>Jl. Rungkut Madya, Gn. Anyar,</p>
                  <p>Surabaya, Jawa Timur</p>
                </div>
              </div>

              <div className="flex gap-3 items-center">
                <Mail className="h-5 w-5 text-orange-400 flex-shrink-0" />
                <a
                  href="mailto:bemfasilkom@upnjatim.ac.id"
                  className="text-blue-200 hover:text-orange-400 transition-colors"
                  style={{ fontSize: "14px" }}
                >
                  bemfasilkom@upnjatim.ac.id
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-blue-700 my-8" />

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center text-blue-200"
          style={{ fontSize: "14px" }}
        >
          <p>
            2025 BEM FASILKOM UPNVJT. All Rights Reserved |
            <span className="text-orange-400">
              {" "}
              #SatuFasilkomKitakuat
            </span>
          </p>
        </motion.div>
      </div>
    </footer>
  );
}