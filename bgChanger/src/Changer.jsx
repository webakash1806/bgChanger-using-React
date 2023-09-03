import { useState } from "react"

const Changer = () => {
    const [color, setColor] = useState("purple")

    return (

        <>
            <div className="main flex flex-col h-screen w-screen justify-between items-center" style={{ backgroundColor: color }}>

                <p className="w-screen bg-red-500 text-white py-3 text-center font-bold tracking-wider text-2xl">Background Changer</p>
                <div className="m-5 btn-container bg-white border-2 w-fit rounded-lg px-4 py-1 shadow-lg">
                    <button onClick={() => setColor("red")} className="btn bg-red-600 px-4 py-1 rounded-2xl text-white font-semibold tracking-wider m-2 shadow-md">Red</button>
                    <button onClick={() => setColor("green")} className="btn bg-green-600 px-4 py-1 rounded-2xl text-white font-semibold tracking-wider m-2 shadow-md">Green</button>
                    <button onClick={() => setColor("#7C3AED")} className="btn bg-violet-600 px-4 py-1 rounded-2xl text-white font-semibold tracking-wider m-2 shadow-md">Violet</button>
                    <button onClick={() => setColor("black")} className="btn bg-black px-4 py-1 rounded-2xl text-white font-semibold tracking-wider m-2 shadow-md">Black</button>
                    <button onClick={() => setColor("blue")} className="btn bg-blue-600 px-4 py-1 rounded-2xl text-white font-semibold tracking-wider m-2 shadow-md">Blue</button>
                    <button onClick={() => setColor("#F0F70F")} className="btn bg-[#F0F70F] px-4 py-1 rounded-2xl text-black font-semibold tracking-wider m-2 shadow-md">Yellow</button>
                    <button onClick={() => setColor("#F500DE")} className="btn bg-[#F500DE] px-4 py-1 rounded-2xl text-white font-semibold tracking-wider m-2 shadow-md">Pink</button>
                    <button onClick={() => setColor("#ACACAC")} className="btn bg-[#ACACAC] px-4 py-1 rounded-2xl text-black font-semibold tracking-wider m-2 shadow-md">Grey</button>
                    <button onClick={() => setColor("#F75218")} className="btn bg-[#F75218] px-4 py-1 rounded-2xl text-white font-semibold tracking-wider m-2 shadow-md">Orange</button>
                </div>
            </div>

        </>
    )
}

export default Changer
