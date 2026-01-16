"use client";

import { useState } from "react";
import PaymentCard from "./PaymentCard";

export default function InvestModal({
  asset,
  apy,
  onClose,
}: {
  asset: string;
  apy: number;
  onClose: () => void;
}) {
  const [amount, setAmount] = useState("");
  const [duration, setDuration] = useState(30);
  const [showPayment, setShowPayment] = useState(false);

  const estimatedReturn =
    amount && duration
      ? ((Number(amount) * apy * duration) / 36500).toFixed(4)
      : "0.00";

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl w-full max-w-md p-6">
        <h2 className="text-xl font-semibold mb-2">
          Invest in {asset}
        </h2>
        <p className="text-sm text-gray-500 mb-6">
          Estimated APY: {apy}%
        </p>

        {/* Amount */}
        <label className="block text-sm font-medium mb-1">
          Investment Amount
        </label>
        <input
          type="number"
          placeholder={`Enter ${asset} amount`}
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full border rounded-lg bg-gray-100 p-3 text-gray-600 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Duration */}
        <label className="block text-sm font-medium mb-1">
          Investment Duration
        </label>
        <select
          value={duration}
          onChange={(e) => setDuration(Number(e.target.value))}
          className="w-full border bg-gray-100 text-gray-500 rounded-lg p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option className="text-gray-600" value={30}>30 Days</option>
          <option className="text-gray-600" value={60}>60 Days</option>
          <option className="text-gray-600" value={90}>90 Days</option>
        </select>

        {/* ROI */}
        <div className="bg-gray-50 p-4 rounded-lg mb-6">
          <p className="text-sm text-gray-500">
            Estimated Return
          </p>
          <p className="text-lg text-gray-600 font-semibold">
            {estimatedReturn} {asset}
          </p>
        </div>

        {/* Actions */}
        <div className="flex gap-3">
          <button
            onClick={onClose}
            className="w-1/2 border text-gray-500 rounded-lg py-3 hover:bg-gray-50 hover:text-blue-600 transition"
          >
            Cancel
          </button>
          <button
            onClick={() => setShowPayment(true)}
            className="w-1/2 bg-blue-600 text-white rounded-lg py-3 hover:bg-blue-700 transition"
          >
            Confirm Investment
          </button>
        </div>
      </div>

      {showPayment && (
        <PaymentCard
          asset={asset as "ETH" | "SOL"}
          address={
            asset === "ETH"
              ? "0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb"
              : "SoL4nA1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ"
          }
          network={asset === "ETH" ? "Ethereum" : "Solana"}
          onClose={() => setShowPayment(false)}
        />
      )}
    </div>
  );
}



