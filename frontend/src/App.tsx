import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "@/pages/Landing";
import Catalogue from "@/pages/Catalogue";
import APropos from "@/pages/APropos";
import Contact from "@/pages/Contact";
import Layout from "@/pages/Layout";
import NotFoundPage from "@/pages/NotFoundPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Landing />} />
        <Route path="accueil" element={<Landing />} />
        <Route path="catalogue" element={<Catalogue />} />
        <Route path="a-propos" element={<APropos />} />
        <Route path="contact" element={<Contact />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default App;
