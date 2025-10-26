"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import { ArrowLeft, ChevronRight, User, Mail, Phone, MapPin, Shield, Bell, CreditCard, LogOut, AlertCircle } from "lucide-react"

type ProfileData = {
  name: string
  email: string
  phone: string
  address: string
  joinDate: string
  notifications: boolean
  twoFactor: boolean
}

export function ProfilePage() {
  const router = useRouter()
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [profile, setProfile] = useState<ProfileData | null>(null)

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000))
        setProfile({
          name: "Bamidele I.",
          email: "bamidele@example.com",
          phone: "+234 801 234 5678",
          address: "Lagos, Nigeria",
          joinDate: "January 2025",
          notifications: true,
          twoFactor: true
        })
      } catch (err) {
        setError("Failed to load profile. Please try again.")
        console.error(err)
      } finally {
        setLoading(false)
      }
    }

    fetchProfile()
  }, [])

  const handleBack = () => {
    router.back()
  }

  if (loading) {
    return <ProfileSkeleton />
  }

  if (error) {
    return <ErrorState error={error} onRetry={() => window.location.reload()} />
  }

  if (!profile) {
    return <EmptyState onRetry={() => window.location.reload()} />
  }

  return (
    <div className="min-h-screen bg-dashboard-bg text-white p-4 sm:p-6 md:p-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center text-sm mb-6" aria-label="Breadcrumb">
          <button 
            onClick={handleBack}
            className="text-muted-foreground hover:text-foreground flex items-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-allquity rounded-md p-1 -ml-1"
            aria-label="Go back"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </button>
          <span className="mx-2 text-muted-foreground">/</span>
          <span className="text-foreground">Profile</span>
        </nav>

        {/* Header */}
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Profile Settings</h1>
          <p className="text-gray-400">Manage your account settings and preferences</p>
        </header>

        {/* Profile Card */}
        <Card className="mb-8 overflow-hidden border-border/50 shadow-sm">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="w-20 h-20 rounded-full bg-allquity flex items-center justify-center flex-shrink-0">
                <User className="w-10 h-10 text-primary-foreground" />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h2 className="text-2xl font-bold text-white">{profile.name}</h2>
                <p className="text-gray-300">{profile.email}</p>
                <p className="text-sm text-gray-400 mt-1">Member since {profile.joinDate}</p>
              </div>
              <Button 
                variant="outline" 
                className="border-allquity text-allquity hover:bg-allquity/10 mt-4 md:mt-0 w-full md:w-auto"
                aria-label="Edit profile"
              >
                Edit Profile
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Account Information */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-white mb-4">Account Information</h2>
          <Card className="border-border/50 shadow-sm">
            <ProfileField 
              icon={Mail}
              label="Email Address"
              value={profile.email}
              onEdit={() => {}}
              className="border-b border-border/30"
            />
            <ProfileField 
              icon={Phone}
              label="Phone Number"
              value={profile.phone}
              onEdit={() => {}}
              className="border-b border-border/30"
            />
            <ProfileField 
              icon={MapPin}
              label="Address"
              value={profile.address}
              onEdit={() => {}}
            />
          </Card>
        </section>

        {/* Security Settings */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-white mb-4">Security & Preferences</h2>
          <Card className="border-border/50 shadow-sm">
            <button 
              className="w-full flex items-center justify-between p-4 hover:bg-accent/30 transition-colors text-left focus:outline-none focus:ring-2 focus:ring-allquity/20 rounded-t-lg"
              onClick={() => {}}
              aria-label="Security settings"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Shield className="w-5 h-5 text-foreground" />
                </div>
                <div>
                  <p className="font-medium text-white">Security</p>
                  <p className="text-sm text-gray-400">Password, 2FA, and security settings</p>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-muted-foreground" />
            </button>

            <div className="border-t border-border/30">
              <button 
                className="w-full flex items-center justify-between p-4 hover:bg-accent/30 transition-colors text-left focus:outline-none focus:ring-2 focus:ring-allquity/20"
                onClick={() => {}}
                aria-label="Notification settings"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Bell className="w-5 h-5 text-foreground" />
                  </div>
                  <div>
                    <p className="font-medium text-white">Notifications</p>
                    <p className="text-sm text-gray-400">Manage your notification preferences</p>
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 text-muted-foreground" />
              </button>
            </div>

            <div className="border-t border-border/30">
              <button 
                className="w-full flex items-center justify-between p-4 hover:bg-accent/30 transition-colors text-left focus:outline-none focus:ring-2 focus:ring-allquity/20 rounded-b-lg"
                onClick={() => {}}
                aria-label="Payment methods"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <CreditCard className="w-5 h-5 text-foreground" />
                  </div>
                  <div>
                    <p className="font-medium text-white">Payment Methods</p>
                    <p className="text-sm text-gray-400">Manage your cards and bank accounts</p>
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 text-muted-foreground" />
              </button>
            </div>
          </Card>
        </section>

        {/* Danger Zone */}
        <section>
          <h2 className="text-xl font-semibold text-white mb-4">Account Actions</h2>
          <Card className="border-destructive/20 bg-destructive/5">
            <button 
              className="w-full flex items-center justify-between p-4 hover:bg-destructive/10 transition-colors text-left focus:outline-none focus:ring-2 focus:ring-destructive/20 rounded-lg"
              onClick={() => {}}
              aria-label="Sign out"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-destructive/10">
                  <LogOut className="w-5 h-5 text-destructive" />
                </div>
                <div>
                  <p className="font-medium text-destructive">Sign Out</p>
                  <p className="text-sm text-gray-400">Log out of your account</p>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-destructive" />
            </button>
          </Card>
        </section>
      </div>
    </div>
  )
}

// Reusable Profile Field Component
const ProfileField = ({ 
  icon: Icon, 
  label, 
  value, 
  onEdit,
  className = ""
}: { 
  icon: React.ComponentType<{ className?: string }>, 
  label: string, 
  value: string,
  onEdit: () => void,
  className?: string
}) => (
  <div className={`flex items-center justify-between p-4 hover:bg-accent/30 transition-colors ${className}`}>
    <div className="flex items-center gap-3">
      <div className="p-2 rounded-lg bg-white/10">
        <Icon className="w-5 h-5 text-white" />
      </div>
      <div className="text-left">
        <p className="text-sm font-medium text-gray-400">{label}</p>
        <p className="font-medium text-white">{value}</p>
      </div>
    </div>
    <Button 
      variant="ghost" 
      size="sm" 
      onClick={onEdit}
      className="text-allquity hover:bg-allquity/10"
      aria-label={`Edit ${label.toLowerCase()}`}
    >
      Edit
    </Button>
  </div>
)

// Loading State
const ProfileSkeleton = () => (
  <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <div className="space-y-8">
      <Skeleton className="h-8 w-48 mb-2" />
      <Skeleton className="h-4 w-64 mb-8" />
      
      {/* Profile Card Skeleton */}
      <div className="flex flex-col md:flex-row items-center gap-6 p-6 bg-card rounded-lg border border-border/50">
        <Skeleton className="w-20 h-20 rounded-full" />
        <div className="flex-1 space-y-2">
          <Skeleton className="h-6 w-48" />
          <Skeleton className="h-4 w-32" />
          <Skeleton className="h-3 w-24" />
        </div>
        <Skeleton className="h-10 w-32 mt-4 md:mt-0" />
      </div>
      
      {/* Sections Skeleton */}
      {[1, 2, 3].map((i) => (
        <div key={i} className="space-y-4">
          <Skeleton className="h-6 w-32 mb-4" />
          <div className="space-y-2">
            {[1, 2, 3].map((j) => (
              <Skeleton key={j} className="h-16 w-full" />
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
)

// Empty State
const EmptyState = ({ onRetry }: { onRetry: () => void }) => (
  <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
    <div className="mx-auto w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-4">
      <User className="w-8 h-8 text-muted-foreground" />
    </div>
    <h3 className="text-lg font-medium text-foreground mb-2">No profile found</h3>
    <p className="text-muted-foreground mb-6">We couldn&apos;t load your profile information.</p>
    <Button onClick={onRetry} className="bg-allquity hover:bg-allquity/90">
      Try again
    </Button>
  </div>
)

// Error State
const ErrorState = ({ error, onRetry }: { error: string, onRetry: () => void }) => (
  <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
    <div className="mx-auto w-16 h-16 rounded-full bg-destructive/10 flex items-center justify-center mb-4">
      <AlertCircle className="w-8 h-8 text-destructive" />
    </div>
    <h3 className="text-lg font-medium text-foreground mb-2">Something went wrong</h3>
    <p className="text-muted-foreground mb-2">{error}</p>
    <p className="text-sm text-muted-foreground mb-6">Please try again or contact support if the problem persists.</p>
    <Button 
      onClick={onRetry} 
      variant="outline" 
      className="border-allquity text-allquity hover:bg-allquity/10"
    >
      Retry
    </Button>
  </div>
)
