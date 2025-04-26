import { type AuthOptions, type SessionStrategy } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import type { JWT } from "next-auth/jwt";

interface ExtendedToken extends JWT {
  id?: string;
}

const USER = {
  email: "john@doe.com",
  password: "password123",
  id: "1",
  name: "John Doe",
};

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "text",
          placeholder: "email@example.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Email and password are required");
        }

        if (
          credentials.email !== USER.email ||
          credentials.password !== USER.password
        ) {
          throw new Error("Invalid credentials");
        }

        return {
          id: USER.id,
          email: USER.email,
          name: USER.name,
        };
      },
    }),
  ],
  pages: {
    signIn: "/auth/login",
  },
  session: {
    strategy: "jwt" as SessionStrategy,
  },
  callbacks: {
    async jwt({ token, user }) {
      const extendedToken = token as ExtendedToken;
      if (user) {
        extendedToken.id = user.id;
      }
      return extendedToken;
    },
    async session({ session, token }) {
      const extendedToken = token as ExtendedToken;
      return {
        ...session,
        user: {
          ...session.user,
          id: extendedToken.id,
        },
      };
    },
  },
};
