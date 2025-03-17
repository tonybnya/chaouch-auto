import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <>
        <Routes>
          <Route path="/" element={<Landing />} />
        </Routes>
      </>
    </Suspense>
  );
}

export default App;
