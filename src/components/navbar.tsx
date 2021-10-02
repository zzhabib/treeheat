import * as React from "react"
import "./navbar.css"

const style = {
    backgroundColor: "gray",
    padding: "0px"
}

const imgStyle = {
    width: "100px",
}

const Navbar = () => {
    return (
        <div style={style}>
            <img style={imgStyle} src="https://www.graphicsprings.com/filestorage/stencils/398af33ebbf9ac1c6daa0093ade9b28e.png?width=500&height=500" />
            <a href="index">Home</a>
            <a href="about">About</a>
        </div>
    )
}

export default Navbar