import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './layout/Layout';
import UpComingTask from './pages/UpComingTask';
import AllTasks from './pages/AllTasks';

const Deleted = React.lazy(() => import('./pages/Deleted'));
const Completed = React.lazy(() => import('./pages/Completed'));
const Archived = React.lazy(() => import('./pages/Archived'));
const Incomplete = React.lazy(() => import('./pages/Incomplete'));
const BucketList = React.lazy(() => import('./pages/BucketList'));
const Statistics = React.lazy(() => import('./pages/Statistics'));

function LoadingSpinner() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-12 h-12 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
    </div>
  );
}

function App() {
  return (
    <Layout>
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route path="/" element={<UpComingTask />} />
          <Route path="/alltasks" element={<AllTasks />} />
          <Route path="/deleted" element={<Deleted />} />
          <Route path="/completed" element={<Completed />} />
          <Route path="/archived" element={<Archived />} />
          <Route path="/incomplete" element={<Incomplete />} />
          <Route path="/bucket" element={<BucketList />} />
          <Route path="/stats" element={<Statistics />} />
        </Routes>
      </Suspense>
    </Layout>
  );
}

export default App;
