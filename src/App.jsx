import { Routes, Route } from 'react-router-dom'
import Layout from './layout/Layout'
import UpComingTask from './pages/UpComingTask'
import AllTasks from './pages/AllTasks'
import Deleted from './pages/Deleted'
import Completed from './pages/Completed'
import Archived from './pages/Archived'
function App(){
  return <Layout>
        <Routes> 
        <Route path="/" element={<UpComingTask/>}/>
        <Route path="/alltasks" element={<AllTasks/>}/> 
        <Route path="/deleted" element={<Deleted/>}/>
        <Route path='/completed' element={<Completed/>}/>
        <Route path='/archived' element={<Archived/>}/>
        </Routes>
        </Layout>
}
export default App
