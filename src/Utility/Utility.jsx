export const getInitialPaginationData = data => {
	let newData = [];
	let count = 0;
	let itemsPerPage = count + 10;
	for (var i = count; i < itemsPerPage; i++) {
		newData.push(data[i]);
		count = i;
	}

	return newData;
};
