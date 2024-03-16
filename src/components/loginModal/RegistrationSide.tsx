import { observer } from "mobx-react";
import { ButtonBlack, Modal } from "../../pages/StyledComponents";
import { Button } from "@mui/material";

const RegistrationSide = () => {
  return (
    <Modal>
      hello
      <Button variant={"contained"} sx={ButtonBlack}>
        Inregistrare
      </Button>
    </Modal>
  );
};
export default observer(RegistrationSide);
