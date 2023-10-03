import pdfjs from 'pdfjs-dist/build/pdf';
import 'pdfjs-dist/build/pdf.worker';

pdfjs.GlobalWorkerOptions.workerSrc ='/pdf.worker.js';

export default pdfjs;
