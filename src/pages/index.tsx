import * as React from "react"
import GoogleMapReact from "google-map-react"


const IndexPage = () => {
    return <>
        <div style={{width: 1000, height: 600}}>
            <GoogleMapReact
                bootstrapURLKeys={{
                    key: process.env.GOOGLE_MAPS_KEY as string
                }}
                defaultCenter={{
                    lat: 59.95,
                    lng: 30.33
                }}
                defaultZoom={11}
            />
        </div>
    </>
}

export default IndexPage
