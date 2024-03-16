import styled from "styled-components";

export const WeightedTitle = styled.div`
  font-family:
    Nunito Sans,
    sans-serif;
  color: #494949;
  font-weight: 800;
  font-size: 15px;
`;
export const ButtonBlack = {
  fontFamily: "Nunito Sans, sans-serif",
  background: "#313131",
  fontWeight: 400,
  fontSize: "20px",
  width: "100%",
  padding: "14px 20px",
  borderRadius: "4px",
  color: "white",
  textTransform: "capitalize",
  "&:hover": {
    backgroundColor: "#e42789cc", // Change hover color to pink
  },
};
export const Modal = styled.div`
  width: 20rem;
  gap: 10px;
  height: 80%;
  display: flex;
  flex-direction: column;
  background-color: ghostwhite;
  padding: 1rem;
  align-self: center;
`;
export const Container = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 60%;
  width: 50%;
  display: flex;
  gap: 20px;
  justify-content: space-evenly;
  background-color: white;
`;
