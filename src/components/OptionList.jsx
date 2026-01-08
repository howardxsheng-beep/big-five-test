export default function OptionList({
  options,
  selectedFraction,
  onSelect,
  name = "question", // 你也可以從 Question.jsx 傳入 `q-${current.id}`
}) {
  return (
    <div className="w-full space-y-9">
      {options.map((opt) => (
        <OptionItem
          key={opt.fraction}
          opt={opt}
          checked={selectedFraction === opt.fraction}
          onSelect={onSelect}
          name={name}
        />
      ))}
    </div>
  );
}

function OptionItem({ opt, checked, onSelect, name }) {
  const id = `${name}-${opt.fraction}`; 

  return (
    <label
      htmlFor={id}
      className="w-full flex items-center gap-2 cursor-pointer"
    >

      <input
        id={id}
        type="radio"
        name={name}
        value={opt.fraction}
        checked={checked}
        onChange={() => onSelect?.(opt.fraction)}
        className="sr-only"
      />


      <span
        className={[
          "w-6 h-6 xl:w-12 xl:h-12 shrink-0 rounded-full border-4 flex items-center justify-center",
          checked ? "border-blue-500" : "border-black-300",
        ].join(" ")}
        aria-hidden="true"
      >
        {checked ? <span className=" w-3 h-3 xl:w-6 xl:h-6 rounded-full bg-blue-500" /> : null}
      </span>

      <p
        className={[
          "text-2xl font-light",
          checked ? "text-blue-600" : "text-black-900",
        ].join(" ")}
      >
        <span className="font-bold">{getLabel(opt.description)}</span>

        <span className="block xl:inline">
          {getRest(opt.description)}
        </span>
      </p>
    </label>
  );
}

/** 分離句號前後粗體 */
function getLabel(desc) {
  const i = desc.indexOf("。");
  return i === -1 ? desc : desc.slice(0, i + 1);
}
function getRest(desc) {
  const i = desc.indexOf("。");
  return i === -1 ? "" : desc.slice(i + 1);
}