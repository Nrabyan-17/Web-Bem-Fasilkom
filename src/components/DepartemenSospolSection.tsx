import { motion } from "motion/react";
import { Users } from "lucide-react";
import kepalaHdk from "../assets/SOSPOL-01.png";
import wakilKepalaHdk from "../assets/SOSPOL-02.png";
import sekretarisHdk from "../assets/SOSPOL-03.png";

export function DepartemenSospolSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="mb-16"
    >
      <h3 className="text-blue-500 text-center mb-8" style={{ fontSize: "24px", fontWeight: 700 }}>
        Departemen Sosial dan Politik
      </h3>

      {/* Team Cards Grid - 3 Members */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">

        {/* Wakil Kepala Departemen */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="bg-gradient-to-br from-blue-800 to-blue-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
        >
          <div className="relative h-80 bg-gradient-to-br from-blue-700 to-blue-800 flex items-center justify-center">
            <img 
              src={wakilKepalaHdk} 
              alt="Wakil Kepala Hdk - Rahma Allysia Putri" 
              className="w-full h-full object-cover object-[center_35%]"
            />
          </div>
          <div className="p-6 text-center">
            <p className="text-blue-300 mb-2" style={{ fontSize: "14px", fontWeight: 600 }}>
              PROGRAM STUDI
            </p>
            <p className="text-white" style={{ fontSize: "16px", fontWeight: 700 }}>
              Sains Data'22
            </p>
          </div>
        </motion.div>

        {/* Kepala Departemen */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="bg-gradient-to-br from-blue-800 to-blue-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
        >
          <div className="relative h-80 bg-gradient-to-br from-blue-700 to-blue-800 flex items-center justify-center">
            <img 
              src={kepalaHdk} 
              alt="Wakil Kepala HDK - Jumadil Prima Dani" 
              className="w-full h-full object-cover object-[center_35%]"
            />
          </div>
          <div className="p-6 text-center">
            <p className="text-blue-300 mb-2" style={{ fontSize: "14px", fontWeight: 600 }}>
              PROGRAM STUDI
            </p>
            <p className="text-white" style={{ fontSize: "16px", fontWeight: 700 }}>
              Sistem Informasi'22
            </p>
          </div>
        </motion.div>

        {/* Sekretaris Departemen */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="bg-gradient-to-br from-blue-800 to-blue-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
        >
          <div className="relative h-80 bg-gradient-to-br from-blue-700 to-blue-800 flex items-center justify-center">
            <img 
              src={sekretarisHdk} 
              alt="Wakil Kepala Biro - Reno Naufal" 
              className="w-full h-full object-cover object-[center_35%]"
            />
          </div>
          <div className="p-6 text-center">
            <p className="text-blue-300 mb-2" style={{ fontSize: "14px", fontWeight: 600 }}>
              PROGRAM STUDI
            </p>
            <p className="text-white" style={{ fontSize: "16px", fontWeight: 700 }}>
              Sistem Informasi'22
            </p>
          </div>
        </motion.div>
      </div>

      {/* Tupoksi Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="bg-gradient-to-r from-orange-400 to-orange-500 rounded-2xl p-6 shadow-lg"
      >
        <h4 className="text-white text-center mb-3" style={{ fontSize: "18px", fontWeight: 700 }}>
          Tugas Pokok & Fungsi
        </h4>
        <p className="text-white text-center" style={{ fontSize: "14px", lineHeight: "1.8" }}>
          Bertanggung jawab untuk melakukan analisis kebijakan, kegiatan dan penanganan isu sosial dan politik serta memberikan rekomendasi kepada organisasi dalam hal posisi atau tindakan yang diambil. Mereka juga dapat terlibat dalam advokasi kebijakan kepada pihak terkait, baik di dalam organisasi sendiri maupun di tingkat eksternal.
        </p>
      </motion.div>
    </motion.div>
  );
}
