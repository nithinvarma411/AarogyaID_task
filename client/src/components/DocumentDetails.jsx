import React from 'react';
import { X } from 'lucide-react';

const DocumentDetails = ({ document, onClose }) => {
  if (!document) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg p-6 max-w-2xl w-full relative">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
        >
          <X size={24} />
        </button>
        
        <h2 className="text-2xl font-bold mb-6">Document Details</h2>
        
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-gray-500">Execution ID</p>
            <p className="font-medium">{document._id}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">File Name</p>
            <p className="font-medium">{document.fileName}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">File Type</p>
            <p className="font-medium">{document.fileType}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Environment</p>
            <p className="font-medium">{document.environment}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Review Status</p>
            <p className="font-medium">{document.reviewStatus}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Start Time</p>
            <p className="font-medium">{document.startTime}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">End Time</p>
            <p className="font-medium">{document.endTime}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocumentDetails;
