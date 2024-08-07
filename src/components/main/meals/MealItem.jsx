import styled from "styled-components";
import { BASE_STYLES } from "../../../helpers/constantsJs";

const MealItem = () => {
	return <StyledMealsItem></StyledMealsItem>;
};

export default MealItem;

const StyledMealsItem = styled.div`
	width: 800px;
	height: 350px;
	background-color: ${BASE_STYLES.WHITE};
`;
