import React, { useState, createContext, useEffect } from 'react'
import { Route, Routes } from "react-router-dom"
import Main from './pages/Main'
import List from './pages/List'
import Navbar from './components/Navbar'
import axios from 'axios'

export const AppContext = createContext()

export default function App() {
    const [data, setData] = useState("")
    const getData = async () => {
        let response = await axios.get('https://digimon-api.vercel.app/api/digimon')
        let info = await response.data
        setData(info)
        // console.log(response.data[0].name)
    }
    useEffect(() => {
        getData()
    }, [])
    return (
        <div className='App'>
            <AppContext.Provider value={{ data, setData }}>
                <Navbar />
                <Routes>
                    <Route path='/' element={<Main />} />
                    <Route path='/List' element={<List />} />
                </Routes></AppContext.Provider>
        </div>
    )
}