//app/admin/login/page.tsx
"use client";

import { signIn } from "next-auth/react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function AdminLogin() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-sm bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
        
        <h1 className="text-2xl font-semibold text-center mb-2">
          Admin Login
        </h1>
        <p className="text-center text-gray-500 mb-6 text-sm">
          Sign in to access your admin dashboard
        </p>

        <Button
          onClick={() => signIn("google", { callbackUrl: "/admin/dashboard" })}
          className="w-full flex items-center justify-center gap-3 py-5 text-md font-medium bg-white border border-gray-300 text-gray-700 hover:bg-gray-100 rounded-xl shadow-sm transition"
        >
          <Image
            src="/assets/admin/google-logo.webp"
            alt="Google Icon"
            width={22}
            height={22}
          />
          Continue with Google
        </Button>

      </div>
    </div>
  );
}

