export default function BookTierList() {
    return (
        <div className="flex flex-col w-[1000px] max-w-[100%] mb-10">
            <div className="flex flex-row items-start border-b border-gray-800">
                <div className="min-h-[200px] min-w-[200px] p-5 flex items-center justify-center text-center text-xl bg-cyan-500">
                    Basically<br></br>life-changing
                </div>
                <div className="min-h-[200px] flex flex-row items-center gap-5 flex-wrap py-2 px-4">
                    <img className="h-[185px]" src="/static/images/books/tsa.jpg"/>
                    <img className="h-[185px]" src="/static/images/books/wot.jpg"/>
                    <img className="h-[185px]" src="/static/images/books/got.jpg"/>
                </div>
            </div>
            <div className="flex flex-row items-start border-b border-gray-800">
                <div className="h-[200px] w-[200px] p-5 flex items-center justify-center text-center text-xl bg-blue-500">
                    Masterpiece
                </div>
                <div className="min-h-[200px] flex flex-row items-center gap-5 flex-wrap py-2 px-4">
                    <img className="h-[185px]" src="/static/images/books/mistborn.jpg"/>
                    <img className="h-[185px]" src="/static/images/books/tnotw.jpg"/>
                </div>
            </div>
            <div className="flex flex-row items-start">
                <div className="h-[200px] w-[200px] p-5 flex items-center justify-center text-center text-xl bg-purple-500">
                    Really good
                </div>
                <div className="flex flex-row gap-5 flex-wrap">

                </div>
            </div>
        </div>
    )
}