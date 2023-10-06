import Script from 'next/script';
import { ReactNode } from 'react';

type LayoutProps = {
  children: ReactNode;
};

const ResumeLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      {children}
      <Script src="https://cdn.jsdelivr.net/npm/pdfjs-dist@3.11.174/build/pdf.min.js" strategy="beforeInteractive" />
    </>
  );
};

export default ResumeLayout;