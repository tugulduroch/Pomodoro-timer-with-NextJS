import React from "react";
import { MdAlarm, MdSettings } from "react-icons/md";

function Navigation({ setOpenSetting }) {
	return (
		<nav className="pt-5 text-white flex justify-between w-11/12 mx-auto">
			<div className="flex items-center gap-1 cursor-pointer">
				<MdAlarm className="text-2xl font-bold " />
				<h1>Simple method to balance focus with deliberate breaks</h1>
			</div>
			<MdSettings
				className="text-2xl cursor-pointer "
				onClick={() => setOpenSetting((value) => !value)}
			/>
		</nav>
	);
}
export default React.memo(Navigation);
