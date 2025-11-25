import { motion } from "motion/react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";

export function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      <section className="py-16 flex items-center justify-center min-h-[calc(100vh-80px)]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="order-2 lg:order-1 flex flex-col justify-center h-full"
            >
              <div className="mb-6">
                <div className="h-[2px] w-10 bg-gray-300 mb-3" />
                <Badge className="bg-gray-100 text-gray-600 border-0 px-3 py-1 uppercase tracking-[0.2em]" style={{ fontSize: "12px", fontWeight: 600 }}>
                  Advocenter
                </Badge>
              </div>

              <div className="flex flex-col items-center lg:items-start">
                <h1 className="text-orange-400 tracking-tight mb-2 text-center lg:text-left" style={{ fontSize: "34px", fontWeight: 800, letterSpacing: "-0.02em" }}>
                  ADVO CALL CENTER
                </h1>
                <div className="h-1 w-20 bg-orange-500 mb-6"></div>
              </div>

              <div className="space-y-4 text-gray-700 text-justify lg:text-left" style={{ fontSize: "15px", lineHeight: 1.8 }}>
                <p>
                  Advo Call Center merupakan wadah pemberian informasi aktual dan pengawalan kepada mahasiswa
                  dalam menyelesaikan permasalahan dalam lingkup akademik dan non akademik guna meningkatkan
                  kesejahteraan KM Manajemen UPN "Veteran" Jawa Timur.
                </p>
                <p>
                  Advo Call Center dalam BEM Fakultas Ilmu Komputer adalah kegiatan yang dilakukan oleh anggota atau pengurus
                  BEM Fakultas Ilmu Komputer untuk memperjuangkan kepentingan, hak, dan kesejahteraan KM Fakultas ilmu Komputer UPN "Veteran" Jawa Timur.
                  Tujuan utama Advo Call Center dalam konteks ini adalah untuk memastikan bahwa suara dan kebutuhan mahasiswa
                  terwakili dengan baik di tingkat Program studi Fakultas Ilmu Komputer.
                </p>
                <p>
                  Dengan adanya Advo Call Center dapat menciptakan lingkungan kampus yang mendukung dan inklusif, serta
                  memastikan bahwa kepentingan mahasiswa selalu diperhatikan dan terus diperjuangkan. Sekarang untuk
                  mendapatkan Layanan Advo Call Center atau pengawalan terkait permasalahan yang ada, serta kebutuhan informasi
                  mahasiswa di lingkup Prodi sudah dapat diakses secara online, yaitu dengan cara scan barcode yang
                  telah disediakan oleh Advo Call Center BEM Fakultas Ilmu Komputer.
                </p>
              </div>

              <div className="mt-8">
                <Button asChild className="bg-gray-200 text-gray-800 hover:bg-gray-300 rounded-md px-6 py-5">
                  <a href="https://wa.me/6285607753235">Contact us</a>
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="order-1 lg:order-2"
            >
              <div className="w-full flex justify-center items-center h-full py-8 lg:py-0">
                <div className="relative w-[300px] h-[220px] lg:w-[350px] lg:h-[260px]">
                  <img
                    src="/build/assets/advocenter.jpeg"
                    alt="Advocenter"
                    className="w-full h-full rounded-xl shadow-xl object-contain"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}