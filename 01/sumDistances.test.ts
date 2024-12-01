import { test, expect } from "bun:test";
import { sumDistances } from "./sumDistances";

const leftList = [3, 4, 2, 1, 3, 3];
const rightList = [4, 3, 5, 3, 9, 3];

test("sumDistances from readme", () => {
	expect(sumDistances(leftList, rightList)).toBe(11);
});

test("sumDistances with different lengths", () => {
	expect(() => sumDistances(leftList, [1, 2, 3])).toThrowError(
		"Both lists must have the same length",
	);
});
