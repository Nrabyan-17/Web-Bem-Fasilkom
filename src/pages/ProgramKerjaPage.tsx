import { useState } from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { prokerData, ProkerItem } from "../data/prokerData";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function ProgramKerjaPage() {
  const [activeFilter, setActiveFilter] = useState<"Semua" | "Pelayanan" | "Pengembangan" | "Segara" | "Refleksi">("Semua");

  const filters: Array<"Semua" | "Pelayanan" | "Pengembangan" | "Segara" | "Refleksi"> = [
    "Semua",
    "Pelayanan",
    "Segara",
    "Refleksi",
  ];

  const filteredProker = activeFilter === "Semua" 
    ? prokerData 
    : prokerData.filter((item) => item.category === activeFilter);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Header */}
      <section className="pt-32 pb-12 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-orange-500 mb-4" style={{ fontSize: "42px", fontWeight: 700 }}>
              PROGRAM KERJA
            </h1>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "120px" }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="h-1 bg-orange-500 mx-auto mb-6"
            />
            <p className="max-w-2xl mx-auto text-gray-600" style={{ fontSize: "15px" }}>
              Dengan program kerja yang dirancang untuk menyelenggarakan seluruh kewenangan dan
              memberikan kontribusi positif bagi lingkungan kampus dan masyarakat.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap justify-center gap-3"
          >
            {filters.map((filter) => (
              <Button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                variant="outline"
                className={`px-10 py-6 rounded-full transition-all duration-300 ${
                  activeFilter === filter
                    ? "bg-orange-500 text-white border-orange-500 hover:bg-orange-600 shadow-md"
                    : "border-2 border-orange-400 text-orange-500 hover:bg-orange-50 bg-white"
                }`}
                style={{ fontSize: "14px", fontWeight: 500 }}
              >
                {filter}
              </Button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Program Kerja Grid */}
      <section className="py-12 pb-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto"
          >
            {filteredProker.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 group h-full flex flex-col bg-white border border-gray-200 rounded-xl">
                  <Link to={`/program-kerja/${item.id}`}>
                    <div className="relative h-48 overflow-hidden">
                      <ImageWithFallback
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-3 left-3">
                        <Badge className="bg-blue-500 text-white border-0 px-3 py-1">
                          Event
                        </Badge>
                      </div>
                    </div>
                  </Link>
                  <CardHeader className="flex-1 pb-3">
                    <Link to={`/program-kerja/${item.id}`}>
                      <CardTitle className="text-blue-600 group-hover:text-orange-500 transition-colors" style={{ fontSize: "17px", fontWeight: 600 }}>
                        {item.title}
                      </CardTitle>
                    </Link>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-gray-600 mb-4 line-clamp-2" style={{ fontSize: "13px", lineHeight: "1.6" }}>
                      {item.description}
                    </p>
                    <Link to={`/program-kerja/${item.id}`}>
                      <Button
                        className="w-full bg-blue-600 text-white hover:bg-blue-700 transition-all duration-300 rounded-md py-5"
                        style={{ fontSize: "13px" }}
                      >
                        Lihat Selengkapnya
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {filteredProker.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <p className="text-gray-500" style={{ fontSize: "18px" }}>
                Tidak ada program kerja dalam kategori ini.
              </p>
            </motion.div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
