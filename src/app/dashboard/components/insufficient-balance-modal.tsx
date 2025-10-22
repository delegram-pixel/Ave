"use client"

import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

interface InsufficientBalanceModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  stockSymbol: string
  onMakeDeposit: () => void
}

export function InsufficientBalanceModal({
  open,
  onOpenChange,
  stockSymbol,
  onMakeDeposit,
}: InsufficientBalanceModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md bg-secondary border-border">
        <div className="text-center py-4">
          <h2 className="text-xl font-bold text-foreground mb-4">Insufficient Balance</h2>
          <p className="text-foreground leading-relaxed mb-6">
            You don&apos;t have enough funds in your account to buy shares of {stockSymbol}. Please fund your account now.
          </p>
          <div className="flex gap-3">
            <Button
              variant="outline"
              className="flex-1 border-border text-foreground hover:bg-accent bg-card"
              onClick={() => onOpenChange(false)}
            >
              Cancel
            </Button>
            <Button
              className="flex-1 bg-allquity hover:bg-allquity/90 text-Background font-medium"
              onClick={() => {
                onOpenChange(false)
                onMakeDeposit()
              }}
            >
              Make Deposit
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
