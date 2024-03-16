import { observer } from "mobx-react";
import { Container } from "./StyledComponents";
import RegistrationSide from "../components/loginModal/RegistrationSide";
import LoginSide from "../components/loginModal/LoginSide";

const Login = () => {
  return (
    <Container>
      <RegistrationSide />
      <LoginSide />
    </Container>
  );
};
export default observer(Login);
