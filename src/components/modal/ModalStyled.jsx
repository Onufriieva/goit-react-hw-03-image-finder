import styled from "@emotion/styled";

export const BackdropDiv = styled.div`
position: fixed;
top: 0;
left: 0;
width: 100vw;
height: 100vh;
background-color: rgba(0, 0, 250, 0.7);
`;

export const ModalDiv = styled.div`
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
min-width: 600px;
min-height: 300px;
padding: 16px;
background-color: #ffffff;
border-radius: 4px;
`;