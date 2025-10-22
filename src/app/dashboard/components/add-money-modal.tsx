"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Card } from "@/components/ui/card"
import { Wallet, DollarSign } from "lucide-react"

interface AddMoneyModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function AddMoneyModal({ open, onOpenChange }: AddMoneyModalProps) {
  const wallets = [
    { name: "USD Wallet", amount: "$0.00", flag: "🇺🇸", icon: DollarSign },
    { name: "NGN Wallet", amount: "₦0.00", flag: "🇳🇬", icon: Wallet },
  ]

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md bg-white border-border">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-foreground">Add money</DialogTitle>
          <p className="text-muted-foreground">Which wallet would you like to deposit to?</p>
        </DialogHeader>
        <div className="space-y-3 mt-4">
          {wallets.map((wallet, index) => (
            <Card
              key={index}
              className="p-4 bg-secondary border-border hover:bg-accent transition-colors cursor-pointer"
              onClick={() => {
                // Handle wallet selection
                console.log(`Selected ${wallet.name}`)
                onOpenChange(false)
              }}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-allquity/20 flex items-center justify-center text-2xl">
                    {wallet.flag}
                  </div>
                  <div>
                    <h4 className="text-foreground font-medium">{wallet.name}</h4>
                  </div>
                </div>
                <p className="text-lg font-semibold text-foreground">{wallet.amount}</p>
              </div>
            </Card>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  )
}
