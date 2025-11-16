import { motion } from "motion/react";
import { Target, TrendingUp, Megaphone } from "lucide-react";
import kepalaBiroImg from "../assets/MEDFO-01.png";
import wakilKepalaBiroImg from "../assets/MEDFO-02.png";
import sekretarisBiroImg from "../assets/MEDFO-03.png";

export function MediaInformasiSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="mb-16"
    >
      <h3 className="text-blue-500 text-center mb-8" style={{ fontSize: "24px", fontWeight: 700 }}>
        Biro Media dan Informasi
      </h3>

      {/* Team Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">

        {/* Wakil Kepala Biro */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="bg-gradient-to-br from-blue-800 to-blue-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
        >
          <div className="relative h-80 bg-gradient-to-br from-blue-700 to-blue-800 overflow-hidden">
            <img 
              src={wakilKepalaBiroImg} 
              alt="Wakil Kepala Biro - Reno Naufal" 
              className="w-full h-full object-cover object-[center_35%]"
            />
          </div>
          <div className="p-6 text-center">
            <p className="text-blue-300 mb-2" style={{ fontSize: "14px", fontWeight: 600 }}>
              PROGRAM STUDI
            </p>
            <p className="text-white" style={{ fontSize: "16px", fontWeight: 700 }}>
              Informatika'23
            </p>
          </div>
        </motion.div>

        {/* Kepala Biro */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="bg-gradient-to-br from-blue-800 to-blue-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
        >
          <div className="relative h-80 bg-gradient-to-br from-blue-700 to-blue-800 overflow-hidden">
            <img 
              src={kepalaBiroImg} 
              alt="Kepala Biro - Rayhan Gading Andri Purwanto" 
              className="w-full h-full object-cover object-[center_35%]"
            />
          </div>
          <div className="p-6 text-center">
            <p className="text-blue-300 mb-2" style={{ fontSize: "14px", fontWeight: 600 }}>
              PROGRAM STUDI
            </p>
            <p className="text-white" style={{ fontSize: "16px", fontWeight: 700 }}>
              Informatika'22
            </p>
          </div>
        </motion.div>

        {/* Sekretaris Biro */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="bg-gradient-to-br from-blue-800 to-blue-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
        >
          <div className="relative h-80 bg-gradient-to-br from-blue-700 to-blue-800 overflow-hidden">
            <img 
              src={sekretarisBiroImg} 
              alt="Sekretaris Biro - Salma Queena Panditawulan" 
              className="w-full h-full object-cover object-[center_35%]"
            />
          </div>
          <div className="p-6 text-center">
            <p className="text-blue-300 mb-2" style={{ fontSize: "14px", fontWeight: 600 }}>
              Program Studi
            </p>
            <p className="text-white" style={{ fontSize: "16px", fontWeight: 700 }}>
              Sistem Informasi'23
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
        className="mt-8"
      >
        <div className="text-center mb-6">
          <h4 className="text-blue-500 mb-2" style={{ fontSize: "18px", fontWeight: 700 }}>
            Tugas Pokok & Fungsi
          </h4>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Timur */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="group bg-white border-2 border-blue-100 hover:border-blue-500 rounded-xl p-5 hover:shadow-xl transition-all duration-300"
          >
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Target className="w-5 h-5 text-white" />
              </div>
              <div>
                <h5 className="text-gray-800 mb-1" style={{ fontSize: "15px", fontWeight: 700 }}>
                  Timur
                </h5>
                <p className="text-gray-600" style={{ fontSize: "13px", lineHeight: "1.6" }}>
                  Membuat tim kerja media sosial sebagai sarana informasi
                </p>
              </div>
            </div>
          </motion.div>

          {/* Menyelenggarakan */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="group bg-white border-2 border-orange-100 hover:border-orange-500 rounded-xl p-5 hover:shadow-xl transition-all duration-300"
          >
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-orange-400 to-orange-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <TrendingUp className="w-5 h-5 text-white" />
              </div>
              <div>
                <h5 className="text-gray-800 mb-1" style={{ fontSize: "15px", fontWeight: 700 }}>
                  Menyelenggarakan
                </h5>
                <p className="text-gray-600" style={{ fontSize: "13px", lineHeight: "1.6" }}>
                  Pengelolaan dan pengoptimalan media sosial dan perangkat pendukung
                </p>
              </div>
            </div>
          </motion.div>

          {/* Mempublikasikan */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="group bg-white border-2 border-purple-100 hover:border-purple-500 rounded-xl p-5 hover:shadow-xl transition-all duration-300"
          >
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-purple-400 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Megaphone className="w-5 h-5 text-white" />
              </div>
              <div>
                <h5 className="text-gray-800 mb-1" style={{ fontSize: "15px", fontWeight: 700 }}>
                  Mempublikasikan
                </h5>
                <p className="text-gray-600" style={{ fontSize: "13px", lineHeight: "1.6" }}>
                  Setiap program kerja dan masing-masing departemen
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}
