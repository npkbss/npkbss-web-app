//app/admin/login/page.tsx
"use client";

import { signIn } from "next-auth/react";
import { Button } from "@/components/ui/button";

export default function AdminLogin() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <Button onClick={() => signIn("google")}>
        Login with Google
      </Button>
    </div>
  );
}
