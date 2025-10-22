import { motion } from "motion/react";
import { Users } from "lucide-react";

export function BidangAdvokesmaSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="mb-16"
    >
      <h3 className="text-blue-500 text-center mb-8" style={{ fontSize: "24px", fontWeight: 700 }}>
        Bidang Advokesma
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
            <div className="w-32 h-32 rounded-full bg-blue-600 flex items-center justify-center">
              <Users className="w-16 h-16 text-blue-200" />
            </div>
          </div>
          <div className="p-6 text-center">
            <p className="text-blue-300 mb-2" style={{ fontSize: "14px", fontWeight: 600 }}>
              KEPALA BIDANG
            </p>
            <p className="text-white" style={{ fontSize: "16px", fontWeight: 700 }}>
              Burhanudin Hakim
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
            <div className="w-32 h-32 rounded-full bg-blue-600 flex items-center justify-center">
              <Users className="w-16 h-16 text-blue-200" />
            </div>
          </div>
          <div className="p-6 text-center">
            <p className="text-blue-300 mb-2" style={{ fontSize: "14px", fontWeight: 600 }}>
              WAKIL KEPALA BIDANG
            </p>
            <p className="text-white" style={{ fontSize: "16px", fontWeight: 700 }}>
              Shafa Zahratunnisa
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
            <div className="w-32 h-32 rounded-full bg-blue-600 flex items-center justify-center">
              <Users className="w-16 h-16 text-blue-200" />
            </div>
          </div>
          <div className="p-6 text-center">
            <p className="text-blue-300 mb-2" style={{ fontSize: "14px", fontWeight: 600 }}>
              SEKRETARIS BIDANG
            </p>
            <p className="text-white" style={{ fontSize: "16px", fontWeight: 700 }}>
              Sindi Dwi Oktaviani
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
            <div className="w-32 h-32 rounded-full bg-blue-600 flex items-center justify-center">
              <Users className="w-16 h-16 text-blue-200" />
            </div>
          </div>
          <div className="p-6 text-center">
            <p className="text-blue-300 mb-2" style={{ fontSize: "14px", fontWeight: 600 }}>
              ANGGOTA BIDANG
            </p>
            <p className="text-white" style={{ fontSize: "16px", fontWeight: 700 }}>
              Nazwa Maulida Zahwa
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
            <div className="w-32 h-32 rounded-full bg-blue-600 flex items-center justify-center">
              <Users className="w-16 h-16 text-blue-200" />
            </div>
          </div>
          <div className="p-6 text-center">
            <p className="text-blue-300 mb-2" style={{ fontSize: "14px", fontWeight: 600 }}>
              ANGGOTA BIDANG
            </p>
            <p className="text-white" style={{ fontSize: "16px", fontWeight: 700 }}>
              M. Rifqi Alfareza
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
            <div className="w-32 h-32 rounded-full bg-blue-600 flex items-center justify-center">
              <Users className="w-16 h-16 text-blue-200" />
            </div>
          </div>
          <div className="p-6 text-center">
            <p className="text-blue-300 mb-2" style={{ fontSize: "14px", fontWeight: 600 }}>
              ANGGOTA BIDANG
            </p>
            <p className="text-white" style={{ fontSize: "16px", fontWeight: 700 }}>
              Rafly Dwi Wicaksono
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
            Melakukan pendampingan kepada mahasiswa Fasilkom yang mampu permusyawaratan semaksimal bisa, akademik maupun non akademik, melakukan bantuan kepada mahasiswa Fasilkom dalam hal kampus, mengklarifikasi perundungan, menjalankan kajian untuk mahasiswa fasilkom, pergi ke rumah sakit apabila ada mahasiswa yang sedang sakit, melakukan aksi mahasiswa (Unjuk Rasa), hingga isu nasional untuk menyuarakan aspirasi bukan hanya demi kampus
          </p>
        </motion.div>

        {/* Program Kerja Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="bg-gradient-to-r from-blue-400 to-blue-500 rounded-2xl p-6 shadow-lg flex flex-col items-center justify-center"
        >
          <h4 className="text-white text-center mb-4" style={{ fontSize: "18px", fontWeight: 700 }}>
            Program Kerja
          </h4>
          <div className="bg-white text-blue-600 px-6 py-3 rounded-lg shadow-md" style={{ fontSize: "16px", fontWeight: 700 }}>
            FASILKOM TALK
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
