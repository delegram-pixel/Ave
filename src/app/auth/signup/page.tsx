
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function SignupPage() {
  return (
    <div className="flex items-center justify-center min-h-screen" style={{ backgroundColor: '#061519' }}>
      <Card className="mx-auto max-w-sm" style={{ backgroundColor: '#1a2d35', borderColor: '#2a3d45' }}>
        <CardHeader>
          <CardTitle className="text-2xl text-white">Sign Up</CardTitle>
          <CardDescription className="text-gray-300">
            Enter your information to create an account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Input id="first-name" placeholder="First name" required className="bg-input text-foreground" />
            </div>
            <div className="grid gap-2">
              <Input id="last-name" placeholder="Last name" required className="bg-input text-foreground" />
            </div>
            <div className="grid gap-2">
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
                className="bg-input text-foreground"
              />
            </div>
            <div className="grid gap-2">
              <Input id="password" type="password" placeholder="Password" required className="bg-input text-foreground" />
            </div>
            <Link href="/dashboard" className="w-full">
              <Button className="w-full" style={{ backgroundColor: '#a4dd6b', color: '#061519', border: 'none' }}>
                Create an account
              </Button>
            </Link>
          </div>
          <div className="mt-4 text-center text-sm">
            Already have an account?{" "}
            <Link href="/auth/login" className="underline" style={{ color: '#a4dd6b' }}>
              Login
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
