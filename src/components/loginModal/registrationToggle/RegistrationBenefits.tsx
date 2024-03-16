import { observer } from "mobx-react";
import { ButtonBlack, WeightedTitle } from "../../../pages/StyledComponents";
import { Button } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import styled from "styled-components";
import { Dispatch, SetStateAction } from "react";
const Benefits = styled.div`
  display: flex;
  gap: 5px;
`;

interface BenefitsProps {
  toggleForm: Dispatch<SetStateAction<boolean>>;
}
const RegistrationBenefits = (toggleForm: BenefitsProps) => {
  const TurnToggleOn = () => {
    toggleForm.toggleForm(false);
  };
  return (
    <>
      <WeightedTitle>Inca nu ai un profil?</WeightedTitle>
      <Button variant={"contained"} sx={ButtonBlack} onClick={TurnToggleOn}>
        Inregistrare
      </Button>
      <Benefits style={{ marginTop: "15px" }}>
        <CheckCircleIcon />
        Cumparare mai rapida
      </Benefits>
      <Benefits>
        <CheckCircleIcon />
        Creeaza-ti propria lista de dorinte
      </Benefits>
      <Benefits>
        <CheckCircleIcon />
        Istoricul comenzilor
      </Benefits>
    </>
  );
};
export default observer(RegistrationBenefits);
