import { motion } from "motion/react";
import { Users } from "lucide-react";
import { Button } from "./ui/button";
import kepalaKaderisasi from "../assets/KADERISASI-01.png";
import wakilKepalaKaderisasi from "../assets/KADERISASI-02.png";
import sekretarisKaderisasi from "../assets/KADERISASI-03.png";
import anggotaKaderisasi1 from "../assets/KADERISASI-04.png";
import anggotaKaderisasi2 from "../assets/KADERISASI-05.png";
import anggotaKaderisasi3 from "../assets/KADERISASI-06.png";


export function BidangKaderisasiSection() {
  const pengurus = [
    { nama: "Sistem Informasi'23", jabatan: "Program Studi", img: kepalaKaderisasi },
    { nama: "Sistem Informasi'23", jabatan: "Program Studi", img: wakilKepalaKaderisasi },
    { nama: "Informatika'23", jabatan: "Program Studi", img: sekretarisKaderisasi },
    { nama: "Sains Data'24", jabatan: "Program Studi", img: anggotaKaderisasi1 },
    { nama: "Sistem Informasi'24", jabatan: "Program Studi", img: anggotaKaderisasi2 },
    { nama: "Sistem Informasi'24", jabatan: "Program Studi", img: anggotaKaderisasi3 },
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
        Bidang Kaderisasi
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
            className="bg-gradient-to-br from-violet-800 to-violet-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
          >
            <div className="relative h-80 bg-gradient-to-br from-violet-700 to-violet-800 flex items-center justify-center">
              <img
                src={person.img}
                alt={person.nama}
                className="absolute inset-0 w-full h-full object-cover object-[center_35%]"
              />
            </div>
            <div className="p-6 text-center">
              <p className="text-violet-300 mb-2" style={{ fontSize: "14px", fontWeight: 600 }}>
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
          className="bg-gradient-to-br from-violet-50 to-violet-100 rounded-2xl p-6 border-2 border-violet-200"
        >
          <h4 className="text-violet-600 text-center mb-4" style={{ fontSize: "18px", fontWeight: 700 }}>
            Tupoksi
          </h4>
          <p className="text-gray-700 text-center" style={{ fontSize: "14px", lineHeight: "1.8" }}>
            Mencari kader baru yang berpotensi untuk menjadi penggerak organisasi dan dapat 
            membentuk calon pemimpin yang berintegritas dengan memberikan pelatihan, bimbingan, 
            dan pendampingan yang sesuai untuk membentuk karakter kepemimpinan yang kuat dalam Fasilkom mengembangkan 
            bakat dan fokus ilmu Fasilkom mengembangkan bakat dan fokus ilmu computer UPN "Veteran" Jawa Timur.
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
              Mosaik
            </Button>
            <Button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full shadow-lg transition-all duration-300 hover:scale-105">
              LKMM-TD
            </Button>
            <Button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full shadow-lg transition-all duration-300 hover:scale-105">
              Confest
            </Button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
