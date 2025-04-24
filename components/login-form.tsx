'use client'
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import React, { useState } from "react"
import { useRouter } from "next/navigation"
import { useUserStore } from "@/app/shared/core/providers/userProvider"
import { useLocalStorage } from "@/app/shared/hooks/useLocalStorage"
import { AxiosInterceptor } from "@/app/shared/core/http"

export function LoginForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  const [value, setValue, removeValue] = useLocalStorage('token', '');
  const { setUser } = useUserStore(state => state);
  const [login, setLogin] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const router = useRouter();



  const signupHandler = async () => {
    if (login.length > 2 && password.length > 2) {
      const data = await AxiosInterceptor.$post('/user/signup', { login, password });
      if (data.status === 200) {
        const { body } = data;
        setValue(body.token);
        setUser(1, body.user.login);
        router.push('/');
      } else {
        console.log('Error:', data.status);
      }

    }
  };
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Login</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                  onChange={e => setLogin(e.currentTarget.value)}
                  value={login}
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  <a
                    href="#"
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                  >
                    Forgot your password?
                  </a>
                </div>
                <Input id="password" type="password" required onChange={e => setPassword(e.currentTarget.value)} value={password} />
              </div>
              <Button type="submit" className="w-full" onClick={async () => await signupHandler()}>
                Login
              </Button>
              <Button variant="outline" className="w-full">
                Login with Google
              </Button>
            </div>
            <div className="mt-4 text-center text-sm">
              Don&apos;t have an account?{" "}
              <a href="#" className="underline underline-offset-4">
                Sign up
              </a>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

