import React from "react";

export const metadata = {
  title: "Videos",
  description: "",
};

export default function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
    </>
  );
}