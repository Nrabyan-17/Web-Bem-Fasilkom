import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { ChevronDown, Loader2 } from "lucide-react";
import { AiOutlineSearch } from "react-icons/ai";
import { prokerData, ProkerItem } from "../data/prokerData";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { SearchSuggestions } from "../components/SearchSuggestions";


export function ProgramKerjaPage() {
  const [activeFilter, setActiveFilter] = useState<"Semua" | "Pelayanan" | "Pengembangan" | "Segera" | "Selesai" | "Refleksi">("Semua");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [searchInputFocused, setSearchInputFocused] = useState(false);
  const [showAll, setShowAll] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const filters: Array<"Semua" | "Pelayanan" | "Pengembangan" | "Segera" | "Selesai" | "Refleksi"> = [
    "Semua",
    "Pelayanan",
    "Pengembangan",
    "Segera", 
    "Selesai",
    "Refleksi",
  ];

  // Get search suggestions
  const getSuggestions = (query: string): ProkerItem[] => {
    if (!query || query.length < 2) return [];
    
    return prokerData.filter((item) => {
      const matchesTitle = item.title.toLowerCase().includes(query.toLowerCase());
      const matchesDescription = item.excerpt.toLowerCase().includes(query.toLowerCase());
      const matchesCategory = item.category.toLowerCase().includes(query.toLowerCase());
      return matchesTitle || matchesDescription || matchesCategory;
    }).slice(0, 5); // Limit to 5 suggestions
  };

  const suggestions = getSuggestions(searchQuery);

  // Handle search input change
  const handleSearchChange = (e: any) => {
    const value = e.target.value;
    setSearchQuery(value);
    setShowSuggestions(value.length >= 2 && searchInputFocused);
  };

  // Handle suggestion click
  const handleSuggestionClick = (suggestion: ProkerItem) => {
    setSearchQuery(suggestion.title);
    setShowSuggestions(false);
    setSearchInputFocused(false);
  };

  // Handle clear search
  const handleClearSearch = () => {
    setSearchQuery("");
    setShowSuggestions(false);
  };

  // Filter berdasarkan kategori dan pencarian
  const filteredProker = prokerData.filter((item) => {
    const matchesCategory = activeFilter === "Semua" || item.category === activeFilter;
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Limit tampilan program kerja
  const displayedProker = showAll ? filteredProker : filteredProker.slice(0, 6);

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
            <div className="inline-block">
              <h1 className="text-orange-500 mb-2" style={{ fontSize: "42px", fontWeight: 700 }}>
                PROGRAM KERJA
              </h1>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="h-1 bg-orange-500 mb-6"
              />
            </div>
            <p className="max-w-2xl mx-auto text-gray-600" style={{ fontSize: "15px" }}>
              Dengan program kerja yang dirancang untuk menyelenggarakan seluruh kewenangan dan
              memberikan kontribusi positif bagi lingkungan kampus dan masyarakat.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col md:flex-row gap-4 justify-center items-center max-w-5xl mx-auto"
          >
            {/* Search Bar - Lebih Panjang */}
            <div className="relative flex-1 max-w-2xl w-full">
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="Cari program kerja..."
                  value={searchQuery}
                  onChange={handleSearchChange}
                  onFocus={() => {
                    setSearchInputFocused(true);
                    if (searchQuery.length >= 2) {
                      setShowSuggestions(true);
                    }
                  }}
                  onBlur={() => {
                    // Delay to allow suggestion click
                    setTimeout(() => {
                      setSearchInputFocused(false);
                      setShowSuggestions(false);
                    }, 200);
                  }}
                  className="w-full pl-4 pr-10 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-orange-500 transition-colors duration-300"
                  style={{ fontSize: "14px", paddingLeft: "15px" }}
                />
                {/* <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                  <AiOutlineSearch size={20} color="#9CA3AF" />
                </div> */}
                
                {/* Search Suggestions */}
                <SearchSuggestions
                  searchQuery={searchQuery}
                  suggestions={suggestions}
                  onSuggestionClick={handleSuggestionClick}
                  onClearSearch={handleClearSearch}
                  isVisible={showSuggestions && suggestions.length > 0}
                  maxSuggestions={5}
                />
              </div>
            </div>

            {/* Category Dropdown - Di sebelah kanan */}
            <div className="relative flex-shrink-0">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                onBlur={() => setTimeout(() => setIsDropdownOpen(false), 100)}
                className="bg-white border-2 border-orange-500 text-orange-600 hover:bg-orange-50 px-6 py-3 rounded-lg shadow-md transition-all duration-300 flex items-center gap-3 min-w-[200px] w-full md:w-auto"
                style={{ fontSize: "14px", fontWeight: 600 }}
              >
                <span>Kategori: {activeFilter}</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Dropdown Menu */}
              <AnimatePresence>
                {isDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-xl z-50"
                  >
                    {filters.map((filter) => (
                      <button
                        key={filter}
                        onClick={() => {
                          setActiveFilter(filter);
                          setIsDropdownOpen(false);
                        }}
                        className={`w-full text-left px-4 py-3 transition-colors duration-200 border-b border-gray-100 last:border-b-0 ${
                          activeFilter === filter
                            ? "bg-orange-50 text-orange-600"
                            : "hover:bg-gray-50 text-gray-700"
                        }`}
                        style={{ fontSize: "14px" }}
                      >
                        {filter}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Results Summary */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-center mt-6"
          >
            <p className="text-gray-600 pt-4" style={{ fontSize: "14px" }}>
              Menampilkan {displayedProker.length} dari {filteredProker.length} program kerja
              {searchQuery && ` untuk pencarian "${searchQuery}"`}
              {activeFilter !== "Semua" && ` dalam kategori "${activeFilter}"`}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Program Kerja Grid */}
      <section className="py-12 pb-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto"
          >
            {displayedProker.map((item, index) => (
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
                      {item.excerpt}
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

          {/* Tombol Lihat Program Kerja Lainnya */}
          {!showAll && filteredProker.length > 6 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
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
                  className="bg-orange-500 text-white hover:bg-orange-600 transition-all duration-300 px-8 py-6 rounded-lg shadow-lg hover:shadow-xl disabled:opacity-70 disabled:cursor-not-allowed"
                  style={{ fontSize: "14px", fontWeight: 600 }}
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
                      "Lihat program kerja lainnya"
                    )}
                  </span>
                </Button>
              </motion.div>
            </motion.div>
          )}

          {filteredProker.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <div className="max-w-md mx-auto">
                <div className="mb-4 flex justify-center">
                  <AiOutlineSearch size={64} color="#D1D5DB" />
                </div>
                <h3 className="text-gray-600 mb-2" style={{ fontSize: "18px", fontWeight: 600 }}>
                  Tidak Ada Program Kerja Ditemukan
                </h3>
                <p className="text-gray-500" style={{ fontSize: "14px" }}>
                  Coba ubah kata kunci pencarian atau pilih kategori yang berbeda.
                </p>
                {(searchQuery || activeFilter !== "Semua") && (
                  <button
                    onClick={() => {
                      setSearchQuery("");
                      setActiveFilter("Semua");
                    }}
                    className="mt-4 text-orange-500 hover:text-orange-600 underline"
                    style={{ fontSize: "14px" }}
                  >
                    Reset Filter
                  </button>
                )}
              </div>
            </motion.div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
