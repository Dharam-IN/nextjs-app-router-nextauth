import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const authOptions = {
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        console.log("credentials========>", credentials);
        if (!credentials) {
          return null;
        }

        const req = {
          data: {
            email: "eve.holt@reqres.in",
            password: "cityslicka",
          }
        };

        console.log("req=====", req);

        try {
          const res = await fetch("https://reqres.in/api/api/login", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email: req.data.email,
              password: req.data.password,
            }),
          });

          if (!res.ok) {
            const errorText = await res.text();
            throw new Error(`API Error: ${errorText}`);
          }

          const data = await res.json();

          if (data && data.id) {
            return {
              id: data.id,
              email: credentials.email,
              token: `fake-jwt-token-${data.id}`,
              name: `User ${data.id}`, // Set name here
            };
          } else {
            return null;
          }
        } catch (error) {
          console.error("Authorization error:", error.message);
          return null;
        }
      }
    }),
  ],
  session: { strategy: "jwt" },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.user = user; // Store user info in token
      }
      return token;
    },
    async session({ session, token }) {
      if (token.user) {
        session.user = token.user; // Pass custom user data to session
      }
      return session;
    },
  },
  pages: {
    signIn: "/auth/signin",
    error: "/auth/error",
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST, authOptions };