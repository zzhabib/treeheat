import React, { useState } from "react"
import GoogleMapReact from "google-map-react"
import { StaticImage } from "gatsby-plugin-image"
import Grid from "@material-ui/core/Grid/"
import Typography from "@material-ui/core/Typography"

import map_style from "../map_style"
import "./index.css"
import {createTheme, ThemeProvider} from "@material-ui/core"


const default_center = {
    lat: 33.4514862300583,
    lng: -111.99728369495931
}

type Coord = {
    lat: number
    lng: number
}

const TreeIcon = (_props: { lat: number, lng: number }) => <StaticImage
    src="../images/tree.png"
    alt="tree"
    style={{
        width: 25,
        translate: "-50% -50%",
    }}
/>

const theme = createTheme({
    typography: {
        h1: {
            fontFamily: "lusitana",
            fontSize: "64px"
        },
        body1: {
            fontFamily: "lato",
            fontSize: "16px"
        }
    }
})

const IndexPage = () => {
    const [trees, set_trees] = useState<Coord[]>([])

    return <ThemeProvider theme={theme}>
        <Grid container
            style={{
                paddingTop: "8em"
            }}
        >
            <Grid item xs={8}>
                <div style={{
                    width: "80%",
                    height: 600,
                    margin: "0 auto",
                    boxShadow: "5px 10px 20px rgba(128, 128, 128, 0.5)"
                }}>
                    <GoogleMapReact
                        options={{
                            minZoom: 12,
                            styles: map_style,
                        }}
                        bootstrapURLKeys={{
                            key: process.env.GOOGLE_MAPS_KEY as string
                        }}
                        defaultCenter={default_center}
                        defaultZoom={10}
                        onClick={({lat, lng}) => {
                            set_trees(trees.concat([{lat, lng}]))
                        }}
                    >
                        {trees.map((tree, idx) => <TreeIcon key={idx} lat={tree.lat} lng={tree.lng}/>)}
                    </GoogleMapReact>
                </div>
            </Grid>
            <Grid item xs={4}>
                <Typography variant="h1">All-Natural Air Conditioning</Typography>
                <Typography style={{marginTop: "2em"}} variant="body1">
                    
                </Typography>
            </Grid>
        </Grid>
    </ThemeProvider>
}

export default IndexPage
