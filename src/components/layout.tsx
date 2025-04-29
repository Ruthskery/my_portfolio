'use client';
import { ReactNode} from "react";
// import Navbar from "./sections/navbar";
import Hero from "./sections/hero";
import { ThemeProvider } from "@/context/themeContext";

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <ThemeProvider>
       {/* <Navbar /> */}

      {/* Hero Section */}
      <Hero />
      
      {/* Main content */}
      <main className="flex-grow bg-gray-100 dark:bg-amber-800 p-6">{children}</main>
      
      {/* Footer */}
      <footer className="bg-blue-600 text-white py-4 text-center mt-6">
        <p>📌 My Website Footer</p>
        <p className="text-sm">© 2025 My Website. All Rights Reserved.</p>
      </footer> 
      </ThemeProvider>
    </div>
  );
}
