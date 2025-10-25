import { motion } from "motion/react";
import { Users } from "lucide-react";
import { Button } from "./ui/button";
import kepalaPenelitianPengembangan from "../assets/LITBANG-01.png";
import wakilKepalaPenelitianPengembangan from "../assets/LITBANG-02.png";
import sekretarisPenelitianPengembangan from "../assets/LITBANG-03.png";
import anggotaPenelitianPengembangan1 from "../assets/LITBANG-04.png";
import anggotaPenelitianPengembangan2 from "../assets/LITBANG-05.png";
import anggotaPenelitianPengembangan3 from "../assets/LITBANG-06.png";



export function BidangPenelitianPengembanganSection() {
  const pengurus = [
    { nama: "Kepala Bidang", jabatan: "KEPALA BIDANG PENELITIAN & PENGEMBANGAN", img: kepalaPenelitianPengembangan },
    { nama: "Wakil Kepala Bidang", jabatan: "WAKIL KEPALA BIDANG PENELITIAN & PENGEMBANGAN", img: wakilKepalaPenelitianPengembangan },
    { nama: "Sekretaris Bidang", jabatan: "SEKRETARIS BIDANG PENELITIAN & PENGEMBANGAN", img: sekretarisPenelitianPengembangan },
    { nama: "Anggota Bidang", jabatan: "ANGGOTA BIDANG PENELITIAN & PENGEMBANGAN", img: anggotaPenelitianPengembangan1 },
    { nama: "Anggota Bidang", jabatan: "ANGGOTA BIDANG PENELITIAN & PENGEMBANGAN", img: anggotaPenelitianPengembangan2 },
    { nama: "Anggota Bidang", jabatan: "ANGGOTA BIDANG PENELITIAN & PENGEMBANGAN", img: anggotaPenelitianPengembangan3 },
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
        Bidang Penelitian dan Pengembangan
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
            className="bg-gradient-to-br from-rose-800 to-rose-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
          >
            <div className="relative h-80 bg-gradient-to-br from-rose-700 to-rose-800 flex items-center justify-center">
              <img
                src={person.img}
                alt={person.nama}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="p-6 text-center">
              <p className="text-rose-300 mb-2" style={{ fontSize: "14px", fontWeight: 600 }}>
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
          className="bg-gradient-to-br from-rose-50 to-rose-100 rounded-2xl p-6 border-2 border-rose-200"
        >
          <h4 className="text-rose-600 text-center mb-4" style={{ fontSize: "18px", fontWeight: 700 }}>
            Tupoksi
          </h4>
          <p className="text-gray-700 text-center" style={{ fontSize: "14px", lineHeight: "1.8" }}>
            Menjadi wadah bagi tim Penelitian dalam mendampingi dan pengembangannya serta 
            membuat pengembangan informasi yang dapat diterapkan oleh BEM Fasilkom mengembangkan 
            bakat dan fokus ilmu Fasilkom mengembangkan bakat dan fokus ilmu pengembangan serta kapabilitas 
            untuk KM Fasilkom.
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
              Fasilkom Talk
            </Button>
            <Button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full shadow-lg transition-all duration-300 hover:scale-105">
              Tech Bootcamp
            </Button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
