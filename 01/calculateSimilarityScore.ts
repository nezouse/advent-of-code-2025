export function calculateSimilarityScore(
	leftList: readonly number[],
	rightList: readonly number[],
): number {
	if (leftList.length !== rightList.length) {
		throw new Error("Both lists must have the same length");
	}
	const rightListOccurences = getNumbersOccurences(rightList);

	let totalSimilarity = 0;

	for (const listElement of leftList) {
		const occurencesCount = rightListOccurences.get(listElement) ?? 0;

		totalSimilarity += listElement * occurencesCount;
	}

	return totalSimilarity;
}

export function getNumbersOccurences(list: readonly number[]) {
	const occurences = new Map<number, number>();
	for (const number of list) {
		occurences.set(number, (occurences.get(number) ?? 0) + 1);
	}
	return occurences;
}
