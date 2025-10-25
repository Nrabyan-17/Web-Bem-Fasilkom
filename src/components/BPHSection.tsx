import { motion } from "motion/react";
import { Eye, MessageSquare, HandshakeIcon, Settings, FileText, CheckCircle2 } from "lucide-react";
import ketuaUmumImg from "../assets/BPH-01.png";
import wakilKetuaImg from "../assets/BPH-02.png";
import sekretarisUmum1Img from "../assets/BPH-03.png";
import sekretarisUmum2Img from "../assets/BPH-04.png"; 
import bendaharaUmum1Img from "../assets/BPH-05.png"; 
import bendaharaUmum2Img from "../assets/BPH-06.png";

export function BPHSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="mb-12"
    >
      <h3 className="text-blue-500 text-center mb-8" style={{ fontSize: "24px", fontWeight: 700 }}>
        Badan Pengurus Harian
      </h3>

      {/* BPH Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {/* Ketua Umum */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
        >
          <div className="relative h-80 bg-gradient-to-br from-gray-700 to-gray-800 overflow-hidden">
            <img 
              src={ketuaUmumImg} 
              alt="Ketua Umum - Faiza Akmal Zaidaan" 
              className="w-full h-full object-cover object-[center_35%]"
            />
          </div>
          <div className="p-6 text-center">
            <p className="text-orange-500 mb-2" style={{ fontSize: "14px", fontWeight: 600 }}>
              KETUA UMUM
            </p>
            <p className="text-white" style={{ fontSize: "16px", fontWeight: 700 }}>
              Faiza Akmal Zaidaan
            </p>
          </div>
        </motion.div>

        {/* Wakil Ketua Umum */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
        >
          <div className="relative h-80 bg-gradient-to-br from-gray-700 to-gray-800 overflow-hidden">
            <img 
              src={wakilKetuaImg} 
              alt="Wakil Ketua Umum - Nashruddin Nur Fadilah" 
              className="w-full h-full object-cover object-[center_35%]"
            />
          </div>
          <div className="p-6 text-center">
            <p className="text-orange-500 mb-2" style={{ fontSize: "14px", fontWeight: 600 }}>
              WAKIL KETUA UMUM
            </p>
            <p className="text-white" style={{ fontSize: "16px", fontWeight: 700 }}>
              Nashruddin Nur Fadilah
            </p>
          </div>
        </motion.div>

        {/* Sekretaris Umum 1 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
        >
          <div className="relative h-80 bg-gradient-to-br from-gray-700 to-gray-800 overflow-hidden">
            <img 
              src={sekretarisUmum1Img} 
              alt="Sekretaris Umum 1 - Jacinda Ardina Gestyaki" 
              className="w-full h-full object-cover object-[center_35%]"
            />
          </div>
          <div className="p-6 text-center">
            <p className="text-orange-500 mb-2" style={{ fontSize: "14px", fontWeight: 600 }}>
              SEKRETARIS UMUM 1
            </p>
            <p className="text-white" style={{ fontSize: "16px", fontWeight: 700 }}>
              Jacinda Ardina Gestyaki
            </p>
          </div>
        </motion.div>

        {/* Sekretaris Umum 2 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
        >
          <div className="relative h-80 bg-gradient-to-br from-gray-700 to-gray-800 overflow-hidden">
            <img 
              src={sekretarisUmum2Img} 
              alt="Sekretaris Umum 2 - Shafa Sabrina Almas" 
              className="w-full h-full object-cover object-[center_35%]"
            />
          </div>
          <div className="p-6 text-center">
            <p className="text-orange-500 mb-2" style={{ fontSize: "14px", fontWeight: 600 }}>
              SEKRETARIS UMUM 2
            </p>
            <p className="text-white" style={{ fontSize: "16px", fontWeight: 700 }}>
              Shafa Sabrina Almas
            </p>
          </div>
        </motion.div>

        {/* Bendahara Umum 1 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
        >
          <div className="relative h-80 bg-gradient-to-br from-gray-700 to-gray-800 overflow-hidden">
            <img 
              src={bendaharaUmum1Img} 
              alt="Bendahara Umum 1 - Amriza Saskirana I.H.P" 
              className="w-full h-full object-cover object-[center_35%]"
            />
          </div>
          <div className="p-6 text-center">
            <p className="text-orange-500 mb-2" style={{ fontSize: "14px", fontWeight: 600 }}>
              BENDAHARA UMUM 1
            </p>
            <p className="text-white" style={{ fontSize: "16px", fontWeight: 700 }}>
              Amriza Saskirana I.H.P
            </p>
          </div>
        </motion.div>

        {/* Bendahara Umum 2 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
        >
          <div className="relative h-80 bg-gradient-to-br from-gray-700 to-gray-800 overflow-hidden">
            <img 
              src={bendaharaUmum2Img} 
              alt="Bendahara Umum 2 - Belinda Ingridina" 
              className="w-full h-full object-cover object-[center_35%]"
            />
          </div>
          <div className="p-6 text-center">
            <p className="text-orange-500 mb-2" style={{ fontSize: "14px", fontWeight: 600 }}>
              BENDAHARA UMUM 2
            </p>
            <p className="text-white" style={{ fontSize: "16px", fontWeight: 700 }}>
              Belinda Ingridina
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
        className="mt-12"
      >
        <div className="text-center mb-8">
          <h4 className="text-blue-500 mb-2" style={{ fontSize: "20px", fontWeight: 700 }}>
            Tugas Pokok & Fungsi
          </h4>
          <p className="text-gray-600" style={{ fontSize: "14px" }}>
            Tanggung jawab utama Badan Pengurus Harian
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Monitoring */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="group bg-white border-2 border-orange-100 hover:border-orange-500 rounded-xl p-6 hover:shadow-xl transition-all duration-300"
          >
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Eye className="w-6 h-6 text-white" />
              </div>
              <div>
                <h5 className="text-gray-800 mb-2" style={{ fontSize: "16px", fontWeight: 700 }}>
                  Monitoring
                </h5>
                <p className="text-gray-600" style={{ fontSize: "13px", lineHeight: "1.6" }}>
                  Mengawasi dan memantau seluruh kegiatan organisasi
                </p>
              </div>
            </div>
          </motion.div>

          {/* Kontrol */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="group bg-white border-2 border-blue-100 hover:border-blue-500 rounded-xl p-6 hover:shadow-xl transition-all duration-300"
          >
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <CheckCircle2 className="w-6 h-6 text-white" />
              </div>
              <div>
                <h5 className="text-gray-800 mb-2" style={{ fontSize: "16px", fontWeight: 700 }}>
                  Kontrol
                </h5>
                <p className="text-gray-600" style={{ fontSize: "13px", lineHeight: "1.6" }}>
                  Mengendalikan jalannya program kerja organisasi
                </p>
              </div>
            </div>
          </motion.div>

          {/* Sosialisasi */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="group bg-white border-2 border-purple-100 hover:border-purple-500 rounded-xl p-6 hover:shadow-xl transition-all duration-300"
          >
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <MessageSquare className="w-6 h-6 text-white" />
              </div>
              <div>
                <h5 className="text-gray-800 mb-2" style={{ fontSize: "16px", fontWeight: 700 }}>
                  Sosialisasi
                </h5>
                <p className="text-gray-600" style={{ fontSize: "13px", lineHeight: "1.6" }}>
                  Menyampaikan informasi kepada mahasiswa
                </p>
              </div>
            </div>
          </motion.div>

          {/* Pelayanan */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="group bg-white border-2 border-green-100 hover:border-green-500 rounded-xl p-6 hover:shadow-xl transition-all duration-300"
          >
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <HandshakeIcon className="w-6 h-6 text-white" />
              </div>
              <div>
                <h5 className="text-gray-800 mb-2" style={{ fontSize: "16px", fontWeight: 700 }}>
                  Pelayanan
                </h5>
                <p className="text-gray-600" style={{ fontSize: "13px", lineHeight: "1.6" }}>
                  Memberikan layanan terbaik kepada mahasiswa
                </p>
              </div>
            </div>
          </motion.div>

          {/* Sistem Manajerial */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="group bg-white border-2 border-red-100 hover:border-red-500 rounded-xl p-6 hover:shadow-xl transition-all duration-300"
          >
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-red-400 to-red-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Settings className="w-6 h-6 text-white" />
              </div>
              <div>
                <h5 className="text-gray-800 mb-2" style={{ fontSize: "16px", fontWeight: 700 }}>
                  Sistem Manajerial
                </h5>
                <p className="text-gray-600" style={{ fontSize: "13px", lineHeight: "1.6" }}>
                  Mengatur manajemen dan struktur organisasi
                </p>
              </div>
            </div>
          </motion.div>

          {/* Administrasi */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="group bg-white border-2 border-yellow-100 hover:border-yellow-500 rounded-xl p-6 hover:shadow-xl transition-all duration-300"
          >
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <div>
                <h5 className="text-gray-800 mb-2" style={{ fontSize: "16px", fontWeight: 700 }}>
                  Administrasi
                </h5>
                <p className="text-gray-600" style={{ fontSize: "13px", lineHeight: "1.6" }}>
                  Mengelola administrasi pemerintahan BEM
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}
