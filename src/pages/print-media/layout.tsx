import React from "react";

export const metadata = {
  title: 'پرنٹ میڈیا کوریج',
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