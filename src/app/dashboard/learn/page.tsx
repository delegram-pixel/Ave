import { DashboardLayout } from "../components/dashboard-layout"
import { Card } from "@/components/ui/card"

export default function LearnPage() {
  return (
    <DashboardLayout>
      <div className="p-8 max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-foreground mb-2">Learn</h1>
        <p className="text-muted-foreground mb-8">Educational resources coming soon</p>
        <Card className="p-12 bg-card border-border text-center">
          <p className="text-muted-foreground">Learning resources will be available here</p>
        </Card>
      </div>
    </DashboardLayout>
  )
}
