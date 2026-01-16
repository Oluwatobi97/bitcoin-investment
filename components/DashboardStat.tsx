export default function DashboardStat({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <div className="bg-white rounded-xl shadow p-6">
      <p className="text-gray-500 text-sm">{title}</p>
      <p className="text-2xl text-blue-300 font-bold mt-2">{value}</p>
    </div>
  );
}

