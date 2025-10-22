import { motion } from "motion/react";
import { Users } from "lucide-react";

export function DepartemenPengembanganSDMSection() {
  const pengurus = [
    { nama: "Wakil Kepala Departemen", jabatan: "WAKIL KEPALA DEPARTEMEN PENGEMBANGAN SDM" },
    { nama: "Kepala Departemen", jabatan: "KEPALA DEPARTEMEN PENGEMBANGAN SDM" },
    { nama: "Sekretaris Departemen", jabatan: "SEKRETARIS DEPARTEMEN PENGEMBANGAN SDM" },
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
              <Users className="w-24 h-24 text-amber-300 opacity-50" />
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
