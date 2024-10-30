"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const queryClient = new QueryClient();

  return (
    <html lang="es">
      <body className="w-screen min-h-screen flex flex-col items-center bg-[#16181D] px-5 md:p-0">
        <main className="flex justify-center items-center w-full flex-col">
          <QueryClientProvider client={queryClient}>
            {children}
            {/* <ReactQueryDevtools initialIsOpen={false} /> */}
          </QueryClientProvider>
        </main>

        <Toaster />
        <footer className="text-center leading-[4rem] opacity-70">
          © {new Date().getFullYear()} mateo_developments
        </footer>
      </body>
    </html>
  );
}
