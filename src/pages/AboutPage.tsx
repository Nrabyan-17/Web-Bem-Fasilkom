import { motion } from "motion/react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Handshake, Users, BookOpen, TrendingUp, Lightbulb, Target, ArrowRight } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";

import maknaLogoImg from "../assets/makna.png";
import strukturOrganisasiImg from "../assets/struktur.png";


export function AboutPage() {
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
                  src="https://images.unsplash.com/photo-1622016579436-14c1844c99ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwc3R1ZGVudCUyMG9yZ2FuaXphdGlvbiUyMGdyb3VwJTIwcGhvdG98ZW58MXx8fHwxNzYxMTAxMzU1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
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
            className="text-center mb-12"
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

      <Footer />
    </div>
  );
}
