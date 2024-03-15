import { TextField } from "@mui/material";
import { useState } from "react";
import { observer } from "mobx-react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <>
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
    </>
  );
};
export default observer(Login);
