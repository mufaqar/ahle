import React from "react";

export const metadata = {
  title: ' الیکٹرانک میڈیا',
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