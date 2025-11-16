import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { ChevronDown } from "lucide-react";
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
import strukturOrganisasiImg  from "../assets/struktur.png";

export function StrukturOrganisasiPage() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const sections = [
    { id: "bph", label: "Badan Pengurus Harian" },
    { id: "media-informasi", label: "Biro Media dan Informasi" },
    { id: "multimedia", label: "Bagian Multimedia" },
    { id: "publikasi-informasi", label: "Bagian Publikasi Informasi" },
    { id: "departemen-sospol", label: "Departemen Sosial dan Politik" },
    { id: "bidang-advokesma", label: "Bidang Advokesma" },
    { id: "bidang-pengmas", label: "Bidang Pengabdian Masyarakat" },
    { id: "departemen-hubkerjasama", label: "Departemen Hubungan dan Kerja Sama" },
    { id: "bidang-luar-negeri", label: "Bidang Luar Negeri" },
    { id: "bidang-dalam-negeri", label: "Bidang Dalam Negeri" },
    { id: "departemen-pengembangan-sdm", label: "Departemen Pengembangan SDM" },
    { id: "bidang-kaderisasi", label: "Bidang Kaderisasi" },
    { id: "bidang-penelitian-pengembangan", label: "Bidang Penelitian dan Pengembangan" },
    { id: "bidang-seni-olahraga", label: "Bidang Seni dan Olahraga" },
    { id: "bidang-kewirausahaan", label: "Bidang Kewirausahaan" }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 100; // Account for fixed navbar
      const elementPosition = element.offsetTop;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
    setIsDropdownOpen(false);
  };
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
            <div className="inline-block">
              <h1 className="text-orange-500 mb-2" style={{ fontSize: "48px", fontWeight: 700 }}>
                STRUKTUR ORGANISASI
              </h1>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="h-1 bg-orange-500 mb-6"
              />
            </div>
            <p className="text-gray-600 max-w-3xl mx-auto mb-8" style={{ fontSize: "18px" }}>
              Pusat informasi dan layanan terkait dari BEM Fakultas Ilmu Komputer untuk seluruh Keluarga Mahasiswa Fasilkom
            </p>

            {/* Filter Dropdown */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="relative inline-block"
              onBlur={() => setTimeout(() => setIsDropdownOpen(false), 100)}
            >
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="bg-white border-2 border-orange-500 text-orange-600 hover:bg-orange-50 px-6 py-3 rounded-lg shadow-md transition-all duration-300 flex items-center gap-3 min-w-[280px]"
                style={{ fontSize: "16px", fontWeight: 600 }}
              >
                <span>Pilih Bidang/Departemen</span>
                <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Dropdown Menu */}
              <AnimatePresence>
                {isDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-xl max-h-80 overflow-y-auto z-50"
                  >
                    {sections.map((section) => (
                      <button
                        key={section.id}
                        onClick={() => scrollToSection(section.id)}
                        className="w-full text-left px-4 py-3 hover:bg-orange-50 hover:text-orange-600 transition-colors duration-200 border-b border-gray-100 last:border-b-0"
                        style={{ fontSize: "14px" }}
                      >
                        {section.label}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
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
            <div className="inline-block">
              <h2 className="text-orange-500 mb-2" style={{ fontSize: "36px", fontWeight: 700 }}>
                FUNGSIONARIS KABINET ASTRANOVA
              </h2>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="h-1 bg-orange-500 mb-4"
              />
            </div>
          </motion.div>

          {/* BPH Section Component */}
          <div id="bph">
            <BPHSection />
          </div>

          {/* Divider */}
          <div className="my-16 border-t-2 border-gray-200"></div>

          {/* Biro Media dan Informasi */}
          <div id="media-informasi">
            <MediaInformasiSection />
          </div>

          {/* Divider */}
          <div className="my-16 border-t-2 border-gray-200"></div>

          {/* Bagian Multimedia */}
          <div id="multimedia">
            <MultimediaSection />
          </div>

          {/* Divider */}
          <div className="my-16 border-t-2 border-gray-200"></div>

          {/* Bagian Publikasi Informasi */}
          <div id="publikasi-informasi">
            <PublikasiInformasiSection />
          </div>

          {/* Divider */}
          <div className="my-16 border-t-2 border-gray-200"></div>

          {/* Departemen Sosial dan Politik */}
          <div id="departemen-sospol">
            <DepartemenSospolSection />
          </div>

          {/* Divider */}
          <div className="my-16 border-t-2 border-gray-200"></div>

          {/* Bidang Advokesma */}
          <div id="bidang-advokesma">
            <BidangAdvokesmaSection />
          </div>

          {/* Divider */}
          <div className="my-16 border-t-2 border-gray-200"></div>

          {/* Bidang Pengabdian Masyarakat */}
          <div id="bidang-pengmas">
            <BidangPengmasSection />
          </div>

          {/* Divider */}
          <div className="my-16 border-t-2 border-gray-200"></div>

          {/* Departemen Hubungan dan Kerja Sama */}
          <div id="departemen-hubkerjasama">
            <DepartemenHubunganKerjasamaSection />
          </div>

          {/* Divider */}
          <div className="my-16 border-t-2 border-gray-200"></div>

          {/* Bidang Luar Negeri */}
          <div id="bidang-luar-negeri">
            <BidangLuarNegeriSection />
          </div>

          {/* Divider */}
          <div className="my-16 border-t-2 border-gray-200"></div>

          {/* Bidang Dalam Negeri */}
          <div id="bidang-dalam-negeri">
            <BidangDalamNegeriSection />
          </div>

          {/* Divider */}
          <div className="my-16 border-t-2 border-gray-200"></div>

          {/* Departemen Pengembangan Sumber Daya Mahasiswa */}
          <div id="departemen-pengembangan-sdm">
            <DepartemenPengembanganSDMSection />
          </div>

          {/* Divider */}
          <div className="my-16 border-t-2 border-gray-200"></div>

          {/* Bidang Kaderisasi */}
          <div id="bidang-kaderisasi">
            <BidangKaderisasiSection />
          </div>

          {/* Divider */}
          <div className="my-16 border-t-2 border-gray-200"></div>

          {/* Bidang Penelitian dan Pengembangan */}
          <div id="bidang-penelitian-pengembangan">
            <BidangPenelitianPengembanganSection />
          </div>

          {/* Divider */}
          <div className="my-16 border-t-2 border-gray-200"></div>

          {/* Bidang Seni dan Olahraga */}
          <div id="bidang-seni-olahraga">
            <BidangSeniOlahragaSection />
          </div>

          {/* Divider */}
          <div className="my-16 border-t-2 border-gray-200"></div>

          {/* Bidang Kewirausahaan */}
          <div id="bidang-kewirausahaan">
            <BidangKewirausahaanSection />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}