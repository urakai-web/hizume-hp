import CaseListView from "../components/case/CaseListView";
import { useNonResidentialCases } from "../hooks/useCases";

export default function NonResidentialCaseList() {
  const { cases } = useNonResidentialCases();

  return (
    <CaseListView
      basePath="/case/nonresidential"
      banner={{
        eyebrow: "Works",
        title: "非住宅の施工事例",
        description: "店舗・オフィスなど、住宅以外の施工事例をご紹介します。",
      }}
      emptyText="現在準備中です。近日、施工事例を公開予定です。"
      cases={cases}
    />
  );
}
