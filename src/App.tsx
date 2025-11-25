import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { HomePage } from "./pages/HomePage";
import { NewsListPage } from "./pages/NewsListPage";
import { NewsDetailPage } from "./pages/NewsDetailPage";
import { ProgramKerjaPage } from "./pages/ProgramKerjaPage";
import { ProkerDetailPage } from "./pages/ProkerDetailPage";
import { AboutPage } from "./pages/AboutPage";
import { ContactPage } from "./pages/ContactPage";
import { StrukturOrganisasiPage } from "./pages/StrukturOrganisasiPage";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/preview_page.html" element={<HomePage />} />
        <Route path="/berita" element={<NewsListPage />} />
        <Route path="/berita/:id" element={<NewsDetailPage />} />
        <Route path="/program-kerja" element={<ProgramKerjaPage />} />
        <Route path="/program-kerja/:id" element={<ProkerDetailPage />} />
        <Route path="/advo-center" element={<ContactPage />} />
        <Route path="/tentang-kami" element={<AboutPage />} />
        <Route path="/struktur-organisasi" element={<StrukturOrganisasiPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}
