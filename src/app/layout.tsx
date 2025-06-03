import { Poppins } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import { cn } from "@/lib/utils";
import { ClerkProvider, SignedIn } from "@clerk/nextjs";
import { Navbar } from "@/components/layout/Navbar";
import { Metadata } from "next";
// import { OnboardingGate } from "@/components/onboarding/OnboardingGate";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "LetsPlay",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body
          className={cn(
            "min-h-screen lg:h-full lg:overflow-hidden bg-background antialiased",
            poppins.className
          )}
        >
          <div className="relative flex min-h-screen md:h-full flex-col">
            <SignedIn>
              <Navbar />
            </SignedIn>
            <main className="flex-1 md:overflow-hidden">{children}</main>
            {/* <OnboardingGate /> */}
          </div>
          <Toaster richColors position="top-center" />
        </body>
      </html>
    </ClerkProvider>
  );
}
