import React, { useState, useEffect } from 'react';
import IOSNavBar from '../components/IOSNavBar.jsx';
import { Download } from 'lucide-react';
import { pdfjs, Document, Page } from 'react-pdf';

import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const ResumeScreen = () => {
  const [pageWidth, setPageWidth] = useState(() => {
    if (typeof window !== 'undefined') {
      return Math.min(window.innerWidth - 32, 600);
    }
    return 360;
  });

  useEffect(() => {
    const handleResize = () => {
      setPageWidth(Math.min(window.innerWidth - 32, 600));
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const downloadButton = (
    <a
      href="/files/resume.pdf"
      download
      className="flex items-center text-[#007AFF] active:opacity-70 p-1"
      title="Download resume"
    >
      <Download className="w-5 h-5" />
    </a>
  );

  return (
    <div className="w-full h-full pb-20 overflow-y-auto ios-page">
      <IOSNavBar
        title="Resume"
        backText="Home"
        rightElement={downloadButton}
      />

      <div className="flex justify-center p-4">
        <Document
          file="/files/resume.pdf"
          loading={
            <div className="text-center py-10 text-gray-500 text-sm">
              Loading Resume...
            </div>
          }
          error={
            <div className="text-center py-10 text-red-500 text-sm">
              Failed to load PDF.
            </div>
          }
          className="shadow-md rounded-xl overflow-hidden flex justify-center max-w-full"
        >
          <Page
            pageNumber={1}
            width={pageWidth}
            renderTextLayer
            renderAnnotationLayer
          />
        </Document>
      </div>
    </div>
  );
};

export default ResumeScreen;
