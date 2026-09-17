import { useParams } from "react-router-dom";
import CaseDetailView from "../components/case/CaseDetailView";
import { useNonResidentialCases } from "../hooks/useCases";

export default function NonResidentialCaseDetail() {
  const { id } = useParams();
  const { cases, loading } = useNonResidentialCases();
  const item = cases.find((c) => c.id === id);

  return (
    <CaseDetailView
      backPath="/case/nonresidential"
      backLabel="施工事例一覧へ戻る"
      notFoundText="お探しの施工事例は見つかりませんでした。"
      item={item}
      loading={loading}
    />
  );
}
