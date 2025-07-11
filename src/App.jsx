import { Routes, Route } from 'react-router-dom'
import Layout from './layout/Layout'
import UpComingTask from './pages/UpComingTask'
import AllTasks from './pages/AllTasks'
import Deleted from './pages/Deleted'
function App(){
  return <Layout>
        <Routes> 
        <Route path="/" element={<UpComingTask/>}/>
        <Route path="/alltasks" element={<AllTasks/>}/> 
        <Route path="/deleted" element={<Deleted/>}/>
        </Routes>
        </Layout>
}
export default App
