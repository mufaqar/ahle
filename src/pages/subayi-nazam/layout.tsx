import React from "react";

export const metadata = {
  title: 'صوبائی نظم',
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