import { motion } from "motion/react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { BPHSection } from "../components/BPHSection";
import { MediaInformasiSection } from "../components/MediaInformasiSection";
import { MultimediaSection } from "../components/MultimediaSection";
import { PublikasiInformasiSection } from "../components/PublikasiInformasiSection";
import { DepartemenSospolSection } from "../components/DepartemenSospolSection";
import { DepartemenHubunganKerjasamaSection } from "../components/DepartemenHubunganKerjasamaSection";
import { DepartemenPengembanganSDMSection } from "../components/DepartemenPengembanganSDMSection";
import { BidangAdvokesmaSection } from "../components/BidangAdvokesmaSection";
import { BidangPengmasSection } from "../components/BidangPengmasSection";
import { BidangLuarNegeriSection } from "../components/BidangLuarNegeriSection";
import { BidangDalamNegeriSection } from "../components/BidangDalamNegeriSection";
import { BidangKaderisasiSection } from "../components/BidangKaderisasiSection";
import { BidangPenelitianPengembanganSection } from "../components/BidangPenelitianPengembanganSection";
import { BidangSeniOlahragaSection } from "../components/BidangSeniOlahragaSection";
import { BidangKewirausahaanSection } from "../components/BidangKewirausahaanSection";
import strukturOrganisasiImg from "figma:asset/eea5c48c5f1e8d19bdd647ecb6183be935eb5763.png";

export function StrukturOrganisasiPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 bg-gradient-to-br from-orange-50 via-white to-blue-50">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-orange-500 mb-4" style={{ fontSize: "48px", fontWeight: 700 }}>
              STRUKTUR ORGANISASI
            </h1>
            <p className="text-gray-600 max-w-3xl mx-auto" style={{ fontSize: "18px" }}>
              Pusat informasi dan layanan terkait dari BEM Fakultas Ilmu Komputer untuk seluruh Keluarga Mahasiswa Fasilkom
            </p>
          </motion.div>
        </div>
      </section>

      {/* Organizational Chart Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-orange-50 to-white">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="flex justify-center">
              <img
                src={strukturOrganisasiImg}
                alt="Struktur Organisasi BEM Fasilkom UPNVJT"
                className="w-full max-w-5xl h-auto"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Fungsionaris Kabinet Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-orange-500 mb-4" style={{ fontSize: "36px", fontWeight: 700 }}>
              FUNGSIONARIS KABINET ASTRANOVA
            </h2>
          </motion.div>

          {/* BPH Section Component */}
          <BPHSection />

          {/* Divider */}
          <div className="my-16 border-t-2 border-gray-200"></div>

          {/* Biro Media dan Informasi */}
          <MediaInformasiSection />

          {/* Divider */}
          <div className="my-16 border-t-2 border-gray-200"></div>

          {/* Bagian Multimedia */}
          <MultimediaSection />

          {/* Divider */}
          <div className="my-16 border-t-2 border-gray-200"></div>

          {/* Bagian Publikasi Informasi */}
          <PublikasiInformasiSection />

          {/* Divider */}
          <div className="my-16 border-t-2 border-gray-200"></div>

          {/* Departemen Sosial dan Politik */}
          <DepartemenSospolSection />

          {/* Divider */}
          <div className="my-16 border-t-2 border-gray-200"></div>

          {/* Bidang Advokesma */}
          <BidangAdvokesmaSection />

          {/* Divider */}
          <div className="my-16 border-t-2 border-gray-200"></div>

          {/* Bidang Pengabdian Masyarakat */}
          <BidangPengmasSection />

          {/* Divider */}
          <div className="my-16 border-t-2 border-gray-200"></div>

          {/* Departemen Hubungan dan Kerja Sama */}
          <DepartemenHubunganKerjasamaSection />

          {/* Divider */}
          <div className="my-16 border-t-2 border-gray-200"></div>

          {/* Bidang Luar Negeri */}
          <BidangLuarNegeriSection />

          {/* Divider */}
          <div className="my-16 border-t-2 border-gray-200"></div>

          {/* Bidang Dalam Negeri */}
          <BidangDalamNegeriSection />

          {/* Divider */}
          <div className="my-16 border-t-2 border-gray-200"></div>

          {/* Departemen Pengembangan Sumber Daya Mahasiswa */}
          <DepartemenPengembanganSDMSection />

          {/* Divider */}
          <div className="my-16 border-t-2 border-gray-200"></div>

          {/* Bidang Kaderisasi */}
          <BidangKaderisasiSection />

          {/* Divider */}
          <div className="my-16 border-t-2 border-gray-200"></div>

          {/* Bidang Penelitian dan Pengembangan */}
          <BidangPenelitianPengembanganSection />

          {/* Divider */}
          <div className="my-16 border-t-2 border-gray-200"></div>

          {/* Bidang Seni dan Olahraga */}
          <BidangSeniOlahragaSection />

          {/* Divider */}
          <div className="my-16 border-t-2 border-gray-200"></div>

          {/* Bidang Kewirausahaan */}
          <BidangKewirausahaanSection />
        </div>
      </section>

      <Footer />
    </div>
  );
}
