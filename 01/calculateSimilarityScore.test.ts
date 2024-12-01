import { test, expect } from "bun:test";
import {
	calculateSimilarityScore,
	getNumbersOccurences,
} from "./calculateSimilarityScore";

const leftList = [3, 4, 2, 1, 3, 3];
const rightList = [4, 3, 5, 3, 9, 3];

test("calculateSimilarityScore from readme", () => {
	expect(calculateSimilarityScore(leftList, rightList)).toBe(31);
});

test("calculateSimilarityScore with different lengths", () => {
	expect(() => calculateSimilarityScore(leftList, [1, 2, 3])).toThrowError(
		"Both lists must have the same length",
	);
});

test("getNumbersOccurences from readme", () => {
	const occurences = getNumbersOccurences(rightList);
	expect(Object.fromEntries(occurences.entries())).toEqual({
		3: 3,
		4: 1,
		5: 1,
		9: 1,
	});
});
