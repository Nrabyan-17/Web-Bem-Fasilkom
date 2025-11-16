import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import logoImage from "../assets/bem.png";

export function AboutSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-orange-50/30 relative overflow-hidden">
      {/* Decorative Curves */}
      <div className="absolute top-0 left-0 w-full h-32 bg-orange-100/20 rounded-b-[100%]" />
      <div className="absolute bottom-0 right-0 w-full h-32 bg-orange-100/20 rounded-t-[100%]" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block">
            <h2 className="text-orange-500 mb-2" style={{ fontSize: "40px", fontWeight: 700 }}>
              TENTANG
            </h2>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="h-1 bg-orange-500"
            />
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <h3 className="text-blue-600" style={{ fontSize: "28px", fontWeight: 700 }}>
              Apa Itu BEM FASILKOM UPNVJT?
            </h3>
            
            <p className="text-gray-700 leading-relaxed" style={{ fontSize: "16px" }}>
              <span style={{ fontWeight: 700 }}>BEM FASILKOM UPNVJT</span> merupakan badan eksekutif
              yang memiliki 4 fungsi utama dalam membantu mahasiswa FASILKOM UPNVJT berproses,
              diantaranya ialah Pelayanan khususnya dibidang Advokasi dan Kesejahteraan Mahasiswa,
              Pengembangan dalam mengembangkan soft skill serta minat bakat Mahasiswa, Pengabdian dalam
              mengamalkan salah satu Tri Dharma Perguruan Tinggi, dan Pergerakan yang mewadahi mahasiswa
              untuk bertindak dalam mengawal isu yang beredar.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <Link to="/tentang-kami" className="cursor-pointer">
                <Button
                  variant="outline"
                  className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-8 py-6 rounded-full transition-all duration-300 cursor-pointer"
                >
                  Selengkapnya
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Content - Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex justify-center"
          >
            <motion.div
              animate={{ 
                rotate: [0, 0, 0, 0],
              }}
              transition={{ 
                duration: 6,
                repeat: Infinity,
                repeatType: "reverse"
              }}
              className="relative"
            >
              <img 
                src={logoImage} 
                alt="BEM FASILKOM Logo" 
                className="w-full max-w-md h-auto drop-shadow-2xl"
              />
              
              {/* Decorative circles */}
              <motion.div
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                }}
                className="absolute inset-0 bg-orange-400/10 rounded-full blur-3xl -z-10"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
