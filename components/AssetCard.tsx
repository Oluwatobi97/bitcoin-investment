"use client";

import { ReactNode, useState } from "react";
import InvestModal from "./InvestModal";

export default function AssetCard({
  name,
  symbol,
  apy,
  icon,
}: {
  name: string;
  symbol: string;
  apy: number;
  icon: ReactNode;
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="bg-white rounded-xl shadow p-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          {icon}
          <div>
            <h3 className="font-semibold text-gray-600 text-lg">{name}</h3>
            <p className="text-sm text-gray-600">{symbol}</p>
          </div>
        </div>

        <div className="text-right">
          <p className="text-sm text-gray-600">APY</p>
          <p className="font-semibold text-gray-600">{apy}%</p>
          <button
            onClick={() => setOpen(true)}
            className="mt-3 bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition"
          >
            Invest
          </button>
        </div>
      </div>

      {open && (
        <InvestModal asset={symbol} apy={apy} onClose={() => setOpen(false)} />
      )}
    </>
  );
}
