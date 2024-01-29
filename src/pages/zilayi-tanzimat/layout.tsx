import React from "react";

export const metadata = {
  title: 'ذیلی تنظیمات',
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