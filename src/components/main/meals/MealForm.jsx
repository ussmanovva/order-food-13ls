import styled from "styled-components";
import { Button } from "../../UI/CustomButton";
import { BASE_STYLES } from "../../../helpers/constantsJs";
import { PlusIcon } from "../../../assets/icon-collection";

const MealForm = () => {
	return (
		<StyledForm>
			<div>
				<AmountLabel>Amount</AmountLabel>
				<AmountsInput type="number" min={"1"} max={"5"} defaultValue={1} />
			</div>
			<StyledButton
				type="submit"
				variant="primary"
				icon={<PlusIcon stroke="white" />}>
				ADD
			</StyledButton>
		</StyledForm>
	);
};

export default MealForm;

const StyledForm = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	color: ${BASE_STYLES.TEXT_COLOR};
`;

const AmountLabel = styled.label`
	font-weight: 600;
	font-size: 18px;
	line-height: 27px;
	margin-right: 20px;
`;

const AmountsInput = styled.input`
	width: 60px;
	height: 32px;
	border-radius: 6px;
	border: 1px solid #d6d6d6d6 !important;
	outline: none;
	padding: 4px 10px;
	font-weight: 500;
	font-size: 16px;
	line-height: 24px;
	margin-bottom: 12px;
`;

const StyledButton = styled(Button)`
	margin-top: 10px;
`;
