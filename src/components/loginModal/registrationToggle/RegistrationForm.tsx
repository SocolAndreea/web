import { observer } from "mobx-react";
import { Dispatch, SetStateAction } from "react";
import { WeightedTitle } from "../../../pages/StyledComponents";
import { TextField } from "@mui/material";
import styled from "styled-components";

interface FormProps {
  toggleBenefits: Dispatch<SetStateAction<boolean>>;
}

const Together = styled.div`
  display: flex;
  justify-content: space-between;
`;
const RegistrationForm = (toggleBenefits: FormProps) => {
  const TurnToggleOff = () => {
    toggleBenefits.toggleBenefits(true);
  };
  return (
    <>
      <WeightedTitle>Inregistrare: </WeightedTitle>
      <Together>
        Nume de Utilizator:
        <TextField
          className="customBorder"
          type="text"
          // value={username}
          label="Username"
          variant="outlined"
          // onChange={(e) => setUsername(e.target.value.trim())}
        ></TextField>
      </Together>
      <Together>
        Email:
        <TextField
          className="customBorder"
          type="email"
          // value={username}
          label="Email"
          variant="outlined"
          // onChange={(e) => setUsername(e.target.value.trim())}
        ></TextField>
      </Together>
      <Together>
        Parola:
        <TextField
          className="customBorder"
          type="password"
          label="Password"
          // value={password}
          // onChange={(e) => setPassword(e.target.value.trim())}
        />
      </Together>
      <Together>
        Repeta Parola:
        <TextField
          className="customBorder"
          type="password"
          label="Password"
          // value={password}
          // onChange={(e) => setPassword(e.target.value.trim())}
        />
      </Together>
      <button onClick={TurnToggleOff}>inapoi</button>
    </>
  );
};

export default observer(RegistrationForm);
