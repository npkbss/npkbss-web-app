// app/admin/page.tsx
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";

export default async function AdminRootPage() {
  const session = await getServerSession();

  if (!session) {
    // Not logged in → go to login page
    redirect("/admin/login");
  }

  // Logged in → go to leads page
  redirect("/admin/dashboard");
}
