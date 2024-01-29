import React from "react";

export const metadata = {
  title: 'All Pakistan Confrence',
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