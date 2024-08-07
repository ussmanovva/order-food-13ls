import styled from "styled-components";
import MealItem from "./MealItem";
import { BASE_STYLES } from "../../../helpers/constantsJs";

const Meals = () => {
	return (
		<StyledMeal>
			<MealItem />
		</StyledMeal>
	);
};

export default Meals;

const StyledMeal = styled.div`
	width: 100%;
	min-width: 1200px;
	max-width: 1440px;
	min-height: 600px;
	margin: 0 auto;
	display: flex;
	align-items: center;
	justify-content: center;
	border: 1px solid black;
	background-color: ${BASE_STYLES.GREY};
`;
