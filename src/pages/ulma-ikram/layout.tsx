import React from "react";

export const metadata = {
    title: 'علمائےکرام/معروف شخصیات',
    description: '',
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