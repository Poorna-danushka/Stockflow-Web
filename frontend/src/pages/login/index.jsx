import React from 'react'
import AuthLayout from '../../layouts/AuthLayout.jsx'
import { BarChart } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const Login = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const useNavigator=useNavigate();

  const Submit = () => {
    alert(`${email} - ${password}`)
  }

  return (
    <AuthLayout>
      <Card className="w-full max-w-sm">
        <CardHeader className='text-center'>
          <div className='flex gap-3 h-16 items-center justify-center px-5 border-b border-border hover:cursor-pointer' onClick={()=>{useNavigator('/')}}>
            <div className='flex justify-center items-center rounded-lg size-8 bg-[#e35d31] text-white shadow-sm'>
              <BarChart className='size-4 strokeWidth={2.25}'/>
            </div>
            <div className='leading-tight'>
              <p className='text-sm font-semibold text-foreground'>StockFlow</p>
              <p className='text-[11px] text-muted-foreground'>Distribution System</p>
            </div>

          </div>
          <CardTitle className='text-2xl'>Login</CardTitle>
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
                  onChange={(e) => setemail(e.target.value)}
                  required
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  <a
                    href="#"
                    className="ml-auto text-orange-500 inline-block text-sm underline-offset-4 hover:underline"
                  >
                    Forgot your password?
                  </a>
                </div>
                <Input id="password" type="password" placeholder="••••••••" onChange={(e) => setpassword(e.target.value)} required />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex-col gap-2">
          <Button type="submit" className="w-full bg-orange-500 hover:bg-orange-700" onClick={() => Submit()}>
            Login
          </Button>
        </CardFooter>
      </Card>
    </AuthLayout>
  )
}

export default Login