import { Routes, Route } from 'react-router-dom'
import Layout from './layout/Layout'
import UpComingTask from './pages/UpComingTask'
import AllTasks from './pages/AllTasks'
function App(){
  return <Layout>
        <Routes> 
        <Route path="/" element={<UpComingTask/>}/>
        <Route path="/alltasks" element={<AllTasks/>}/> 
        </Routes>
        </Layout>
}
export default App
