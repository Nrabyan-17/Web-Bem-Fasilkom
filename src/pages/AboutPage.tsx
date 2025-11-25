import { motion } from "motion/react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Handshake, Users, BookOpen, TrendingUp, Lightbulb, Target, ArrowRight, Phone, Mail, Instagram, Facebook, Linkedin, Music } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Link } from "react-router-dom";

import maknaLogoImg from "../assets/makna.png";
import strukturOrganisasiImg from "../assets/struktur.png";
import fotkep from "../assets/berita/fotkep.jpeg";

export function AboutPage() {
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
      link: "https://www.linkedin.com/company/bem-fakultas-ilmu-komputer-upn-veteran-jawa-timur/",
    },
  ];

  const functions = [
    {
      icon: Handshake,
      title: "Pelayanan",
      description: "Khususnya dibidang Advokasi dan Kesejahteraan mahasiswa.",
      color: "text-green-600",
      bgColor: "bg-yellow-50",
    },
    {
      icon: Users,
      title: "Pengembangan",
      description: "Dalam mengembangkan soft skill serta minat mahasiswa",
      color: "text-blue-600",
      bgColor: "bg-yellow-50",
    },
    {
      icon: BookOpen,
      title: "Pengabdian",
      description: "Dalam mengamalkan salah satu Tri Dharma Perguruan Tinggi.",
      color: "text-orange-600",
      bgColor: "bg-yellow-50",
    },
    {
      icon: TrendingUp,
      title: "Pergerakan",
      description: "Yang mewadahi mahasiswa untuk bertindak dalam mengawal isu yang beredar.",
      color: "text-blue-500",
      bgColor: "bg-yellow-50",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Header Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-yellow-50 to-orange-100 opacity-60"></div>
        <div className="absolute inset-0">
          <svg className="w-full h-full" viewBox="0 0 1000 400" preserveAspectRatio="none">
            <path
              d="M0,200 Q250,100 500,200 T1000,200 L1000,400 L0,400 Z"
              fill="rgba(251, 146, 60, 0.1)"
            />
            <path
              d="M0,250 Q250,150 500,250 T1000,250 L1000,400 L0,400 Z"
              fill="rgba(251, 191, 36, 0.1)"
            />
          </svg>
        </div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-gray-900 mb-4" style={{ fontSize: "42px", fontWeight: 700 }}>
              TENTANG BEM FASILKOM
            </h1>
            <h2 className="text-gray-900 mb-6" style={{ fontSize: "42px", fontWeight: 700 }}>
              UPN "Veteran"Jawa Timur 2025
            </h2>
            <p className="text-gray-500 max-w-3xl mx-auto" style={{ fontSize: "16px" }}>
              Mengenal lebih dalam tentang Badan Eksekutif Mahasiswa Fakultas Ilmu Komputer UPN
              "Veteran" Jawa Timur dan perjalanan kami melayani mahasiswa
            </p>
          </motion.div>
        </div>
      </section>

      {/* What is BEM Section */}
      <section className="py-16 px-4 bg-orange-50">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block">
              <h2 className="text-blue-600 mb-2" style={{ fontSize: "32px", fontWeight: 700 }}>
                APA ITU BEM FASILKOM UPNVJT?
              </h2>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="h-1 bg-blue-600 mb-4"
              />
            </div>
            <p className="text-gray-900 mb-12 max-w-3xl" style={{ fontSize: "16px" }}>
              BEM FASILKOM UPNVJT merupakan Badan Eksekutif Mahasiswa yang memiliki 4 fungsi utama
              dalam membantu mahasiswa, khususnya di FASILKOM UPNVJT dalam berproses, diantaranya:
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {/* Function Cards */}
            <div className="space-y-6">
              {functions.slice(0, 2).map((func, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className={`${func.bgColor} rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300`}
                >
                  <div className="flex flex-col items-center text-center">
                    <func.icon className={`w-16 h-16 mb-4 ${func.color}`} strokeWidth={1.5} />
                    <h3 className={`${func.color} mb-3`} style={{ fontSize: "20px", fontWeight: 700 }}>
                      {func.title}
                    </h3>
                    <p className="text-gray-600" style={{ fontSize: "14px" }}>
                      {func.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="space-y-6">
              {functions.slice(2).map((func, index) => (
                <motion.div
                  key={index + 2}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: (index + 2) * 0.1, duration: 0.5 }}
                  className={`${func.bgColor} rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300`}
                >
                  <div className="flex flex-col items-center text-center">
                    <func.icon className={`w-16 h-16 mb-4 ${func.color}`} strokeWidth={1.5} />
                    <h3 className={`${func.color} mb-3`} style={{ fontSize: "20px", fontWeight: 700 }}>
                      {func.title}
                    </h3>
                    <p className="text-gray-600" style={{ fontSize: "14px" }}>
                      {func.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-white to-orange-50">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-block">
              <h2 className="text-orange-500 mb-2" style={{ fontSize: "32px", fontWeight: 700 }}>
                TENTANG KAMI
              </h2>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="h-1 bg-orange-500 mb-4"
              />
            </div>
            <p className="text-gray-500 max-w-3xl mx-auto" style={{ fontSize: "16px" }}>
              Kontribusi kami dalam membangun fakultas yang lebih baik melalui kepemimpinan dan
              pelayanan.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src={fotkep}
                  alt="BEM Fasilkom Team"
                  className="w-full h-auto"
                />
              </div>
            </motion.div>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-gray-700 leading-relaxed" style={{ fontSize: "16px" }}>
                BEM Fasilkom UPN "Veteran" Jawa Timur, sebagai garda depan gerakan mahasiswa,
                memiliki peran strategis dalam mewadahi aspirasi, membidik perubahan progresif,
                serta menjadi wadah yang HEBAT dalam menyelesaikan kegelisahan mahasiswa dan
                membangun lingkungan akademik-sosial yang kritis. BEM Fasilkom bertujuan sebagai
                penggerak utama perubahan dan katalisator bagi di berbagai tingkatan, haruslah
                bersifat Transformasional, Jujur, Amanah, Komunikatif Aktif, dan Produktif
                (TJAKKP)
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-block">
              <h2 className="text-orange-500 mb-2" style={{ fontSize: "36px", fontWeight: 700 }}>
                VISI <span className="text-orange-500">&</span> MISI
              </h2>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="h-1 bg-orange-500 mb-4"
              />
            </div>
            <p className="text-gray-600 max-w-2xl mx-auto" style={{ fontSize: "16px" }}>
              Komitmen kami dalam membangun fakultas yang lebih baik melalui kepemimpinan dan pelayanan.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Visi Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="bg-yellow-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex justify-center mb-6">
                <div className="bg-yellow-100 p-6 rounded-full">
                  <Lightbulb className="w-20 h-20 text-yellow-500" strokeWidth={1.5} />
                </div>
              </div>
              <h3 className="text-blue-600 text-center mb-6" style={{ fontSize: "28px", fontWeight: 700 }}>
                Visi
              </h3>
              <p className="text-gray-700 leading-relaxed" style={{ fontSize: "15px" }}>
                Mewujudkan Badan Eksekutif Mahasiswa Fakultas Ilmu Komputer yang progresif dan kolaboratif dalam membangun mahasiswa yang bersaing di era digital dengan berlandaskan Tri Dharma Perguruan Tinggi.
              </p>
            </motion.div>

            {/* Misi Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="bg-yellow-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex justify-center mb-6">
                <div className="bg-yellow-100 p-6 rounded-full">
                  <Target className="w-20 h-20 text-orange-500" strokeWidth={1.5} />
                </div>
              </div>
              <h3 className="text-orange-500 text-center mb-6" style={{ fontSize: "28px", fontWeight: 700 }}>
                Misi
              </h3>
              <ul className="space-y-3 text-gray-700" style={{ fontSize: "15px" }}>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2 flex-shrink-0">•</span>
                  <span>Mendorong perkembangan mahasiswa yang progresif dengan menerapkan teknologi dan keilmuan di bidang komputer untuk memberdayakan mahasiswa dalam menciptakan solusi inovatif bagi permasalahan sosial dan industri.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2 flex-shrink-0">•</span>
                  <span>Membangun budaya kolaboratif dengan mahasiswa, organisasi, dan lembaga eksternal untuk menciptakan lingkungan yang suportif dan inovatif dalam pengembangan potensi mahasiswa.</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Organizational Structure Preview Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-orange-50 to-white">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-block">
              <h2 className="text-orange-500 mb-2" style={{ fontSize: "36px", fontWeight: 700 }}>
                STRUKTUR ORGANISASI
              </h2>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="h-1 bg-orange-500 mb-4"
              />
            </div>
            <p className="text-gray-600 max-w-2xl mx-auto" style={{ fontSize: "16px" }}>
              Pusat informasi dan layanan terkait dari BEM Fakultas Ilmu Komputer untuk seluruh Keluarga Mahasiswa Fasilkom
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="flex justify-center mb-8">
              <img
                src={strukturOrganisasiImg}
                alt="Struktur Organisasi BEM Fasilkom UPNVJT"
                className="w-full max-w-4xl h-auto opacity-90"
              />
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex justify-center"
            >
              <Link to="/struktur-organisasi">
                <Button
                  className="bg-orange-500 hover:bg-orange-600 text-white px-10 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  Selengkapnya
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Logo Meaning Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <div className="inline-block">
              <h2 className="text-orange-500 mb-2" style={{ fontSize: "36px", fontWeight: 700 }}>
                MAKNA LOGO
              </h2>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="h-1 bg-orange-500 mb-4"
              />
            </div>
            <p className="text-gray-600 max-w-3xl mx-auto" style={{ fontSize: "16px" }}>
              Setiap elemen dalam logo kami memiliki filosofi dan makna yang mendalam, melambangkan harapan, semangat, dan inovasi baru dalam kepemimpinan BEM Fasilkom
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
              <div className="mb-8 text-center">
                <p className="text-gray-700 leading-relaxed max-w-3xl mx-auto" style={{ fontSize: "16px", lineHeight: "1.8" }}>
                  
                </p>
              </div>

              <div className="flex justify-center">
                <img
                  src={maknaLogoImg}
                  alt="Makna Logo BEM Fasilkom UPNVJT"
                  className="w-full max-w-5xl h-auto"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Hubungi Kami Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-orange-50 to-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
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
              whileInView={{ width: "120px" }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="h-1 bg-orange-500 mx-auto mb-6"
            />
            <p className="max-w-3xl mx-auto text-gray-600" style={{ fontSize: "15px" }}>
              Jangan ragu untuk menghubungi kami jika anda memiliki pertanyaan, saran, atau ingin berkolaborasi dengan BEM Fasilkom 2025
            </p>
          </motion.div>
            {/* Contact Methods */}
          <section className="py-12">
            <div className="container mx-auto px-4 lg:px-8">
              <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {contactMethods.map((method, index) => (
                  <motion.a
                    key={index}
                    href={method.link}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
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
      <section className="py-16 px-4 bg-gradient-to-b from-white to-orange-50">
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
