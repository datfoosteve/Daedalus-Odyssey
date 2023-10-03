import React from 'react';
import { Document, Page, pdfjs } from 'react-pdf';

// Initialize pdfjs worker
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const styles = {
  container: {
    backgroundColor: 'bg-gray-200', // Grey background color
    borderRadius: 'rounded-lg', // Rounded corners
    padding: 4, // Padding
    margin: 'auto', // Center the container
    width: '96', // Width of the container
  },
  header: {
    fontSize: 'text-xl', // Header font size
    marginBottom: 4, // Margin bottom
  },
  pdfContainer: {
    border: 'border-2 border-gray-300', // Grey border
    borderRadius: 'rounded-lg', // Rounded corners
  },
};

function ResumeViewer() {
  const pdfUrl = '/pdf/Stephen_Puthenpurackal_Resume_2.pdf';

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>My Resume</h1>
      <div style={styles.pdfContainer}>
        <Document file={pdfUrl}>
          <Page pageNumber={1} /> {/* Display the first page of the PDF */}
        </Document>
      </div>
    </div>
  );
}

export default ResumeViewer;