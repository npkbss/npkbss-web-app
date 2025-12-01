// app/admin/page.tsx
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export default async function AdminRootPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    // Not logged in → go to login page
    redirect("/admin/login");
  }

  // Logged in → go to leads page
  redirect("/admin/dashboard");
}
