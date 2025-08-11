import Footer from "@/component/web/layout/footer";
import Header from "@/component/web/layout/header";
import React from "react";

export default function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <main>
        <Header/>
        {children}
        <Footer/>
      </main>
    </div>
  );
}
