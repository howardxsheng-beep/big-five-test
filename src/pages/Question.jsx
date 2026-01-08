import { useMemo, useState, useEffect } from "react";
import OptionList from "../components/OptionList";

function buildQuestions(data) {
  const list = data.problemList;
  const order = Object.keys(list);

  return order.flatMap((traitKey) => {
    const trait = list[traitKey];
    return trait.problems.map((p) => ({
      id: p.id,
      traitKey,
      traitName: trait.name,
      title: p.problem,
      options: p.options,
    }));
  });
}




export default function Question({ data, onDone }) {
  const questions = useMemo(() => buildQuestions(data), [data]);
  const total = questions.length;

  const [currentIdx, setCurrentIdx] = useState(0);


  const [answers, setAnswers] = useState({}); 

  const [scores, setScores] = useState({}); 

  const current = questions[currentIdx];
  const selectedFraction = current ? (answers[current.id] ?? null) : null;

  if (!current) return null;

  const handleSelect = (fraction) => {
    const prev = answers[current.id] ?? 0;

    setAnswers((a) => ({ ...a, [current.id]: fraction }));

    setScores((s) => {
      const prevTraitScore = s[current.traitKey] ?? 0;
      const delta = fraction - prev;
      return { ...s, [current.traitKey]: prevTraitScore + delta };
    });
  };

  const goPrev = () => setCurrentIdx((i) => Math.max(0, i - 1));

  const goNextOrDone = () => {
    if (selectedFraction == null) return;

    const isLast = currentIdx === total - 1;
    if (isLast) {
      onDone?.({ answers, scores });
      return;
    }
    setCurrentIdx((i) => i + 1);
  };
  useEffect(()=>{
    console.log(answers);
},[answers])

  return (
    <div className="w-full flex flex-col xl:flex-row overflow-hidden">
      {/* Left */}
      <div className="w-full xl:w-1/2 bg-blue-500/8 xl:h-screen flex flex-col">
        <button
          type="button"
          onClick={goPrev}
          className="bg-blue-500 w-24 h-24 inline-flex items-center justify-center cursor-pointer disabled:opacity-40"
          disabled={currentIdx === 0}
          aria-label="上一題"
        >
          <span className="material-icons text-white !text-[48px] leading-none">
            arrow_back
          </span>
        </button>

        <div className="flex-1 flex flex-col px-25">
          <div className="flex flex-col mx-auto w-full max-w-2xl flex-1 xl:mt-36">
            <p className="font-pt text-7xl xl:text-[120px] italic self-start -ml-12 tracking-tight leading-[1.17] mb-4">
              Q
            </p>
            <p className="text-3xl xl:text-5xl font-light">{current.title}</p>
          </div>

          <div className="mt-auto mb-12 text-black-500">
            <p className="text-base font-bold">五大性格特質心理測驗</p>
            <p className="text-xs font-light">Big Five personality traits test</p>
          </div>
        </div>
      </div>

      {/* Right */}
      <div className="w-full xl:w-1/2 bg-white xl:h-dvh flex flex-col">

        <div className="pb-5 xl:pb-0 px-24 pt-10 text-right text-2xl text-black-500 italic">
          {currentIdx + 1}/{total}
        </div>


        <div className="flex-1 px-18 flex items-end pb-10 xl:pb-37.5">
          <OptionList
            options={current.options}
            selectedFraction={selectedFraction}
            onSelect={handleSelect}
          />
        </div>


        <button
          type="button"
          disabled={selectedFraction == null}
          onClick={goNextOrDone}
          className="h-24 bg-blue-500
                     text-white text-[32px] font-bold
                     inline-flex items-center justify-end pr-20
                     cursor-pointer
                     disabled:opacity-40 disabled:cursor-not-allowed"
        >
          {currentIdx === total - 1 ? "計算結果" : "下一題"}
          <span className="material-icons ml-2 !text-[48px] leading-none">
            arrow_forward
          </span>
        </button>
      </div>
    </div>
  );
}