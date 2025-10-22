import { motion } from "motion/react";
import { Users } from "lucide-react";
import { Button } from "./ui/button";

export function BidangDalamNegeriSection() {
  const pengurus = [
    { nama: "Kepala Bidang", jabatan: "KEPALA BIDANG DALAM NEGERI" },
    { nama: "Wakil Kepala Bidang", jabatan: "WAKIL KEPALA BIDANG DALAM NEGERI" },
    { nama: "Sekretaris Bidang", jabatan: "SEKRETARIS BIDANG DALAM NEGERI" },
    { nama: "Anggota Bidang", jabatan: "ANGGOTA BIDANG DALAM NEGERI" },
    { nama: "Anggota Bidang", jabatan: "ANGGOTA BIDANG DALAM NEGERI" },
    { nama: "Anggota Bidang", jabatan: "ANGGOTA BIDANG DALAM NEGERI" },
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
        Bidang Dalam Negeri
      </h3>

      {/* Team Cards Grid - 6 Members */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {pengurus.map((person, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 * (index + 1) }}
            className="bg-gradient-to-br from-cyan-800 to-cyan-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
          >
            <div className="relative h-80 bg-gradient-to-br from-cyan-700 to-cyan-800 flex items-center justify-center">
              <Users className="w-24 h-24 text-cyan-300 opacity-50" />
            </div>
            <div className="p-6 text-center">
              <p className="text-cyan-300 mb-2" style={{ fontSize: "14px", fontWeight: 600 }}>
                {person.jabatan}
              </p>
              <p className="text-white" style={{ fontSize: "16px", fontWeight: 700 }}>
                {person.nama}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Tupoksi & Program Kerja */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
        {/* Tupoksi */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="bg-gradient-to-br from-cyan-50 to-cyan-100 rounded-2xl p-6 border-2 border-cyan-200"
        >
          <h4 className="text-cyan-600 text-center mb-4" style={{ fontSize: "18px", fontWeight: 700 }}>
            Tupoksi
          </h4>
          <p className="text-gray-700 text-center" style={{ fontSize: "14px", lineHeight: "1.8" }}>
            Sebagai pembangun relasi antara BEM FASILKOM dengan ORMAWA (BEM, HIMA, UKMDP, dll) dalam Fakultas Ilmu 
            Komputer UPN "Veteran" Jawa Timur untuk menciptakan relasi baik, dengan tujuan, mewujudkan dalam Fakultas 
            Ilmu Komputer yang solid.
          </p>
        </motion.div>

        {/* Program Kerja */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-6 border-2 border-orange-200 flex flex-col items-center justify-center gap-3"
        >
          <h4 className="text-orange-600 text-center mb-2" style={{ fontSize: "18px", fontWeight: 700 }}>
            Program Kerja
          </h4>
          <div className="flex flex-wrap justify-center gap-3">
            <Button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full shadow-lg transition-all duration-300 hover:scale-105">
              DIES NATALIS
            </Button>
            <Button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full shadow-lg transition-all duration-300 hover:scale-105">
              Internalisasi ORMAWA
            </Button>
            <Button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full shadow-lg transition-all duration-300 hover:scale-105">
              Internalisasi BEM
            </Button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
