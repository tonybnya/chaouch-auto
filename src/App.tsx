import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    // TODO: add a Spinner there
    <Suspense fallback={<p>Loading...</p>}>
      <>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </>
    </Suspense>
  );
}

export default App;
