
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function LoginPage() {
  return (
    <div className="flex items-center justify-center min-h-screen" style={{ backgroundColor: '#061519' }}>
      <Card className="mx-auto max-w-sm" style={{ backgroundColor: '#1a2d35', borderColor: '#2a3d45' }}>
        <CardHeader>
          <CardTitle className="text-2xl text-white">Login</CardTitle>
          <CardDescription className="text-gray-300">
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
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
              <div className="flex items-center">
                <Link
                  href="#"
                  className="ml-auto inline-block text-sm underline"
                >
                  Forgot your password?
                </Link>
              </div>
              <Input id="password" type="password" required className="bg-input text-foreground" />
            </div>
            <Link href="/dashboard" className="w-full">
              <Button className="w-full" style={{ backgroundColor: '#a4dd6b', color: '#061519', border: 'none' }}>
                Login
              </Button>
            </Link>
            <Button variant="outline" className="w-full" style={{ borderColor: '#a4dd6b', color: '#a4dd6b' }}>
              Login with Google
            </Button>
          </div>
          <div className="mt-4 text-center text-sm">
            Don&apos;t have an account?{" "}
            <Link href="/auth/signup" className="underline" style={{ color: '#a4dd6b' }}>
              Sign up
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
