import { TextField } from "@mui/material";
import { useState } from "react";
import { observer } from "mobx-react";
import styled from "styled-components";

export const Modal = styled.div`
  //position: absolute;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 20rem;
  height: fit-content;
  gap: 10px;
  display: flex;
  flex-direction: column;
  background-color: whitesmoke;
  padding: 1rem;
  border-radius: 14px;
  box-shadow: 0 12px 8px rgba(0, 0, 0, 0.35);
  animation: slide-down 300ms ease-out forwards;
`;
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <Modal>
      <TextField
        type="text"
        value={username}
        label="Username"
        variant="outlined"
        onChange={(e) => setUsername(e.target.value.trim())}
      ></TextField>

      <TextField
        type="password"
        label="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value.trim())}
      />
    </Modal>
  );
};
export default observer(Login);
