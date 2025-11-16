export interface ProkerItem {
  id: string;
  title: string;
  description: string;
  detailedDescription?: string;
  additionalParagraph?: string;
  category: "Semua" | "Pelayanan" | "Pengembangan" | "Segara" | "Selesai" | "Refleksi";
  image: string;
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
    description: "Festival Keluarga Besar Mahasiswa Ilmu Komputer (FKBM-IK) UPN \"Veteran\" Jawa Timur tahun 2025 telah sukses diselenggarakan sebagai ajang kebersamaan berskala nasional yang mempertemukan mahasiswa Ilmu Komputer dari berbagai kampus UPN se-Indonesia.",
    detailedDescription: "Festival Keluarga Besar Mahasiswa Ilmu Komputer (FKBM-IK) UPN \"Veteran\" Jawa Timur tahun 2025 telah sukses diselenggarakan sebagai ajang kebersamaan berskala nasional yang mempertemukan mahasiswa Ilmu Komputer dari berbagai kampus UPN se-Indonesia. Dengan menjadi tuan rumah, UPN \"Veteran\" Jawa Timur berhasil menghadirkan momentum penting untuk mempererat hubungan kekeluargaan antar civitas akademika, mulai dari mahasiswa, dosen, alumni, hingga staf. Kegiatan yang berlangsung pada 8–10 Agustus 2025 ini diisi dengan serangkaian acara yang meriah dan penuh makna. Selama tiga hari, para peserta mengikuti forum diskusi, kompetisi, hingga kegiatan kebersamaan yang membangun komunikasi, kolaborasi, dan semangat solidaritas.",
    additionalParagraph: "FKBM-IK 2025 juga menghadirkan rangkaian kompetisi akademik dan non-akademik yang mempertandingkan mahasiswa dari berbagai UPN, mulai dari lomba Programming, UI/UX Design, E-Sport, hingga kompetisi Fotografi dan Videografi. Acara puncak ditutup dengan malam keakraban yang menampilkan pentas seni dari setiap delegasi kampus, menciptakan suasana kekeluargaan yang hangat dan membangun ikatan emosional antar mahasiswa Ilmu Komputer se-Indonesia. Event ini berhasil membuktikan bahwa kebersamaan dan kolaborasi adalah kunci untuk memajukan dunia teknologi informasi di Indonesia.",
    category: "Pelayanan",
    image: fkbm,
  },
  {
    id: "2",
    title: "BEM Exchange 2025: Wadah Pertukaran Gagasan dan Penguatan Kolaborasi Antar Organisasi Mahasiswa.",
    description: "Dalam upaya meningkatkan wawasan dan kapasitas organisasi, Badan Eksekutif Mahasiswa (BEM) Fakultas Ilmu Komputer khususnya dari Departemen Hubungan dan Kerja Sama (HDK) Bidang Luar Negeri menyelenggarakan kegiatan BEM Exchange 2025 sebagai bagian dari program studi banding antarorganisasi mahasiswa.",
    detailedDescription: "BEM Exchange 2025 merupakan program strategis yang dirancang untuk memperkuat jaringan kolaborasi antar organisasi mahasiswa di tingkat nasional. Kegiatan ini menghadirkan delegasi dari berbagai BEM fakultas sejenis di seluruh Indonesia untuk saling berbagi best practices, inovasi program kerja, dan strategi pengembangan organisasi. Melalui serangkaian diskusi panel, workshop, dan sharing session, peserta mendapat kesempatan untuk memperluas wawasan tentang manajemen organisasi, kepemimpinan, dan tata kelola BEM yang efektif. Program ini juga mencakup kunjungan ke berbagai organisasi dan instansi strategis untuk memberikan exposure langsung tentang dunia kerja dan networking profesional.",
    additionalParagraph: "Sebagai output nyata dari BEM Exchange 2025, tercipta Memorandum of Understanding (MoU) kolaborasi program kerja antar BEM yang berkomitmen untuk mengadakan program bersama di tahun mendatang. Peserta juga mendapatkan insight berharga tentang sistem manajemen keuangan organisasi, strategi fundraising, hingga teknik diplomasi dan negosiasi dengan stakeholder eksternal. Program ini telah membuktikan bahwa dengan berbagi pengetahuan dan pengalaman, setiap BEM dapat berkembang lebih cepat dan menghasilkan dampak yang lebih besar bagi mahasiswa dan masyarakat.",
    category: "Pelayanan",
    image: bemexchange,
  },
  {
    id: "3",
    title: "Designverse 2025: Wadah Kreativitas dan Pembelajaran Desain Grafis di Era Digital",
    description: "Biro Media dan Informasi BEM FASILKOM menyelenggarakan Designverse 2025, program yang memadukan webinar desain dengan narasumber profesional industri kreatif dan kompetisi desain poster bertema teknologi. Event ini dirancang untuk mengembangkan skill visual communication mahasiswa dan memfasilitasi networking dengan desainer profesional.",
    detailedDescription: "Designverse 2025 adalah event komprehensif yang terdiri dari dua aktivitas utama: webinar desain grafis dan kompetisi design poster. Webinar menghadirkan praktisi senior dari industri kreatif seperti tokoh dari creative agency ternama, UI/UX designer dari startup unicorn, dan brand designer dari perusahaan multinasional. Materi yang dibahas meliputi trend design terkini, tool dan software profesional, portfolio building, dan career path di industri kreatif. Sementara kompetisi design poster memberikan kesempatan mahasiswa untuk mengaplikasikan pengetahuan yang diperoleh sambil berkompetisi memperebutkan total hadiah jutaan rupiah. Event ini juga menyediakan sesi one-on-one portfolio review dengan mentor professional.",
    additionalParagraph: "Kompetisi design poster Designverse 2025 menarik lebih dari 200 peserta dari berbagai universitas di Jawa Timur dengan tema 'Technology for Humanity'. Para peserta ditantang untuk menciptakan karya visual yang menggambarkan bagaimana teknologi dapat memberikan solusi nyata bagi masalah sosial dan lingkungan. Karya-karya terbaik tidak hanya mendapat hadiah, tetapi juga akan dipamerkan secara virtual dan dijadikan konten kampanye sosial media BEM FASILKOM. Event ini membuktikan bahwa mahasiswa teknik juga memiliki jiwa seni yang tinggi dan mampu mengomunikasikan ide kompleks melalui medium visual yang menarik.",
    category: "Pelayanan",
    image: designverse,
  },
  {
    id: "4",
    title: "Sambang Liponsos 2025: Tumbuh Bersama Pejuang Mental Health Lewat Warna dan Tanah ",
    description: "Program bakti sosial inovatif yang menggabungkan kegiatan art therapy dan berkebun organik bersama penghuni panti rehabilitasi mental. Melalui aktivitas melukis dan bercocok tanam, program ini bertujuan mendukung proses pemulihan mental health dengan pendekatan holistik yang melibatkan kreativitas dan koneksi dengan alam.",
    detailedDescription: "Sambang Liponsos 2025 adalah program kepedulian sosial yang revolusioner dalam pendekatan rehabilitasi mental health. Bekerja sama dengan panti rehabilitasi mental, program ini mengintegrasikan art therapy dan urban farming sebagai metode penyembuhan alternatif. Kegiatan dimulai dengan sesi art therapy dimana peserta dan penghuni panti bersama-sama mengekspresikan perasaan melalui media lukis, menggambar, dan crafting. Dilanjutkan dengan aktivitas berkebun organik yang mengajarkan tentang mindfulness, tanggung jawab, dan koneksi dengan alam. Program ini tidak hanya memberikan manfaat terapeutik, tetapi juga menghasilkan produk berupa sayuran organik dan karya seni yang dapat dimanfaatkan untuk kebutuhan panti.",
    additionalParagraph: "Antusiasme dan senyuman yang terpancar dari wajah penghuni panti menjadi bukti nyata keberhasilan program Sambang Liponsos. Para volunteer mahasiswa juga mendapat pembelajaran berharga tentang empati, kesabaran, dan pentingnya mental health awareness. Hasil panen sayuran organik dari kebun panti telah berkontribusi untuk memenuhi kebutuhan nutrisi harian penghuni, sementara karya seni yang dihasilkan dipamerkan dan dijual untuk menambah dana operasional panti. Program ini membuktikan bahwa kepedulian sosial tidak hanya tentang memberi, tetapi juga tentang tumbuh dan belajar bersama.",
    category: "Pengembangan",
    image: sambang,
  },
  {
    id: "5",
    title: "Pelatihan Pemandu 2025: Mencetak Kader FASILKOM yang Siap Menginspirasi ",
    description: "Program intensif selama 3 hari yang dirancang khusus untuk melatih mahasiswa menjadi pemandu dalam berbagai acara FASILKOM. Pelatihan meliputi public speaking, event management, protokoler, dan leadership skills. Peserta akan mendapat sertifikat dan kesempatan menjadi official guide dalam acara-acara besar fakultas.",
    detailedDescription: "Pelatihan Pemandu 2025 adalah program pengembangan SDM yang komprehensif untuk mencetak kader-kader handal di FASILKOM. Program tiga hari ini menggabungkan teori dan praktik intensif dalam bidang public speaking, master of ceremony, protokoler acara resmi, dan manajemen event. Peserta akan mendapat training langsung dari praktisi berpengalaman, termasuk MC profesional dan event organizer senior. Materi meliputi teknik berbicara di depan umum, penguasaan panggung, improvisasi, etika protokoler, dan crisis management. Di hari terakhir, peserta akan praktik langsung memandu mock event untuk evaluasi keterampilan. Lulusan program ini akan menjadi pool talent untuk berbagai acara besar FASILKOM dan mendapat prioritas untuk mengikuti event eksternal sebagai representasi fakultas.",
    additionalParagraph: "Setelah mengikuti Pelatihan Pemandu 2025, para peserta menunjukkan transformasi yang luar biasa dalam hal kepercayaan diri dan kemampuan komunikasi. Mereka tidak hanya siap memandu acara internal FASILKOM seperti wisuda, seminar, dan workshop, tetapi juga telah dipercaya untuk menjadi MC di acara tingkat universitas bahkan regional. Alumni pelatihan ini juga membentuk komunitas yang aktif sharing tips dan saling support dalam setiap penugasan. Program ini telah berhasil mencetak puluhan pemandu berkualitas yang menjadi aset berharga bagi FASILKOM dan menjadi role model bagi mahasiswa lainnya.",
    category: "Pengembangan",
    image: pp,
  },
  {
    id: "6",
    title: "Fasilkom Talk 2025: Membuka Wawasan Karier di Dunia IT",
    description: "Seminar career development yang menghadirkan praktisi senior dari industri teknologi terkemuka seperti Gojek, Tokopedia, dan startup unicorn lainnya. Event ini membahas roadmap karier programmer, tips interview, skill yang dibutuhkan industri, dan sharing pengalaman nyata dari fresh graduate hingga tech lead berpengalaman.",
    detailedDescription: "Fasilkom Talk 2025 merupakan seminar career development premium yang menghadirkan lineup speaker eksepsional dari berbagai perusahaan teknologi terdepan di Indonesia. Event ini menghadirkan CTO dari startup unicorn, Senior Engineer dari Gojek, Product Manager dari Tokopedia, dan founder tech startup yang sukses. Materi yang dibahas sangat komprehensif mulai dari roadmap karier di berbagai track (Frontend, Backend, Mobile, DevOps, Data Science), tips dan trik menghadapi technical interview, portfolio building yang menarik recruiter, hingga strategi networking di industri tech. Peserta juga mendapat kesempatan untuk sesi tanya jawab langsung, speed mentoring, dan akses ke job portal eksklusif dari partner perusahaan.",
    additionalParagraph: "Dampak nyata dari Fasilkom Talk 2025 terlihat dari banyaknya mahasiswa yang berhasil mendapat kesempatan magang dan bahkan job offer dari perusahaan-perusahaan teknologi ternama. Para speaker juga memberikan commitment untuk tetap terbuka bagi konsultasi karier melalui grup alumni eksklusif yang dibentuk pasca event. Event ini juga menghadirkan booth career fair mini dimana beberapa perusahaan membuka lowongan on-the-spot untuk posisi internship dan fresh graduate. Fasilkom Talk telah menjadi jembatan penting yang menghubungkan talenta mahasiswa FASILKOM dengan peluang karier di industri teknologi Indonesia.",
    category: "Selesai",
    image: fastalk,
  },
  {
    id: "7",
    title: "FUSIKOM 2025: Sinergi dan Kolaborasi Organisasi FASILKOM ",
    description: "Forum Silaturahmi Organisasi FASILKOM (FUSIKOM) 2025 adalah wadah pertemuan resmi seluruh organisasi mahasiswa di lingkungan Fakultas Ilmu Komputer. Event ini bertujuan memperkuat komunikasi, koordinasi, dan kolaborasi antar organisasi dalam menciptakan sinergi program kerja yang berkelanjutan.",
    detailedDescription: "FUSIKOM 2025 adalah forum strategis tahunan yang mempertemukan seluruh pimpinan organisasi mahasiswa di lingkungan FASILKOM, mulai dari BEM, HIMATEKOM, organisasi minat bakat, hingga komunitas teknologi. Agenda utama meliputi evaluasi program kerja bersama, perencanaan kolaborasi lintas organisasi, sharing best practices manajemen organisasi, dan pembentukan task force untuk isu-isu strategis fakultas. Forum ini juga menghadirkan narasumber dari alumni yang sukses berkarier di bidang organisasi dan leadership. Hasil dari FUSIKOM berupa roadmap kolaborasi, MoU antar organisasi, dan pembentukan kalender kegiatan bersama yang terkoordinasi untuk menghindari bentrok acara dan memaksimalkan partisipasi mahasiswa.",
    additionalParagraph: "Melalui FUSIKOM 2025, tercipta ekosistem organisasi yang solid dan saling mendukung di FASILKOM. Berbagai program kolaboratif berhasil dirumuskan, seperti Festival Teknologi bersama yang melibatkan seluruh organisasi, sistem database mahasiswa terpadu untuk memudahkan rekrutmen dan komunikasi, serta joint fundraising untuk mengurangi beban finansial setiap organisasi. Forum ini juga menghasilkan kesepakatan untuk membentuk dewan koordinasi organisasi yang berfungsi sebagai mediator dan fasilitator kerjasama berkelanjutan. FUSIKOM telah membuktikan bahwa bersama kita lebih kuat dan mampu menciptakan dampak yang lebih besar bagi mahasiswa FASILKOM.",
    category: "Segara",
    image: fusikom,
  },
  {
    id: "8",
    title: "Dies Natalis FASILKOM 2025: Merayakan Kebersamaan dalam Semangat Inovasi!",
    description: "Program evaluasi komprehensif yang dilakukan secara berkala untuk menganalisis capaian, kendala, dan solusi dari setiap program kerja BEM FASILKOM. Evaluasi ini melibatkan survey kepuasan mahasiswa, analisis data statistik kegiatan, dan penyusunan rekomendasi perbaikan untuk periode mendatang.",
    detailedDescription: "Setiap tahun, Fakultas Ilmu Komputer punya satu momen istimewa yang selalu dinanti: Dies Natalis FASILKOM. Bukan sekadar perayaan ulang tahun, Dies Natalis jadi waktu untuk melihat sejauh mana fakultas ini tumbuh — sekaligus merayakan setiap langkah yang sudah ditempuh bersama. Kegiatan ini merupakan program kerja dari Bidang Dalam Negeri, Departemen Hubungan dan Kerjasama, yang menjadi wadah untuk mempererat rasa kekeluargaan serta memperkuat identitas FASILKOM sebagai satu keluarga besar yang solid dan berprestasi.",
    additionalParagraph: `Tahun ini, Dies Natalis FASILKOM dikemas dalam rangkaian acara formal dan nonformal yang memadukan nilai akademik dengan semangat kebersamaan. Ada seminar yang membuka wawasan, lomba-lomba yang mengasah kreativitas, bazar yang meramaikan suasana, hingga malam puncak yang jadi simbol rasa syukur dan kebanggaan. Namun yang paling menarik bukan hanya acaranya, tapi makna di baliknya. Dies Natalis adalah cara FASILKOM untuk merefleksikan perjalanan panjangnya dari ruang belajar sederhana, menuju ekosistem kampus yang penuh inovasi dan kolaborasi. 
    
    Dalam setiap proses, terlihat betapa kuatnya semangat kebersamaan di antara civitas akademika. Mahasiswa, dosen, alumni, hingga tenaga kependidikan, semuanya ikut ambil bagian dalam menciptakan perayaan ini. Momen ini membuktikan bahwa kemajuan FASILKOM tidak hanya lahir dari teknologi, tapi juga dari rasa saling percaya dan semangat untuk tumbuh bersama. Hasilnya pun nyata: rasa bangga terhadap fakultas semakin tumbuh, partisipasi meningkat, dan suasana akademik terasa lebih hidup. Dies Natalis bukan hanya tentang merayakan usia, tapi tentang menyalakan kembali semangat belajar dan berkarya`,
    category: "Refleksi",
    image: diesNat,
  },
  {
    id: "9",
    title: "Rapat Koordinasi",
    description: "Serangkaian pertemuan rutin yang diselenggarakan setiap bulan untuk membahas progress program kerja, penyelesaian masalah operasional, dan perencanaan strategis jangka pendek. Rapat ini melibatkan seluruh pengurus BEM dengan agenda evaluasi mingguan, laporan departemen, dan penyusunan action plan untuk periode berikutnya.",
    detailedDescription: "Rapat Koordinasi BEM FASILKOM adalah sistem pertemuan terstruktur yang dilaksanakan secara berkala untuk memastikan kelancaran operasional dan pencapaian target organisasi. Agenda rapat meliputi progress report dari setiap departemen, troubleshooting masalah operasional, review budget dan keuangan, evaluasi timeline program kerja, dan strategic planning untuk periode mendatang. Rapat juga menjadi forum sharing informasi terkini dari fakultas, universitas, dan eksternal yang relevan dengan aktivitas BEM. Setiap rapat menghasilkan notulen lengkap, action items dengan PIC dan deadline yang jelas, serta follow-up plan yang terukur. Sistem rapat ini mengadopsi metodologi manajemen modern dengan menggunakan tools digital untuk tracking progress dan accountability.",
    additionalParagraph: "Efektivitas Rapat Koordinasi BEM ditingkatkan dengan implementasi sistem digital management menggunakan platform project management seperti Trello dan Notion untuk real-time tracking progress setiap program. Rapat juga mengadopsi metode agile stand-up meeting untuk update cepat dan efisien, serta retrospective session untuk pembelajaran berkelanjutan. Dokumentasi lengkap setiap rapat diarsipkan dalam repository cloud yang dapat diakses seluruh pengurus, memastikan transparansi dan memudahkan transfer knowledge kepada periode kepengurusan berikutnya. Rapat Koordinasi telah menjadi backbone yang kuat dalam menjaga soliditas dan produktivitas tim BEM FASILKOM.",
    category: "Refleksi",
    image: "https://images.unsplash.com/photo-1760098571181-705c0f9925fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx8fDE3NjEwOTYzMjd8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
];
