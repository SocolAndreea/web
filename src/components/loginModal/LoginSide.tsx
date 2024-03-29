import { observer } from "mobx-react";
import { Button, TextField } from "@mui/material";
import {
  ButtonBlack,
  Modal,
  WeightedTitle,
} from "../../pages/StyledComponents";
import { useState } from "react";
import "./styles.css";

const LoginSide = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Modal>
      <WeightedTitle>Intra: </WeightedTitle>
      Nume de Utilizator:
      <TextField
        className="customBorder"
        type="text"
        value={username}
        label="Username"
        variant="outlined"
        onChange={(e) => setUsername(e.target.value.trim())}
      ></TextField>
      Parola:
      <TextField
        className="customBorder"
        type="password"
        label="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value.trim())}
      />
      <Button variant={"contained"} sx={ButtonBlack}>
        Login
      </Button>
    </Modal>
  );
};

export default observer(LoginSide);
