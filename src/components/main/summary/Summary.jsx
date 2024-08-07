import styled from "styled-components";
import { BASE_STYLES } from "../../../helpers/constantsJs";
import { imageBack } from "../../../assets/imageBackground";

const Summary = () => {
	return (
		<StyledSummary>
			<div>
				<img
					src={imageBack}
					alt="image"
					style={{ width: "100%", height: "350px" }}
				/>
			</div>
			<Content>
				<Title>Delicious Food, Delivered To You</Title>
				<Text>
					Choose your favorite meal from our broad selection of available meals
					and enjoy a delicious <br />
					lunch or dinner at home.
					<br />
					<br />
					All our meals are cooked with high-quality ingredients, just-in-time
					and of course by <br />
					experienced chefs!
				</Text>
			</Content>
		</StyledSummary>
	);
};

export default Summary;

const StyledSummary = styled.div`
	width: 100%;
	max-width: 1440px;
	min-width: 1200px;
	display: flex;
	flex-direction: column;
	margin: 0 auto;
	position: relative;
`;

const Content = styled.div`
	position: absolute;
	width: 904px;
	height: 270px;
	display: flex;
	flex-direction: column;
	align-items: center;
	background-color: ${BASE_STYLES.GREY};
	box-shadow: 0px 0px 10px 6px #343434;
	border-radius: 30px;
	color: ${BASE_STYLES.WHITE};
	top: 40%;
	left: 17%;
`;

const Title = styled.h2`
	padding: 36px 142px 0 142px;
	font-weight: 600;
	font-size: 36px;
`;

const Text = styled.p`
	margin-top: 28px;
	text-align: center;
	font-weight: 500;
	font-size: 16px;
`;
