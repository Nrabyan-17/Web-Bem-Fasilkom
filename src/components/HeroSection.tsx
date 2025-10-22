import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { ArrowRight, Circle } from "lucide-react";
import { TypewriterText } from "./TypewriterText";
import { CounterNumber } from "./CounterNumber";
import heroImage from "figma:asset/d72c061ad81bdd13ae052edeeea3a1f4abf0e541.png";

export function HeroSection() {
  return (
    <section id="beranda" className="relative min-h-screen pt-24 pb-16 bg-gradient-to-br from-gray-50 via-orange-50/30 to-blue-50/20 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-orange-200/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="inline-block"
            >
              <TypewriterText
                texts={["#SATUFASILKOMKITAKUAT", "#FASILKOMTHISISWEARE!"]}
                typingSpeed={80}
                deletingSpeed={50}
                delayBetweenTexts={2500}
                className="text-orange-500 tracking-wide"
                style={{ fontSize: "24px", fontWeight: 700 }}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <h1 className="text-gray-900 leading-tight" style={{ fontSize: "48px", fontWeight: 700 }}>
                Selamat datang di
              </h1>
              <h1 className="text-orange-500 leading-tight" style={{ fontSize: "48px", fontWeight: 700 }}>
                BEM FASILKOM
              </h1>
              <h1 className="text-gray-900 leading-tight" style={{ fontSize: "48px", fontWeight: 700 }}>
                UPNVJT 2025
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-gray-600 max-w-xl leading-relaxed"
              style={{ fontSize: "16px" }}
            >
              Mewujudkan BEM Fakultas Ilmu Komputer yang kreatif, solutif, dan kolaboratif terhadap
              organisasi mahasiswa di UPN "Veteran" Jawa Timur yang berlandaskan Tri Dharma Perguruan
              Tinggi.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <Link to="/program-kerja">
                <Button
                  className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  Lihat Program Kerja
                  <Circle className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/tentang-kami">
                <Button
                  variant="outline"
                  className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-6 py-6 rounded-lg transition-all duration-300"
                >
                  Tentang Kami
                </Button>
              </Link>
            </motion.div>

            {/* Statistics Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="grid grid-cols-2 gap-8 pt-8 max-w-md"
            >
              {/* Anggota BEM */}
              <div className="text-center">
                <div className="text-blue-600" style={{ fontSize: "36px", fontWeight: 700 }}>
                  <CounterNumber 
                    end={79} 
                    duration={2500}
                    className="text-blue-600"
                    style={{ fontSize: "36px", fontWeight: 700 }}
                  />
                </div>
                <div className="text-blue-600" style={{ fontSize: "16px", fontWeight: 500 }}>
                  Anggota BEM
                </div>
              </div>

              {/* Program Kerja */}
              <div className="text-center">
                <div className="text-orange-500" style={{ fontSize: "36px", fontWeight: 700 }}>
                  <CounterNumber 
                    end={15} 
                    duration={2000}
                    suffix=" +"
                    className="text-orange-500"
                    style={{ fontSize: "36px", fontWeight: 700 }}
                  />
                </div>
                <div className="text-orange-500" style={{ fontSize: "16px", fontWeight: 500 }}>
                  Program Kerja
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Hero Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              className="relative rounded-3xl overflow-hidden shadow-2xl"
            >
              <img 
                src={heroImage} 
                alt="BEM Fasilkom UPNVJT Building" 
                className="w-full h-auto object-cover"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Floating social badge */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="fixed left-0 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-2 py-8 rounded-r-lg shadow-xl hidden xl:block z-40"
      >
        <div className="flex flex-col gap-4 items-center">
          <Circle className="h-4 w-4" />
          <Circle className="h-4 w-4" />
          <Circle className="h-4 w-4" />
        </div>
      </motion.div>
    </section>
  );
}
