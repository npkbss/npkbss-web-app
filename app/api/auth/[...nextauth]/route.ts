import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

const allowedAdmins = ['dilliprasadreddy0000@gmail.com', 'npk@npkbss.in', 'support@npkbss.in', 'bharathganamaneni25@gmail.com'];

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],

  callbacks: {
    async signIn({ user }: any) {
      return allowedAdmins.includes(user.email || 'support@npkbss.in');
    },

    async session({ session }: any) {
      return session;
    },
  },

  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
