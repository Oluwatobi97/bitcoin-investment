import AssetCard from "@/components/AssetCard";
import DashboardStat from "@/components/DashboardStat";
import WalletBalance from "@/components/WalletBalance";
import { EthereumIcon } from "@/components/icons/EthereumIcon";
import { SolanaIcon } from "@/components/icons/SolanaIcon";

export default function DashboardPage() {
  return (
    <div className="bg-gray-50 p-8">
      <h1 className="text-3xl font-bold text-gray-600 mb-8">
        Investment Dashboard
      </h1>

      {/* SUMMARY */}
      <div className="grid md:grid-cols-3 gap-6 mb-10">
        <DashboardStat title="Total Invested" value="$0.00" />
        <DashboardStat title="Estimated Returns" value="$0.00" />
        <DashboardStat title="Active Assets" value="2" />
      </div>

      {/* WALLET BALANCE */}
      <WalletBalance />

      {/* ASSETS */}
      <h2 className="text-xl font-semibold text-gray-600 mb-4">
        Available Investments
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        <AssetCard
          name="Ethereum"
          symbol="ETH"
          apy={8.5}
          icon={<EthereumIcon />}
        />

        <AssetCard
          name="Solana"
          symbol="SOL"
          apy={10.2}
          icon={<SolanaIcon />}
        />
      </div>
    </div>
  );
}

