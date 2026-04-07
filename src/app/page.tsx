import {ArtistList} from "@components/ArtistList";
import {getArtistList} from "@constants";

export default function Page() {
    const artists = getArtistList()
    return <div><ArtistList artists={artists}/></div>
}