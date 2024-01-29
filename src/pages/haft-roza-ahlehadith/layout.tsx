import React from "react";

export const metadata = {
  title: 'Haft Roza Ahlehadith',
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