"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { EthereumIcon } from "./icons/EthereumIcon";
import { SolanaIcon } from "./icons/SolanaIcon";

export default function PaymentCard({
  asset,
  address,
  network,
  onClose,
}: {
  asset: "ETH" | "SOL";
  address: string;
  network: string;
  onClose: () => void;
}) {
  const [copied, setCopied] = useState(false);
  const router = useRouter();

  const handleCopy = () => {
    navigator.clipboard.writeText(address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePaymentComplete = () => {
    onClose();
    router.push("/dashboard");
  };

  // Generate a simple QR code placeholder (you can replace with actual QR code generation library)
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=160x160&data=${address}`;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-[60]">
      <div className="bg-white rounded-2xl max-w-md w-full p-6 relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition p-1"
          aria-label="Close"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <h2 className="text-xl font-semibold mb-2 pr-8">
          Complete Your Investment
        </h2>
        <p className="text-sm text-gray-500 mb-4">
          Send exactly the selected amount to the address below.
        </p>

        {/* Asset */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
            {asset === "ETH" ? <EthereumIcon /> : <SolanaIcon />}
          </div>
          <div>
            <p className="font-medium">{asset} Investment</p>
            <p className="text-sm text-gray-500">{network} Network</p>
          </div>
        </div>

        {/* QR CODE */}
        <div className="bg-gray-50 rounded-xl p-4 flex flex-col items-center mb-4">
          <img
            src={qrCodeUrl}
            alt={`${asset} QR Code`}
            width={160}
            height={160}
            className="rounded"
          />
        </div>

        {/* Wallet Address */}
        <div className="bg-gray-100 rounded-lg p-3 mb-4">
          <div className="flex items-center justify-between">
            <p className="text-xs text-gray-500 mb-1">Wallet Address</p>
            <button
              onClick={handleCopy}
              className="text-xs text-blue-600 hover:text-blue-700 font-medium"
            >
              {copied ? "Copied!" : "Copy"}
            </button>
          </div>
          <p className="text-sm break-all font-mono">{address}</p>
        </div>

        {/* Notice */}
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 mb-6">
          <p className="text-xs text-amber-800">
            ⚠️ Send only {asset} on the {network} network. Sending any other
            asset may result in permanent loss.
          </p>
        </div>

        {/* Actions */}
        <button
          onClick={handlePaymentComplete}
          className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          I Have Made the Payment
        </button>
      </div>
    </div>
  );
}
