import { useEffect, useMemo } from "react";
import { divIcon } from "leaflet";
import type { LatLngBoundsExpression, LatLngExpression } from "leaflet";
import { MapContainer, Marker, TileLayer, Tooltip, useMap } from "react-leaflet";
import { useTheme } from "../contexts/ThemeContext";
import { sportsTeams } from "../data/sportsTeams";
import type { SportsTeam } from "../data/sportsTeams";
import "leaflet/dist/leaflet.css";
import "./SportsMap.css";

const homeBounds: LatLngBoundsExpression = [[26, -129], [53, -63]];
const panBounds: LatLngBoundsExpression = [[5, -175], [85, -40]];

function MapControls() {
    const map = useMap();

    useEffect(() => {
        // MapContainer options only apply at creation; update the live map too.
        map.scrollWheelZoom.enable();
        map.fitBounds(homeBounds, { padding: [30, 30], animate: false });
        const observer = new ResizeObserver(() => map.invalidateSize());
        observer.observe(map.getContainer());
        return () => {
            map.scrollWheelZoom.disable();
            observer.disconnect();
        };
    }, [map]);

    return (
        <button
            type="button"
            className="sports-map-reset"
            onClick={() => {
                map.closePopup();
                map.fitBounds(homeBounds, { padding: [30, 30], animate: false });
            }}
        >
            Reset view
        </button>
    );
}

function TeamMarkers() {
    const cities = new Map<string, SportsTeam[]>();
    sportsTeams.forEach((team) => {
        const group = cities.get(team.city) ?? [];
        group.push(team);
        cities.set(team.city, group);
    });

    return Array.from(cities.values()).flatMap((teams) => {
        const position: [number, number] = [
            teams.reduce((sum, team) => sum + team.position[0], 0) / teams.length,
            teams.reduce((sum, team) => sum + team.position[1], 0) / teams.length,
        ];

        // Pixel offsets keep teams in the same city together at every zoom level.
        return teams.map((team, index) => (
            <TeamMarker
                key={team.id}
                team={team}
                position={position}
                offsetX={(index - (teams.length - 1) / 2) * 64}
            />
        ));
    });
}

function TeamMarker({ team, position, offsetX }: {
    team: SportsTeam;
    position: LatLngExpression;
    offsetX: number;
}) {
    const icon = useMemo(() => {
        // A DOM element avoids interpolating editable team data into HTML.
        const badge = document.createElement("span");
        badge.className = "sports-team-badge";
        badge.style.setProperty("--team-color", team.color);

        const fallback = document.createElement("span");
        fallback.className = "sports-team-initials";
        fallback.textContent = team.initials;
        badge.append(fallback);

        const image = document.createElement("img");
        image.src = team.logo;
        image.alt = "";
        image.width = 38;
        image.height = 38;
        image.addEventListener("load", () => { fallback.hidden = true; });
        image.addEventListener("error", () => {
            image.hidden = true;
            fallback.hidden = false;
        });
        badge.append(image);

        return divIcon({
            html: badge,
            className: "sports-team-marker",
            iconSize: [52, 52],
            iconAnchor: [26 - offsetX, 26],
            popupAnchor: [offsetX, -30],
            tooltipAnchor: [offsetX, -30],
        });
    }, [team, offsetX]);

    return (
        <Marker position={position} icon={icon} title={team.name} alt={team.name} riseOnHover>
            <Tooltip direction="top" offset={[0, 0]} className="sports-team-tooltip">
                <div className="sports-team-tooltip-title">{team.name}</div>
                <span>{team.city} · {team.league}</span>
            </Tooltip>
        </Marker>
    );
}

export default function SportsMap() {
    const { theme } = useTheme();

    return (
        <div
            className={`sports-map sports-map-${theme}`}
            role="region"
            aria-label="Interactive sports team map of the United States and Canada"
        >
            <MapContainer
                bounds={homeBounds}
                boundsOptions={{ padding: [30, 30] }}
                maxBounds={panBounds}
                maxBoundsViscosity={0.8}
                minZoom={2}
                maxZoom={10}
                zoomSnap={0.25}
                scrollWheelZoom={true}
                className="sports-map-canvas"
            >
                <TileLayer
                    url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    maxZoom={19}
                />
                <TeamMarkers />
                <MapControls />
            </MapContainer>
        </div>
    );
}
