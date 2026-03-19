import React from 'react';

interface SectionWrapperProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
}

export function SectionWrapper({
  id,
  children,
  className = '',
}: SectionWrapperProps) {
  return (
    <section id={id} className={`w-full max-w-7xl mx-auto px-6 lg:px-8 py-20 ${className}`}>
      {children}
    </section>
  );
}