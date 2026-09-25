import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-4">Virtual Stock Trading</h1>
      <p className="text-xl text-muted-foreground mb-8 text-center max-w-2xl">
        A simulated paper-trading platform for forex and gold incorporating real-time price data, advanced charting, and AI coaching.
      </p>
      <div className="flex gap-4">
        <Link href="/dashboard">
          <Button size="lg">Go to Dashboard</Button>
        </Link>
        <Link href="/sign-in">
          <Button variant="outline" size="lg">Sign In</Button>
        </Link>
      </div>
    </main>
  )
}
