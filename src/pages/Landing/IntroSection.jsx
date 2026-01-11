import { Link } from "react-router-dom";
import { buildLandingTitle } from "./utils";

export default function IntroSection({ data }) {
  const { line1, line2, en } = buildLandingTitle(data?.name ?? {});

  return (
    <section className="w-full max-w-370 mx-auto py-24 px-5 bg-white-900">
      <div className="flex flex-col gap-18.75 max-[600px]:gap-10">
        {/* Left */}
        <div className="flex flex-col items-start">
          <h1 className="text-black-900 font-light text-[64px] max-[600px]:text-5xl">
            {line1}
          </h1>

          <div className="flex items-center gap-6 max-[600px]:flex-col max-[600px]:items-start">
            <h2 className="text-black-900 text-[64px] max-[600px]:text-5xl font-light">
              {line2}
            </h2>
            <span className="max-w-60 h-18 text-black-900 text-2xl">
              {en}
            </span>
          </div>
        </div>

        {/* Right */}
        <div className="flex justify-end text-left gap-7.5 max-[870px]:flex-col">
          <p className="max-w-112.5 text-left text-black-700">
            {data?.description}
          </p>

          <Link
            to="/question"
            className="px-18.25 inline-flex items-center justify-center 
              bg-blue-500 text-white
              text-[32px] tracking-normal leading-6
              cursor-pointer max-[870px]:h-23 xl:hover:bg-blue-600"
          >
            開始測驗
            <span className="ml-2 material-icons !text-[48px]">
              arrow_forward
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}