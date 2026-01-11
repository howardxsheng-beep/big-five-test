export function buildQuestions(data) {
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

export function toTraitScores(answers = {}) {
  const sums = { a: 0, c: 0, e: 0, n: 0, o: 0 };

  for (const [qid, value] of Object.entries(answers)) {
    const prefix = qid[0]?.toLowerCase();
    if (prefix in sums) sums[prefix] += Number(value) || 0;
  }

  return {
    agreeableness: sums.a,
    conscientiousness: sums.c,
    extroversion: sums.e,
    neuroticism: sums.n,
    openness: sums.o,
  };
}