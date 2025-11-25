import { motion } from "motion/react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { ArrowLeft, Calendar, MapPin, Users, Target, PenTool, FileText } from "lucide-react";
import { prokerData } from "../data/prokerData";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function ProkerDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const proker = prokerData.find((item) => item.id === id);

  // Scroll to top when the page loads or when ID changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [id]);

  if (!proker) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="container mx-auto px-4 lg:px-8 py-32 text-center">
          <h1 className="text-gray-900 mb-4" style={{ fontSize: "32px", fontWeight: 700 }}>
            Program Kerja Tidak Ditemukan
          </h1>
          <Link to="/program-kerja" className="cursor-pointer">
            <Button className="bg-orange-500 hover:bg-orange-600 text-white cursor-pointer">
              Kembali ke Program Kerja
            </Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const relatedProker = prokerData
    .filter((item) => item.id !== id && item.category === proker.category)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Back Button */}
      <section className="pt-24 pb-8 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <Button
            variant="ghost"
            className="text-orange-500 hover:text-orange-600 hover:bg-orange-50"
            onClick={() => navigate(-1)}
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Kembali
          </Button>
        </div>
      </section>

      {/* Program Kerja Content */}
      <section className="pb-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.article
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden"
            >
              {/* Featured Image */}
              <div className="relative h-[-97] overflow-hidden">
                <ImageWithFallback
                  src={proker.image}
                  alt={proker.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-8 left-8 right-8">
                  <Badge className="bg-orange-500 text-white border-0 px-4 py-2 mb-4">
                    {proker.category}
                  </Badge>
                  <h1 className="text-white mb-2" style={{ fontSize: "42px", fontWeight: 700 }}>
                    {proker.title}
                  </h1>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 lg:p-12">

                {/* Quick Info Cards */}
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <Card className="border-l-4 border-l-orange-500 bg-gradient-to-br from-orange-50 to-white">
                      <CardContent className="pt-6">
                        <div className="flex items-center gap-3">
                          <div className="p-3 bg-orange-100 rounded-full">
                            <Calendar className="h-6 w-6 text-orange-600" />
                          </div>
                          <div>
                            <p className="text-gray-500" style={{ fontSize: "12px" }}>Waktu Pelaksanaan</p>
                            <p className="text-gray-900" style={{ fontSize: "16px", fontWeight: 600 }}>{proker.waktuPelaksanaan}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <Card className="border-l-4 border-l-blue-500 bg-gradient-to-br from-blue-50 to-white">
                      <CardContent className="pt-6">
                        <div className="flex items-center gap-3">
                          <div className="p-3 bg-blue-100 rounded-full">
                            <Users className="h-6 w-6 text-blue-600" />
                          </div>
                          <div>
                            <p className="text-gray-500" style={{ fontSize: "12px" }}>Program Kerja bidang:</p>
                            <p className="text-gray-900" style={{ fontSize: "16px", fontWeight: 600 }}>{proker.bidang}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <Card className="border-l-4 border-l-purple-500 bg-gradient-to-br from-purple-50 to-white">
                      <CardContent className="pt-6">
                        <div className="flex items-center gap-3">
                          <div className="p-3 bg-purple-100 rounded-full">
                            <PenTool className="h-6 w-6 text-purple-600" />
                          </div>
                          <div>
                            <p className="text-gray-500" style={{ fontSize: "12px" }}>Penulis</p>
                            <p className="text-gray-900" style={{ fontSize: "16px", fontWeight: 600 }}>{proker.penulis}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <Card className="border-l-4 border-l-cyan-500 bg-gradient-to-br from-cyan-50 to-white">
                      <CardContent className="pt-6">
                        <div className="flex items-center gap-3">
                          <div className="p-3 bg-cyan-100 rounded-full">
                            <FileText className="h-6 w-6 text-cyan-600" />
                          </div>
                          <div>
                            <p className="text-gray-500" style={{ fontSize: "12px" }}>Dokumentasi</p>
                            <p className="text-gray-900" style={{ fontSize: "16px", fontWeight: 600 }}>{proker.dokumentasi}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </div>

                {/* Description */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="mb-8"
                >
                  <h2 className="text-gray-900 mb-4 flex items-center gap-3" style={{ fontSize: "28px", fontWeight: 700 }}>
                    <Target className="h-7 w-7 text-orange-500" />
                    Deskripsi Program
                  </h2>
                  {/* Full Content */}
                <div className="prose prose-lg max-w-none">
                  {proker.content.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="text-gray-700 mb-6 leading-relaxed" style={{ fontSize: "16px" }}>
                      {paragraph}
                    </p>
                  ))}
                </div>
                </motion.div>

                {/* Objectives */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="mb-8"
                >
                  <h2 className="text-gray-900 mb-4" style={{ fontSize: "28px", fontWeight: 700 }}>
                    Tujuan Program
                  </h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      "Meningkatkan soft skill dan hard skill mahasiswa",
                      "Membangun kolaborasi antar mahasiswa",
                      "Memberikan manfaat bagi masyarakat",
                      "Implementasi Tri Dharma Perguruan Tinggi",
                    ].map((objective, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.7 + index * 0.1 }}
                        className="flex items-start gap-3 p-4 bg-orange-50 rounded-lg"
                      >
                        <div className="w-6 h-6 rounded-full bg-orange-500 text-white flex items-center justify-center flex-shrink-0 mt-0.5" style={{ fontSize: "12px", fontWeight: 700 }}>
                          {index + 1}
                        </div>
                        <p className="text-gray-700" style={{ fontSize: "15px" }}>{objective}</p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Contact CTA */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="bg-gradient-to-r from-orange-500 to-red-500 rounded-xl p-8 text-white"
                >
                  <h3 className="mb-2" style={{ fontSize: "24px", fontWeight: 700 }}>
                    Tertarik dengan Program Ini?
                  </h3>
                  <p className="mb-6" style={{ fontSize: "16px" }}>
                    Hubungi kami untuk informasi lebih lanjut atau jika ingin berpartisipasi dalam program ini.
                  </p>
                  <Button className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-6">
                    Hubungi Kami
                  </Button>
                </motion.div>
              </div>
            </motion.article>

            {/* Related Programs */}
            {relatedProker.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                className="mt-16"
              >
                <h2 className="text-gray-900 mb-8" style={{ fontSize: "28px", fontWeight: 700 }}>
                  Program Kerja Terkait
                </h2>
                <div className="grid md:grid-cols-3 gap-6">
                  {relatedProker.map((item) => (
                    <Link key={item.id} to={`/program-kerja/${item.id}`}>
                      <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 group h-full">
                        <div className="relative h-40 overflow-hidden">
                          <ImageWithFallback
                            src={item.image}
                            alt={item.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                          <div className="absolute top-3 left-3">
                            <Badge className="bg-blue-600 text-white border-0">
                              {item.category}
                            </Badge>
                          </div>
                        </div>
                        <CardHeader>
                          <CardTitle className="text-gray-900 group-hover:text-orange-600 transition-colors line-clamp-2" style={{ fontSize: "16px" }}>
                            {item.title}
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-gray-600 line-clamp-2" style={{ fontSize: "14px" }}>
                            {item.excerpt}
                          </p>
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
