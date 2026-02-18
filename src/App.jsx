import { Routes, Route } from "react-router-dom";

import SLB from "./pages/SLB";

import SLBDatenschutz from "./sections/slb/legal/SLBDatenschutz";
import SLBImpressum from "./sections/slb/legal/SLBImpressum";
import SLBRechtlicheHinweise from "./sections/slb/legal/SLBRechtlicheHinweise";

export default function App() {
  return (
    <div className="theme-sl min-h-screen">
      <Routes>
        <Route path="/" element={<SLB />} />
        <Route path="/slb" element={<SLB />} />

        {/* LEGAL */}
        <Route path="/slb/datenschutz" element={<SLBDatenschutz />} />
        <Route path="/slb/impressum" element={<SLBImpressum />} />
        <Route path="/slb/rechtliche-hinweise" element={<SLBRechtlicheHinweise />} />
      </Routes>
    </div>
  );
}
