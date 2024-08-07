import styled from "styled-components";
import Meals from "./meals/Meals";
import Summary from "./summary/Summary"

const Main = () => {
	return (
		<StyledMain>
			<Summary />
			<Meals />
		</StyledMain>
	);
};

export default Main;

const StyledMain = styled.div`
	position: relative;
	padding-top: 110px;
`;
