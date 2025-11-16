import { motion } from "motion/react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Phone, Mail, Instagram, Facebook, Linkedin, Music } from "lucide-react";

export function ContactPage() {
  const contactMethods = [
    {
      icon: Phone,
      title: "Telepon",
      info: "+62 812-3456-7890",
      bgColor: "bg-green-500",
      iconBg: "bg-green-100",
      link: "tel:+6281234567890",
    },
    {
      icon: Mail,
      title: "Email",
      info: "bemfasilkom@upnjatim.ac.id",
      bgColor: "bg-red-500",
      iconBg: "bg-red-100",
      link: "mailto:bemfasilkom@upnjatim.ac.id",
    },
  ];

  const socialMedia = [
    {
      icon: Instagram,
      name: "Instagram",
      handle: "@bemfasilkom.upnjatim",
      color: "from-purple-600 to-pink-500",
      link: "https://instagram.com/bemfasilkom.upnjatim",
    },
    {
      icon: Music,
      name: "TikTok",
      handle: "@bemfasilkom_upnvjt",
      color: "from-black to-gray-800",
      link: "https://tiktok.com/@bemfasilkom_upnvjt",
    },
    {
      icon: Facebook,
      name: "Facebook",
      handle: "@Bem Fasilkom Upnjatim",
      color: "from-blue-600 to-blue-700",
      link: "https://facebook.com/bemfasilkom",
    },
    {
      icon: Linkedin,
      name: "Linkedin",
      handle: "@Bem Fasilkom Upnjatim",
      color: "from-blue-700 to-blue-800",
      link: "https://linkedin.com/company/bemfasilkom",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      {/* Header Section */}
      <section className="pt-32 pb-12 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <Badge className="bg-orange-500 text-white border-0 px-6 py-2 mb-4" style={{ fontSize: "14px", fontWeight: 600 }}>
              Narahubung
            </Badge>
            <h1 className="text-orange-500 mb-4" style={{ fontSize: "42px", fontWeight: 700 }}>
              HUBUNGI KAMI
            </h1>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "120px" }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="h-1 bg-orange-500 mx-auto mb-6"
            />
            <p className="max-w-3xl mx-auto text-gray-600" style={{ fontSize: "15px" }}>
              Jangan ragu untuk menghubungi kami jika anda memiliki pertanyaan, saran, atau ingin berkolaborasi dengan BEM Fasilkom 2025
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {contactMethods.map((method, index) => (
              <motion.a
                key={index}
                href={method.link}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="block"
              >
                <Card className="bg-gradient-to-br from-yellow-50 to-orange-50 border-0 shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer h-full">
                  <CardContent className="p-12 flex flex-col items-center text-center">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                      className={`w-32 h-32 rounded-full ${method.bgColor} flex items-center justify-center mb-6 shadow-lg`}
                    >
                      <method.icon className="h-16 w-16 text-white" strokeWidth={2} />
                    </motion.div>
                    <h3 className="text-blue-600 mb-3" style={{ fontSize: "28px", fontWeight: 700 }}>
                      {method.title}
                    </h3>
                    <p className="text-gray-600 group-hover:text-gray-900 transition-colors" style={{ fontSize: "16px" }}>
                      {method.info}
                    </p>
                  </CardContent>
                </Card>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-orange-500 mb-3" style={{ fontSize: "36px", fontWeight: 700 }}>
              MEDIA SOSIAL KAMI
            </h2>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "100px" }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="h-1 bg-orange-500 mx-auto mb-4"
            />
            <p className="max-w-3xl mx-auto text-gray-600" style={{ fontSize: "15px" }}>
              Ikuti media sosial kami untuk mendapatkan update terbaru mengenai kegiatan dan program kerja dari BEM Fasilkom 2025
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {socialMedia.map((social, index) => (
              <motion.a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="block"
              >
                <Card className="bg-gradient-to-br from-yellow-50 to-orange-50 border-0 shadow-md hover:shadow-xl transition-all duration-300 group cursor-pointer h-full">
                  <CardContent className="p-8 flex flex-col items-center text-center">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: -5 }}
                      transition={{ duration: 0.3 }}
                      className={`w-24 h-24 rounded-2xl bg-gradient-to-br ${social.color} flex items-center justify-center mb-4 shadow-lg`}
                    >
                      <social.icon className="h-12 w-12 text-white" strokeWidth={2} />
                    </motion.div>
                    <h3 className="text-blue-600 mb-2" style={{ fontSize: "22px", fontWeight: 700 }}>
                      {social.name}
                    </h3>
                    <p className="text-gray-600" style={{ fontSize: "14px" }}>
                      {social.handle}
                    </p>
                  </CardContent>
                </Card>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-orange-500 mb-3" style={{ fontSize: "36px", fontWeight: 700 }}>
              LOKASI KAMI
            </h2>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "100px" }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="h-1 bg-orange-500 mx-auto mb-4"
            />
            <p className="max-w-3xl mx-auto text-gray-600" style={{ fontSize: "15px" }}>
              Kunjungi sekretariat BEM Fasilkom di kampus UPN "Veteran" Jawa Timur
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-6xl mx-auto"
          >
            <Card className="overflow-hidden shadow-xl border-0">
              <div className="relative w-full h-[500px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15828.69158000597!2d112.77349023725601!3d-7.334471142506275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fab8185713b7%3A0x384fa5c9e0c009e1!2sSekretariat%20BEM%20FIK%20UPN%20%22Veteran%22%20Jawa%20Timur!5e0!3m2!1sid!2sid!4v1762017011124!5m2!1sid!2sid" 
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Lokasi BEM Fasilkom UPNVJT"
                  className="grayscale-[20%]"
                />
              </div>
              <div className="p-6 bg-white">
                <h4 className="text-gray-900 mb-2" style={{ fontSize: "20px", fontWeight: 700 }}>
                  Sekretariat BEM FASILKOM
                </h4>
                <p className="text-gray-600 mb-1" style={{ fontSize: "15px" }}>
                  Gedung 901 Santika 11.3, Fakultas Ilmu Komputer
                </p>
                <p className="text-gray-600" style={{ fontSize: "15px" }}>
                  Jl. Rungkut Madya, Gn. Anyar, Surabaya, Jawa Timur 60294
                </p>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
