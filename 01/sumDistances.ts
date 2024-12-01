export function sumDistances(
	leftList: readonly number[],
	rightList: readonly number[],
): number {
	if (leftList.length !== rightList.length) {
		throw new Error("Both lists must have the same length");
	}
	const listLength = leftList.length;

	const sortedLeft = leftList.toSorted();
	const sortedRight = rightList.toSorted();

	let totalDistance = 0;

	for (let i = 0; i < listLength; i++) {
		totalDistance += Math.abs(sortedLeft[i] - sortedRight[i]);
	}

	return totalDistance;
}
