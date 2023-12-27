"use client";
import { useState } from "react";
import { Input } from "./ui/input";
import { ToggleGroup, ToggleGroupItem } from "./ui/toggle-group";
import stadium from "../../public/static/images/stadium.jpg";
import Image from "next/image";
export default function PlayerSearchBox() {
	const [searchCategory, setSearchCategory] = useState("player");
	return (
		<section className=" p-3 flex flex-col  justify-center rounded-md relative bg-[url('../../public/static/images/stadium.jpg')] bg-cover  bg-right-bottom ">
			<div className="absolute inset-0 bg-gradient-to-r from-gray-950 from-30% via-gray-950/70  to-transparent to-80% z-[1]"></div>
			<div className="z-[2] flex gap-4 flex-col">
				<div className="font-semibold text-gray-300 lg:w-2/4 w-2/3 lg:text-2xl lg:font-bold bg-url">
					Start searching player or country on Dual Nationals
				</div>
				<div className="flex relative text-sm ">
					<ToggleGroup
						type="single"
						className="absolute"
						value={searchCategory}
						onValueChange={(value) => setSearchCategory(value)}
					>
						<ToggleGroupItem value="player">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="32"
								height="32"
								viewBox="0 0 21 21"
								className="w-4 h-4"
							>
								<path
									fill="none"
									stroke="currentColor"
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M10.5 2.5a3 3 0 0 1 3 3v2a3 3 0 1 1-6 0v-2a3 3 0 0 1 3-3m7 14v-.728c0-3.187-3.686-5.272-7-5.272s-7 2.085-7 5.272v.728a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1"
								/>
							</svg>
						</ToggleGroupItem>
						<ToggleGroupItem value="country">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="32"
								height="32"
								viewBox="0 0 21 21"
								className="w-5 h-5"
							>
								<path
									fill="none"
									stroke="currentColor"
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M5.5 17.5v-11m0 0c.667-1.333 1.667-2 3-2c2 0 2 2 4 2c1.333 0 2.333-.333 3-1v6c-.667.667-1.667 1-3 1c-2 0-2-2-4-2c-1.333 0-2.333.667-3 2z"
								/>
							</svg>
						</ToggleGroupItem>
					</ToggleGroup>
					<Input
						className=" text-xs md:text-sm border-none pl-28 focus-visible:ring-0  lg:max-w-[80%] dark:focus-visible:ring-0 focus-visible:ring-offset-0 dark:focus-visible:ring-offset-0"
						placeholder={`Search by ${searchCategory} name `}
					/>
				</div>
			</div>
		</section>
	);
}
