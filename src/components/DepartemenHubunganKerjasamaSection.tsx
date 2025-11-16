import { motion } from "motion/react";
import { Users, Target, Handshake } from "lucide-react";
import ketuaHdkImg from "../assets/HDK-01.png";
import wakilKetuaHdkImg from "../assets/HDK-02.png";
import sekretarisDepartemenImg from "../assets/HDK-03.png";

export function DepartemenHubunganKerjasamaSection() {
  const pengurus = [
    { nama: "Informatika'22", jabatan: "Program Studi", img: wakilKetuaHdkImg },
    { nama: "Informatika'22", jabatan: "Program Studi", img: ketuaHdkImg },
    { nama: "Sistem Informasi'23", jabatan: "Program Studi", img: sekretarisDepartemenImg },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="mb-16"
    >
      <h3 className="text-blue-500 text-center mb-8" style={{ fontSize: "24px", fontWeight: 700 }}>
        Departemen Hubungan dan Kerja Sama
      </h3>

      {/* Team Cards Grid - 3 Members */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {pengurus.map((person, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 * (index + 1) }}
            className="bg-gradient-to-br from-teal-800 to-teal-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
          >
            <div className="relative h-80 bg-gradient-to-br from-teal-700 to-teal-800 flex items-center justify-center">
              {/* <Users className="w-24 h-24 text-teal-300 opacity-50" /> */}
              <img
                src={person.img}
                alt={person.nama}
                className="absolute inset-0 w-full h-full object-cover object-[center_35%]"
              />  
            </div>
            <div className="p-6 text-center">
              <p className="text-teal-300 mb-2" style={{ fontSize: "14px", fontWeight: 600 }}>
                {person.jabatan}
              </p>
              <p className="text-white" style={{ fontSize: "16px", fontWeight: 700 }}>
                {person.nama}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Tupoksi Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-8 border-2 border-orange-200"
      >
        <h4 className="text-orange-600 text-center mb-4" style={{ fontSize: "20px", fontWeight: 700 }}>
          Tupoksi
        </h4>
        <p className="text-gray-700 text-center max-w-4xl mx-auto" style={{ fontSize: "15px", lineHeight: "1.8" }}>
          Bertanggung jawab untuk mengidentifikasi, mengembangkan, dan memelihara hubungan dengan mitra 
          organisasi, termasuk perusahaan, institusi, atau organisasi lain yang memiliki kepentingan yang sejalan. 
          Ini melibatkan membangun komunikasi yang efektif, menjalin kerjasama, dan menjaga hubungan baik dengan 
          mitra-mitra tersebut.
        </p>
      </motion.div>
    </motion.div>
  );
}
