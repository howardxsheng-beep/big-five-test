export default function HeroSection({ current, results, activeIdx, onTabChange, bgClass }) {
  return (
    <section className="relative h-[50vh] text-white">

      <div className={["absolute inset-0 bg-cover bg-center", bgClass].join(" ")} />
      <div className="absolute inset-0 bg-black/35" />

      <div className="relative z-10 max-w-372.5 mx-auto px-10 h-full flex flex-col">

        <div className="flex flex-col xl:flex-row items-start justify-between pt-6">
          <div>
            <p className="text-base font-bold">五大性格特質心理測驗</p>
            <p className="text-xs font-light leading-4.5">
              Big Five personality traits test
            </p>
          </div>

          <div className="flex gap-5 text-base font-light leading-6 xl:gap-12">
            {results.map((r, idx) => (
              <button
                key={r.traitKey}
                type="button"
                onClick={() => onTabChange(idx)}
                className={[
                  "pb-1 cursor-pointer",
                  idx === activeIdx
                    ? "border-b-4 border-blue-500 font-bold leading-6"
                    : "border-b-4 border-transparent",
                ].join(" ")}
              >
                {r.zhName}
              </button>
            ))}
          </div>
        </div>

        <div className="pb-10 mt-auto flex flex-col md:flex-row gap-24">
          <div>
            <h2 className="text-5xl font-light leading-18">{current.zhName}</h2>
            <p className="text-2xl font-light leading-9">{current.enName}</p>
          </div>
          <p className="max-w-112.5 text-base text-[#ffffffde] tracking-normal leading-6">
            {current.intro}
          </p>
        </div>
      </div>
    </section>
  );
}