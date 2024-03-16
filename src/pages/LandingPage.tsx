import { observer } from "mobx-react";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path);
  };
  return (
    <div>
      hello
      <button onClick={() => handleNavigation("/login")}>Login</button>
    </div>
  );
};

export default observer(LandingPage);
