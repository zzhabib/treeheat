import React, { useState } from "react"
import GoogleMapReact from "google-map-react"


type Coord = {
    lat: number
    lng: number
}

const TreeIcon = (_props: { lat: number, lng: number }) => <div
    style={{ width: 25, height: 25, backgroundColor: "green" }}
></div>

const IndexPage = () => {
    const [trees, set_trees] = useState<Coord[]>([])

    return <>
        <div style={{width: 1000, height: 600}}>
            <GoogleMapReact
                bootstrapURLKeys={{
                    key: process.env.GOOGLE_MAPS_KEY as string
                }}
                defaultCenter={{
                    lat: 33.4484,
                    lng: -112.0740
                }}
                defaultZoom={11}
                onClick={({lat, lng}) => {
                    set_trees(trees.concat([{lat, lng}]))
                }}
                zoom={11}
            >
                {trees.map((tree, idx) => <TreeIcon key={idx} lat={tree.lat} lng={tree.lng}/>)}
            </GoogleMapReact>
        </div>
    </>
}

export default IndexPage
