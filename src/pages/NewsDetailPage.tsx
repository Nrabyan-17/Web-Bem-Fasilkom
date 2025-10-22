import { motion } from "motion/react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Calendar, User, ArrowLeft, Clock } from "lucide-react";
import { newsData } from "../data/newsData";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function NewsDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const news = newsData.find((item) => item.id === id);

  // Scroll to top when the page loads or when ID changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [id]);

  if (!news) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="container mx-auto px-4 lg:px-8 py-32 text-center">
          <h1 className="text-gray-900 mb-4" style={{ fontSize: "32px", fontWeight: 700 }}>
            Berita Tidak Ditemukan
          </h1>
          <Link to="/berita">
            <Button className="bg-orange-500 hover:bg-orange-600 text-white">
              Kembali ke Daftar Berita
            </Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const relatedNews = newsData
    .filter((item) => item.id !== id && item.category === news.category)
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

      {/* News Content */}
      <section className="pb-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.article
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden"
            >
              {/* Featured Image */}
              <div className="relative h-96 overflow-hidden">
                <ImageWithFallback
                  src={news.image}
                  alt={news.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-6 left-6">
                  <Badge className="bg-orange-500 text-white border-0 px-4 py-2">
                    {news.category}
                  </Badge>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 lg:p-12">
                {/* Meta Information */}
                <div className="flex flex-wrap gap-6 mb-6 text-gray-600">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-orange-500" />
                    <span style={{ fontSize: "14px" }}>{news.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <User className="h-5 w-5 text-orange-500" />
                    <span style={{ fontSize: "14px" }}>{news.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-orange-500" />
                    <span style={{ fontSize: "14px" }}>5 menit baca</span>
                  </div>
                </div>

                {/* Title */}
                <h1 className="text-gray-900 mb-6" style={{ fontSize: "36px", fontWeight: 700 }}>
                  {news.title}
                </h1>

                {/* Excerpt */}
                <p className="text-gray-600 mb-8 p-4 bg-orange-50 border-l-4 border-orange-500 rounded" style={{ fontSize: "18px", fontWeight: 500 }}>
                  {news.excerpt}
                </p>

                {/* Full Content */}
                <div className="prose prose-lg max-w-none">
                  {news.content.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="text-gray-700 mb-6 leading-relaxed" style={{ fontSize: "16px" }}>
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </motion.article>

            {/* Related News */}
            {relatedNews.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mt-16"
              >
                <h2 className="text-gray-900 mb-8" style={{ fontSize: "28px", fontWeight: 700 }}>
                  Berita Terkait
                </h2>
                <div className="grid md:grid-cols-3 gap-6">
                  {relatedNews.map((item) => (
                    <Card key={item.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 group h-full flex flex-col">
                      <div className="relative h-48 overflow-hidden">
                        <ImageWithFallback
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <CardHeader className="flex-grow">
                        <div className="flex items-center gap-2 text-gray-500 mb-2">
                          <Calendar className="h-4 w-4" />
                          <span style={{ fontSize: "12px" }}>{item.date}</span>
                        </div>
                        <CardTitle className="text-gray-900 group-hover:text-orange-600 transition-colors line-clamp-2 mb-3" style={{ fontSize: "16px" }}>
                          {item.title}
                        </CardTitle>
                        <p className="text-gray-600 line-clamp-3 mb-4" style={{ fontSize: "14px" }}>
                          {item.excerpt}
                        </p>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <Link to={`/berita/${item.id}`}>
                          <Button 
                            className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white shadow-md hover:shadow-lg transition-all duration-300"
                          >
                            Baca Selengkapnya
                          </Button>
                        </Link>
                      </CardContent>
                    </Card>
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
