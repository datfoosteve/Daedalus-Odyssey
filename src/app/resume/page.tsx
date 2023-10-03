import React from 'react';
import ResumeViewer from '../../components/ResumeViewer'; // Replace with the actual path to your ResumeViewer component
import ResumeLayout from '../../app/resume/layout'; // Replace with the actual path to your ResumeLayout component

function ResumePage() {
  return (
    <div>
      <h2 className="text-3xl font-semibold mb-4">Resume</h2>
      <ResumeLayout>
      <ResumeViewer />
      </ResumeLayout>
    </div>
  );
}

export default ResumePage;