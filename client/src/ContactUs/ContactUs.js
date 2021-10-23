import React from "react";
import {
  ConctactPanelSecondMap,
  ContactBackroundColor,
  ContactPanelFifth,
  ContactPanelFifthTextBox,
  ContactPanelFirst,
  ContactPanelFirstH1,
  ContactPanelFirstH3,
  ContactPanelFourth,
  ContactPanelHR,
  ContactPanelIconContainer,
  ContactPanelSecondCard,
  ContactPanelSecondContainer,
  ContactPanelSecondH1,
  ContactPanelSecondP,
  ContactPanelSecondWrapper,
  ContactPanelThirdContainer,
  ContactPanelThirdH2,
  ContactPanelThirdTextBoxFirst,
  ContactPanelThirdTextBoxSec,
  ContactSubmitButton,
} from "./ContactUsElements";
import background from "../assets/images/nuback2.png";
import backgroundMap from "../assets/images/nuMap.png";
import { BsBuilding } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import { BiPhoneIncoming } from "react-icons/bi";
import { HiOutlineMailOpen } from "react-icons/hi";

const ContactUs = () => {
  return (
    <>
      <div>
        <ContactBackroundColor>
          <ContactPanelFirst
            style={{
              backgroundImage: `url(${background})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            CONTACT US
          </ContactPanelFirst>

          <ContactPanelFirstH1>
            Let's Make Something Awesome Together!
          </ContactPanelFirstH1>
          <ContactPanelFirstH3>
            Drop us a line, or give us a heads up if you're interested in
            visiting us.
          </ContactPanelFirstH3>
          <ContactPanelSecondContainer>
            <ContactPanelSecondWrapper>
              <ContactPanelSecondCard>
                <ContactPanelIconContainer>
                  <BsBuilding size={80} />
                  <ContactPanelSecondH1>VISIT US</ContactPanelSecondH1>
                  <ContactPanelSecondP>
                    551 MF Jhocson St.<br></br>Sampaloc, Manila<br></br>1008
                    Metro Manila, Philippines
                  </ContactPanelSecondP>
                </ContactPanelIconContainer>
              </ContactPanelSecondCard>

              <ContactPanelSecondCard>
                <ContactPanelIconContainer>
                  <BiPhoneIncoming size={80} />
                  <ContactPanelSecondH1>CALL US</ContactPanelSecondH1>
                  <ContactPanelSecondP>(02) 8712 1900</ContactPanelSecondP>
                </ContactPanelIconContainer>
              </ContactPanelSecondCard>

              <ContactPanelSecondCard>
                <ContactPanelIconContainer>
                  <FiMail size={80} />
                  <ContactPanelSecondH1>EMAIL US</ContactPanelSecondH1>
                  <ContactPanelSecondP>
                    nutechhub@example.com
                  </ContactPanelSecondP>
                </ContactPanelIconContainer>
              </ContactPanelSecondCard>
            </ContactPanelSecondWrapper>
          </ContactPanelSecondContainer>
          <ConctactPanelSecondMap
            style={{
              backgroundImage: `url(${backgroundMap})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          ></ConctactPanelSecondMap>
          <ContactPanelHR></ContactPanelHR>

          <ContactPanelThirdContainer>
            <HiOutlineMailOpen size={30} color="#f8d024" />
            <ContactPanelThirdH2>
              If you have any concern or message, don't hesitate to contact us.
            </ContactPanelThirdH2>
          </ContactPanelThirdContainer>

          <ContactPanelFifth>
            <ContactPanelFourth>
              <ContactPanelThirdTextBoxFirst placeholder="Your fullname"></ContactPanelThirdTextBoxFirst>
              <ContactPanelThirdTextBoxSec placeholder="Your email"></ContactPanelThirdTextBoxSec>
            </ContactPanelFourth>

            <ContactPanelFifthTextBox placeholder="Your message..."></ContactPanelFifthTextBox>
            <br></br>
            <ContactSubmitButton to="/">SUBMIT</ContactSubmitButton>
          </ContactPanelFifth>
        </ContactBackroundColor>
      </div>
    </>
  );
};

export default ContactUs;
