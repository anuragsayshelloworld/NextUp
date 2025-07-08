import { Routes, Route } from 'react-router-dom'
import Layout from './layout/Layout'
import UpComingTask from './pages/UpComingTask'
function App(){
  return <Layout>
        <Routes> 
        <Route path="/" element={<UpComingTask/>}/> 
        </Routes>
        </Layout>
}
export default App
