import React from "react";
import { FiBellOff } from "react-icons/fi";

export default function Timer({
	stage,
	switchStage,
	getTickingTime,
	seconds,
	ticking,
	startTimer,
	isTimeUp,
	muteAlarm,
	reset,
}) {
	const options = ["Төвлөрөх", "Завсарлага", "Их завсарлага"];
	return (
		<div className="w-12/12 mx-auto pt-5 text-white flex flex-col justify-center content-center items-center mt-20">
			<div className="flex gap-10 items-center">
				{options.map((option, index) => {
					return (
						<h1
							key={index}
							className={` ${
								index === stage ? "bg-gray-500 bg-opacity-30" : ""
							} p-1 cursor-pointer transition-all rounded`}
							onClick={() => switchStage(index)}
						>
							{option}
						</h1>
					);
				})}
			</div>
			<div className="mt-10 mb-10">
				<h1 className="text-8xl font-bold select-none m-0">
					{getTickingTime()}:{seconds.toString().padStart(2, "0")}
				</h1>
			</div>
			<div className="flex gap-2 items-center">
				<button
					className="px-16 py-2 text-lg rounded-md bg-white text-cyan-500 font-semibold "
					onClick={startTimer}
				>
					{ticking ? "Зогсоох" : "Эхлүүлэх"}
				</button>
				{isTimeUp && (
					<FiBellOff
						className="text-3xl text-white cursor-pointer"
						onClick={muteAlarm}
					/>
				)}
			</div>
			{ticking && (
				<button className=" text-white mt-5" onClick={reset}>
					Шинээр эхлүүлэх
				</button>
			)}
		</div>
	);
}
