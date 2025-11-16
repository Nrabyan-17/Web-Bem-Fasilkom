export interface NewsItem {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  category: string;
  image: string;
  author: string;
  copywriter: string;
}

// Import gambar dari folder assets
import fotoBemExchange from "../assets/berita/bemexchange.jpeg";
import fotoKepengurusan from "../assets/berita/fotkep.jpeg";
import bemExchangeFisip from "../assets/berita/bemexchangefisip.jpeg";
import raker from "../assets/berita/raker.jpeg";
import fotoSambangLiponsos from "../assets/sambang.jpeg";
import fusikom from "../assets/berita/fusikom.jpeg";
import pp from "../assets/proker/pp.jpeg";
import ospek_kit from "../assets/berita/ospek-kit.jpeg";
import mabaMate from "../assets/berita/maba-mate.jpeg";
import mangrove from "../assets/berita/mangrove.jpeg";



export const newsData: NewsItem[] = [
  {
    id: "1",
    title: "Pelantikan Kabinet Astranova BEM FASILKOM 2025",
    excerpt: "Pelantikan resmi Kabinet Astranova BEM Fakultas Ilmu Komputer periode 2025 telah dilaksanakan dengan khidmat di Auditorium UPNVJT...",
    content: `Pelantikan resmi Kabinet Astranova BEM Fakultas Ilmu Komputer periode 2025 telah dilaksanakan dengan khidmat di Auditorium UPNVJT pada tanggal 15 Oktober 2025. Acara yang dihadiri oleh seluruh civitas akademika Fakultas Ilmu Komputer ini menandai dimulainya periode kepengurusan baru BEM FASILKOM.

Dalam sambutannya, Ketua BEM FASILKOM 2025 menyampaikan visi dan misi Kabinet Astranova yang akan fokus pada pengembangan soft skill mahasiswa, peningkatan pelayanan advokasi dan kesejahteraan, serta kolaborasi dengan berbagai organisasi mahasiswa.

Kabinet Astranova terdiri dari berbagai departemen yang siap melayani dan mengayomi seluruh mahasiswa Fakultas Ilmu Komputer. Dengan semangat #SATUFasilkomKitaKuat, diharapkan BEM FASILKOM dapat menjadi wadah yang kreatif, solutif, dan kolaboratif bagi seluruh mahasiswa.

Dekan Fakultas Ilmu Komputer juga memberikan dukungan penuh terhadap program kerja yang akan dijalankan oleh Kabinet Astranova. Beliau berharap BEM FASILKOM dapat terus berkontribusi dalam pengembangan mahasiswa baik dari sisi akademik maupun non-akademik.`,
    date: "15 Oktober 2025",
    category: "Event",
    image: raker,
    author: "Kabinet Astranova",
    copywriter: "Bidang Publikasi & Informasi",
  },
  {
    id: "2",
    title: "BEM Exchange Luar Surabaya 2025: Bersama dengan BEM UM Malang",
    excerpt: "BEM FASILKOM melaksanakan kegiatan BEM Exchange Luar Surabaya tahun 2025 sebagai bagian dari...",
    content: `BEM-Exchange Luar Surabaya 2025 menjadi jembatan kolaboratif antara BEM FASILKOM dan BEM FMIPA Universitas Negeri Malang. Kegiatan ini digagas oleh Bidang Luar Negeri Departemen Hubungan dan Kerja Sama (HDK) sebagai bentuk implementasi nyata dari semangat sinergi dan pertukaran wawasan antar lembaga mahasiswa.

Agenda ini berfokus pada pertukaran ide, strategi kerja organisasi, dan penguatan jejaring eksternal. Melalui konsep studi banding interaktif, peserta diajak memahami dinamika sistem kerja dan budaya organisasi BEM FMIPA UM, khususnya dalam hal manajemen kegiatan, koordinasi internal, dan inovasi program mahasiswa.

Kegiatan dilaksanakan di Gedung B25 Universitas Negeri Malang pada 27 September 2025. Rangkaian acara diawali dengan sesi Focus Group Discussion (FGD) yang membahas pengelolaan organisasi mahasiswa di tingkat fakultas, dilanjutkan dengan sesi berbagi pengalaman antar anggota BEM. Suasana dibuat cair dan terbuka agar setiap peserta bisa menyampaikan pandangan dan belajar secara dua arah.

Lebih dari sekadar kunjungan, BEM-Exchange Luar Surabaya menjadi wadah pembentukan pola pikir kolaboratif dan terbuka. Anggota BEM FASILKOM tidak hanya memperoleh wawasan baru tentang sistem kerja organisasi lain, tetapi juga refleksi untuk meningkatkan kualitas internal, efisiensi koordinasi, dan produktivitas tim.

Program ini menegaskan komitmen BEM FASILKOM dalam memperluas jaringan, memperdalam pengalaman, dan memperkuat profesionalitas pengurus agar terus adaptif terhadap tantangan dunia kemahasiswaan yang dinamis.`,
    date: "10 Oktober 2025",
    category: "Event",
    image: fotoBemExchange,
    author: "Bidang Luar Negeri",
    copywriter: "Bidang Publikasi & Informasi",
  },

  {
    id: "3",
    title: "FUSIKOM 2025: Sinergi dan Kolaborasi Organisasi FASILKOM",
    excerpt: "FUSIKOM, internal ormawa hadir sebagai langkah awal untuk menyatukan semangat kebersamaan antar organisasi di lingkup Fakultas Ilmu Komputer UPN “Veteran” Jawa Timur....",
    content: `FUSIKOM, internal ormawa hadir sebagai langkah awal untuk menyatukan semangat kebersamaan antar organisasi di lingkup Fakultas Ilmu Komputer UPN “Veteran” Jawa Timur. 
    Kegiatan ini menjadi wadah perkenalan, penguatan relasi, serta penyelarasan visi dan misi antar lembaga kemahasiswaan dalam satu periode kepengurusan. 
    Melalui kegiatan ini, nilai kepercayaan, keterbukaan, dan kolaborasi ditanamkan sebagai fondasi utama dalam membangun sinergi yang berkelanjutan.

Diselenggarakan pada Selasa, 22 Juli 2025, pukul 09.00–16.00 WIB, kegiatan ini berlangsung penuh antusiasme dan semangat kebersamaan. Rangkaian acara diisi dengan diskusi interaktif dan aktivitas kolaboratif yang dirancang untuk memperkuat komunikasi lintas organisasi. Tidak hanya diikuti oleh seluruh pengurus BEM FASILKOM, kegiatan ini juga melibatkan partisipasi aktif dari empat himpunan mahasiswa di lingkungan fakultas, yaitu HIMATIFA, HIMASIFO, HIMASADA, dan HIMABISDI. Setiap peserta diberi ruang untuk bertukar ide, berbagi pengalaman, dan merumuskan strategi bersama demi tercapainya tujuan organisasi yang selaras dan saling mendukung.

Kegiatan ini merupakan program kerja dari Departemen Hubungan dan Kerja Sama (Bidang Dalam Negeri) BEM FASILKOM UPN “Veteran” Jawa Timur, yang berkomitmen untuk memperkuat jalinan sinergi antar organisasi di lingkungan fakultas. Melalui FUSIKOM, departemen ini berhasil menghadirkan wadah kolaboratif yang tidak hanya mempererat hubungan antar pengurus, tetapi juga memperkuat arah gerak organisasi agar lebih efektif dan berdampak nyata.

Dari pelaksanaan kegiatan ini, tercipta pemahaman yang lebih menyeluruh mengenai peran, fungsi, dan arah bersama organisasi kemahasiswaan FASILKOM. FUSIKOM 2025 menjadi momentum penting untuk membangun komunikasi yang terbuka, komitmen yang solid, serta semangat kolaboratif yang siap mengantarkan seluruh organisasi mahasiswa FASILKOM menuju periode kepengurusan yang lebih sinergis, produktif, dan berdaya guna.`,
    date: "5 Oktober 2025",
    category: "Pengabdian",
    image: fusikom,
    author: "Bidang Dalam Negeri",
    copywriter: "Bidang Publikasi & Informasi",
  },

  {
    id: "4",
    title: "Foto Kepengurusan BEM FASILKOM 2025: Satu Potret, Satu Semangat! ",
    excerpt: "Foto Kepengurusan BEM FASILKOM UPN “Veteran” Jawa Timur 2025...",
    content: `Foto Kepengurusan BEM FASILKOM UPN “Veteran” Jawa Timur 2025 menjadi salah satu agenda penting dalam upaya memperkuat identitas visual sekaligus menegaskan profesionalitas organisasi. 
    Melalui kegiatan ini, seluruh pengurus BEM FASILKOM menampilkan kekompakan, karakter, serta semangat kebersamaan dalam satu potret yang merepresentasikan wajah kepengurusan tahun 2025.

Kegiatan ini merupakan program kerja dari Biro Media, Informasi, dan Komunikasi (Bagian Multimedia) yang berperan penting dalam mendokumentasikan serta membangun citra profesional BEM FASILKOM secara visual. 
Dengan koordinasi yang matang, tim Multimedia merancang seluruh tahapan kegiatan mulai dari penentuan konsep, penyusunan jadwal, hingga pemilihan dress code seperti jas almamater dan PDH agar mencerminkan keseragaman dan wibawa organisasi.

Lebih dari sekadar kegiatan dokumentasi, sesi foto ini menjadi momen kebersamaan yang mempererat hubungan antaranggota dan menumbuhkan rasa memiliki terhadap BEM FASILKOM. 
Proses pemotretan berlangsung dengan antusiasme tinggi dari seluruh pengurus, menciptakan suasana yang hangat dan penuh semangat. 
Usai sesi pemotretan, tim dokumentasi melanjutkan tahap pasca-produksi secara profesional untuk menyeleksi dan menyunting hasil terbaik. 
Foto-foto beresolusi tinggi yang dihasilkan tidak hanya menjadi kenangan, tetapi juga menjadi aset digital resmi BEM FASILKOM.

Diselenggarakan pada Selasa, 25 Juni 2025, kegiatan ini meninggalkan kesan mendalam bagi seluruh pengurus. Lebih dari sekadar potret visual, Foto Kepengurusan BEM FASILKOM 2025 menjadi simbol kekompakan, profesionalitas, dan dedikasi bersama dalam menjalankan tanggung jawab organisasi menuju satu tujuan: membangun BEM FASILKOM yang solid, inspiratif, dan berintegritas.`,
    date: "1 Oktober 2025",
    category: "Event",
    image: fotoKepengurusan,
    author: "Bidang Multimedia",
    copywriter: "Bidang Publikasi & Informasi",
  },

  {
    id: "5",
    title: "Sambang Liponsos 2025: Tumbuh Bersama Pejuang Mental Health Lewat Warna dan Tanah",
    excerpt: "Badan Eksekutif Mahasiswa Fakultas Ilmu Komputer kembali melaksanakan agenda sosial bertajuk Sambang Liponsos 2025 dengan tema “Tumbuh Bersama Pejuang Mental Health Lewat Warna dan Tanah.",
    content: `Badan Eksekutif Mahasiswa Fakultas Ilmu Komputer kembali melaksanakan agenda sosial bertajuk Sambang Liponsos 2025 dengan tema “Tumbuh Bersama Pejuang Mental Health Lewat Warna dan Tanah.” 
    Kegiatan yang diselenggarakan oleh Departemen Sosial dan Politik Bidang Pengabdian Masyarakat ini bertujuan untuk mendukung kesehatan mental para penghuni Liponsos Keputih melalui pendekatan kreatif dan rekreatif berbasis seni serta interaksi sosial. 
    Melalui kegiatan ini, para relawan yang terdiri dari pengurus BEM dan Keluarga Mahasiswa Fasilkom tidak hanya memberikan dukungan psikososial, tetapi juga belajar memahami pentingnya empati, solidaritas, dan kontribusi nyata terhadap kesejahteraan kelompok rentan di masyarakat.

Kegiatan Sambang Liponsos dilaksanakan pada tanggal 28 Juni 2025 secara langsung di Liponsos Keputih, Surabaya. 
Dengan melibatkan berbagai elemen mahasiswa, kegiatan ini berlangsung dalam suasana hangat dan penuh semangat kebersamaan.
Para peserta berinteraksi langsung dengan penghuni melalui berbagai aktivitas seperti melukis bersama, menyanyi, serta makan siang bersama. 
Pendekatan yang menggabungkan seni dan rekreasi ini menciptakan suasana yang inklusif, menyenangkan, dan menumbuhkan rasa saling menghargai antara mahasiswa serta penghuni Liponsos.

Seluruh rangkaian acara berjalan dengan lancar berkat antusiasme tinggi dari seluruh peserta dan relawan. Melalui kegiatan ini, baik penghuni Liponsos maupun relawan dari KM Fasilkom memperoleh pengalaman berharga dan menyenangkan. Selain mempererat rasa kepedulian sosial, kegiatan ini juga meningkatkan kesadaran mahasiswa terhadap pentingnya isu kesehatan mental di masyarakat. Sambang Liponsos 2025 menjadi wujud nyata semangat mahasiswa Fasilkom untuk tumbuh bersama dan berkontribusi positif bagi sesama melalui warna, tanah, dan empati.`,
    date: "28 September 2025",
    category: "Event",
    image: fotoSambangLiponsos,
    author: "Bidang Pengabdian Masyarakat",
    copywriter: "Bidang Publikasi & Informasi",
  },
  {
    id: "6",
    title: "BEM Exchange 2025: Wadah Pertukaran Gagasan dan Penguatan Kolaborasi Antar Organisasi Mahasiswa",
    excerpt: "BEM FASILKOM mengadakan sosialisasi mengenai berbagai program beasiswa dan pertukaran pelajar yang tersedia untuk mahasiswa...",
    content: `Dalam upaya meningkatkan wawasan dan kapasitas organisasi, Badan Eksekutif Mahasiswa (BEM) Fakultas Ilmu Komputer khususnya dari Departemen Hubungan dan Kerja Sama (HDK) Bidang Luar Negeri menyelenggarakan kegiatan BEM Exchange 2025 sebagai bagian dari program studi banding antarorganisasi mahasiswa. Kegiatan ini bertujuan untuk memperluas pengetahuan, berbagi pengalaman, serta memperkuat jejaring antar-BEM di lingkungan perguruan tinggi. Melalui BEM Exchange, diharapkan pengurus BEM dapat memperoleh pemahaman yang lebih luas tentang strategi, metode kerja, dan dinamika kepemimpinan organisasi mahasiswa di fakultas lain, sehingga dapat menjadi inspirasi dalam meningkatkan kualitas tata kelola organisasi di internal FASILKOM.

Kegiatan BEM Exchange 2025 dilaksanakan pada tanggal 31 Mei 2025 bertempat di Ruang Seminar Fakultas Ilmu Komputer UPN “Veteran” Jawa Timur. Dalam pelaksanaannya, BEM FASILKOM menerima kunjungan dari BEM FISIP UPNVJT sebagai mitra dalam kegiatan pertukaran gagasan ini. Suasana diskusi berlangsung hangat dan interaktif, dengan fokus pada saling berbagi pengalaman seputar sistem kerja, struktur organisasi, serta strategi dalam melaksanakan program kerja yang berdampak bagi mahasiswa.

Melalui rangkaian acara Focus Group Discussion (FGD), pengurus BEM FASILKOM memperoleh pemahaman mendalam mengenai mekanisme kerja BEM FISIP, termasuk pola komunikasi internal, pembagian divisi, hingga inovasi program yang dijalankan. Kegiatan ini memberikan wawasan baru yang dapat diadaptasi dan dikembangkan dalam lingkungan BEM FASILKOM sendiri. BEM Exchange 2025 menjadi bukti nyata komitmen mahasiswa FASILKOM untuk terus belajar, berkolaborasi, dan tumbuh bersama dalam semangat kemajuan organisasi mahasiswa di UPN "Veteran" Jawa Timur.`,
    date: "25 September 2025",
    category: "Event",
    image: bemExchangeFisip,
    author: "Bidang Luar Negeri",
    copywriter: "Bidang Publikasi & Informasi",
  },
  {
    id: "7",
    title: "Pelatihan Pemandu 2025: Mencetak Kader FASILKOM yang Siap Menginspirasi.",
    excerpt: "BEM FASILKOM mengadakan bakti sosial di bulan Ramadhan dengan membagikan sembako dan santunan kepada anak yatim di sekitar kampus...",
    content: `Dalam rangka menyambut bulan suci Ramadhan, BEM FASILKOM menyelenggarakan program bakti sosial bertajuk "Berbagi Kebahagiaan dengan Anak Yatim" sebagai bentuk kepedulian terhadap sesama. Kegiatan ini merupakan implementasi dari visi BEM FASILKOM dalam memberikan kontribusi nyata kepada masyarakat, khususnya kepada anak-anak yatim yang membutuhkan perhatian dan dukungan.

Program bakti sosial ini dilaksanakan pada tanggal 15 Maret 2025 di Panti Asuhan Al-Hidayah Surabaya. Kegiatan diawali dengan pemberian sembako, santunan, dan perlengkapan sekolah kepada 50 anak yatim. Selain memberikan bantuan material, para pengurus BEM FASILKOM juga mengadakan berbagai aktivitas menarik seperti games edukatif, menggambar bersama, dan sharing motivasi.

"Kegiatan ini adalah bentuk pengamalan salah satu Tri Dharma Perguruan Tinggi yaitu pengabdian kepada masyarakat. Kami berharap dapat memberikan manfaat nyata kepada masyarakat, terutama di bulan yang penuh berkah ini," ujar Ketua BEM FASILKOM.

Antusiasme anak-anak yatim sangat tinggi dan mereka sangat berterima kasih atas bantuan yang diberikan. BEM FASILKOM berkomitmen untuk terus menjalankan program-program pengabdian masyarakat sebagai bagian dari tanggung jawab sosial mahasiswa.`,
    date: "20 Oktober 2025",
    category: "Pengabdian",
    image: pp,
    author: "Bidang Kaderisasi",
    copywriter: "Bidang Publikasi & Informasi",
  },
  {
    id: "8",
    title: "Ospek Kit FASILKOM 2025: Membangun Identitas dan Kekompakan Mahasiswa Baru",
    excerpt: "Sebagai bagian dari rangkaian kegiatan Pengenalan Kehidupan Kampus bagi Mahasiswa Baru (PKKMB) atau yang lebih dikenal sebagai Ospek, bidang Kewirausahaan, Departemen Pemberdayaan Sumber Daya Mahasiswa (PSDM) BEM FASILKOM telah melaksanakan program Ospek Kit FASILKOM 2025....",
    content: `Sebagai bagian dari rangkaian kegiatan Pengenalan Kehidupan Kampus bagi Mahasiswa Baru (PKKMB) atau yang lebih dikenal sebagai Ospek, bidang Kewirausahaan, Departemen Pemberdayaan Sumber Daya Mahasiswa (PSDM) BEM FASILKOM telah melaksanakan program Ospek Kit FASILKOM 2025. 
    Program ini berlangsung selama periode Juni hingga Agustus 2025 dan bertujuan untuk memfasilitasi mahasiswa baru Fakultas Ilmu Komputer UPN “Veteran” Jawa Timur dengan perlengkapan yang dibutuhkan selama kegiatan ospek.

Ospek Kit FASILKOM 2025 terdiri dari tiga item utama, yaitu kaos, lanyard, dan scarf. Ketiga perlengkapan ini disiapkan untuk mendukung pelaksanaan kegiatan ospek serta menjadi simbol identitas mahasiswa baru FASILKOM. Keseragaman atribut ini bukan hanya berfungsi sebagai perlengkapan wajib, tetapi juga menciptakan identitas visual yang khas dan membedakan mahasiswa baru FASILKOM dari mahasiswa fakultas lain. Dengan atribut seragam yang digunakan, mahasiswa baru dapat menunjukkan semangat, kekompakan, dan kebanggaan sebagai bagian dari Keluarga Besar FASILKOM.

Lebih dari sekadar perlengkapan, Ospek Kit memiliki makna penting dalam membangun rasa kebersamaan dan solidaritas antar mahasiswa baru. Melalui penggunaan atribut yang seragam, tercipta suasana yang inklusif dan harmonis di antara mahasiswa, sehingga memperkuat hubungan awal dan mempercepat proses adaptasi di lingkungan kampus. Hal ini sejalan dengan semangat Departemen PSDM bidang Kewirausahaan yang tidak hanya berorientasi pada nilai ekonomi, tetapi juga menumbuhkan nilai-nilai kolaborasi dan rasa memiliki terhadap fakultas.

Penyediaan Ospek Kit menjadi langkah awal yang bermakna dalam menyambut mahasiswa baru ke lingkungan Fakultas Ilmu Komputer. Melalui program ini, BEM FASILKOM tidak hanya mendukung kebutuhan kegiatan ospek, tetapi juga berperan dalam membentuk identitas, semangat, dan karakter mahasiswa baru agar siap menjalani masa perkuliahan dengan penuh antusiasme.

Kesuksesan pelaksanaan Ospek Kit FASILKOM 2025 menjadi bukti nyata komitmen bidang Kewirausahaan Departemen PSDM BEM FASILKOM dalam mendukung kegiatan orientasi mahasiswa baru secara kreatif dan bermanfaat. Program ini tidak hanya menghadirkan perlengkapan seragam, tetapi juga menghadirkan simbol kebersamaan yang menandai awal perjalanan mahasiswa baru sebagai bagian dari Keluarga Besar FASILKOM UPN “Veteran” Jawa Timur.`,
    date: "18 Oktober 2025",
    category: "Pengabdian",
    image: ospek_kit,
    author: "Bidang Kewirausahaan",
    copywriter: "Bidang Publikasi & Informasi",
  },
  {
    id: "9",
    title: "MABA MATE 2025: Langkah Awal yang Hangat untuk Mahasiswa Baru",
    excerpt: "Menjadi mahasiswa baru adalah fase transisi yang penuh tantangan. Mulai dari navigasi sistem kampus, adaptasi suasana baru, sampai urusan administrasi, semuanya bisa terasa mengintimidasi. Jembatan penolongnya ada di sini...",
    content: `Menjadi mahasiswa baru adalah fase transisi yang penuh tantangan. Mulai dari navigasi sistem kampus, adaptasi suasana baru, sampai urusan administrasi, semuanya bisa terasa mengintimidasi. Jembatan penolongnya ada di sini. Di FASILKOM, perjalanan itu nggak harus dilalui sendirian. Melalui program Maba Mate, Bidang Advokesma Departemen Sosial Politik hadir untuk memastikan setiap mahasiswa baru merasa disambut, didampingi, dan dimudahkan sejak hari pertama mereka bergabung.

Maba Mate adalah komitmen jangka panjang yang diselenggarakan sejak 18 Maret hingga 17 Agustus 2025, memastikan mahasiswa baru dari semua jalur (SNBP, SNBT, hingga Mandiri) mendapatkan pendampingan penuh. Bantuan utama difokuskan pada kemudahan daftar ulang. Program ini memanfaatkan grup Telegram resmi sebagai pusat informasi. Di platform ini, maba akan mendapatkan panduan terperinci mengenai alur registrasi, berkas yang harus disiapkan, dan tata cara administrasi dengan informasi yang terstruktur. Sebagai pelengkap, dukungan tatap muka (offline) juga disediakan. Tim Advokesma membuka posko di kampus selama masa daftar ulang. Posko ini menjadi tempat maba bisa berkonsultasi langsung, menyerahkan dokumen, atau mengatasi kendala teknis. Komitmen kami meluas hingga advokasi—termasuk pendampingan khusus bagi mahasiswa yang memiliki keberatan terhadap UKT, yang kami fasilitasi dengan penuh empati dan tanggung jawab.

Di balik semua kegiatan praktis itu, Maba Mate punya makna yang jauh lebih dalam. Program ini dirancang bukan hanya untuk memastikan mahasiswa baru menyelesaikan urusan administrasi dengan lancar, tapi juga agar mereka mulai merasa menjadi bagian dari keluarga besar FASILKOM. Melalui komunikasi aktif dan suasana yang ramah, mahasiswa baru didorong untuk mengenal lingkungan kampus, sistem akademik, dan yang terpenting, menjalin relasi dengan teman-teman baru yang akan menemani perjalanan panjang mereka di dunia perkuliahan.

Hasil dari Maba Mate bukan semata kelancaran daftar ulang, tapi terletak pada kenyamanan, keterhubungan, dan rasa percaya diri mahasiswa baru dalam menjalani hari-hari awal di kampus. Program ini terbukti membantu maba beradaptasi lebih cepat, membangun relasi dengan mahasiswa lama, dan memastikan bahwa di FASILKOM, mereka selalu punya tempat untuk bertanya dan belajar.`,
    date: "15 Oktober 2025",
    category: "Pengabdian",
    image: mabaMate,
    author: "Bidang Advokesma",
    copywriter: "Bidang Publikasi & Informasi",
  },
  {
    id: "10",
    title: "Satu Langkah Kecil Untukmu, Sejuta Harapan Untuk Bumi: Cerita dari Aksi Tanam Mangrove & Clean-Up BEM FASILKOM 2025",
    excerpt: "BEM FASILKOM mengadakan workshop coding untuk anak-anak SD sebagai upaya mengenalkan dunia pemrograman sejak usia dini...",
    content: `Di tengah padatnya rutinitas kampus dan hiruk-pikuk kehidupan digital, ada satu momen ketika mahasiswa FASILKOM memilih untuk turun langsung ke alam menyentuh lumpur, menanam harapan, dan membersihkan jejak manusia dari pesisir. Inilah wujud nyata kepedulian mereka. Melalui agenda “Tanam Mangrove & Clean-Up”, Bidang Pengabdian Masyarakat Departemen Sosial Politik mengajak mahasiswa dan masyarakat sekitar untuk kembali dekat dengan bumi, dengan satu pesan sederhana namun bermakna: “Satu Langkah Kecil Untukmu, Sejuta Harapan Untuk Bumi.”

Dilaksanakan pada 7 September 2025 di Ekowisata Mangrove Wonorejo, Surabaya, kegiatan ini menggabungkan dua rangkaian utama: penanaman bibit mangrove dan aksi bersih-bersih pesisir. Tujuannya sederhana namun berdampak besar, yaitu mengajak setiap peserta untuk terlibat langsung dalam upaya rehabilitasi hutan mangrove dan menjaga kebersihan lingkungan pesisir. Dengan terjun langsung, mahasiswa tidak hanya belajar soal ekosistem, tetapi juga memahami bahwa pelestarian alam adalah tanggung jawab bersama, bukan hanya milik satu pihak.

Dari Aksi Kecil, Lahir Kesadaran Besar!

Yang membuat kegiatan ini istimewa bukan hanya aksi tanam atau bersih-bersihnya, tetapi kesadaran yang tumbuh setelahnya. Banyak peserta mengaku baru benar-benar menyadari betapa pentingnya mangrove bagi kehidupan mulai dari mencegah abrasi pantai, menjaga habitat biota laut, hingga menyerap karbon dari udara. Di sela kegiatan, suasana kebersamaan antara mahasiswa, dosen, dan masyarakat juga terasa hangat. Setiap orang membawa energi positif, bekerja sama dengan semangat yang sama: menjaga bumi mulai dari langkah kecil.

Melalui agenda ini, bidang Pengabdian Masyarakat ingin membentuk mahasiswa sebagai agen perubahan individu yang peka terhadap isu lingkungan dan mau bergerak untuk solusi. Gerakan ini menanamkan nilai kepedulian, edukasi, dan kolaborasi yang menjadi dasar keberlanjutan bumi. Hasilnya bukan hanya ratusan bibit mangrove yang tertanam atau pesisir yang bersih, tetapi juga kesadaran baru: bahwa setiap aksi kecil punya arti, dan setiap langkah punya dampak.`,
    date: "12 Oktober 2025",
    category: "Pengabdian",
    image: mangrove,
    author: "Bidang Pengabdian Masyarakat",
    copywriter: "Bidang Publikasi & Informasi",
  },
  {
    id: "11",
    title: "Agenda Jualan 2025 – BEM FASILKOM",
    excerpt: "BEM FASILKOM mengadakan workshop coding untuk anak-anak SD sebagai upaya mengenalkan dunia pemrograman sejak usia dini...",
    content: `Sebagai bentuk pengembangan kreativitas dan kemandirian ekonomi mahasiswa, Agenda Jualan 2025 menjadi salah satu program unggulan yang digagas oleh Bidang Kewirausahaan BEM FASILKOM. Program ini dirancang untuk menumbuhkan jiwa wirausaha di lingkungan kampus sekaligus menjadi wadah pembelajaran nyata dalam mengelola ide bisnis, promosi, dan interaksi pasar.”

Kegiatan ini tidak hanya berfokus pada transaksi jual-beli, tetapi juga mengajarkan proses bisnis dari perencanaan hingga evaluasi. Setiap pengurus dan panitia dilibatkan mulai dari konsep produk, strategi pemasaran, hingga pelayanan konsumen. Dengan demikian, kegiatan jualan menjadi sarana pembelajaran praktik ekonomi kreatif yang menyenangkan sekaligus bermanfaat.
Dari Aksi Kecil, Lahir Kesadaran Besar!

Agenda Jualan 2025 mengusung konsep “Dari Mahasiswa untuk Mahasiswa”, di mana produk yang dijual merupakan hasil kreativitas internal BEM FASILKOM. Mulai dari makanan ringan, minuman segar, hingga merchandise kampus, semuanya dikemas menarik agar mampu menciptakan daya tarik tersendiri di kalangan mahasiswa.

Suasana kegiatan berlangsung ramai dan penuh antusiasme. Setiap stand dihiasi dengan elemen kreatif bertema fakultas yang membuat area jualan terasa hidup. Pengurus BEM berinteraksi langsung dengan mahasiswa lain, melatih kemampuan komunikasi, promosi, dan kerja tim secara nyata.

Lebih dari sekadar ajang berdagang, kegiatan ini menjadi ruang kolaboratif bagi mahasiswa FASILKOM untuk mengasah kemampuan soft skill, manajemen waktu, dan inovasi produk. Melalui semangat kebersamaan, Agenda Jualan 2025 berhasil membangun solidaritas antaranggota serta memperkuat citra positif BEM FASILKOM sebagai organisasi yang aktif, kreatif, dan produktif.`,
    date: "12 Oktober 2025",
    category: "Pengabdian",
    image: mangrove,
    author: "Bidang Pengabdian Masyarakat",
    copywriter: "Bidang Publikasi & Informasi",
  },
];
