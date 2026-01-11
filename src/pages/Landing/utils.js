export function buildLandingTitle(name) {
  const zh = (name?.zh ?? "").replace("(簡版)", "");
  const en = (name?.en ?? "").replace("(simple version)", "");

  return {
    line1: zh.slice(0, 6),
    line2: zh.slice(6, 10),
    en,
  };
}