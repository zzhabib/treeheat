import React, { useState } from "react"
import GoogleMapReact from "google-map-react"
import Grid from "@material-ui/core/Grid/"
import Typography from "@material-ui/core/Typography"
import Helmet from "react-helmet"
import { StaticImage } from "gatsby-plugin-image"

import map_style from "../map_style"
import "./index.css"
import { Button, createTheme, ThemeProvider } from "@material-ui/core"
import { default_center, get_region_of_map } from "../heatmap"
import type { Coord } from "../heatmap"



const TreeIcon = (_props: { lat: number, lng: number }) => <img
    src="tree.png"
    alt="tree"
    style={{
        width: 25,
        transform: 'translate(-50%, -50%)'
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
    },
    overrides: {
        MuiButton: {
            contained: {
                backgroundColor: "#FF8811"
            },

        }
    }
})

const IndexPage = () => {
    const [trees, set_trees] = useState<Coord[]>([])
    return <ThemeProvider theme={theme}>
        <Helmet title="tree_heat" />
        <Grid container
            style={{
                paddingTop: "8em",
                paddingLeft: "4em",
                paddingRight: "4em",
                paddingBottom: "8em",
                maxWidth: "100%",
            }}
            spacing={10}
        >
            <Grid item xs={7}>
                <div style={{
                    width: "100%",
                    height: 600,
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
                        onClick={({ lat, lng }) => {
                            set_trees(trees.concat([{ lat, lng }]))
                        }}
                        heatmapLibrary
                        heatmap={{positions: trees, options: {radius: 20}}}
                    >
                        {trees.map((tree, idx) => <TreeIcon key={idx} lat={tree.lat} lng={tree.lng} />)}
                    </GoogleMapReact>
                </div>
            </Grid>
            <Grid item xs={5}>
                <Typography variant="h1">All-Natural Air Conditioning</Typography>
                <Typography style={{ marginTop: "2em" }} variant="body1">
                    When we think of trees, we think of tall plants that make the landscape prettier,
                    the water cleaner, and the planet healthier. What often goes unnoticed is the critical
                    relationship between the prevalence of vegetation and the temperature of the air surrounding
                    it.
                </Typography>
                <Typography style={{ marginTop: "2em" }} variant="body1">
                    Use the interactive map to the left to see for yourself the transformative impact
                    trees have on the community. As you add add more trees by clicking on the map, you will
                    notice the temperature of the surrounding area decreasing. In scorching hot Arizona,
                    this makes planting trees an incredibly useful tool in keeping ourselves comfortable.
                </Typography>
            </Grid>
            <Grid item xs={12} style={{marginTop: "4em"}}></Grid>
            <Grid item xs={6}>
                <Typography variant="h1">Why trees?</Typography>
                <Typography style={{ marginTop: "2em" }} variant="body1">
                </Typography>
            </Grid>
            <Grid item xs={6}>
                <StaticImage style={{ width: "70%" }} src="../images/urbantrees.jpg" alt="urbantrees.jpg" />
            </Grid>
            <Grid item xs={6}>
                <StaticImage
                    src="../images/az-community-tree-council.png"
                    style={{ width: "60%" }}
                    alt="Arizona Community Tree Council Logo"
                />
            </Grid>
            <Grid item xs={6}>
                <Typography variant="h1">How to get involved</Typography>
                <Typography style={{ marginTop: "2em" }} variant="body1">
                    Thankfully for us, there are a number of wonderful organizations focused around the
                    preservation and growth of urban forests around Phoenix. One of the most prominent is the
                    Arizona Community Tree Council, a non-profit organization dedicated to the proper care and
                    and planting of Arizona trees.
                </Typography>
                <Button variant="contained" style={{marginTop: "2em"}} href="https://www.aztrees.org/">Learn More</Button>
                <Typography style={{ marginTop: "2em" }} variant="body1">
                    Another important project is the Phoenix City Government's Tree Bank. When you donate, your
                    contribution goes towards adding trees along high impact areas like schools and neighborhoods.
                </Typography>
                <Button variant="contained" style={{marginTop: "2em"}} href="https://www.phoenix.gov/sustainability/plantatree">Learn More</Button>
            </Grid>
        </Grid>
    </ThemeProvider>
}

export default IndexPage
