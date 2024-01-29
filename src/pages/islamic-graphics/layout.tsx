import React from "react";

export const metadata = {
  title: "Islamic Graphics",
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