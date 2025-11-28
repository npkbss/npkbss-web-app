import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

const allowedAdmins = ['dilliprasadreddy0000@gmail.com', 'npk@npkbss.in', 'support@npkbss.in'];

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],

  callbacks: {
    async signIn({ user }) {
      return allowedAdmins.includes(user.email || '');
    },
    async session({ session }) {
      return session;
    },
  },

  secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };
