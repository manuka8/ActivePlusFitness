import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const AdminLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const envUser = import.meta.env.VITE_ADMIN_USER;
    const envPass = import.meta.env.VITE_ADMIN_PASS;

    if (username === envUser && password === envPass) {
      localStorage.setItem('isAdmin', 'true');
      toast.success('Login successful!');
      navigate('/admin/dashboard');
    } else {
      toast.error('Invalid username or password');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-dark-bg transition-colors pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white dark:bg-dark-card p-10 rounded-2xl shadow-xl">
        <div>
          <h2 className="text-center text-3xl font-extrabold text-light-text dark:text-white mb-2">
            Admin Portal
          </h2>
          <p className="text-center text-sm text-gray-500 dark:text-gray-400">
            Sign in to view submitted contact forms
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleLogin}>
          <div className="rounded-md shadow-sm space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Username</label>
              <input
                type="text"
                required
                className="appearance-none relative block w-full px-3 py-3 border border-gray-300 dark:border-slate-700 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm dark:bg-slate-800 dark:text-white mt-1"
                placeholder="Enter admin username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Password</label>
              <input
                type="password"
                required
                className="appearance-none relative block w-full px-3 py-3 border border-gray-300 dark:border-slate-700 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm dark:bg-slate-800 dark:text-white mt-1"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-bold rounded-md text-white bg-primary hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors"
            >
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
