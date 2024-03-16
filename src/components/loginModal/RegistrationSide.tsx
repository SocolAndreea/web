import { observer } from "mobx-react";
import { Modal } from "../../pages/StyledComponents";
import RegistrationBenefits from "./registrationToggle/RegistrationBenefits";
import { createContext, useState } from "react";
import RegistrationForm from "./registrationToggle/RegistrationForm";

//modalul ramane si fac un toggle intre tot ce e interior si un registration form

const RegistrationSide = () => {
  const [toggle, setToggle] = useState(true);
  const ToggleForm = createContext(toggle);
  console.log("test toggle", toggle);

  return (
    <Modal style={{ gap: "20px" }}>
      <ToggleForm.Provider value={toggle}>
        {toggle ? (
          <RegistrationBenefits toggleForm={setToggle} />
        ) : (
          <RegistrationForm toggleBenefits={setToggle} />
        )}
      </ToggleForm.Provider>
    </Modal>
  );
};
export default observer(RegistrationSide);
