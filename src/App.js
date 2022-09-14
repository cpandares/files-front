import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import { getData } from './helper/getData'
import SearchPage from './pages/SearchPage'
import TableDetail from './pages/TableDetail'
import TablePage from './pages/TablePage'

const App = () => {

  const [ files, setFiles ] = useState([]); 

  useEffect(()=>{
   
   getData().then(resp => setFiles( resp ))

  },[])

  return (
    <>
     
      <Navbar />

    <div className='container'>

        <Routes>
          <Route path='/' element = { <TablePage data = { files }/> } />
          <Route path='/:name' element = { <TableDetail /> } />
          <Route path='/search' element = { <SearchPage /> } />
        </Routes>
    </div>


    </>
  )
}

export default App
