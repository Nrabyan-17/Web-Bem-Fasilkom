import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ArrowRight, Calendar } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { newsData } from "../data/newsData";

export function NewsSection() {
  // Display only the first 3 news items
  const news = newsData.slice(0, 3);

  return (
    <section id="berita" className="py-20 bg-gradient-to-b from-white to-orange-50/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block">
            <h2 className="text-orange-500 mb-2" style={{ fontSize: "40px", fontWeight: 700 }}>
              BERITA TERBARU
            </h2>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="h-1 bg-orange-500"
            />
          </div>
          <p className="text-gray-600 mt-4" style={{ fontSize: "16px" }}>
            Informasi terkini seputar kegiatan dan prestasi BEM FASILKOM
          </p>
        </motion.div>

        {/* News Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {news.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 group cursor-pointer h-full flex flex-col">
                <Link to={`/berita/${item.id}`}>
                  <div className="relative h-48 overflow-hidden bg-gradient-to-br from-orange-400 to-orange-600">
                    <ImageWithFallback
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-orange-500 text-white border-0">
                        {item.category}
                      </Badge>
                    </div>
                  </div>
                </Link>
                <CardHeader className="flex-1">
                  <div className="flex items-center gap-2 text-gray-500 mb-2">
                    <Calendar className="h-4 w-4" />
                    <span style={{ fontSize: "14px" }}>{item.date}</span>
                  </div>
                  <Link to={`/berita/${item.id}`}>
                    <CardTitle className="text-gray-900 group-hover:text-orange-600 transition-colors line-clamp-2" style={{ fontSize: "20px" }}>
                      {item.title}
                    </CardTitle>
                  </Link>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4 line-clamp-3" style={{ fontSize: "14px" }}>
                    {item.excerpt}
                  </p>
                  <Link to={`/berita/${item.id}`}>
                    <Button
                      variant="ghost"
                      className="text-orange-500 hover:text-orange-600 hover:bg-orange-50 p-0 h-auto group/btn"
                    >
                      Baca Selengkapnya
                      <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link to="/berita">
            <Button
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Lihat Semua Berita
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
