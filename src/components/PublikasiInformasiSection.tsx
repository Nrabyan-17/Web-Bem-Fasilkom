import { motion } from "motion/react";
import { Users } from "lucide-react";
import kepalaBagianPublikasiImg  from "../assets/PUBINFO-01.jpg";
import anggotaPublikasi1Img from "../assets/PUBINFO-02.jpg"; 
import anggotaPublikasi2Img from "../assets/PUBINFO-03.jpg";
import anggotaPublikasi3Img from "../assets/PUBINFO-04.jpg"; 
import anggotaPublikasi4Img from "../assets/PUBINFO-05.jpg"; 




export function PublikasiInformasiSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="mb-16"
    >
      <h3 className="text-blue-500 text-center mb-8" style={{ fontSize: "24px", fontWeight: 700 }}>
        Bagian Publikasi Informasi
      </h3>

      {/* Team Cards Grid - First Row (3 Members) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
        {/* Kepala Bagian */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="bg-gradient-to-br from-orange-800 to-orange-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
        >
          <div className="relative h-80 bg-gradient-to-br from-orange-700 to-orange-800 overflow-hidden">
            <img 
              src={kepalaBagianPublikasiImg} 
              alt="Kepala Bagian Publikasi & Informasi - Ishna Shetia Shahadatina" 
              className="w-full h-full object-cover object-[center_35%]"
            />
          </div>
          <div className="p-6 text-center">
            <p className="text-orange-300 mb-2" style={{ fontSize: "14px", fontWeight: 600 }}>
              KEPALA BAGIAN
            </p>
            <p className="text-white" style={{ fontSize: "16px", fontWeight: 700 }}>
              Ishna Shetia Shahadatina
            </p>
          </div>
        </motion.div>

        {/* Anggota 1 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="bg-gradient-to-br from-orange-800 to-orange-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
        >
          <div className="relative h-80 bg-gradient-to-br from-orange-700 to-orange-800 overflow-hidden">
            <img 
              src={anggotaPublikasi1Img} 
              alt="Anggota Bagian Publikasi & Informasi - Tasya Kalimarensyia Br Sinaga" 
              className="w-full h-full object-cover object-[center_35%]"
            />
          </div>
          <div className="p-6 text-center">
            <p className="text-orange-300 mb-2" style={{ fontSize: "14px", fontWeight: 600 }}>
              ANGGOTA BAGIAN
            </p>
            <p className="text-white" style={{ fontSize: "16px", fontWeight: 700 }}>
              Tasya Kalimarensyia Br Sinaga
            </p>
          </div>
        </motion.div>

        {/* Anggota 2 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="bg-gradient-to-br from-orange-800 to-orange-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
        >
          <div className="relative h-80 bg-gradient-to-br from-orange-700 to-orange-800 overflow-hidden">
            <img 
              src={anggotaPublikasi2Img} 
              alt="Anggota Bagian Publikasi & Informasi - Ester Blessia Tumanggor" 
              className="w-full h-full object-cover object-[center_35%]"
            />
          </div>
          <div className="p-6 text-center">
            <p className="text-orange-300 mb-2" style={{ fontSize: "14px", fontWeight: 600 }}>
              ANGGOTA BAGIAN
            </p>
            <p className="text-white" style={{ fontSize: "16px", fontWeight: 700 }}>
              Ester Blessia Tumanggor
            </p>
          </div>
        </motion.div>
      </div>

      {/* Team Cards Grid - Second Row (2 Members Centered) */}
      <div className="flex justify-center mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl w-full">
          {/* Anggota 3 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="bg-gradient-to-br from-orange-800 to-orange-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
          >
            <div className="relative h-80 bg-gradient-to-br from-orange-700 to-orange-800 overflow-hidden">
              <img 
                src={anggotaPublikasi3Img} 
                alt="Anggota Bagian Publikasi & Informasi - Farah Dzakiyah Yolanda" 
                className="w-full h-full object-cover object-[center_35%]"
              />
            </div>
            <div className="p-6 text-center">
              <p className="text-orange-300 mb-2" style={{ fontSize: "14px", fontWeight: 600 }}>
                ANGGOTA BAGIAN
              </p>
              <p className="text-white" style={{ fontSize: "16px", fontWeight: 700 }}>
                Cindy Auliya Lisaillin
              </p>
            </div>
          </motion.div>

          {/* Anggota 4 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="bg-gradient-to-br from-orange-800 to-orange-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
          >
            <div className="relative h-80 bg-gradient-to-br from-orange-700 to-orange-800 overflow-hidden">
              <img 
                src={anggotaPublikasi4Img} 
                alt="Anggota Bagian Publikasi & Informasi - Elmy Gita Damayanti" 
                className="w-full h-full object-cover object-[center_35%]"
              />
            </div>
            <div className="p-6 text-center">
              <p className="text-orange-300 mb-2" style={{ fontSize: "14px", fontWeight: 600 }}>
                ANGGOTA BAGIAN
              </p>
              <p className="text-white" style={{ fontSize: "16px", fontWeight: 700 }}>
                Elmy Gita Damayanti
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Tupoksi Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6 }}
        className="bg-gradient-to-r from-orange-400 to-orange-500 rounded-2xl p-6 shadow-lg"
      >
        <h4 className="text-white text-center mb-3" style={{ fontSize: "18px", fontWeight: 700 }}>
          Tugas Pokok & Fungsi
        </h4>
        <p className="text-white text-center" style={{ fontSize: "14px", lineHeight: "1.8" }}>
          Mengelola media sosial BEM FIK UPNVJ Veteran Jawa Timur. Membuat konten untuk kehidupan perkuliahan dan kemahasiswaan yang menarik, mempublikasikan setiap program kerja dari masing-masing departemen.
        </p>
      </motion.div>
    </motion.div>
  );
}
