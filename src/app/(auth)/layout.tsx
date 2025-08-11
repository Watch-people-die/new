import Header from "@/component/web/layout/header";
import React from "react";

export default function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
<Header/>      <main>{children}</main>
    </div>
  );
}
