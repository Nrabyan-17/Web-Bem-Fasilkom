import { motion } from "motion/react";
import { Users } from "lucide-react";
import { Button } from "./ui/button";
import kepalaBidangKwu from "../assets/KWU-01.png";
import wakilBidangKwu from "../assets/KWU-02.png";
import sekreBidangKwu from "../assets/KWU-03.png";
import anggotaBidangKwu1 from "../assets/KWU-04.png";
import anggotaBidangKwu2 from "../assets/KWU-05.png";
import anggotaBidangKwu3 from "../assets/KWU-06.png";




export function BidangKewirausahaanSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="mb-16"
    >
      <h3 className="text-blue-500 text-center mb-8" style={{ fontSize: "24px", fontWeight: 700 }}>
        Bidang Kewirausahaan
      </h3>

      {/* Team Cards Grid - 6 Members */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {/* Kepala Bidang */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="bg-gradient-to-br from-blue-800 to-blue-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
        >
          <div className="relative h-80 bg-gradient-to-br from-blue-700 to-blue-800 flex items-center justify-center">
            <img 
              src={kepalaBidangKwu} 
              alt="Anggota Bagian Multimedia - Adi Bayu Saputra" 
              className="w-full h-full object-cover object-[center_35%]"
            />
          </div>
          <div className="p-6 text-center">
            <p className="text-blue-300 mb-2" style={{ fontSize: "14px", fontWeight: 600 }}>
              Program Studi
            </p>
            <p className="text-white" style={{ fontSize: "16px", fontWeight: 700 }}>
              Informatika'23
            </p>
          </div>
        </motion.div>

        {/* Wakil Kepala Bidang */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="bg-gradient-to-br from-blue-800 to-blue-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
        >
          <div className="relative h-80 bg-gradient-to-br from-blue-700 to-blue-800 flex items-center justify-center">
            <img 
              src={wakilBidangKwu} 
              alt="Anggota Bagian Multimedia - Adi Bayu Saputra" 
              className="w-full h-full object-cover object-[center_35%]"
            />
          </div>
          <div className="p-6 text-center">
            <p className="text-blue-300 mb-2" style={{ fontSize: "14px", fontWeight: 600 }}>
              Program Studi
            </p>
            <p className="text-white" style={{ fontSize: "16px", fontWeight: 700 }}>
              Informatika'23
            </p>
          </div>
        </motion.div>

        {/* Sekretaris Bidang */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="bg-gradient-to-br from-blue-800 to-blue-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
        >
          <div className="relative h-80 bg-gradient-to-br from-blue-700 to-blue-800 flex items-center justify-center">
          <img 
              src={sekreBidangKwu} 
              alt="Anggota Bagian Multimedia - Adi Bayu Saputra" 
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

        {/* Anggota Bidang 1 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="bg-gradient-to-br from-blue-800 to-blue-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
        >
          <div className="relative h-80 bg-gradient-to-br from-blue-700 to-blue-800 flex items-center justify-center">
            <img 
              src={anggotaBidangKwu1} 
              alt="Anggota Bagian Multimedia - Adi Bayu Saputra" 
              className="w-full h-full object-cover object-[center_35%]"
            />
          </div>
          <div className="p-6 text-center">
            <p className="text-blue-300 mb-2" style={{ fontSize: "14px", fontWeight: 600 }}>
              Program Studi
            </p>
            <p className="text-white" style={{ fontSize: "16px", fontWeight: 700 }}>
              Sains Data'24
            </p>
          </div>
        </motion.div>

        {/* Anggota Bidang 2 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="bg-gradient-to-br from-blue-800 to-blue-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
        >
          <div className="relative h-80 bg-gradient-to-br from-blue-700 to-blue-800 flex items-center justify-center">
          <img 
              src={anggotaBidangKwu2} 
              alt="Anggota Bagian Multimedia - Adi Bayu Saputra" 
              className="w-full h-full object-cover object-[center_35%]"
            />
          </div>
          <div className="p-6 text-center">
            <p className="text-blue-300 mb-2" style={{ fontSize: "14px", fontWeight: 600 }}>
              Program Studi
            </p>
            <p className="text-white" style={{ fontSize: "16px", fontWeight: 700 }}>
              Sistem Informasi'24
            </p>
          </div>
        </motion.div>

        {/* Anggota Bidang 3 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="bg-gradient-to-br from-blue-800 to-blue-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
        >
          <div className="relative h-80 bg-gradient-to-br from-blue-700 to-blue-800 flex items-center justify-center">
          <img 
              src={anggotaBidangKwu3} 
              alt="Anggota Bagian Multimedia - Adi Bayu Saputra" 
              className="w-full h-full object-cover object-[center_35%]"
            />
          </div>
          <div className="p-6 text-center">
            <p className="text-blue-300 mb-2" style={{ fontSize: "14px", fontWeight: 600 }}>
              Program Studi
            </p>
            <p className="text-white" style={{ fontSize: "16px", fontWeight: 700 }}>
              Informatika'23
            </p>
          </div>
        </motion.div>
      </div>

      {/* Bottom Grid - Tupoksi, Program Kerja, and Agenda */}
      <div className="mt-8 mb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7 }}
          className="bg-gradient-to-r from-orange-400 to-orange-500 rounded-2xl p-6 shadow-lg"
        >
          <h4 className="text-white text-center mb-3" style={{ fontSize: "18px", fontWeight: 700 }}>
            Tupoksi
          </h4>
          <p className="text-white text-center" style={{ fontSize: "14px", lineHeight: "1.8" }}>
            Mengembangkan jiwa kewirausahaan mahasiswa Fasilkom UPNVJT melalui program pelatihan, workshop, 
            dan pendampingan usaha. Memfasilitasi mahasiswa dalam berbagai kegiatan kewirausahaan seperti 
            business plan competition, inkubasi bisnis, dan kolaborasi dengan pelaku usaha untuk meningkatkan 
            keterampilan entrepreneurship, serta menciptakan ekosistem kewirausahaan yang mendukung mahasiswa dalam memulai dan mengembangkan bisnis.
          </p>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-6 border-2 border-orange-200 flex flex-col items-center justify-center gap-3"
        >
          <h4 className="text-orange-600 text-center mb-2" style={{ fontSize: "18px", fontWeight: 700 }}>
            Program Kerja
          </h4>
          <div className="flex flex-wrap justify-center gap-3">
            <Button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full shadow-lg transition-all duration-300 hover:scale-105">
              Fasilkom Merch
            </Button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.9 }}
          className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 border-2 border-blue-200 flex flex-col items-center justify-center gap-3"
        >
          <h4 className="text-blue-600 text-center mb-2" style={{ fontSize: "18px", fontWeight: 700 }}>
            Agenda
          </h4>
          <div className="flex flex-wrap justify-center gap-3">
            <Button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full shadow-lg transition-all duration-300 hover:scale-105">
              Ospek Kit
            </Button>
            <Button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full shadow-lg transition-all duration-300 hover:scale-105">
              Agenda Jualan
            </Button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
