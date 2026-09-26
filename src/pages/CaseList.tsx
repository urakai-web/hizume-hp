import CaseListView from "../components/case/CaseListView";
import { useCases } from "../hooks/useCases";

export default function CaseList() {
  const { cases } = useCases();

  return (
    <CaseListView
      basePath="/case"
      banner={{
        eyebrow: "Works",
        title: "新築の施工事例",
        description: "対話を重ねてつくった、\n樋爪住宅研究所の施工事例をご紹介します。",
      }}
      emptyText="現在準備中です。近日、施工事例を公開予定です。"
      cases={cases}
    />
  );
}
