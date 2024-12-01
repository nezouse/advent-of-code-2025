import { calculateSimilarityScore } from "./calculateSimilarityScore";
import { sumDistances } from "./sumDistances";

const leftList: number[] = [];
const rightList: number[] = [];

const file = await Bun.file("data.csv").text();

const lines = file.split("\n");

for (const line of lines) {
	const [left, right] = line.replace("   ", ",").split(",");
	leftList.push(Number(left));
	rightList.push(Number(right));
}

console.log("Solution part 1: ", sumDistances(leftList, rightList));
console.log("Solution part 2: ", calculateSimilarityScore(rightList, leftList));
