import OptionList from "./OptionList";

export default function RightPanel({
  currentIdx,
  total,
  options,
  selectedFraction,
  onSelect,
  onNext,
}) {
  const isLast = currentIdx === total - 1;

  return (
    <div className="w-full xl:w-1/2 bg-white xl:h-dvh flex flex-col">
      <div className="pb-5 xl:pb-0 px-24 pt-10 text-right text-2xl text-black-500 italic">
        {currentIdx + 1}/{total}
      </div>

      <div className="flex-1 px-18 flex items-end pb-10 xl:pb-37.5">
        <OptionList
          options={options}
          selectedFraction={selectedFraction}
          onSelect={onSelect}
        />
      </div>

      <button
        type="button"
        disabled={selectedFraction == null}
        onClick={onNext}
        className="h-24 bg-blue-500
                   text-white text-[32px] font-bold
                   inline-flex items-center justify-end pr-20
                   cursor-pointer
                   disabled:opacity-40 disabled:cursor-not-allowed"
      >
        {isLast ? "計算結果" : "下一題"}
        <span className="material-icons ml-2 !text-[48px] leading-none">
          arrow_forward
        </span>
      </button>
    </div>
  );
}