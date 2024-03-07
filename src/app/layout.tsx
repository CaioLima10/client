import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
import { UserConetextProvider } from "@/context/user-context";
import ProviderQuery from "./provider";
import { Space_Grotesk } from "next/font/google";

const space = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "website-courses",
  description: "Seja Membro aproveite os aulas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${space.className}, dark:bg-medium`}>
        <Providers>
          <UserConetextProvider>
            <ProviderQuery>{children}</ProviderQuery>
          </UserConetextProvider>
        </Providers>
      </body>
    </html>
  );
}
