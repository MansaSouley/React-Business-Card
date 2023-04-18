import React from "react"
import ReactDOM from "react-dom"
import Picture from "./Components/Picture"
import Info from "./Components/Info"
import About from "./Components/About"
import Interests from "./Components/Interests"
import Footer from "./Components/Footer"


export default function App(){
    return (
        <div>
            <Picture />
            <Main />
            <Footer />
        </div>
    )
}

function Main(){
    return (
        <main>
            <Info />
            <About />
            <Interests />
        </main>
    )
}