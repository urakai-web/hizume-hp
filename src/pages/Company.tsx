import { company } from "../lib/company";

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

export function Company() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <p className="text-sm tracking-widest text-brand-light">COMPANY</p>
      <h1 className="mt-3 text-2xl font-semibold text-brand">会社概要</h1>

      <dl className="mt-10 divide-y divide-brand/10 text-sm">
        {rows.map(([label, value]) => (
          <div key={label} className="grid gap-1 py-4 sm:grid-cols-[10rem_1fr] sm:gap-4">
            <dt className="text-brand-light">{label}</dt>
            <dd className="text-brand">{value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
