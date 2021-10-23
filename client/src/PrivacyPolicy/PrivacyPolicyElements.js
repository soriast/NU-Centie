import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const BtnLink = styled(Link)`
  color: blue;
  background: #bee8a8;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 30px 1rem;
  height: 100%;
  cursor: pointer;
  &.active {
    color: black;
  }
`;

export const PrivacyBackroundColor = styled.div`
  background-color: #f5f7ff;
  margin: auto;
`;

export const PrivacyContainer = styled.div`
  width: 100%;
`;

export const PrivacyPanelFirst = styled.div`
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

export const PrivacyFirstH1 = styled.h1`
  width: 80%;
  margin-top: 2rem;
  margin-left: auto;
  margin-right: auto;
  font-family: "Raleway";
  font-size: 20px;
`;

export const PrivacyFirstH3 = styled.h3`
  text-align: justify;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  font-family: "Raleway";
  font-size: 12px;
  letter-spacing: 1px;
`;

export const PrivacyHR = styled.hr`
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

export const PrivacySecondH1 = styled.h1`
  text-align: center;
  width: 80%;
  margin-top: 2rem;
  margin-left: auto;
  margin-right: auto;
  font-family: "Raleway";
  font-size: 20px;
`;

export const PrivacySecondH3 = styled.h3`
  text-align: justify;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  font-family: "Raleway";
  font-size: 12px;
  letter-spacing: 1px;
  line-height: 1.8;
`;
