import ShowElement from "./ShowElement";

export default function BookTierList() {
    return (
        <div className="flex flex-col w-[1000px] max-w-[100%] mb-10">
            <div className="flex flex-row items-start border-y border-gray-800">
                <div className="tier-row min-h-[200px] min-w-[200px] p-5 flex items-center justify-center text-center text-xl tier-1 bg-cyan-500">
                    \_(•-•)_/<br></br>absolute cinema
                </div>
                <div className="tier-elements min-h-[200px] flex flex-row items-center gap-5 flex-wrap py-2 px-4">
                    <ShowElement filename="supernatural.webp" title="Supernatural (S1 - S5)" />
                    <ShowElement filename="rivermonsters.jpg" title="River Monsters" />
                </div>
            </div>
            <div className="flex flex-row items-start border-b border-gray-800">
                <div className="tier-row min-h-[200px] min-w-[200px] w-[200px] p-5 flex items-center justify-center text-center text-xl bg-blue-600">
                    Really really good
                </div>
                <div className="tier-elements min-h-[200px] flex flex-row items-center gap-5 flex-wrap py-2 px-4">
                    <ShowElement filename="got.jpg" title="Game of Thrones (S1 - S4)" />
                    <ShowElement filename="breakingbad.jpg" title="Breaking Bad" />
                    <ShowElement filename="dexter.jpg" title="Dexter" />
                </div>
            </div>
            <div className="flex flex-row items-start border-b border-gray-800">
                <div className="tier-row min-h-[200px] min-w-[200px] p-5 flex items-center justify-center text-center text-xl bg-purple-500">
                    Very good
                </div>
                <div className="tier-elements min-h-[200px] flex flex-row items-center gap-5 flex-wrap py-2 px-4">
                    <ShowElement filename="bettercallsaul.jpg" title="Dexter" />
                    <ShowElement filename="hannibal.jpg" title="Hannibal" />
                    <ShowElement filename="dark.jpg" title="Dark" />
                    <ShowElement filename="succession.webp" title="Succession" />
                </div>
            </div>
            <div className="flex flex-row items-start border-b border-gray-800">
                <div className="tier-row min-h-[200px] min-w-[200px] p-5 flex items-center justify-center text-center text-xl bg-purple-600">
                    Alright
                </div>
                <div className="tier-elements min-h-[200px] flex flex-row items-center gap-5 flex-wrap py-2 px-4">
                    <ShowElement filename="thewalkingdead.jpg" title="The Walking Dead" />
                    <ShowElement filename="suits.jpg" title="Suits" />
                    <ShowElement filename="strangerthings.jpg" title="Stranger Things" />
                </div>
            </div>
            <div className="flex flex-row items-start border-b border-gray-800">
                <div className="tier-row min-h-[200px] min-w-[200px] p-5 flex items-center justify-center text-center text-xl bg-red-400">
                    ╮(︶︿︶)╭
                </div>
                <div className="tier-elements min-h-[200px] flex flex-row items-center gap-5 flex-wrap py-2 px-4">
                    <ShowElement filename="got.webp" title="Game of Thrones (S7 - S8)" />
                </div>
            </div>
        </div>
    )
}