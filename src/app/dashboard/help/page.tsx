import { DashboardLayout } from "../components/dashboard-layout"
import { Card } from "@/components/ui/card"

export default function HelpPage() {
  return (
    <DashboardLayout>
      <div className="p-8 max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-foreground mb-2">Help & Support</h1>
        <p className="text-muted-foreground mb-8">Get assistance with your account</p>
        <Card className="p-12 bg-card border-border text-center">
          <p className="text-muted-foreground">Help center coming soon</p>
        </Card>
      </div>
    </DashboardLayout>
  )
}
