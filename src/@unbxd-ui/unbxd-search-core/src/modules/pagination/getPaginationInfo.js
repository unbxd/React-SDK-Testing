/**
 * @description 
 <pre>
 <code>
 getPaginationInfo()
 </code>
 </pre>
 * to get the pagination data from response
 * @method getPaginationInfo
 */
export default function () {
	const resp = this.getSearchResults();

	if (!resp) {
		return null;
	}

	const {
		numberOfProducts,
			start,
			products
	} = resp;
	const rows = this.state.pageSize;
	let noOfPages = 0;
	if(numberOfProducts>0){
		if(numberOfProducts%rows===0){
			noOfPages = numberOfProducts/rows;
		}else {
			noOfPages = Math.floor(numberOfProducts / rows) + 1;
		}
	}
	let currentPage = Math.floor(start / rows) + 1;
	const isNext = ((start + rows) >= numberOfProducts || start >= numberOfProducts) ? false : true;
	const isPrev = ((start - rows) < 0 || start <= 0) ? false : true;
	return {
		numberOfProducts,
			start,
			productsLn: products.length,
			rows,
			noOfPages,
			currentPage: currentPage || 0,
			isNext,
			isPrev
	};
};
