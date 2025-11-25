export interface ProkerItem {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: "Semua" | "Pelayanan" | "Pengembangan" | "Segara" | "Selesai" | "Refleksi";
  image: string;
  waktuPelaksanaan: string;
  bidang: string;
  penulis: string;
  dokumentasi: string;
}

// import program kerja:

import fastalk from '../assets/proker/fastalk.jpeg' 
import fkbm from '../assets/proker/fkbmik.jpeg'
import designverse from '../assets/proker/designverse.jpeg'
import bemexchange from '../assets/berita/bemexchangefisip.jpeg'
import fusikom from '../assets/berita/fusikom.jpeg'
import sambang from '../assets/sambang.jpeg'
import pp from '../assets/proker/pp.jpeg'
import diesNat from '../assets/proker/diesnat.jpeg'

export const prokerData: ProkerItem[] = [
  {
    id: "1",
    title: "FKBM-IK 2025: Merajut Kolaborasi dan Kebersamaan",
    excerpt: "Festival Keluarga Besar Mahasiswa Ilmu Komputer (FKBM-IK) UPN \"Veteran\" Jawa Timur tahun 2025 telah sukses diselenggarakan sebagai ajang kebersamaan berskala nasional yang memperta mahasiswa Ilmu Komputer dari berbagai kampus UPN se-Indonesia.",
    content: `Festival Keluarga Besar Mahasiswa Ilmu Komputer (FKBM-IK) UPN "Veteran" Jawa Timur tahun 2025 telah sukses diselenggarakan sebagai ajang kebersamaan berskala nasional yang mempertemukan mahasiswa Ilmu Komputer dari berbagai kampus UPN se-Indonesia. Dengan menjadi tuan rumah, UPN "Veteran" Jawa Timur berhasil menghadirkan momentum penting untuk mempererat hubungan kekeluargaan antar civitas akademika, mulai dari mahasiswa, dosen, alumni, hingga staf. 

Kegiatan yang berlangsung pada 8–10 Agustus 2025 ini diisi dengan serangkaian acara yang meriah dan penuh makna. Selama tiga hari, para peserta mengikuti forum diskusi, kompetisi, hingga kegiatan kebersamaan yang membangun komunikasi, kolaborasi, dan semangat solidaritas. Suasana hangat dan akrab terasa di setiap momen, menggambarkan eratnya tali persaudaraan antar mahasiswa Ilmu Komputer UPN dari berbagai daerah. Kegiatan ini merupakan program kerja dari Departemen Hubungan dan Kerja Sama Bidang Luar Negeri Badan Eksekutif Mahasiswa Fakultas Ilmu Komputer UPN “Veteran” Jawa Timur. Melalui program ini, BEM Fasilkom berhasil mewujudkan salah satu misinya, yaitu membangun hubungan strategis dan memperkuat jaringan kolaborasi antar kampus. FKBM-IK menjadi bukti nyata bahwa kerja sama dan komunikasi lintas institusi dapat menghadirkan sinergi positif yang berdampak luas.

Dari rangkaian kegiatan ini, terjalin ikatan kekeluargaan yang semakin erat antar mahasiswa Ilmu Komputer UPN se-Indonesia. Festival ini tidak hanya memperluas jejaring, tetapi juga melahirkan semangat kolaborasi baru yang siap diwujudkan dalam program bersama lintas kampus. Kehangatan interaksi, pertukaran ide, dan energi kebersamaan yang tercipta menjadi bukti bahwa FKBM-IK bukan sekadar acara tahunan, melainkan ruang penguatan identitas, solidaritas, dan kontribusi nyata mahasiswa Ilmu Komputer bagi kemajuan bersama.`,
    category: "Pelayanan",
    image: fkbm,
    waktuPelaksanaan: "8–10 Agustus 2025",
    bidang: "Luar Negeri",
    penulis: "Bidang Publikasi & Informasi",
    dokumentasi: "PDD FKBM-IK",
  },
  {
    id: "2",
    title: "BEM Exchange 2025: Wadah Pertukaran Gagasan dan Penguatan Kolaborasi Antar Organisasi Mahasiswa.",
    excerpt: "Dalam upaya meningkatkan wawasan dan kapasitas organisasi, Badan Eksekutif Mahasiswa (BEM) Fakultas Ilmu Komputer khususnya dari Departemen Hubungan dan Kerja Sama (HDK) Bidang Luar Negeri menyelenggarakan kegiatan BEM Exchange 2025 sebagai bagian dari program studi banding antarorganisasi mahasiswa.",
    content: `Dalam upaya meningkatkan wawasan dan kapasitas organisasi, Badan Eksekutif Mahasiswa (BEM) Fakultas Ilmu Komputer melalui Departemen Hubungan dan Kerja Sama (HDK) Bidang Luar Negeri menyelenggarakan BEM Exchange 2025 sebagai bagian dari program studi banding antarorganisasi mahasiswa. Kegiatan ini bertujuan untuk memperluas pengetahuan, berbagi pengalaman, serta memperkuat jejaring antar-BEM di lingkungan perguruan tinggi. Melalui BEM Exchange, diharapkan tercipta ruang kolaboratif yang memungkinkan setiap pihak untuk saling belajar, bertukar ide, dan menginspirasi dalam mengembangkan tata kelola organisasi yang adaptif dan berdampak.

Kegiatan BEM Exchange 2025 dilaksanakan pada Sabtu, 31 Mei 2025, bertempat di Ruang Seminar Fakultas Ilmu Komputer UPN “Veteran” Jawa Timur. Dalam pelaksanaannya, BEM FASILKOM menerima kunjungan dari BEM FISIP UPNVJT sebagai mitra dalam kegiatan pertukaran gagasan ini. Suasana diskusi berlangsung hangat dan interaktif, dengan fokus pada berbagi pengalaman seputar sistem kerja, struktur organisasi, serta strategi pelaksanaan program kerja yang memberikan nilai manfaat bagi mahasiswa di masing-masing fakultas.

Melalui rangkaian acara Focus Group Discussion (FGD), BEM FASILKOM dan BEM FISIP saling bertukar pandangan mengenai mekanisme kerja organisasi, pola komunikasi internal, pembagian divisi, hingga inovasi program unggulan yang telah dijalankan. Pertukaran gagasan ini tidak hanya memberikan wawasan baru bagi BEM FASILKOM, tetapi juga membuka perspektif baru bagi BEM FISIP terhadap praktik dan inovasi yang diterapkan di lingkungan FASILKOM. Kegiatan ini menjadi momen berharga untuk memperkuat relasi lintas fakultas serta membangun ekosistem organisasi mahasiswa yang kolaboratif, progresif, dan berorientasi pada pengembangan kapasitas bersama. Melalui semangat kolaborasi ini, kedua belah pihak menunjukkan bahwa pertumbuhan organisasi akan lebih bermakna ketika dijalankan bersama, dalam semangat sinergi dan kemajuan bersama mahasiswa UPN “Veteran” Jawa Timur.`,
    category: "Pelayanan",
    image: bemexchange,
    waktuPelaksanaan: "31 Mei 2025",
    bidang: "Luar Negeri",
    penulis: "Bidang Publikasi & Informasi",
    dokumentasi: "Biro Media & Informasi",
  },
  {
    id: "3",
    title: "Designverse 2025: Wadah Kreativitas dan Pembelajaran Desain Grafis di Era Digital",
    excerpt: "Biro Media dan Informasi BEM FASILKOM menyelenggarakan Designverse 2025, program yang memadukan webinar desain dengan narasumber profesional industri kreatif dan kompetisi desain poster bertema teknologi. Event ini dirancang untuk mengembangkan skill visual communication mahasiswa dan memfasilitasi networking dengan desainer profesional.",
    content: `Biro Media dan Informasi BEM FASILKOM dengan bangga telah sukses menyelenggarakan Designverse 2025, sebuah program kerja yang memadukan dua kegiatan utama: Webinar Design dan Kompetisi Design. Rangkaian kegiatan ini berlangsung mulai dari 20 Juni hingga 30 Juli 2025, dan berhasil menarik antusiasme tinggi dari para peserta yang memiliki minat di bidang desain grafis.

Melalui Webinar Design, peserta mendapatkan kesempatan untuk belajar langsung dari para praktisi profesional di dunia desain grafis. Para pembicara berbagi wawasan mengenai tren desain terkini, pentingnya identitas visual dalam komunikasi digital, serta tips menghadapi dinamika industri kreatif di tengah perkembangan teknologi yang pesat.
Sesi ini menjadi momen inspiratif bagi para peserta untuk memperluas perspektif dan memperdalam kemampuan mereka dalam merancang karya yang relevan dan berdaya saing.

Tidak hanya berhenti di sesi pembelajaran, Designverse juga menghadirkan Kompetisi Design sebagai wadah bagi peserta untuk menyalurkan ide dan kreativitas mereka. Melalui proses penjurian yang ketat, terpilihlah karya-karya terbaik yang mencerminkan inovasi dan orisinalitas dalam desain. Menariknya, hasil karya pemenang kompetisi kemudian diimplementasikan menjadi produk resmi BEM FASILKOM, yakni Fasilkom Merch, yang sekaligus menjadi bentuk nyata dari kolaborasi antara mahasiswa kreatif dan organisasi kampus.

Dengan berakhirnya seluruh rangkaian kegiatan, Designverse 2025 dinilai berhasil mencapai tujuannya secara holistik tidak hanya memberikan wawasan teoritis melalui webinar, tetapi juga mengaplikasikannya secara praktis melalui kompetisi dan implementasi karya.
Program ini turut berkontribusi dalam meningkatkan kompetensi peserta di bidang desain grafis, serta memberikan ruang bagi desainer muda untuk berkembang dan berkontribusi dalam lingkungan akademik.

Kesuksesan Designverse 2025 menjadi bukti bahwa mahasiswa FASILKOM tidak hanya unggul di bidang teknologi dan informatika, tetapi juga memiliki kreativitas tinggi di ranah seni dan desain. Melalui kegiatan ini, diharapkan akan terus lahir talenta-talenta baru yang siap berinovasi dan membawa warna baru bagi dunia desain grafis, baik di lingkungan kampus maupun industri profesional.`,
    category: "Pelayanan",
    image: designverse,
    waktuPelaksanaan: "20 Juni–30 Juli 2025",
    bidang: "Multimedia",
    penulis: "Bidang Publikasi & Informasi",
    dokumentasi: "PDD Designverse",
  },
  {
    id: "4",
    title: "Sambang Liponsos 2025: Tumbuh Bersama Pejuang Mental Health Lewat Warna dan Tanah ",
    excerpt: "Program bakti sosial inovatif yang menggabungkan kegiatan art therapy dan berkebun organik bersama penghuni panti rehabilitasi mental. Melalui aktivitas melukis dan bercocok tanam, program ini bertujuan mendukung proses pemulihan mental health dengan pendekatan holistik yang melibatkan kreativitas dan koneksi dengan alam.",
    content: `Badan Eksekutif Mahasiswa Fakultas Ilmu Komputer kembali melaksanakan agenda sosial bertajuk Sambang Liponsos 2025 dengan tema “Tumbuh Bersama Pejuang Mental Health Lewat Warna dan Tanah.” Kegiatan yang diselenggarakan oleh Departemen Sosial dan Politik Bidang Pengabdian Masyarakat ini bertujuan untuk mendukung kesehatan mental para penghuni Liponsos Keputih melalui pendekatan kreatif dan rekreatif berbasis seni serta interaksi sosial. Melalui kegiatan ini, para relawan yang terdiri dari pengurus BEM dan Keluarga Mahasiswa Fasilkom tidak hanya memberikan dukungan psikososial, tetapi juga belajar memahami pentingnya empati, solidaritas, dan kontribusi nyata terhadap kesejahteraan kelompok rentan di masyarakat.

Kegiatan Sambang Liponsos dilaksanakan pada tanggal 28 Juni 2025 secara langsung di Liponsos Keputih, Surabaya. Dengan melibatkan berbagai elemen mahasiswa, kegiatan ini berlangsung dalam suasana hangat dan penuh semangat kebersamaan. Para peserta berinteraksi langsung dengan penghuni melalui berbagai aktivitas seperti melukis bersama, menyanyi, serta makan siang bersama. Pendekatan yang menggabungkan seni dan rekreasi ini menciptakan suasana yang inklusif, menyenangkan, dan menumbuhkan rasa saling menghargai antara mahasiswa serta penghuni Liponsos.

Seluruh rangkaian acara berjalan dengan lancar berkat antusiasme tinggi dari seluruh peserta dan relawan. Melalui kegiatan ini, baik penghuni Liponsos maupun relawan dari KM Fasilkom memperoleh pengalaman berharga dan menyenangkan. Selain mempererat rasa kepedulian sosial, kegiatan ini juga meningkatkan kesadaran mahasiswa terhadap pentingnya isu kesehatan mental di masyarakat. Sambang Liponsos 2025 menjadi wujud nyata semangat mahasiswa Fasilkom untuk tumbuh bersama dan berkontribusi positif bagi sesama melalui warna, tanah, dan empati.`,
    category: "Pengembangan",
    image: sambang,
    waktuPelaksanaan: "28 Juni 2025",
    bidang: "Pengabdian Masyarakat",
    penulis: "Bidang Publikasi & Informasi",
    dokumentasi: "PDD Sambang Liponsos",
  },
  {
    id: "5",
    title: "Pelatihan Pemandu 2025: Mencetak Kader FASILKOM yang Siap Menginspirasi ",
    excerpt: "Program intensif selama 3 hari yang dirancang khusus untuk melatih mahasiswa menjadi pemandu dalam berbagai acara FASILKOM. Pelatihan meliputi public speaking, event management, protokoler, dan leadership skills. Peserta akan mendapat sertifikat dan kesempatan menjadi official guide dalam acara-acara besar fakultas.",
    content: `Pelatihan Pemandu 2025 adalah program pengembangan SDM yang komprehensif untuk mencetak kader-kader handal di FASILKOM. Program tiga hari ini menggabungkan teori dan praktik intensif dalam bidang public speaking, master of ceremony, protokoler acara resmi, dan manajemen event. Peserta akan mendapat training langsung dari praktisi berpengalaman, termasuk MC profesional dan event organizer senior. Materi meliputi teknik berbicara di depan umum, penguasaan panggung, improvisasi, etika protokoler, dan crisis management. Di hari terakhir, peserta akan praktik langsung memandu mock event untuk evaluasi keterampilan. Lulusan program ini akan menjadi pool talent untuk berbagai acara besar FASILKOM dan mendapat prioritas untuk mengikuti event eksternal sebagai representasi fakultas.

Kegiatan ini dirancang sebagai wadah pengembangan diri bagi mahasiswa yang memiliki semangat kontribusi dan keinginan untuk menjadi bagian dari proses pembinaan mahasiswa baru di lingkungan Fakultas Ilmu Komputer. Melalui berbagai materi dan pelatihan, peserta didorong untuk memahami makna seorang pemandu, bukan hanya sebagai fasilitator kegiatan, tetapi juga sebagai representasi nilai-nilai utama fakultas seperti integritas, tanggung jawab, solidaritas, dan profesionalitas.

Selama pelaksanaan pelatihan, peserta mendapatkan pembekalan dari berbagai narasumber berpengalaman, baik dari internal kampus maupun eksternal yang kompeten di bidang kepemimpinan dan manajemen organisasi. Materi yang disampaikan mencakup dinamika kelompok, komunikasi efektif, manajemen konflik, public speaking, dan penanaman nilai-nilai dasar organisasi mahasiswa. Selain itu, peserta juga dilatih untuk memiliki sensitivitas sosial, empati, serta kemampuan beradaptasi terhadap situasi yang dinamis di lapangan.

Pelatihan ini tidak hanya berorientasi pada peningkatan kemampuan teknis, tetapi juga membangun kedewasaan emosional dan mental. Setiap sesi diupayakan agar peserta mampu merefleksikan perannya sebagai agen pembentuk budaya positif di lingkungan Fakultas Ilmu Komputer. Dengan pendekatan pelatihan yang partisipatif, para calon pemandu diajak untuk saling mengenal, bekerja sama, serta menumbuhkan rasa kekeluargaan yang kuat.

Melalui kegiatan Pelatihan Pemandu ini, diharapkan lahir pemandu yang tangguh, berkarakter, dan siap untuk menjadi garda terdepan dalam mengemban tanggung jawabnya sebagai penggerak mahasiswa baru nantinya. Kegiatan ini menjadi pijakan awal bagi mahasiswa untuk mengenal lebih dalam makna kaderisasi yang sesungguhnya — bukan hanya sebagai kegiatan formalitas, melainkan sebagai proses pembentukan identitas, kepemimpinan, dan dedikasi.

Dengan semangat “Bersama, Bertumbuh, dan Menginspirasi”, Pelatihan Pemandu 2025 menjadi ruang pertama bagi kader untuk menyalakan langkah awal perjalanan panjangnya dalam berkontribusi bagi Fakultas Ilmu Komputer, sekaligus menanamkan nilai-nilai luhur yang akan menjadi bekal berharga di kegiatan berikutnya dan di masa perkuliahan mereka ke depan.`,
    category: "Pengembangan",
    image: pp,
    waktuPelaksanaan: "2025",
    bidang: "Kaderisasi",
    penulis: "Bidang Publikasi & Informasi",
    dokumentasi: "PDD Pelatihan Pemandu",
  },
  {
    id: "6",
    title: "Fasilkom Talk 2025: Membuka Wawasan Karier di Dunia IT",
    excerpt: "Seminar career development yang menghadirkan praktisi senior dari industri teknologi terkemuka seperti Gojek, Tokopedia, dan startup unicorn lainnya. Event ini membahas roadmap karier programmer, tips interview, skill yang dibutuhkan industri, dan sharing pengalaman nyata dari fresh graduate hingga tech lead berpengalaman.",
    content: `Fakultas Ilmu Komputer sukses menyelenggarakan Fasilkom Talk 2025 dengan tema “Roadmap Karier Programmer: Dari Mahasiswa ke Profesional IT”. Kegiatan ini merupakan salah satu program kerja dari Departemen PSDM (Pemberdayaan Sumber Daya Mahasiswa) Bidang Litbang (Penelitian dan Pengembangan) yang bertujuan memberikan pemahaman mendalam kepada mahasiswa mengenai berbagai jalur karir di bidang teknologi informasi. Dalam sesi ini, narasumber yang merupakan profesional di dunia IT membagikan pengalaman serta wawasan seputar profesi di industri teknologi, mulai dari pengembang perangkat lunak hingga spesialis keamanan siber. Selain itu, peserta juga diperkenalkan pada pentingnya penguasaan keterampilan teknis dan non-teknis yang menjadi bekal utama dalam menghadapi dunia kerja.

Kegiatan Fasilkom Talk 2025 dilaksanakan pada tanggal 3 Juli 2025 secara online dan terbuka untuk umum. Format daring ini memungkinkan partisipasi dari mahasiswa berbagai daerah, sehingga memperluas jangkauan audiens dan memperkaya diskusi. Acara berlangsung dengan suasana interaktif, di mana peserta aktif mengajukan pertanyaan serta berdiskusi langsung dengan narasumber. Kehadiran pembicara profesional yang berpengalaman di bidangnya menjadikan kegiatan ini informatif sekaligus inspiratif bagi para peserta yang tengah mempersiapkan langkah awal karier mereka di dunia teknologi.

Melalui kegiatan ini, mahasiswa memperoleh pemahaman yang lebih jelas mengenai arah dan pilihan karier di bidang IT, termasuk keterampilan yang perlu dikembangkan sejak dini. Selain itu, Fasilkom Talk 2025 juga menumbuhkan kesadaran akan pentingnya personal branding di era digital, yang dapat menjadi nilai tambah dalam dunia profesional. Hasil dari kegiatan ini menunjukkan meningkatnya antusiasme dan motivasi mahasiswa untuk mulai merancang roadmap karier mereka secara lebih terarah dan percaya diri.`,
    category: "Selesai",
    image: fastalk,
    waktuPelaksanaan: "3 Juli 2025",
    bidang: "Penelitian & Pengembangan",
    penulis: "Bidang Publikasi & Informasi",
    dokumentasi: "PDD Fasilkom Talk",
  },
  {
    id: "7",
    title: "FUSIKOM 2025: Sinergi dan Kolaborasi Organisasi FASILKOM ",
    excerpt: "Forum Silaturahmi Organisasi FASILKOM (FUSIKOM) 2025 adalah wadah pertemuan resmi seluruh organisasi mahasiswa di lingkungan Fakultas Ilmu Komputer. Event ini bertujuan memperkuat komunikasi, koordinasi, dan kolaborasi antar organisasi dalam menciptakan sinergi program kerja yang berkelanjutan.",
    content: `FUSIKOM, internal ormawa hadir sebagai langkah awal untuk menyatukan semangat kebersamaan antar organisasi di lingkup Fakultas Ilmu Komputer UPN “Veteran” Jawa Timur. Kegiatan ini menjadi wadah perkenalan, penguatan relasi, serta penyelarasan visi dan misi antar lembaga kemahasiswaan dalam satu periode kepengurusan. Melalui kegiatan ini, nilai kepercayaan, keterbukaan, dan kolaborasi ditanamkan sebagai fondasi utama dalam membangun sinergi yang berkelanjutan.

Diselenggarakan pada Selasa, 22 Juli 2025, pukul 09.00–16.00 WIB, kegiatan ini berlangsung penuh antusiasme dan semangat kebersamaan. Rangkaian acara diisi dengan diskusi interaktif dan aktivitas kolaboratif yang dirancang untuk memperkuat komunikasi lintas organisasi. Tidak hanya diikuti oleh seluruh pengurus BEM FASILKOM, kegiatan ini juga melibatkan partisipasi aktif dari empat himpunan mahasiswa di lingkungan fakultas, yaitu HIMATIFA, HIMASIFO, HIMASADA, dan HIMABISDI. Setiap peserta diberi ruang untuk bertukar ide, berbagi pengalaman, dan merumuskan strategi bersama demi tercapainya tujuan organisasi yang selaras dan saling mendukung.

Kegiatan ini merupakan program kerja dari Departemen Hubungan dan Kerja Sama (Bidang Dalam Negeri) BEM FASILKOM UPN “Veteran” Jawa Timur, yang berkomitmen untuk memperkuat jalinan sinergi antar organisasi di lingkungan fakultas. Melalui FUSIKOM, departemen ini berhasil menghadirkan wadah kolaboratif yang tidak hanya mempererat hubungan antar pengurus, tetapi juga memperkuat arah gerak organisasi agar lebih efektif dan berdampak nyata.

Dari pelaksanaan kegiatan ini, tercipta pemahaman yang lebih menyeluruh mengenai peran, fungsi, dan arah bersama organisasi kemahasiswaan FASILKOM. FUSIKOM 2025 menjadi momentum penting untuk membangun komunikasi yang terbuka, komitmen yang solid, serta semangat kolaboratif yang siap mengantarkan seluruh organisasi mahasiswa FASILKOM menuju periode kepengurusan yang lebih sinergis, produktif, dan berdaya guna.`,
    category: "Segara",
    image: fusikom,
    waktuPelaksanaan: "22 Juli 2025",
    bidang: "Dalam Negeri",
    penulis: "Bidang Publikasi & Informasi",
    dokumentasi: "PDD Fusikom",
  },
  {
    id: "8",
    title: "Dies Natalis FASILKOM 2025: Merayakan Kebersamaan dalam Semangat Inovasi!",
    excerpt: "Setiap tahun, Fakultas Ilmu Komputer punya satu momen istimewa yang selalu dinanti: Dies Natalis FASILKOM. Bukan sekadar perayaan ulang tahun, Dies Natalis jadi waktu untuk melihat sejauh mana fakultas ini tumbuh.",
    content: `Setiap tahun, Fakultas Ilmu Komputer punya satu momen istimewa yang selalu dinanti: Dies Natalis FASILKOM. Bukan sekadar perayaan ulang tahun, Dies Natalis jadi waktu untuk melihat sejauh mana fakultas ini tumbuh — sekaligus merayakan setiap langkah yang sudah ditempuh bersama. Kegiatan ini merupakan program kerja dari Bidang Dalam Negeri, Departemen Hubungan dan Kerjasama, yang menjadi wadah untuk mempererat rasa kekeluargaan serta memperkuat identitas FASILKOM sebagai satu keluarga besar yang solid dan berprestasi.

Tahun ini, Dies Natalis FASILKOM dikemas dalam rangkaian acara formal dan nonformal yang memadukan nilai akademik dengan semangat kebersamaan. Ada seminar yang membuka wawasan, lomba-lomba yang mengasah kreativitas, bazar yang meramaikan suasana, hingga malam puncak yang jadi simbol rasa syukur dan kebanggaan. Namun yang paling menarik bukan hanya acaranya, tapi makna di baliknya. Dies Natalis adalah cara FASILKOM untuk merefleksikan perjalanan panjangnya dari ruang belajar sederhana, menuju ekosistem kampus yang penuh inovasi dan kolaborasi.

Dalam setiap proses, terlihat betapa kuatnya semangat kebersamaan di antara civitas akademika. Mahasiswa, dosen, alumni, hingga tenaga kependidikan, semuanya ikut ambil bagian dalam menciptakan perayaan ini. Momen ini membuktikan bahwa kemajuan FASILKOM tidak hanya lahir dari teknologi, tapi juga dari rasa saling percaya dan semangat untuk tumbuh bersama. Hasilnya pun nyata: rasa bangga terhadap fakultas semakin tumbuh, partisipasi meningkat, dan suasana akademik terasa lebih hidup. Dies Natalis bukan hanya tentang merayakan usia, tapi tentang menyalakan kembali semangat belajar dan berkarya.

Setiap ulang tahun membawa harapan baru. Bagi FASILKOM, harapan itu sederhana tetapi juga bermakna: menjadi rumah bagi inovasi, tempat ide-ide muda tumbuh, dan ruang di mana teknologi selalu berpihak pada kebaikan. Karena di FASILKOM, setiap perayaan bukan sekadar menandai waktu yang berlalu tapi menegaskan bahwa perjalanan kita masih panjang, dan semangatnya masih sama: tumbuh, belajar, dan kebersamaan.`,
    category: "Refleksi",
    image: diesNat,
    waktuPelaksanaan: "2025",
    bidang: "Departemen Hubungan dan Kerja Sama (Bidang Dalam Negeri)",
    penulis: "Bidang Publikasi & Informasi",
    dokumentasi: "PDD Dies Natalis",
  },
  {
    id: "9",
    title: "Rapat Koordinasi",
    excerpt: "Serangkaian pertemuan rutin yang diselenggarakan setiap bulan untuk membahas progress program kerja, penyelesaian masalah operasional, dan perencanaan strategis jangka pendek.",
    content: `Rapat Koordinasi BEM FASILKOM adalah sistem pertemuan terstruktur yang dilaksanakan secara berkala untuk memastikan kelancaran operasional dan pencapaian target organisasi. Agenda rapat meliputi progress report dari setiap departemen, troubleshooting masalah operasional, review budget dan keuangan, evaluasi timeline program kerja, dan strategic planning untuk periode mendatang. Rapat juga menjadi forum sharing informasi terkini dari fakultas, universitas, dan eksternal yang relevan dengan aktivitas BEM. Setiap rapat menghasilkan notulen lengkap, action items dengan PIC dan deadline yang jelas, serta follow-up plan yang terukur. Sistem rapat ini mengadopsi metodologi manajemen modern dengan menggunakan tools digital untuk tracking progress dan accountability.

Efektivitas Rapat Koordinasi BEM ditingkatkan dengan implementasi sistem digital management menggunakan platform project management seperti Trello dan Notion untuk real-time tracking progress setiap program. Rapat juga mengadopsi metode agile stand-up meeting untuk update cepat dan efisien, serta retrospective session untuk pembelajaran berkelanjutan. Dokumentasi lengkap setiap rapat diarsipkan dalam repository cloud yang dapat diakses seluruh pengurus, memastikan transparansi dan memudahkan transfer knowledge kepada periode kepengurusan berikutnya. Rapat Koordinasi telah menjadi backbone yang kuat dalam menjaga soliditas dan produktivitas tim BEM FASILKOM.`,
    category: "Refleksi",
    image: "https://images.unsplash.com/photo-1760098571181-705c0f9925fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx8fDE3NjEwOTYzMjd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    waktuPelaksanaan: "Rutin setiap bulan",
    bidang: "BEM FASILKOM",
    penulis: "Bidang Publikasi & Informasi",
    dokumentasi: "BEM FASILKOM UPNVJT",
  },
];
