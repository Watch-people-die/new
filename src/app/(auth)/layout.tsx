import React from "react";

export default function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <header>Header here</header>
      <main>{children}</main>
    </div>
  );
}
