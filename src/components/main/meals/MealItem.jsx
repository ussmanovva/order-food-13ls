import styled from "styled-components";
import { BASE_STYLES, DUMMY_MEALS } from "../../../helpers/constantsJs";
import MealForm from "./MealForm";

const MealItem = () => {
	return (
		<StyledMealItem>
			<InfoList>
				{DUMMY_MEALS.map((item) => (
					<ListItem key={item.id}>
						<FoodInfoWrapper>
							<NameFood>{item.title}</NameFood>
							<InfoFood>{item.description}</InfoFood>
							<PriceFood>${item.price}</PriceFood>
						</FoodInfoWrapper>
						<MealForm />
					</ListItem>
				))}
			</InfoList>
		</StyledMealItem>
	);
};

export default MealItem;

const StyledMealItem = styled.div`
	width: 1039px;
	height: 564px;
	margin: 160px 0 80px 0;
	padding: 20px 40px;
	border-radius: 30px;
	background-color: ${BASE_STYLES.WHITE};
`;

const InfoList = styled.ul`
	display: flex;
	flex-direction: column;
`;

const ListItem = styled.li`
	list-style: none;
	border-bottom: 1px solid #d6d6d6;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 20px 0;
	line-height: 30px;
	color: ${BASE_STYLES.TEXT_COLOR};
`;

const FoodInfoWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 4px;
`;

const NameFood = styled.h4`
	margin: 0;
	font-weight: 600;
	font-size: 18px;
`;

const InfoFood = styled.p`
	font-style: italic;
	font-weight: 400;
	font-size: 16px;
	line-height: 24px;
`;

const PriceFood = styled.b`
	font-size: 20px;
	color: #ad5502;
`;
