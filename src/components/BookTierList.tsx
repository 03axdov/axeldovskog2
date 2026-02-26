import BookElement from "./BookElement";

export default function BookTierList() {
    return (
        <div className="flex flex-col w-[1000px] max-w-[100%] mb-10">
            <div className="flex flex-row items-start border-y border-gray-800">
                <div className="tier-row min-h-[200px] min-w-[200px] p-5 flex items-center justify-center text-center text-xl tier-1">
                    Basically<br></br>life-changing
                </div>
                <div className="tier-elements min-h-[200px] flex flex-row items-center gap-5 flex-wrap py-2 px-4">
                    <BookElement filename="tsa.jpg" link="https://www.goodreads.com/book/show/7235533-the-way-of-kings?ac=1&from_search=true&qid=GbI3wkSsrY&rank=1" title="The Stormlight Archive" authors="Brandon Sanderson" />
                    <BookElement filename="wot.jpg" link="https://www.goodreads.com/book/show/228665.The_Eye_of_the_World?ref=nav_sb_ss_1_12" title="The Wheel of Time" authors="Robert Jordan & Brandon Sanderson"/>
                    <BookElement filename="got.jpg" link="https://www.goodreads.com/book/show/13496.A_Game_of_Thrones?ref=nav_sb_ss_1_12" title="A Song of Ice and Fire" authors="George R. R. Martin"/>
                </div>
            </div>
            <div className="flex flex-row items-start border-b border-gray-800">
                <div className="tier-row min-h-[200px] min-w-[200px] w-[200px] p-5 flex items-center justify-center text-center text-xl tier-2">
                    Masterpiece
                </div>
                <div className="tier-elements min-h-[200px] flex flex-row items-center gap-5 flex-wrap py-2 px-4">
                    <BookElement filename="mistborn.jpg" link="https://www.goodreads.com/book/show/68428.Mistborn?ref=nav_sb_ss_1_8" title="The Mistborn Trilogy" authors="Brandon Sanderson"/>
                    <BookElement filename="tnotw.jpg" link="https://www.goodreads.com/book/show/186074.The_Name_of_the_Wind?ref=nav_sb_ss_1_12" title="The Kingkiller Chronicles" authors="Patrick Rothfuss"/>
                    <BookElement filename="berserk.jpg" link="https://www.goodreads.com/book/show/248871.Berserk_Vol_1?from_search=true&from_srp=true&qid=nB1lEhy4wA&rank=1" title="Berserk" authors="Kentaro Miura"/>
                </div>
            </div>
            <div className="flex flex-row items-start border-b border-gray-800">
                <div className="tier-row min-h-[200px] min-w-[200px] p-5 flex items-center justify-center text-center text-xl tier-3">
                    Pretty Great
                </div>
                <div className="tier-elements min-h-[200px] flex flex-row items-center gap-5 flex-wrap py-2 px-4">
                    <BookElement filename="soc.jpg" link="https://www.goodreads.com/book/show/23437156-six-of-crows?ref=nav_sb_ss_1_9" title="Six of Crows" authors="Leigh Bardugo"/>
                    <BookElement filename="witcher.jpg" link="https://www.goodreads.com/book/show/6043781-blood-of-elves?from_search=true&from_srp=true&qid=IakxzLClIR&rank=4" title="The Witcher" authors="Andrzej Sapkowski"/>
                </div>
            </div>
            <div className="flex flex-row items-start border-b border-gray-800">
                <div className="tier-row min-h-[200px] min-w-[200px] w-[200px] p-5 flex items-center justify-center text-center text-xl no-tier">
                    Somehow haven't read
                </div>
                <div className="tier-elements min-h-[200px] flex flex-row items-center gap-5 flex-wrap py-2 px-4">
                    <BookElement filename="lotr.jpg" link="https://www.goodreads.com/book/show/61215351-the-fellowship-of-the-ring?ac=1&from_search=true&qid=GxM1JcQjaa&rank=1" title="The Lord of the Rings" authors="J. R. R. Tolkien"/>
                    <BookElement filename="dune.jpg" link="https://www.goodreads.com/book/show/44767458-dune?ref=nav_sb_ss_1_4" title="Dune" authors="Frank Herbert"/>
                </div>
            </div>
        </div>
    )
}