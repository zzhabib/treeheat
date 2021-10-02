import * as React from "react"
import "./navbar.css"

const style = {
    padding: "0px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between"
}

const imgStyle = {
    width: "100px",
    margin: "0"
}

const Navbar = () => {
    return (
        <div className="navbar">
            <div>
                <img style={imgStyle} src="https://www.graphicsprings.com/filestorage/stencils/398af33ebbf9ac1c6daa0093ade9b28e.png?width=500&height=500" />
            </div>
            <div>
                <a href="index">Home</a>
                <a href="about">About</a>
            </div>
        </div>
    )
}

export default Navbar