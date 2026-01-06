import { useEffect, useState } from "react";
import { fetchBigFiveData } from "./api/fetchData";
import Landing from "./pages/Landing";

export default function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    (async () => {
      const d = await fetchBigFiveData();
      setData(d);
    })();
  }, []);

  if (!data) return (
    <div className="min-h-screen flex items-center justify-center ">
      <div className="text-black-700">Loading...</div>
    </div>
  );

  return <Landing data={data} />;
}