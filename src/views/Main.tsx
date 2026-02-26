import ThemeModal from "../components/ThemeModal";
import About from "./About";
import Career from "./Career";
import Contact from "./Contact";
import Education from "./Education";
import Landing from "./Landing";
import Portfolio from "./Portfolio";
import Recommendations from "./Recommendations";
import Tests from "./Tests";

export default function Main() {
    return (
        <div>
            <Landing />
            <Recommendations />
            <About />
            <Education />
            <Tests />
            <Career />
            <Portfolio />
            <Contact />

            <ThemeModal />
        </div>
    )
}