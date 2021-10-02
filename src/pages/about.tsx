import * as React from "react"
import AboutDetails from "../components/aboutdetails"
import Navbar from "../components/navbar"

const About = () => {
    return (
        <div style={{maxWidth: "50%", margin: "auto"}}>
            <Navbar />
            <AboutDetails />
        </div>
    )
}

export default About