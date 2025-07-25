"use client";

import { ThemeProvider } from "next-themes";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider 
      attribute="class" 
      defaultTheme="light" 
      enableSystem={true} 
      disableTransitionOnChange={false}
      storageKey="bookr-theme"
    >
      {children}
    </ThemeProvider>
  );
} 