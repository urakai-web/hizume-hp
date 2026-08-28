import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Top from "./pages/Top";
import Concept from "./pages/Concept";
import CaseList from "./pages/CaseList";
import CaseDetail from "./pages/CaseDetail";
import Reform from "./pages/Reform";
import ReformCaseList from "./pages/ReformCaseList";
import ReformCaseDetail from "./pages/ReformCaseDetail";
import Facilities from "./pages/Facilities";
import Company from "./pages/Company";
import EventList from "./pages/EventList";
import EventDetail from "./pages/EventDetail";
import NewsList from "./pages/NewsList";
import NewsDetail from "./pages/NewsDetail";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <div className="min-h-screen">
      <ScrollToTop />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Top />} />
          <Route path="/concept" element={<Concept />} />
          <Route path="/case" element={<CaseList />} />
          <Route path="/case/:id" element={<CaseDetail />} />
          <Route path="/reform" element={<Reform />} />
          <Route path="/reform/case" element={<ReformCaseList />} />
          <Route path="/reform/case/:id" element={<ReformCaseDetail />} />
          <Route path="/facilities" element={<Facilities />} />
          <Route path="/company" element={<Company />} />
          <Route path="/events" element={<EventList />} />
          <Route path="/events/:id" element={<EventDetail />} />
          <Route path="/news" element={<NewsList />} />
          <Route path="/news/:id" element={<NewsDetail />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
