import React from "react";

export const metadata = {
  title: 'Ahlehadith Magazine',
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