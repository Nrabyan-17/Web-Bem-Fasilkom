import { motion } from "motion/react";
import { Link } from "react-router-dom";
import React from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Calendar, Loader2 } from "lucide-react";
import { newsData } from "../data/newsData";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function NewsListPage() {
  const [showAll, setShowAll] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const displayedNews = showAll ? newsData : newsData.slice(0, 6);
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Header */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-orange-500 via-orange-600 to-red-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center text-white"
          >
            <h1 className="mb-4" style={{ fontSize: "48px", fontWeight: 700 }}>
              FASILKOM NEWS
            </h1>
            <p className="max-w-2xl mx-auto" style={{ fontSize: "18px" }}>
              Pusat informasi dan layanan terpadu dari BEM Fasilkom UPN "Veteran" Jawa Timur untuk seluruh Keluarga Mahasiswa Fasilkom.
            </p>
          </motion.div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Section Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-block">
              <h2 className="text-orange-500 mb-2" style={{ fontSize: "40px", fontWeight: 700 }}>
                BERITA BEM
              </h2>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="h-1 bg-orange-500"
              />
            </div>
          </motion.div>

          {/* News Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {displayedNews.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 group h-full flex flex-col">
                  <div className="relative h-48 overflow-hidden bg-gradient-to-br from-orange-400 to-orange-600">
                    <ImageWithFallback
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-orange-500 text-white border-0">
                        {item.category}
                      </Badge>
                    </div>
                  </div>
                  <CardHeader className="flex-1">
                    <div className="flex items-center gap-2 text-gray-500 mb-2">
                      <Calendar className="h-4 w-4" />
                      <span style={{ fontSize: "14px" }}>{item.date}</span>
                    </div>
                    <CardTitle className="text-gray-900 group-hover:text-orange-600 transition-colors line-clamp-2" style={{ fontSize: "20px" }}>
                      {item.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4 line-clamp-3" style={{ fontSize: "14px" }}>
                      {item.excerpt}
                    </p>
                    <Link to={`/berita/${item.id}`}>
                      <Button
                        variant="outline"
                        className="w-full border-2 border-orange-500 text-orange-600 hover:bg-orange-600 hover:text-white transition-all duration-300"
                      >
                        Lihat Selengkapnya
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Load More Button */}
          {!showAll && newsData.length > 6 && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center mt-12"
            >
              <motion.div
                whileHover={!isLoading ? { scale: 1.05 } : {}}
                whileTap={!isLoading ? { scale: 0.95 } : {}}
              >
                <Button
                  onClick={() => {
                    setIsLoading(true);
                    setTimeout(() => {
                      setShowAll(true);
                      setIsLoading(false);
                    }, 1000);
                  }}
                  disabled={isLoading}
                  className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  <span className="flex items-center justify-center">
                    {isLoading ? (
                      <>
                        <motion.div
                          animate={{ 
                            rotate: 360
                          }}
                          transition={{
                            rotate: { duration: 1, repeat: Infinity, ease: "linear" }
                          }}
                          className="mr-2"
                        >
                          <Loader2 className="h-5 w-5" />
                        </motion.div>
                        <span>Memuat...</span>
                      </>
                    ) : (
                      "Lihat Berita Lainnya"
                    )}
                  </span>
                </Button>
              </motion.div>
            </motion.div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
