import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import LeftPanel from "./LeftPanel";
import RightPanel from "./RightPanel";
import { buildQuestions, toTraitScores } from "./model";

export default function QuestionView({ data }) {
  const navigate = useNavigate();

  const questions = useMemo(() => buildQuestions(data), [data]);
  const total = questions.length;

  const [currentIdx, setCurrentIdx] = useState(0);
  const [answers, setAnswers] = useState({});

  const current = questions[currentIdx];
  const selectedFraction = current ? (answers[current.id] ?? null) : null;

  if (!current) return null;

  const handleSelect = (fraction) => {
    setAnswers((a) => ({ ...a, [current.id]: fraction }));
  };

  const goPrev = () => setCurrentIdx((i) => Math.max(0, i - 1));

  const goNextOrDone = () => {
    if (selectedFraction == null) return;

    const isLast = currentIdx === total - 1;
    if (isLast) {
      const finalScores = toTraitScores(answers);
      navigate("/result", { state: { scores: finalScores } });
      return;
    }
    setCurrentIdx((i) => i + 1);
  };

  return (
    <div className="w-full flex flex-col xl:flex-row overflow-hidden">
      <LeftPanel
        currentIdx={currentIdx}
        total={total}
        title={current.title}
        onPrev={goPrev}
      />

      <RightPanel
        currentIdx={currentIdx}
        total={total}
        options={current.options}
        selectedFraction={selectedFraction}
        onSelect={handleSelect}
        onNext={goNextOrDone}
      />
    </div>
  );
}