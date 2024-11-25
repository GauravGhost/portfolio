import React, { useState, useEffect } from 'react';
import { Loader2, X, Download, Eye } from 'lucide-react';
import { client } from '../../lib/sanityClient';
import { motion } from "framer-motion";

const ResumeViewer = () => {
  const [resumeUrl, setResumeUrl] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchResume = async () => {
      try {
        const query = `*[_type == "resume"] | order(uploadedAt desc)[0]{
          "fileUrl": resumeFile.asset->url
        }`;
        
        const result = await client.fetch(query);
        
        if (result?.fileUrl) {
          setResumeUrl(result.fileUrl);
        } else {
          setError('No resume found');
        }
      } catch (err) {
        setError('Failed to load resume');
        console.error('Error fetching resume:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchResume();
  }, []);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);

  const handleModalClick = (e) => {
    if (e.target === e.currentTarget) {
      setIsModalOpen(false);
    }
  };

  const handleDownload = () => {
    window.open(`${resumeUrl}?dl=`, '_blank');
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-[#00eda5]" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-red-500 text-center p-4">
        {error}
      </div>
    );
  }

  return (
    <div className="flex gap-4 flex-wrap">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsModalOpen(true)}
        className="flex items-center gap-3 px-6 py-3 font-bold text-white border-2 border-[#00eda5] rounded-xl hover:bg-[#00eda5] hover:bg-opacity-20 transition-all duration-300"
      >
        <Eye className="w-5 h-5" />
        View Resume
      </motion.button>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleDownload}
        className="flex items-center gap-3 px-6 py-3 font-bold text-white border-2 border-[#00eda5] rounded-xl hover:bg-[#00eda5] hover:bg-opacity-20 transition-all duration-300"
      >
        <Download className="w-5 h-5" />
        Download
      </motion.button>

      {isModalOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 backdrop-blur-sm overflow-y-auto p-4"
          onClick={handleModalClick}
        >
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="relative w-full max-w-4xl bg-[#151030] rounded-xl shadow-xl p-4"
          >
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 p-2 text-white hover:text-[#00eda5] transition-colors bg-[#151030] rounded-full z-10"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="w-full h-[100vh] overflow-hidden rounded-lg">
              <iframe
                src={`${resumeUrl}#toolbar=0&navpanes=0`}
                className="w-full h-[100vh] border-0"
                title="Resume PDF Viewer"
              />
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default ResumeViewer;