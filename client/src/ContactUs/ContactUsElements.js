import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const ContactBackroundColor = styled.div`
  background-color: #f5f7ff;
  margin: auto;
`;
export const BtnLink = styled(Link)`
  color: blue;
  background: #bee8a8;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 30px 1rem;
  height: 50px;
  width: 50px;
  cursor: pointer;
  &.active {
    color: black;
  }
`;

export const ContactPanelFirst = styled.div`
  font-size: 40px;
  color: white;
  font-weight: bold;
  text-decoration: underline;
  text-decoration-color: yellow;
  align-items: center;
  justify-content: center;
  height: 400px;
  background: orange;
  display: flex;
  font-family: "Raleway";
`;

export const ContactPanelFirstH1 = styled.h1`
  margin-left: 5px;
  padding-left: 1rem;
  font-family: "Raleway";
  font-size: 20px;
`;

export const ContactPanelFirstH3 = styled.h3`
  margin-left: 5px;
  padding-left: 1rem;
  font-family: "Raleway";
  font-size: 12px;
  letter-spacing: 1px;
`;

export const ContactPanelSecondWrapper = styled.div`
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 16px;
  padding: 0 50px;
  font-family: "Raleway";
  column-rule: 1px solid #3e51ac;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

export const ContactPanelSecondCard = styled.div`
  background: #f5f7ff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  max-height: 340px;
  padding: 30px;
  box-shadow: 0 1 px 3px rgba(0, 0, 0, 0.2);
`;

export const ContactPanelSecondIcon = styled.img`
  height: 160px;
  width: 160px;
  margin-bottom: 10px;
`;

export const ContactPanelIconContainer = styled.div`
  height: 200px;
  width: 200px;
  color: #f8d024;
  text-align: center;
`;

export const ContactPanelSecondLink = styled(Link)`
  white-space: nowrap;
  padding: 10px 22px;
  font-size: 16px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  font-family: "Raleway";
`;

export const ContactPanelSecondContainer = styled.div`
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: fff;

  @media screen and (max-width: 768px) {
    height: 1100px;
  }
  @media screen and (max-width: 480px) {
    height: 1300px;
  }
`;

export const ContactPanelLine = styled.div`
  border-left: 6px;
  height: 300px;
  color: green;
`;

export const ContactPanelSecondH1 = styled.h1`
  font-family: "Raleway";
  font-size: 30px;
  color: black;
`;

export const ContactPanelSecondP = styled.p`
  font-family: "Raleway";
  font-size: 15px;
  color: black;
`;

export const ContactPanelHR = styled.hr`
  width: 90%;
  border: 2px solid;
  border-radius: 5px;
  text-align: center;
  color: #3e51ac;
  margin-top: 4rem;
  margin-bottom: 2rem;

  @media screen and (max-width: 768px) {
    margin-top: 2rem;
    margin-bottom: 2rem;
  }
`;

export const ConctactPanelSecondMap = styled.div`
  align-items: center;
  justify-content: center;
  height: 400px;
  display: flex;
  width: 90%;
  margin-top: 20px;
  margin-botton: 30px;
  margin-left: 65px;

  @media screen and (max-width: 768px) {
    margin: auto;
  }
`;

export const ContactPanelThirdContainer = styled.div`
  margin: auto;
  height: 75px;
  display: flex;
  padding-left: 2rem;

  @media screen and (max-width: 768px) {
    height: 100px;
    font-size: 10px;
    padding-left: auto;
  }
  @media screen and (max-width: 480px) {
    height: 150px;
    font-size: 5px;
    padding-left: auto;
  }
`;

export const ContactPanelThirdH2 = styled.h2`
  font-family: "Raleway";
  font-size: 15px;
  color: black;
  padding-left: 1rem;
`;

export const ContactPanelFourth = styled.div`
  margin: 0 auto;
  height: 50px;
  width: 90%;
  padding: 1rem;
  display: flex;
  grid-template-columns: 1fr 1fr;
  grid-gap: 50px;
  @media screen and (max-width: 768px) {
    margin: auto;
    grid-template-columns: 1fr;
    height: 150px;
    grid-grap: 10px;
  }
`;

export const ContactPanelThirdTextBoxFirst = styled.textarea`
  height: 30px;
  width: 80%;
  resize: none;
  border: 2px transparent;
  border-radius: 10px;
  background: #3e51ac;
  font-family: "Raleway";
  color: #fff;
  outline: none;
  text-indent: 20px;
  font-size: 15px;
  overflow: hidden;

  ::placeholder {
    opacity: 50%;
    color: #fff;
    padding-top: 5px;
  }
`;

export const ContactPanelThirdTextBoxSec = styled.textarea`
  height: 30px;
  width: 80%;
  resize: none;
  border: 2px transparent;
  border-radius: 10px;
  background: #3e51ac;
  font-family: "Raleway";
  color: #fff;
  outline: none;
  text-indent: 20px;
  font-size: 15px;

  ::placeholder {
    opacity: 50%;
    color: #fff;
    padding-top: 5px;
  }
`;

export const ContactPanelFifth = styled.div`
  margin: auto;
  height: 200px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ContactPanelFifthTextBox = styled.textarea`
  height: 300px;
  width: 90%;
  resize: none;
  border: 2px transparent;
  border-radius: 10px;
  background: #3e51ac;
  font-family: "Raleway";
  color: #fff;
  outline: none;
  text-indent: 20px;
  font-size: 15px;

  ::placeholder {
    opacity: 50%;
    color: #fff;
    padding-top: 10px;
  }
`;

export const ContactSubmitButton = styled(Link)`
  height: auto;
  width: auto;
  border-radius: 30px;
  font-family: "Raleway";
  color: #ffffff;
  font-size: 15px;
  background: #3e51ac;
  padding: 10px 20px 10px 20px;
  text-decoration: none;
  text-align: center;

  &:hover {
    background: #f8d024;
    text-decoration: none;
  }
`;
