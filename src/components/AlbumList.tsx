import AlbumElement from "./AlbumElement";

export default function AlbumList() {
    return (
        <div className="w-[calc(1000px+5*20px)] max-w-[100%] flex flex-row flex-wrap items-center gap-5">
            <AlbumElement filename="h&v.jpg" link="https://open.spotify.com/album/7txGsnDSqVMoRl6RQ9XyZP" title="Heroes and Villains" artists="Metro Boomin" />
            <AlbumElement filename="astroworld.png" link="https://open.spotify.com/album/41GuZcammIkupMPKH2OJ6I" title="ASTROWORLD" artists="Travis Scott" />
            <AlbumElement filename="graduation.jpg" link="https://open.spotify.com/album/4SZko61aMnmgvNhfhgTuD3" title="Graduation" artists="Kanye West" />
            <AlbumElement filename="am.jpg" link="https://open.spotify.com/album/78bpIziExqiI9qztvNFlQu" title="AM" artists="Arctic Monkeys" />
            <AlbumElement filename="currents.png" link="https://open.spotify.com/album/79dL7FLiJFOO0EoehUHQBv" title="Currents" artists="Tame Impala" />
            <AlbumElement filename="wow.png" link="https://open.spotify.com/album/0MV1yCXcNNQBfwApqAVkH0" title="Without Warning" artists="Metro Boomin" />
            <AlbumElement filename="uvst.png" link="https://open.spotify.com/album/3RQQmkQEvNCY4prGKE6oc5" title="Un Verano Sin Ti" artists="Bad Bunny" />
            <AlbumElement filename="otaat.png" link="https://open.spotify.com/album/0rnd3h2dc82L4gTjW6Vfoq" title="One Thing At A Time" artists="Morgan Wallen" />
            <AlbumElement filename="eutdm.png" link="https://open.spotify.com/album/2d9BCZeAAhiZWPpbX9aPCW" title="El Ultimo Tour Del Mundo" artists="Bad Bunny" />
            <AlbumElement filename="grodt.jpg" link="https://open.spotify.com/album/5G5rgQHzdQnw32SI0WjIo5" title="Get Rich or Die Trying" artists="50 Cent" />
            <AlbumElement filename="msb.png" link="https://open.spotify.com/album/4kS7bSuU0Jm9LYMosFU2x5" title="Mañana Será Bonito" artists="Karol G" />
            <AlbumElement filename="tsr.png" link="https://open.spotify.com/album/31qVWUdRrlb8thMvts0yYL" title="The Slow Rush" artists="Tame Impala" />
            <AlbumElement filename="rodeo.png" link="https://open.spotify.com/album/4PWBTB6NYSKQwfo79I3prg" title="Rodeo" artists="Travis Scott" />
            <AlbumElement filename="mbtdf.jpg" link="https://open.spotify.com/album/20r762YmB5HeofjMCiPMLv" title="My Beautiful Dark Twisted Fantasy" artists="Kanye West" />
        </div>
    )
}