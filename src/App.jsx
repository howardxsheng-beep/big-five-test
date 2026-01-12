import { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { fetchBigFiveData } from "./api/fetchData";


import Landing from "./pages/Landing";
import Result from "./pages/Result";
import Question from "./pages/Question";

export default function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    (async () => {
      const resultData = await fetchBigFiveData();
      setData(resultData);
    })();
  }, []);

  if (!data) return (
    <div className="min-h-screen flex items-center justify-center ">
      <div className="text-black-700 text-6xl">Loading...</div>
    </div>
  );

  
  return (
    <Routes>
      <Route path="/" element={<Landing data={data} />} />
      <Route path="/result" element={<Result data={data} />} />
      <Route path="/question" element={<Question data={data} />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}