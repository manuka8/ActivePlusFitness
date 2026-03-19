import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../supabaseClient';
import toast from 'react-hot-toast';

const AdminDashboard = () => {
  const [submissions, setSubmissions] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Check auth
    if (!localStorage.getItem('isAdmin')) {
      toast.error('Unauthorized access');
      navigate('/admin');
      return;
    }

    fetchSubmissions();
  }, [navigate]);

  const fetchSubmissions = async () => {
    try {
      if (!supabase) throw new Error('Supabase client not initialized');
      
      const { data, error } = await supabase
        .from('contacts')
        .select('*')
        .order('id', { ascending: false });

      if (error) {
        throw error;
      }

      setSubmissions(data || []);
    } catch (err) {
      console.error(err);
      toast.error(err.message || 'Failed to fetch submissions. Ensure RLS allows SELECT for public.');
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('isAdmin');
    navigate('/admin');
    toast.success('Logged out successfully');
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-dark-bg transition-colors pt-28 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-10">
          <div>
            <h1 className="text-3xl font-extrabold text-light-text dark:text-white">Admin Dashboard</h1>
            <p className="text-gray-500 dark:text-gray-400 mt-2">View all contact form submissions</p>
          </div>
          <button 
            onClick={handleLogout}
            className="px-6 py-2 border-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-white rounded-lg font-semibold transition-all"
          >
            Logout
          </button>
        </div>

        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
          </div>
        ) : submissions.length === 0 ? (
          <div className="bg-white dark:bg-dark-card rounded-2xl p-10 text-center shadow">
            <p className="text-xl text-gray-500 dark:text-gray-400">No submissions found.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {submissions.map((sub) => (
              <div key={sub.id} className="bg-white dark:bg-dark-card rounded-2xl p-6 shadow-md border border-gray-100 dark:border-slate-800 flex flex-col h-full">
                <div className="mb-4">
                  <h3 className="text-lg font-bold text-light-text dark:text-white truncate">{sub.name}</h3>
                  <a href={`mailto:${sub.email}`} className="text-sm text-primary hover:underline truncate block mt-1">
                    {sub.email}
                  </a>
                </div>
                <div className="flex-grow">
                  <p className="text-gray-600 dark:text-gray-400 text-sm whitespace-pre-wrap break-words bg-gray-50 dark:bg-slate-800/50 p-4 rounded-xl">
                    {sub.message}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
