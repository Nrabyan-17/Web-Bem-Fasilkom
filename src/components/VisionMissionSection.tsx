import { motion } from "motion/react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Target, Lightbulb } from "lucide-react";

export function VisionMissionSection() {
  const missions = [
    "Mengoptimalkan kinerja BEM FASILKOM sebagai fasilitator mahasiswa dalam pengembangan soft skill dan minat bakat",
    "Meningkatkan kualitas pelayanan advokasi dan kesejahteraan mahasiswa FASILKOM",
    "Mewujudkan BEM FASILKOM yang kolaboratif dengan seluruh organisasi mahasiswa",
    "Menjalankan program kerja yang kreatif, solutif, dan berlandaskan Tri Dharma Perguruan Tinggi",
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-orange-50/30 to-blue-50/20">
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
              VISI & MISI
            </h2>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="h-1 bg-orange-500"
            />
          </div>
        </motion.div>

        <div className="max-w-5xl mx-auto space-y-8">
          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="border-2 border-blue-200 shadow-xl hover:shadow-2xl transition-all duration-300 bg-gradient-to-br from-blue-50 to-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-blue-600">
                  <div className="p-3 bg-blue-100 rounded-full">
                    <Target className="h-6 w-6" />
                  </div>
                  <span style={{ fontSize: "28px" }}>Visi</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed" style={{ fontSize: "18px" }}>
                  Mewujudkan BEM Fakultas Ilmu Komputer yang <span className="text-blue-600" style={{ fontWeight: 700 }}>kreatif</span>, 
                  <span className="text-blue-600" style={{ fontWeight: 700 }}> solutif</span>, dan 
                  <span className="text-blue-600" style={{ fontWeight: 700 }}> kolaboratif</span> terhadap organisasi mahasiswa 
                  di UPN "Veteran" Jawa Timur yang berlandaskan Tri Dharma Perguruan Tinggi.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="border-2 border-orange-200 shadow-xl hover:shadow-2xl transition-all duration-300 bg-gradient-to-br from-orange-50 to-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-orange-600">
                  <div className="p-3 bg-orange-100 rounded-full">
                    <Lightbulb className="h-6 w-6" />
                  </div>
                  <span style={{ fontSize: "28px" }}>Misi</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {missions.map((mission, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 * index, duration: 0.5 }}
                      className="flex gap-3 items-start"
                    >
                      <div className="mt-1 flex-shrink-0">
                        <div className="w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center" style={{ fontWeight: 700 }}>
                          {index + 1}
                        </div>
                      </div>
                      <p className="text-gray-700 leading-relaxed flex-1" style={{ fontSize: "16px" }}>
                        {mission}
                      </p>
                    </motion.li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
