import PageBanner from "../components/PageBanner";
import { useFadeIn } from "../hooks/useFadeIn";
import { company } from "../data/company";

const rows: [string, string][] = [
  ["社名", company.name],
  ["代表者", company.representative],
  ["所在地", company.address],
  ["施工対応エリア", company.serviceAreas.join(" / ")],
  ["電話番号", company.tel],
  ["FAX", company.fax],
  ["Eメール", company.email],
  ["営業時間", company.businessHours],
  ["定休日", company.closedDays],
  ["取扱工法", company.constructionMethod],
  ["参考坪単価", company.pricePerTsuboRange],
  ["保証体制", company.warranty.join(" / ")],
  ["アフターメンテナンス", company.afterService.join(" / ")],
  ["資本金", company.capital],
  ["許認可", company.licenses.join(" / ")],
];

export default function Company() {
  const ref = useFadeIn<HTMLDivElement>();

  return (
    <>
      <PageBanner eyebrow="Company" title="会社概要" />

      <section ref={ref} className="py-24 md:py-32 bg-white">
        <div className="fade-in-up max-w-3xl mx-auto px-6">
          <dl className="divide-y divide-gray-200 text-sm">
            {rows.map(([label, value]) => (
              <div key={label} className="grid gap-1 py-5 sm:grid-cols-[10rem_1fr] sm:gap-4">
                <dt className="text-gray-400">{label}</dt>
                <dd className="text-gray-800">{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </>
  );
}
