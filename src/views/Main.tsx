import About from "./About";
import Career from "./Career";
import Education from "./Education";
import Landing from "./Landing";
import Portfolio from "./Portfolio";
import Tests from "./Tests";

export default function Main() {
    return (
        <div>
            <Landing />
            <About />
            <Education />
            <Tests />
            <Career />
            <Portfolio />
        </div>
    )
}