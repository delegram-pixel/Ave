"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ChevronRight, User, Mail, Phone, MapPin, Shield, Bell, CreditCard, LogOut } from "lucide-react"

export function ProfilePage() {
  return (
    <div className="p-8 max-w-4xl mx-auto bg-gray-800">
      {/* Profile Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">Profile</h1>
        <p className="text-muted-foreground">Manage your account settings and preferences</p>
      </div>

      {/* Profile Info Card */}
      <Card className="p-6 mb-6 bg-card border-border">
        <div className="flex items-center gap-6">
          <div className="w-20 h-20 rounded-full bg-Allquity flex items-center justify-center">
            <User className="w-10 h-10 text-Background" />
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-foreground">Bamidele I.</h2>
            <p className="text-muted-foreground">bamidele@example.com</p>
            <p className="text-sm text-muted-foreground mt-1">Member since January 2025</p>
          </div>
          <Button variant="outline" className="border-Allquity-orange text-Allquity-orange hover:bg-Allquity-orange/10">
            Edit Profile
          </Button>
        </div>
      </Card>

      {/* Account Information */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-foreground mb-4">Account Information</h3>
        <Card className="bg-card border-border divide-y divide-border">
          <button className="w-full flex items-center justify-between p-4 hover:bg-accent transition-colors">
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-muted-foreground" />
              <div className="text-left">
                <p className="text-sm font-medium text-foreground">Email Address</p>
                <p className="text-sm text-muted-foreground">bamidele@example.com</p>
              </div>
            </div>
            <ChevronRight className="w-5 h-5 text-muted-foreground" />
          </button>

          <button className="w-full flex items-center justify-between p-4 hover:bg-accent transition-colors">
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-muted-foreground" />
              <div className="text-left">
                <p className="text-sm font-medium text-foreground">Phone Number</p>
                <p className="text-sm text-muted-foreground">+234 801 234 5678</p>
              </div>
            </div>
            <ChevronRight className="w-5 h-5 text-muted-foreground" />
          </button>

          <button className="w-full flex items-center justify-between p-4 hover:bg-accent transition-colors">
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-muted-foreground" />
              <div className="text-left">
                <p className="text-sm font-medium text-foreground">Address</p>
                <p className="text-sm text-muted-foreground">Lagos, Nigeria</p>
              </div>
            </div>
            <ChevronRight className="w-5 h-5 text-muted-foreground" />
          </button>
        </Card>
      </div>

      {/* Settings */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-foreground mb-4">Settings</h3>
        <Card className="bg-card border-border divide-y divide-border">
          <button className="w-full flex items-center justify-between p-4 hover:bg-accent transition-colors">
            <div className="flex items-center gap-3">
              <Shield className="w-5 h-5 text-muted-foreground" />
              <div className="text-left">
                <p className="text-sm font-medium text-foreground">Security</p>
                <p className="text-sm text-muted-foreground">Password, 2FA, and security settings</p>
              </div>
            </div>
            <ChevronRight className="w-5 h-5 text-muted-foreground" />
          </button>

          <button className="w-full flex items-center justify-between p-4 hover:bg-accent transition-colors">
            <div className="flex items-center gap-3">
              <Bell className="w-5 h-5 text-muted-foreground" />
              <div className="text-left">
                <p className="text-sm font-medium text-foreground">Notifications</p>
                <p className="text-sm text-muted-foreground">Manage your notification preferences</p>
              </div>
            </div>
            <ChevronRight className="w-5 h-5 text-muted-foreground" />
          </button>

          <button className="w-full flex items-center justify-between p-4 hover:bg-accent transition-colors">
            <div className="flex items-center gap-3">
              <CreditCard className="w-5 h-5 text-muted-foreground" />
              <div className="text-left">
                <p className="text-sm font-medium text-foreground">Payment Methods</p>
                <p className="text-sm text-muted-foreground">Manage your cards and bank accounts</p>
              </div>
            </div>
            <ChevronRight className="w-5 h-5 text-muted-foreground" />
          </button>
        </Card>
      </div>

      {/* Danger Zone */}
      <div>
        <h3 className="text-lg font-semibold text-foreground mb-4">Account Actions</h3>
        <Card className="bg-card border-border">
          <button className="w-full flex items-center justify-between p-4 hover:bg-destructive/10 transition-colors group">
            <div className="flex items-center gap-3">
              <LogOut className="w-5 h-5 text-destructive" />
              <div className="text-left">
                <p className="text-sm font-medium text-destructive">Log Out</p>
                <p className="text-sm text-muted-foreground">Sign out of your account</p>
              </div>
            </div>
            <ChevronRight className="w-5 h-5 text-destructive" />
          </button>
        </Card>
      </div>
    </div>
  )
}
