import styled from "styled-components";
import { BASE_STYLES } from "../../helpers/constantsJs";
import { BasketIcon } from "../../assets/icon-collection";

export const Basket = ({ orders = 20 }) => {
	return (
		<Wrapper>
			<BasketIcon />
			<YourCard>Your Cart</YourCard>
			<Orders>{orders}</Orders>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	padding: 19px 33px;
	background-color: ${BASE_STYLES.BLACK_BROWN};
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 30px;
	gap: 15px;
	text-align: center;
	color: white;
	font-weight: bold;
`;

const Orders = styled.div`
	background-color: ${BASE_STYLES.BROWN};
	width: 60px;
	padding: 4px 0;
	border-radius: 30px;
`;
const YourCard = styled.p`
	font-size: 16px;
`;
