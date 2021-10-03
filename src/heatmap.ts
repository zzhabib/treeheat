type Coord = {
    lat: number
    lng: number
}

const default_center: Coord = {
    lat: 33.4514862300583,
    lng: -111.99728369495931
}

const get_region_of_map = (center: Coord, n: number, dlat: number, dlng: number): Coord[] =>
    Array.from({ length: n}).flatMap(
        (_, row_idx) => Array.from({length: n}).map(
            (_, col_idx) => ({
                lat: center.lat + col_idx * dlat,
                lng: center.lng + row_idx * dlng
            })
        )
    )

export { default_center, get_region_of_map }
export type { Coord }
