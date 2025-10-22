export interface NewsItem {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  category: string;
  image: string;
  author: string;
}

export const newsData: NewsItem[] = [
  {
    id: "1",
    title: "Pelantikan Kabinet Astranova BEM FASILKOM 2025",
    excerpt: "Pelantikan resmi Kabinet Astranova BEM Fakultas Ilmu Komputer periode 2025 telah dilaksanakan dengan khidmat di Auditorium UPNVJT...",
    content: `Pelantikan resmi Kabinet Astranova BEM Fakultas Ilmu Komputer periode 2025 telah dilaksanakan dengan khidmat di Auditorium UPNVJT pada tanggal 15 Oktober 2025. Acara yang dihadiri oleh seluruh civitas akademika Fakultas Ilmu Komputer ini menandai dimulainya periode kepengurusan baru BEM FASILKOM.

Dalam sambutannya, Ketua BEM FASILKOM 2025 menyampaikan visi dan misi Kabinet Astranova yang akan fokus pada pengembangan soft skill mahasiswa, peningkatan pelayanan advokasi dan kesejahteraan, serta kolaborasi dengan berbagai organisasi mahasiswa.

Kabinet Astranova terdiri dari berbagai departemen yang siap melayani dan mengayomi seluruh mahasiswa Fakultas Ilmu Komputer. Dengan semangat #SATUFASIL, diharapkan BEM FASILKOM dapat menjadi wadah yang kreatif, solutif, dan kolaboratif bagi seluruh mahasiswa.

Dekan Fakultas Ilmu Komputer juga memberikan dukungan penuh terhadap program kerja yang akan dijalankan oleh Kabinet Astranova. Beliau berharap BEM FASILKOM dapat terus berkontribusi dalam pengembangan mahasiswa baik dari sisi akademik maupun non-akademik.`,
    date: "15 Oktober 2025",
    category: "Event",
    image: "https://images.unsplash.com/photo-1760098571181-705c0f9925fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwc3R1ZGVudHMlMjBldmVudHxlbnwxfHx8fDE3NjEwOTYzMjd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    author: "Admin BEM FASILKOM",
  },
  {
    id: "2",
    title: "Kompetisi Programming FASILKOM Cup 2025",
    excerpt: "BEM FASILKOM mengadakan kompetisi programming tahunan yang diikuti oleh ratusan mahasiswa dari berbagai kampus...",
    content: `BEM FASILKOM kembali mengadakan kompetisi programming bergengsi, FASILKOM Cup 2025, yang diikuti oleh ratusan mahasiswa dari berbagai kampus di Jawa Timur. Kompetisi ini merupakan ajang tahunan yang menjadi salah satu program unggulan BEM FASILKOM dalam mengembangkan kemampuan pemrograman mahasiswa.

FASILKOM Cup 2025 terdiri dari berbagai kategori lomba mulai dari competitive programming, web development, mobile app development, hingga UI/UX design. Total hadiah yang diperebutkan mencapai puluhan juta rupiah.

Ketua panitia menyampaikan bahwa antusiasme peserta tahun ini sangat tinggi, terbukti dari jumlah pendaftar yang mencapai rekor baru. "Kami sangat bangga melihat antusiasme peserta yang terus meningkat setiap tahunnya. Ini menunjukkan bahwa FASILKOM Cup telah menjadi kompetisi yang ditunggu-tunggu," ujarnya.

Kompetisi akan dilaksanakan secara hybrid, dengan babak penyisihan online dan babak final offline di kampus UPN "Veteran" Jawa Timur. Para pemenang tidak hanya mendapatkan hadiah uang tunai, tetapi juga sertifikat dan kesempatan untuk berkolaborasi dalam berbagai project.`,
    date: "10 Oktober 2025",
    category: "Event",
    image: "https://images.unsplash.com/photo-1728933102332-a4f1a281a621?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwc2VtaW5hcnxlbnwxfHx8fDE3NjEwNzM4NzB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    author: "Admin BEM FASILKOM",
  },
  {
    id: "3",
    title: "Bakti Sosial Ramadhan Berbagi",
    excerpt: "Kegiatan bakti sosial dalam rangka menyambut bulan Ramadhan dengan membagikan sembako kepada masyarakat sekitar kampus...",
    content: `BEM FASILKOM UPNVJT berhasil menyelenggarakan kegiatan bakti sosial "Ramadhan Berbagi" yang memberikan bantuan sembako kepada ratusan keluarga kurang mampu di sekitar kampus. Kegiatan ini merupakan wujud kepedulian mahasiswa terhadap masyarakat sekitar.

Program Ramadhan Berbagi ini melibatkan seluruh anggota BEM FASILKOM dan relawan mahasiswa yang dengan sukarela turun langsung ke lapangan untuk mendistribusikan paket sembako. Setiap paket berisi kebutuhan pokok seperti beras, minyak goreng, gula, dan berbagai kebutuhan lainnya.

"Kegiatan ini adalah bentuk pengamalan salah satu Tri Dharma Perguruan Tinggi yaitu pengabdian kepada masyarakat. Kami berharap dapat memberikan manfaat nyata kepada masyarakat, terutama di bulan yang penuh berkah ini," ujar Ketua BEM FASILKOM.

Antusiasme masyarakat sangat tinggi dan mereka sangat berterima kasih atas bantuan yang diberikan. BEM FASILKOM berkomitmen untuk terus menjalankan program-program pengabdian masyarakat sebagai bagian dari tanggung jawab sosial mahasiswa.`,
    date: "5 Oktober 2025",
    category: "Pengabdian",
    image: "https://images.unsplash.com/photo-1652811435172-bf8bbe203469?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBzZXJ2aWNlJTIwdm9sdW50ZWVyc3xlbnwxfHx8fDE3NjEwOTYzMjd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    author: "Admin BEM FASILKOM",
  },
  {
    id: "4",
    title: "PENGMAS BERQURBAN",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo...",
    content: `Program Pengabdian Masyarakat BERQURBAN merupakan salah satu kegiatan rutin BEM FASILKOM yang dilaksanakan setiap tahunnya dalam rangka Idul Adha. Program ini bertujuan untuk berbagi kebahagiaan dengan masyarakat sekitar kampus melalui penyaluran daging qurban.

Kegiatan ini melibatkan partisipasi aktif dari mahasiswa, dosen, dan tenaga kependidikan Fakultas Ilmu Komputer. Tahun ini, BEM FASILKOM berhasil mengumpulkan beberapa ekor hewan qurban yang kemudian disalurkan kepada masyarakat yang membutuhkan.

Proses penyembelihan hingga pendistribusian dilakukan dengan sangat baik dan terorganisir. Para mahasiswa bekerja sama dalam tim untuk memastikan daging qurban sampai kepada yang berhak dengan cepat dan dalam kondisi baik.

"Melalui program BERQURBAN ini, kami tidak hanya berbagi daging qurban, tetapi juga berbagi kebahagiaan dan mempererat tali silaturahmi dengan masyarakat sekitar," ungkap koordinator kegiatan.`,
    date: "1 Oktober 2025",
    category: "Event",
    image: "https://images.unsplash.com/photo-1760098571181-705c0f9925fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwc3R1ZGVudHMlMjBldmVudHxlbnwxfHx8fDE3NjEwOTYzMjd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    author: "Admin BEM FASILKOM",
  },
  {
    id: "5",
    title: "Workshop Cybersecurity untuk Mahasiswa",
    excerpt: "BEM FASILKOM mengadakan workshop cybersecurity untuk meningkatkan kesadaran dan kemampuan mahasiswa dalam keamanan digital...",
    content: `BEM FASILKOM menyelenggarakan workshop cybersecurity yang menghadirkan praktisi keamanan siber dari industri. Workshop ini bertujuan untuk meningkatkan awareness dan skill mahasiswa dalam menghadapi berbagai ancaman keamanan digital.

Materi yang disampaikan meliputi fundamental cybersecurity, ethical hacking, network security, dan best practices dalam melindungi data pribadi. Para peserta juga mendapatkan hands-on experience melalui berbagai lab practice.

Workshop ini mendapat sambutan yang sangat baik dari mahasiswa, terbukti dari antusiasme peserta yang mencapai 200 orang. Para peserta aktif bertanya dan berdiskusi dengan narasumber mengenai berbagai kasus keamanan siber yang terjadi.

"Di era digital ini, pemahaman tentang cybersecurity sangat penting bagi mahasiswa Ilmu Komputer. Kami berharap workshop ini dapat memberikan bekal yang berguna untuk masa depan mereka," kata narasumber workshop.`,
    date: "28 September 2025",
    category: "Event",
    image: "https://images.unsplash.com/photo-1728933102332-a4f1a281a621?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwc2VtaW5hcnxlbnwxfHx8fDE3NjEwNzM4NzB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    author: "Admin BEM FASILKOM",
  },
  {
    id: "6",
    title: "Sosialisasi Beasiswa dan Pertukaran Pelajar",
    excerpt: "BEM FASILKOM mengadakan sosialisasi mengenai berbagai program beasiswa dan pertukaran pelajar yang tersedia untuk mahasiswa...",
    content: `BEM FASILKOM bekerja sama dengan Bagian Kemahasiswaan mengadakan sosialisasi komprehensif mengenai berbagai program beasiswa dan pertukaran pelajar yang tersedia untuk mahasiswa Fakultas Ilmu Komputer.

Acara ini menghadirkan alumni yang telah berhasil mendapatkan beasiswa dan mengikuti program pertukaran pelajar ke berbagai negara. Mereka berbagi pengalaman dan tips untuk mendapatkan kesempatan tersebut.

Berbagai jenis beasiswa diperkenalkan, mulai dari beasiswa dalam negeri hingga internasional, beasiswa prestasi, hingga beasiswa research. Peserta juga mendapatkan informasi tentang program Merdeka Belajar Kampus Merdeka (MBKM).

"Banyak mahasiswa yang sebenarnya berpotensi mendapatkan beasiswa namun tidak tahu informasinya. Melalui sosialisasi ini, kami ingin memastikan setiap mahasiswa memiliki akses informasi yang sama," ungkap koordinator acara.`,
    date: "25 September 2025",
    category: "Event",
    image: "https://images.unsplash.com/photo-1760098571181-705c0f9925fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwc3R1ZGVudHMlMjBldmVudHxlbnwxfHx8fDE3NjEwOTYzMjd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    author: "Admin BEM FASILKOM",
  },
];
