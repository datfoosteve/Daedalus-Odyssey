
"use client";
import React, { PureComponent } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { Button } from "@/components/ui/button"; // Import the Button component

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const styles = {
  container: {
    backgroundColor: '#F3F4F6', // Slightly lighter than bg-gray-200 for a cleaner look
    borderRadius: '0.5rem',
    padding: '2rem', // Increased padding for a more spacious feel
    margin: 'auto',
    width: '100%',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', // Subtle shadow for depth
  },
  header: {
    fontSize: '1.5rem', // Slightly larger font size
    marginBottom: '1.5rem', 
    letterSpacing: '1px', // Some letter spacing for a premium feel
  },
  pdfContainer: {
    border: '2px solid #E5E7EB', 
    borderRadius: '0.5rem',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', // Subtle shadow for depth
    marginBottom: '1rem', // Space for the download button
  },
//   downloadButton: {
//     display: 'inline-block',
//     backgroundColor: '#3B82F6',
//     color: 'white',
//     padding: '0.5rem 1rem',
//     borderRadius: '0.5rem',
//     textDecoration: 'none',
//     textAlign: 'center' as 'center', // Updated here
//     boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
// },

};

export default class ResumeViewer extends PureComponent {
  pdfUrl = '/pdf/StephenPuthenpurackalResume2.pdf';
  
  render() {
    return (
      <div style={styles.container}>
        <h1 style={styles.header}>My Resume</h1>
        <div style={styles.pdfContainer}>
          <Document file={this.pdfUrl}>
            <Page pageNumber={1} />
          </Document>
        </div>
        <Button variant="outline" asChild>
          <a href={this.pdfUrl} download="StephenPuthenpurackalResume.pdf">Download Resume</a>
        </Button>
      </div>
    );
  }
};   // End of ResumeViewer component