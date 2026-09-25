import { TradingViewWidget } from "@/components/tradingview-widget"

export default function DashboardPage() {
  return (
    <div className="flex h-screen w-full flex-col md:flex-row bg-background">
      {/* Sidebar for Navigation / Risk Coach / Portfolio Summary */}
      <aside className="w-full md:w-64 border-r border-border p-4 flex flex-col gap-6">
        <div>
          <h2 className="text-lg font-bold mb-2">Virtual Trader</h2>
          <div className="text-3xl font-semibold text-green-500">$10,000.00</div>
          <p className="text-sm text-muted-foreground">Available Equity</p>
        </div>

        <nav className="flex flex-col gap-2 flex-grow">
          <a href="#" className="py-2 px-3 bg-secondary text-secondary-foreground rounded-md text-sm font-medium">Trading Desk</a>
          <a href="#" className="py-2 px-3 hover:bg-secondary/50 text-muted-foreground rounded-md text-sm font-medium">Trade Journal</a>
          <a href="#" className="py-2 px-3 hover:bg-secondary/50 text-muted-foreground rounded-md text-sm font-medium">Risk Coach</a>
        </nav>

        <div className="bg-card border rounded-lg p-3">
          <h3 className="text-sm font-medium mb-1">Signals</h3>
          <p className="text-xs text-muted-foreground">Waiting for TradingView alerts...</p>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col h-full">
        <header className="h-14 border-b border-border flex items-center px-4 justify-between">
          <div className="font-medium">OANDA:XAUUSD — Gold / US Dollar</div>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            {/* Live Ask/Bid will go here */}
            <span className="animate-pulse text-green-500">Live</span>
          </div>
        </header>

        {/* TradingView Chart */}
        <div className="flex-1 bg-black overflow-hidden relative">
          <TradingViewWidget />
        </div>

        {/* Order Entry Panel (mockup) */}
        <div className="h-48 border-t border-border bg-card p-4 flex gap-4">
          <div className="w-1/3 border rounded-lg p-4 flex flex-col justify-center items-center gap-3">
            <h4 className="font-semibold text-sm">Place Order</h4>
            <div className="flex gap-2 w-full">
               <button className="flex-1 bg-red-500 hover:bg-red-600 text-white py-2 rounded font-medium transition-colors">Sell (Short)</button>
               <button className="flex-1 bg-blue-500 hover:bg-blue-600 text-white py-2 rounded font-medium transition-colors">Buy (Long)</button>
            </div>
            <div className="flex items-center gap-2 text-sm w-full">
              <label>Units:</label>
              <input type="number" defaultValue="1" className="bg-background border rounded px-2 py-1 w-full" />
            </div>
          </div>

          <div className="flex-1 border rounded-lg p-4">
            <h4 className="font-semibold text-sm mb-2">Open Positions</h4>
            <div className="text-sm text-muted-foreground text-center mt-6">
              No open positions. Use the order panel to enter a trade.
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
