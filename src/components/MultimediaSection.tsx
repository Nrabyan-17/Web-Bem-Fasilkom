import { motion } from "motion/react";
import { Users, Film, Camera, Palette, Code } from "lucide-react";
import { Button } from "./ui/button";
import kepalaBagianImg from "figma:asset/62be395408043f18b0241e0c4fc8dd9d142c142a.png";
import anggota1Img from "figma:asset/3e064007f50018b9d07d4ed54e02c90c026a2c75.png";
import anggota2Img from "figma:asset/4dc5ab72d8aad8d6b272c8d27541600f3a19d2b4.png";
import anggota3Img from "figma:asset/b3bb2a31be3c728e554663274ecf9697aace8b9d.png";
import anggota4Img from "figma:asset/25bcca7f7489d18fce0ac19a937f87e7d69dd7f4.png";
import anggota5Img from "figma:asset/df90d71784f70469fa2fe227f8762aa61129705b.png";
import anggota6Img from "figma:asset/c25808b09db1eca7cd95035cac9a7105cac9deef.png";
import anggota7Img from "figma:asset/d034b58134bfaec0ffa9282746a9fbec54abb776.png";

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
              src={kepalaBagianImg} 
              alt="Kepala Bagian Multimedia - Rachmananta Ibnu Fajar" 
              className="w-full h-full object-cover object-[center_35%]"
            />
          </div>
          <div className="p-4 text-center">
            <p className="text-purple-300 mb-1" style={{ fontSize: "12px", fontWeight: 600 }}>
              KEPALA BAGIAN
            </p>
            <p className="text-white" style={{ fontSize: "14px", fontWeight: 700 }}>
              Rachmananta Ibnu Fajar
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
              src={anggota1Img} 
              alt="Anggota Bagian Multimedia - Adi Bayu Saputra" 
              className="w-full h-full object-cover object-[center_35%]"
            />
          </div>
          <div className="p-4 text-center">
            <p className="text-purple-300 mb-1" style={{ fontSize: "12px", fontWeight: 600 }}>
              ANGGOTA BAGIAN
            </p>
            <p className="text-white" style={{ fontSize: "14px", fontWeight: 700 }}>
              Adi Bayu Saputra
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
              src={anggota2Img} 
              alt="Anggota Bagian Multimedia - Febbyna Aulia Putri" 
              className="w-full h-full object-cover object-[center_35%]"
            />
          </div>
          <div className="p-4 text-center">
            <p className="text-purple-300 mb-1" style={{ fontSize: "12px", fontWeight: 600 }}>
              ANGGOTA BAGIAN
            </p>
            <p className="text-white" style={{ fontSize: "14px", fontWeight: 700 }}>
              Febbyna Aulia Putri
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
              src={anggota3Img} 
              alt="Anggota Bagian Multimedia - Marsyanda Firlyandita" 
              className="w-full h-full object-cover object-[center_35%]"
            />
          </div>
          <div className="p-4 text-center">
            <p className="text-purple-300 mb-1" style={{ fontSize: "12px", fontWeight: 600 }}>
              ANGGOTA BAGIAN
            </p>
            <p className="text-white" style={{ fontSize: "14px", fontWeight: 700 }}>
              Marsyanda Firlyandita
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
              src={anggota4Img} 
              alt="Anggota Bagian Multimedia - Disain Ariesta Perdana Raharja" 
              className="w-full h-full object-cover object-[center_35%]"
            />
          </div>
          <div className="p-4 text-center">
            <p className="text-purple-300 mb-1" style={{ fontSize: "12px", fontWeight: 600 }}>
              ANGGOTA BAGIAN
            </p>
            <p className="text-white" style={{ fontSize: "14px", fontWeight: 700 }}>
              Disain Ariesta Perdana Raharja
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
              src={anggota5Img} 
              alt="Anggota Bagian Multimedia - Ariel Ardinnansyah" 
              className="w-full h-full object-cover object-[center_35%]"
            />
          </div>
          <div className="p-4 text-center">
            <p className="text-purple-300 mb-1" style={{ fontSize: "12px", fontWeight: 600 }}>
              ANGGOTA BAGIAN
            </p>
            <p className="text-white" style={{ fontSize: "14px", fontWeight: 700 }}>
              Ariel Ardinnansyah
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
              src={anggota6Img} 
              alt="Anggota Bagian Multimedia - Muhammad Jazuli" 
              className="w-full h-full object-cover object-[center_35%]"
            />
          </div>
          <div className="p-4 text-center">
            <p className="text-purple-300 mb-1" style={{ fontSize: "12px", fontWeight: 600 }}>
              ANGGOTA BAGIAN
            </p>
            <p className="text-white" style={{ fontSize: "14px", fontWeight: 700 }}>
              Muhammad Jazuli
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
              src={anggota7Img} 
              alt="Anggota Bagian Multimedia - Muhammad Ihsanul Fikri" 
              className="w-full h-full object-cover object-[center_35%]"
            />
          </div>
          <div className="p-4 text-center">
            <p className="text-purple-300 mb-1" style={{ fontSize: "12px", fontWeight: 600 }}>
              ANGGOTA BAGIAN
            </p>
            <p className="text-white" style={{ fontSize: "14px", fontWeight: 700 }}>
              Muhammad Ihsanul Fikri
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
