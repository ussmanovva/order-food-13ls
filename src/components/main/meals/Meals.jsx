import styled from "styled-components";
import { BASE_STYLES } from "../../../helpers/constantsJs";
import MealItem from "./MealItem";
import MealForm from "./MealForm";

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
	background-color: ${BASE_STYLES.GREY};
`;
