import React from "react";

export const metadata = {
  title: 'تنظیمی اجلاس',
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