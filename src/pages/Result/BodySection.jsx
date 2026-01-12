
export default function BodySection({
  current,
  next,
  degreeText,
  activeIdx,
  total,
  onNext,
  onRestart,
}) {
  const isLast = activeIdx === total - 1;

  return (
    <section className="max-w-372.5 h-[50vh] mx-auto flex flex-col px-10 pt-12 pb-13">
      <div className="max-w-4xl">
        <p className="text-[64px] font-light leading-24 tracking-normal">
          {degreeText}
        </p>

        <p className="mt-4 max-w-202.5 text-2xl font-light text-black-700 leading-9">
          {current.resultText}
        </p>

        {current.degreeKey === "middle" && (
          <div className="mt-12 max-w-201.25 space-y-6 text-sm leading-6 text-black-900">
            <div className="flex items-start">
              <span className="font-bold text-base leading-6 whitespace-nowrap">
                高 <span className="font-thin">——</span>
              </span>
              <p className="text-base font-light text-black-700 leading-6 ml-1.25">
                {current.highText}
              </p>
            </div>

            <div className="flex items-start">
              <span className="font-bold text-base leading-6 whitespace-nowrap">
                低 <span className="font-thin">——</span>
              </span>
              <p className="text-base font-light text-black-700 leading-6 ml-1.25">
                {current.lowText}
              </p>
            </div>
          </div>
        )}
      </div>


      <div className="mt-auto flex justify-end items-center text-black-700">
        {isLast ? (
          <button
            type="button"
            onClick={onRestart}
            className="
              w-full justify-center py-6
              max-w-82.5 text-black-900
              border-2 border-black-900 bg-white
              inline-flex items-center gap-2
              text-[32px] font-bold
              cursor-pointer
              hover:bg-black-900 hover:text-white duration-700
              transition-colors leading-12 mt-4 xl:mt-0 group
            "
          >
            重新測驗
            <span className="material-icons !text-[48px] group-hover:translate-x-2 duration-200">arrow_forward</span>
          </button>
        ) : (
          <div className="flex text-4xl font-light text-black-900 items-center">
            <span>下一個：</span>
            <button
              type="button"
              onClick={onNext}
              className="font-bold inline-flex items-center gap-2 cursor-pointer group"
            >
              {next.zhName}
              <span className="material-icons !text-[48px] leading-none text-blue-500 group-hover:translate-x-2 duration-200">
                arrow_forward
              </span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}