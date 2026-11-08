import { useDocumentTitle } from "../hooks/useDocumentTitle";
import { useParams } from "react-router-dom";
import CaseDetailView from "../components/case/CaseDetailView";
import { useCases } from "../hooks/useCases";

export default function CaseDetail() {
  const { id } = useParams();
  const { cases, loading } = useCases();
  const item = cases.find((c) => c.id === id);
  useDocumentTitle(item?.title);

  return (
    <CaseDetailView
      backPath="/case"
      backLabel="施工事例一覧へ戻る"
      notFoundText="お探しの施工事例は見つかりませんでした。"
      item={item}
      loading={loading}
    />
  );
}
