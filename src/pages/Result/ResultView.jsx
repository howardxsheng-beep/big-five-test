
import { useMemo, useState } from "react";
import { BG_CLASS } from "./data";
import { buildResultModel, degreeZh } from "./model";
import HeroSection from "./HeroSection";
import BodySection from "./BodySection";

export default function ResultView({ data, scores, onBackToHome }) {

  const results = useMemo(
    () => buildResultModel(data, scores),
    [data, scores]
  );

  const [activeIdx, setActiveIdx] = useState(0);

  const current = results[activeIdx];
  const next = results[(activeIdx + 1) % results.length];
  if (!current) return null;

  return (
    <div className="w-full min-h-screen bg-white">
      <HeroSection
        current={current}
        results={results}
        activeIdx={activeIdx}
        onTabChange={setActiveIdx}
        bgClass={BG_CLASS[current.traitKey]}
      />

      <BodySection
        current={current}
        next={next}
        degreeText={degreeZh(current.degreeKey)}
        activeIdx={activeIdx}
        total={results.length}
        onNext={() => setActiveIdx((i) => i + 1)}
        onRestart={() => {
          setActiveIdx(0);
          onBackToHome?.();
        }}
      />
    </div>
  );
}