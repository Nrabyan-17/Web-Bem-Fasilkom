import { motion } from "motion/react";
import { Users } from "lucide-react";
import { Button } from "./ui/button";
import kepalaBidangSenor from "../assets/SENOR-01.png";
import wakilBidangSenor from "../assets/SENOR-02.png";
import sekreBidangSenor from "../assets/SENOR-03.png";
import anggotaBidangSenor1 from "../assets/SENOR-04.png";
import anggotaBidangSenor2 from "../assets/SENOR-05.png";
import anggotaBidangSenor3 from "../assets/SENOR-06.png";


export function BidangSeniOlahragaSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="mb-16"
    >
      <h3 className="text-blue-500 text-center mb-8" style={{ fontSize: "24px", fontWeight: 700 }}>
        Bidang Seni dan Olahraga
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
              src={kepalaBidangSenor} 
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
              src={wakilBidangSenor} 
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
              src={sekreBidangSenor} 
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
              src={anggotaBidangSenor1} 
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
              src={anggotaBidangSenor2} 
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
              src={anggotaBidangSenor3} 
              alt="Anggota Bagian Multimedia - Adi Bayu Saputra" 
              className="w-full h-full object-cover object-[center_35%]"
            />
          </div>
          <div className="p-6 text-center">
            <p className="text-blue-300 mb-2" style={{ fontSize: "14px", fontWeight: 600 }}>
              Program Studi
            </p>
            <p className="text-white" style={{ fontSize: "16px", fontWeight: 700 }}>
              Informatika'24
            </p>
          </div>
        </motion.div>
      </div>

      {/* Bottom Grid - Tupoksi and Program Kerja */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Tupoksi Section */}
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
            Bertanggung jawab dalam mengembangkan dan memfasilitasi kegiatan seni dan olahraga di Fasilkom UPNVJT, 
            termasuk penyelenggaraan event olahraga, kompetisi seni, dan kegiatan kreatif lainnya yang dapat 
            meningkatkan soft skill mahasiswa di bidang seni dan olahraga, serta menjadi wadah bagi mahasiswa untuk 
            mengekspresikan bakat dan minat mereka dalam bidang seni budaya dan olahraga.
          </p>
        </motion.div>

        {/* Program Kerja Section */}
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
              Fasilkom Fest
            </Button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
