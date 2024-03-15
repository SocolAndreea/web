import React from "react";
import "./App.css";
import Login from "./pages/Login";
import styled from "styled-components";
import AppImage from "./assets/AppImage";
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
function App() {
  return (
    <AppImage>
      {/*<img src={"../assets/cosmetix.jpg"} alt={"Background"} />*/}
      <Modal>
        <Login />
      </Modal>
    </AppImage>
  );
}

export default App;
