//가격 단위 정규식
export const priceUnit = price => {
	return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};
