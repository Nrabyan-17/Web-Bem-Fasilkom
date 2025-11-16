import { motion } from "motion/react";
import { Users, Film, Camera, Palette, Code } from "lucide-react";
import { Button } from "./ui/button";
import kepalaBagianMultimediaImg from "../assets/MULMED-01.jpg";
import anggotaMultimedia1Img from "../assets/MULMED-02.jpg";
import anggotaMultimedia2Img from "../assets/MULMED-03.jpg";
import anggotaMultimedia3Img from "../assets/MULMED-04.jpg";
import anggotaMultimedia4Img from "../assets/MULMED-05.jpg";
import anggotaMultimedia5Img from "../assets/MULMED-06.jpg";
import anggotaMultimedia6Img from "../assets/MULMED-07.jpg";
import anggotaMultimedia7Img from "../assets/MULMED-08.jpg";

export function MultimediaSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="mb-16"
    >
      <h3 className="text-blue-500 text-center mb-8" style={{ fontSize: "24px", fontWeight: 700 }}>
        Bagian Multimedia
      </h3>

      {/* Team Cards Grid - 8 Members */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {/* Kepala Bagian */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="bg-gradient-to-br from-purple-800 to-purple-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
        >
          <div className="relative h-72 bg-gradient-to-br from-purple-700 to-purple-800 overflow-hidden">
            <img 
              src={kepalaBagianMultimediaImg} 
              alt="Kepala Bagian Multimedia - Rachmananta Ibnu Fajar" 
              className="w-full h-full object-cover object-[center_45%]"
            />
          </div>
          <div className="p-4 text-center">
            <p className="text-purple-300 mb-1" style={{ fontSize: "12px", fontWeight: 600 }}>
              Program Studi
            </p>
            <p className="text-white" style={{ fontSize: "14px", fontWeight: 700 }}>
              Informatika'22
            </p>
          </div>
        </motion.div>

        {/* Anggota 1 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="bg-gradient-to-br from-purple-800 to-purple-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
        >
          <div className="relative h-72 bg-gradient-to-br from-purple-700 to-purple-800 overflow-hidden">
            <img 
              src={anggotaMultimedia1Img} 
              alt="Anggota Bagian Multimedia - Adi Bayu Saputra" 
              className="w-full h-full object-cover object-[center_45%]"
            />
          </div>
          <div className="p-4 text-center">
            <p className="text-purple-300 mb-1" style={{ fontSize: "12px", fontWeight: 600 }}>
              Program Studi
            </p>
            <p className="text-white" style={{ fontSize: "14px", fontWeight: 700 }}>
              Informatika'23
            </p>
          </div>
        </motion.div>

        {/* Anggota 2 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="bg-gradient-to-br from-purple-800 to-purple-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
        >
          <div className="relative h-72 bg-gradient-to-br from-purple-700 to-purple-800 overflow-hidden">
            <img 
              src={anggotaMultimedia2Img} 
              alt="Anggota Bagian Multimedia - Febbyna Aulia Putri" 
              className="w-full h-full object-cover object-[center_45%]"
            />
          </div>
          <div className="p-4 text-center">
            <p className="text-purple-300 mb-1" style={{ fontSize: "12px", fontWeight: 600 }}>
              Program Studi
            </p>
            <p className="text-white" style={{ fontSize: "14px", fontWeight: 700 }}>
              Informatika'23
            </p>
          </div>
        </motion.div>

        {/* Anggota 3 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="bg-gradient-to-br from-purple-800 to-purple-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
        >
          <div className="relative h-72 bg-gradient-to-br from-purple-700 to-purple-800 overflow-hidden">
            <img 
              src={anggotaMultimedia3Img} 
              alt="Anggota Bagian Multimedia - Marsyanda Firlyandita" 
              className="w-full h-full object-cover object-[center_45%]"
            />
          </div>
          <div className="p-4 text-center">
            <p className="text-purple-300 mb-1" style={{ fontSize: "12px", fontWeight: 600 }}>
              Program Studi
            </p>
            <p className="text-white" style={{ fontSize: "14px", fontWeight: 700 }}>
              Sistem Informasi'23
            </p>
          </div>
        </motion.div>

        {/* Anggota 4 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="bg-gradient-to-br from-purple-800 to-purple-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
        >
          <div className="relative h-72 bg-gradient-to-br from-purple-700 to-purple-800 overflow-hidden">
            <img 
              src={anggotaMultimedia4Img} 
              alt="Anggota Bagian Multimedia - Disain Ariesta Perdana Raharja" 
              className="w-full h-full object-cover object-[center_45%]"
            />
          </div>
          <div className="p-4 text-center">
            <p className="text-purple-300 mb-1" style={{ fontSize: "12px", fontWeight: 600 }}>
              Program Studi
            </p>
            <p className="text-white" style={{ fontSize: "14px", fontWeight: 700 }}>
              Informatika'24
            </p>
          </div>
        </motion.div>

        {/* Anggota 5 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="bg-gradient-to-br from-purple-800 to-purple-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
        >
          <div className="relative h-72 bg-gradient-to-br from-purple-700 to-purple-800 overflow-hidden">
            <img 
              src={anggotaMultimedia5Img} 
              alt="Anggota Bagian Multimedia - Ariel Ardinnansyah" 
              className="w-full h-full object-cover object-[center_45%]"
            />
          </div>
          <div className="p-4 text-center">
            <p className="text-purple-300 mb-1" style={{ fontSize: "12px", fontWeight: 600 }}>
              Program Studi
            </p>
            <p className="text-white" style={{ fontSize: "14px", fontWeight: 700 }}>
              Sistem Informasi'24
            </p>
          </div>
        </motion.div>

        {/* Anggota 6 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7 }}
          className="bg-gradient-to-br from-purple-800 to-purple-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
        >
          <div className="relative h-72 bg-gradient-to-br from-purple-700 to-purple-800 overflow-hidden">
            <img 
              src={anggotaMultimedia6Img} 
              alt="Anggota Bagian Multimedia - Muhammad Jazuli" 
              className="w-full h-full object-cover object-[center_45%]"
            />
          </div>
          <div className="p-4 text-center">
            <p className="text-purple-300 mb-1" style={{ fontSize: "12px", fontWeight: 600 }}>
              Program Studi
            </p>
            <p className="text-white" style={{ fontSize: "14px", fontWeight: 700 }}>
              Sains data'24
            </p>
          </div>
        </motion.div>

        {/* Anggota 7 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="bg-gradient-to-br from-purple-800 to-purple-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
        >
          <div className="relative h-72 bg-gradient-to-br from-purple-700 to-purple-800 overflow-hidden">
            <img 
              src={anggotaMultimedia7Img} 
              alt="Anggota Bagian Multimedia - Muhammad Ihsanul Fikri" 
              className="w-full h-full object-cover object-[center_45%]"
            />
          </div>
          <div className="p-4 text-center">
            <p className="text-purple-300 mb-1" style={{ fontSize: "12px", fontWeight: 600 }}>
              Program Studi
            </p>
            <p className="text-white" style={{ fontSize: "14px", fontWeight: 700 }}>
              Sistem Informasi'24
            </p>
          </div>
        </motion.div>
      </div>

      {/* Tupoksi & Program Kerja */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
        {/* Tupoksi */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-6 border-2 border-purple-200"
        >
          <h4 className="text-purple-600 text-center mb-4" style={{ fontSize: "18px", fontWeight: 700 }}>
            Tugas Pokok & Fungsi
          </h4>
          <p className="text-gray-700 text-center" style={{ fontSize: "14px", lineHeight: "1.8" }}>
            Mengelola media sosial BEM FIK UPNVJ Veteran Jawa Timur. Membuat konten untuk kehidupan perkuliahan dan kemahasiswaan yang menarik, mempublikasikan setiap program kerja dari masing-masing departemen.
          </p>
        </motion.div>

        {/* Program Kerja */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-6 border-2 border-orange-200 flex flex-col items-center justify-center"
        >
          <h4 className="text-orange-600 text-center mb-4" style={{ fontSize: "18px", fontWeight: 700 }}>
            Program Kerja
          </h4>
          <Button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full shadow-lg transition-all duration-300 hover:scale-105">
            Designverse
          </Button>
        </motion.div>
      </div>
    </motion.div>
  );
}
