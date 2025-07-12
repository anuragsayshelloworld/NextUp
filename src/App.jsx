import React, { Suspense, useContext, useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './layout/Layout';
import UpComingTask from './pages/UpComingTask';
import AllTasks from './pages/AllTasks';
import ErrorBoundary from '../ErrorBoundary';
import LoadingSpinner from './shared/LoadingSpinner';
import AuthContext from './context/AuthContext';
import VideoModal from './components/VideoModal';

const Deleted = React.lazy(() => import('./pages/Deleted'));
const Completed = React.lazy(() => import('./pages/Completed'));
const Archived = React.lazy(() => import('./pages/Archived'));
const Incomplete = React.lazy(() => import('./pages/Incomplete'));
const BucketList = React.lazy(() => import('./pages/BucketList'));
const Statistics = React.lazy(() => import('./pages/Statistics'));

function App() {
  const { user } = useContext(AuthContext);
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    if (!user) {
      setShowVideo(true);
    }
  }, [user]);

  const handleCloseVideo = () => setShowVideo(false);

  return (
    <ErrorBoundary>
      {showVideo && <VideoModal onClose={handleCloseVideo} />}

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
    </ErrorBoundary>
  );
}

export default App;
