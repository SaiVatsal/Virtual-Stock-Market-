"use client"
import React, { useEffect, useRef } from "react"

// Create a component that dynamically loads the TradingView Advanced Chart Widget
export function TradingViewWidget() {
  const container = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Prevent appending multiple scripts in strict mode
    if (container.current && container.current.childElementCount === 0) {
      const script = document.createElement("script")
      script.src = "https://s3.tradingview.com/tv.js"
      script.async = true
      script.onload = () => {
        if (typeof window !== "undefined" && (window as any).TradingView) {
          new (window as any).TradingView.widget({
            autosize: true,
            symbol: "OANDA:XAUUSD",
            interval: "15",
            timezone: "Etc/UTC",
            theme: "dark",
            style: "1",
            locale: "en",
            enable_publishing: false,
            backgroundColor: "rgba(0, 0, 0, 1)",
            gridColor: "rgba(42, 46, 57, 0.06)",
            hide_top_toolbar: false,
            hide_legend: false,
            save_image: false,
            container_id: container.current?.id,
          })
        }
      }
      container.current.appendChild(script)
    }
  }, [])

  return (
    <div className="tradingview-widget-container" style={{ height: "100%", width: "100%" }}>
      <div id="tradingview_widget" ref={container} style={{ height: "100%", width: "100%" }} />
    </div>
  )
}
