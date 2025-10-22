import { motion } from "motion/react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Calendar, MapPin, Clock } from "lucide-react";

export function AgendaSection() {
  const agendas = [
    {
      title: "Rapat Koordinasi Anggota",
      date: "28 Oktober 2025",
      time: "13:00 - 15:00 WIB",
      location: "Gedung Fasilkom Lt. 3",
      category: "Internal",
      color: "bg-blue-500",
    },
    {
      title: "Seminar Teknologi AI",
      date: "5 November 2025",
      time: "09:00 - 12:00 WIB",
      location: "Auditorium UPNVJT",
      category: "Acara",
      color: "bg-orange-500",
    },
    {
      title: "Bakti Sosial Mahasiswa",
      date: "12 November 2025",
      time: "07:00 - 14:00 WIB",
      location: "Desa Kebonagung",
      category: "Pengabdian",
      color: "bg-green-500",
    },
    {
      title: "Workshop Web Development",
      date: "20 November 2025",
      time: "13:00 - 17:00 WIB",
      location: "Lab Komputer Fasilkom",
      category: "Workshop",
      color: "bg-purple-500",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-blue-50/20 to-white">
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
              AGENDA
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
            Agenda dan kegiatan terkini BEM FASILKOM UPNVJT
          </p>
        </motion.div>

        {/* Agenda Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {agendas.map((agenda, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="border-l-4 border-l-orange-500 hover:shadow-xl transition-all duration-300 group cursor-pointer h-full">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-gray-900 group-hover:text-orange-600 transition-colors" style={{ fontSize: "20px" }}>
                      {agenda.title}
                    </CardTitle>
                    <Badge className={`${agenda.color} text-white border-0`}>
                      {agenda.category}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-2 text-gray-600">
                    <Calendar className="h-4 w-4 text-orange-500" />
                    <span style={{ fontSize: "14px" }}>{agenda.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Clock className="h-4 w-4 text-orange-500" />
                    <span style={{ fontSize: "14px" }}>{agenda.time}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <MapPin className="h-4 w-4 text-orange-500" />
                    <span style={{ fontSize: "14px" }}>{agenda.location}</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
