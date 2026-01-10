export function getDegree(score, degree) {
  if (score >= degree.high) return "high";
  if (score >= degree.middle) return "middle";
  return "low";
}

export function degreeZh(degreeKey) {
  if (degreeKey === "high") return "高";
  if (degreeKey === "middle") return "中";
  return "低";
}

export function capitalizeFirst(s = "") {
  return s ? s[0].toUpperCase() + s.slice(1) : "";
}

export function buildResultModel(data, scores) {
  const list = data.problemList;
  const order = Object.keys(list);

  return order.map((traitKey) => {
    const trait = list[traitKey];
    const score = scores?.[traitKey] ?? 0;
    const degreeKey = getDegree(score, data.degree);
    const desc = trait.description;

    return {
      traitKey,
      zhName: trait.name,
      enName: capitalizeFirst(traitKey),
      score,
      degreeKey,
      intro: desc.desc,
      resultText: desc[degreeKey],
      highText: desc.high,
      lowText: desc.low,
    };
  });
}