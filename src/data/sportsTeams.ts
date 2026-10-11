export interface SportsTeam {
    id: string;
    name: string;
    city: string;
    league: string;
    // Leaflet uses [latitude, longitude], not [longitude, latitude].
    position: [number, number];
    logo: string;
    color: string;
    initials: string;
    description?: string;
}

// Add or edit your favorite teams here.
// For your own logos, put files in public/static/images/teams/ and use
// logo: "/static/images/teams/your-team.svg".
// Teams with the same city share a map location with badges arranged side by side.
export const sportsTeams: SportsTeam[] = [
    {
        id: "broncos",
        name: "Denver Broncos",
        city: "Denver, Colorado",
        league: "NFL",
        position: [39.7439, -105.0201],
        logo: "https://a.espncdn.com/i/teamlogos/nfl/500/den.png",
        color: "#fb4f14",
        initials: "DEN",
    },
    {
        id: "penguins",
        name: "Pittsburgh Penguins",
        city: "Pittsburgh, Pennsylvania",
        league: "NHL",
        position: [40.4395, -79.9893],
        logo: "https://assets.nhle.com/logos/nhl/svg/PIT_light.svg",
        color: "#fcb514",
        initials: "PIT",
    },
    {
        id: "mammoth",
        name: "Utah Mammoth",
        city: "Salt Lake City, Utah",
        league: "NHL",
        position: [40.7683, -111.9011],
        logo: "https://assets.nhle.com/logos/nhl/svg/UTA_light.svg",
        color: "#69b3e7",
        initials: "UTA",
    },
    {
        id: "wild",
        name: "Minnesota Wild",
        city: "Saint Paul, Minnesota",
        league: "NHL",
        position: [44.9448, -93.1011],
        logo: "https://assets.nhle.com/logos/nhl/svg/MIN_light.svg",
        color: "#154734",
        initials: "MIN",
    },
    {
        id: "patriots",
        name: "New England Patriots",
        city: "Foxborough, Massachusetts",
        league: "NFL",
        position: [42.0909, -71.2643],
        logo: "https://a.espncdn.com/i/teamlogos/nfl/500/ne.png",
        color: "#c60c30",
        initials: "NE",
    },
    {
        id: "canucks",
        name: "Vancouver Canucks",
        city: "Vancouver, British Columbia",
        league: "NHL",
        position: [49.2778, -123.1089],
        logo: "https://assets.nhle.com/logos/nhl/svg/VAN_light.svg",
        color: "#00843d",
        initials: "VAN",
    },
    {
        id: "saints",
        name: "New Orleans Saints",
        city: "New Orleans, Louisiana",
        league: "NFL",
        position: [29.9511, -90.0812],
        logo: "https://a.espncdn.com/i/teamlogos/nfl/500/no.png",
        color: "#d3bc8d",
        initials: "NO",
    },
    {
        id: "sharks",
        name: "San Jose Sharks",
        city: "San Jose, California",
        league: "NHL",
        position: [37.3328, -121.9012],
        logo: "https://assets.nhle.com/logos/nhl/svg/SJS_light.svg",
        color: "#006d75",
        initials: "SJS",
    },
];
