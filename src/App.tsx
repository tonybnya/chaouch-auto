import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import NotFoundPage from "./pages/NotFoundPage";
import Spinner from "./components/Spinner";

function App() {
  return (
    // TODO: add a Spinner there
    <Suspense fallback={<Spinner />}>
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
