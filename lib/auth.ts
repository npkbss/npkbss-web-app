import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { createClient } from "@supabase/supabase-js";

// server-side Supabase client
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],

  callbacks: {
    async signIn({ user }: any) {
      const email = user.email;

      if (!email) return false;

      // check in Supabase admins table
      const { data, error } = await supabase
        .from("admins")
        .select("email")
        .eq("email", email)
        .single();

      if (error || !data) {
        console.warn("❌ Unauthorized admin login attempt:", email);
        return false;
      }

      console.log("✅ Admin verified:", email);
      return true;
    },

    async session({ session }: any) {
      return session;
    },
  },

  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: '/admin/login',
    error: '/admin/login',
  }
};
