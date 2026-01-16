export default function WalletBalance() {
  return (
    <div className="bg-white rounded-xl shadow p-6 mb-10">
      <h2 className="text-lg font-semibold text-gray-600 mb-4">
        Wallet Balance
      </h2>

      <div className="flex gap-6 text-blue-300">
        <BalanceCard coin="Ethereum" symbol="ETH" amount="1.250 ETH" />
        <BalanceCard coin="Solana" symbol="SOL" amount="12.80 SOL" />
      </div>
    </div>
  );
}

function BalanceCard({
  coin,
  symbol,
  amount,
}: {
  coin: string;
  symbol: string;
  amount: string;
}) {
  return (
    <div className="border rounded-lg p-4 w-full">
      <p className="text-gray-500 text-sm text-gray-600">{coin}</p>
      <p className="font-bold text-lg ">{amount}</p>
      <span className="text-xs text-gray-400">{symbol}</span>
    </div>
  );
}





