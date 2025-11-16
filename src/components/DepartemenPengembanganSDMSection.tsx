import { motion } from "motion/react";
import { Users } from "lucide-react";
import kepalaPengembanganSdm from "../assets/PSDM-01.png";
import wakilKepalaPengembanganSdm from "../assets/PSDM-02.png";
import sekretarisPengembanganSdm from "../assets/PSDM-03.png";

export function DepartemenPengembanganSDMSection() {
  const pengurus = [
    { nama: "Sistem Informasi'23", jabatan: "Program Studi", img: wakilKepalaPengembanganSdm },
    { nama: "Sistem Informasi'23", jabatan: "Program Studi", img: kepalaPengembanganSdm },
    { nama: "Sistem Informasi'22", jabatan: "Program Studi", img: sekretarisPengembanganSdm },
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
        Departemen Pengembangan Sumber Daya Mahasiswa
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
            className="bg-gradient-to-br from-amber-800 to-amber-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
          >
            <div className="relative h-80 bg-gradient-to-br from-amber-700 to-amber-800 flex items-center justify-center">
              <img
                src={person.img}
                alt={person.nama}
                className="absolute inset-0 w-full h-full object-cover object-[center_35%]"
              />  
            </div>
            <div className="p-6 text-center">
              <p className="text-amber-300 mb-2" style={{ fontSize: "14px", fontWeight: 600 }}>
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
          Bertanggung jawab untuk merancang, mengembangkan, dan mengimplementasi program-program yang membantu 
          mahasiswa berkembang secara menyeluruh baik itu dalam mahasiswa ke dalam meralangi bagian akademik, 
          kegatan kesejahteraan, atau sektor pengalaman lainnya.
        </p>
      </motion.div>
    </motion.div>
  );
}
