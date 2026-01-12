import { useLocation, useNavigate } from "react-router-dom";
import ResultView from "./ResultView";

export default function ResultPage({ data }) {
  const navigate = useNavigate();
  const { state } = useLocation();
  const scores = state?.scores;

  if (!scores) {
    navigate("/question", { replace: true });
    return null;
  }

  return (
    <ResultView
      data={data}
      scores={scores}
      onBackToHome={() => navigate("/")}
    />
  );
}