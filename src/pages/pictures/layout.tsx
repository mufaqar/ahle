import React from "react";

export const metadata = {
  title: "Picture",
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