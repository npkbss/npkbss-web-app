'use client';
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Toaster, toast } from "sonner";

export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-bold bg-blue-500 text-white underline md:text-5xl border border-slate-200">
        Hello world!
      </h1>

      <Card className="w-full max-w-sm bg-amber-50">
        <CardHeader>
          <CardTitle>Login to your account</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
          <CardAction>
            <Button variant="link">Sign Up</Button>
          </CardAction>
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
                <Input id="password" type="password" required />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex-col gap-2">
          <Button type="submit" className="w-full">
            Login
          </Button>
          <Button variant="outline" className="w-full">
            Login with Google
          </Button>
        </CardFooter>
      </Card>

      {/* Dialog Test */}
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline" className="bg-green-500 m-4 p-4 text-3xl ">
            Open Dialog
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Hello from Dialog 👋</DialogTitle>
          </DialogHeader>
          <p className="text-sm text-muted-foreground">
            This confirms Dialog + Animations are working!
          </p>
        </DialogContent>
      </Dialog>
      <Button onClick={() => toast.success("Shadcn Button Works! 🎉")}>
        Click Me
      </Button>
      <Toaster richColors position="top-right" />
    </>
  );
}
