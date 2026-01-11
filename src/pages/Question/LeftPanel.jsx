export default function LeftPanel({ currentIdx, total, title, onPrev }) {
  return (
    <div className="w-full xl:w-1/2 bg-blue-500/8 xl:h-screen flex flex-col">
      <button
        type="button"
        onClick={onPrev}
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
          <p className="text-3xl xl:text-5xl font-light">{title}</p>
        </div>

        <div className="mt-auto self-end xl:self-start pt-4 xl:pt-0 mb-5 xl:mb-12 text-black-500">
          <p className="text-base font-bold">五大性格特質心理測驗</p>
          <p className="text-xs font-light">Big Five personality traits test</p>
        </div>
      </div>
    </div>
  );
}