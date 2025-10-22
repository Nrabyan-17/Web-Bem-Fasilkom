export interface ProkerItem {
  id: string;
  title: string;
  description: string;
  category: "Semua" | "Pelayanan" | "Pengembangan" | "Segara" | "Refleksi";
  image: string;
}

export const prokerData: ProkerItem[] = [
  {
    id: "1",
    title: "Nasihuddin Nur Fadilah",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    category: "Pelayanan",
    image: "https://images.unsplash.com/photo-1760098571181-705c0f9925fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwc3R1ZGVudHMlMjBldmVudHxlbnwxfHx8fDE3NjEwOTYzMjd8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: "2",
    title: "Advokasi Mahasiswa",
    description: "Program pelayanan advokasi dan pendampingan untuk mahasiswa yang membutuhkan bantuan dalam berbagai permasalahan akademik maupun non-akademik.",
    category: "Pelayanan",
    image: "https://images.unsplash.com/photo-1760098571181-705c0f9925fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwc3R1ZGVudHMlMjBldmVudHxlbnwxfHx8fDE3NjEwOTYzMjd8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: "3",
    title: "Kesejahteraan Mahasiswa",
    description: "Program yang fokus pada peningkatan kesejahteraan mahasiswa melalui berbagai kegiatan dan layanan yang mendukung kehidupan kampus.",
    category: "Pelayanan",
    image: "https://images.unsplash.com/photo-1760098571181-705c0f9925fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwc3R1ZGVudHMlMjBldmVudHxlbnwxfHx8fDE3NjEwOTYzMjd8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: "4",
    title: "Workshop & Pelatihan",
    description: "Serangkaian workshop dan pelatihan untuk mengembangkan soft skill dan hard skill mahasiswa di berbagai bidang.",
    category: "Pengembangan",
    image: "https://images.unsplash.com/photo-1728933102332-a4f1a281a621?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwc2VtaW5hcnxlbnwxfHx8fDE3NjEwNzM4NzB8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: "5",
    title: "FASILKOM Cup",
    description: "Kompetisi programming dan IT tahunan yang menjadi ajang bagi mahasiswa untuk mengasah kemampuan dan berkompetisi.",
    category: "Pengembangan",
    image: "https://images.unsplash.com/photo-1728933102332-a4f1a281a621?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwc2VtaW5hcnxlbnwxfHx8fDE3NjEwNzM4NzB8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: "6",
    title: "Pengabdian Masyarakat",
    description: "Program pengabdian kepada masyarakat sebagai bentuk implementasi Tri Dharma Perguruan Tinggi.",
    category: "Segara",
    image: "https://images.unsplash.com/photo-1652811435172-bf8bbe203469?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBzZXJ2aWNlJTIwdm9sdW50ZWVyc3xlbnwxfHx8fDE3NjEwOTYzMjd8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: "7",
    title: "Bakti Sosial",
    description: "Kegiatan bakti sosial untuk membantu masyarakat sekitar kampus dan meningkatkan kepedulian sosial mahasiswa.",
    category: "Segara",
    image: "https://images.unsplash.com/photo-1652811435172-bf8bbe203469?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBzZXJ2aWNlJTIwdm9sdW50ZWVyc3xlbnwxfHx8fDE3NjEwOTYzMjd8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: "8",
    title: "Evaluasi Kinerja BEM",
    description: "Program evaluasi berkala untuk mengukur dan meningkatkan kinerja BEM FASILKOM dalam melayani mahasiswa.",
    category: "Refleksi",
    image: "https://images.unsplash.com/photo-1760098571181-705c0f9925fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwc3R1ZGVudHMlMjBldmVudHxlbnwxfHx8fDE3NjEwOTYzMjd8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: "9",
    title: "Rapat Koordinasi",
    description: "Rapat koordinasi rutin untuk memastikan semua program kerja berjalan sesuai rencana dan timeline yang ditentukan.",
    category: "Refleksi",
    image: "https://images.unsplash.com/photo-1760098571181-705c0f9925fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwc3R1ZGVudHMlMjBldmVudHxlbnwxfHx8fDE3NjEwOTYzMjd8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
];
