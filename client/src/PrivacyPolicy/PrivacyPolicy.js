import React from "react";
import {
  PrivacyBackroundColor,
  PrivacyContainer,
  PrivacyFirstH1,
  PrivacyFirstH3,
  PrivacyHR,
  PrivacyPanelFirst,
  PrivacySecondH1,
  PrivacySecondH3,
} from "./PrivacyPolicyElements";
import background from "../assets/images/nuback2.png";

const PrivacyPolicy = () => {
  return (
    <>
      <div>
        <PrivacyBackroundColor>
          <PrivacyPanelFirst
            style={{
              backgroundImage: `url(${background})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            PRIVACY POLICY
          </PrivacyPanelFirst>
          <PrivacyContainer>
            <PrivacyFirstH1>OUR PRIVACY COMMITMENT</PrivacyFirstH1>
            <PrivacyFirstH3>
              Lorem ipsum dolor sit amet, cosectetur adipiscing elite, sed do
              eismod tempor incididunt ut labore et dolore magna aliqua,
              Ulttrices tincidunt arcu non sodales neque sodales. ALiquet lectus
              proin nibh nisl.
            </PrivacyFirstH3>

            <PrivacyHR></PrivacyHR>

            <PrivacySecondH1>Why we collect your personal data</PrivacySecondH1>
            <PrivacySecondH3>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              elit turpis, faucibus nec quam quis, tempor rhoncus massa.
              Vestibulum eu magna id elit scelerisque mattis. Vestibulum tortor
              sem, pellentesque in dolor at, vestibulum consectetur nibh. Aenean
              fringilla nisl eu porta porta. Etiam ornare velit ac vehicula
              auctor. Vestibulum a vehicula orci. Mauris ullamcorper nulla a
              diam sollicitudin placerat. Mauris a velit ac enim bibendum
              placerat. Donec rhoncus leo fermentum, aliquam neque nec, aliquam
              lectus. Sed vel justo vel neque pellentesque faucibus vitae sed
              risus. Donec porta sem orci. Sed et erat ante. Donec porttitor
              placerat laoreet.
            </PrivacySecondH3>
            <PrivacySecondH3>
              Donec viverra arcu ut elementum consectetur. Fusce condimentum
              congue est sit amet aliquet. Vestibulum ante ipsum primis in
              faucibus orci luctus et ultrices posuere cubilia curae; Maecenas
              eget feugiat ex. Nunc faucibus lobortis eros, aliquet facilisis
              justo accumsan et. Integer diam enim, bibendum condimentum
              vulputate eget, venenatis fringilla orci. Donec a sapien sed est
              rutrum mollis. Nam urna purus, convallis sed tellus sit amet,
              congue commodo nulla. Etiam sagittis, magna et semper accumsan,
              nisl arcu venenatis ipsum, a dignissim lacus lacus ut ante.
              Vestibulum sit amet nunc sit amet odio scelerisque suscipit. In
              hendrerit interdum commodo. Sed non magna mi. Nulla facilisi.
              Vestibulum semper purus justo, et pulvinar sem blandit sed.
            </PrivacySecondH3>
            <PrivacySecondH3>
              Cras iaculis blandit justo, eget consequat leo finibus eget. Donec
              id faucibus est. Integer nec iaculis eros. Suspendisse feugiat
              sapien sed nisl convallis, vitae pretium velit bibendum. Donec
              tempus ipsum quis eleifend lacinia. Sed vel rutrum lorem. Nunc et
              nulla lectus. Nam sollicitudin, ligula ac suscipit facilisis, est
              arcu ornare ipsum, id sagittis erat dolor eu lorem. Nunc aliquet
              ante ac ante pharetra, accumsan dignissim nibh porttitor. Nulla
              porttitor eleifend lacus vitae tincidunt. Morbi neque lacus,
              sollicitudin a vehicula id, tristique eu orci. Vivamus viverra,
              dui non accumsan sollicitudin, nisl lorem viverra tortor, sed
              vehicula libero massa a ante. Proin vel aliquam neque, ac finibus
              felis.
            </PrivacySecondH3>

            <PrivacySecondH1>
              When we disclose your personal data
            </PrivacySecondH1>
            <PrivacySecondH3>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              elit turpis, faucibus nec quam quis, tempor rhoncus massa.
              Vestibulum eu magna id elit scelerisque mattis. Vestibulum tortor
              sem, pellentesque in dolor at, vestibulum consectetur nibh. Aenean
              fringilla nisl eu porta porta. Etiam ornare velit ac vehicula
              auctor. Vestibulum a vehicula orci. Mauris ullamcorper nulla a
              diam sollicitudin placerat. Mauris a velit ac enim bibendum
              placerat. Donec rhoncus leo fermentum, aliquam neque nec, aliquam
              lectus. Sed vel justo vel neque pellentesque faucibus vitae sed
              risus. Donec porta sem orci. Sed et erat ante. Donec porttitor
              placerat laoreet.
            </PrivacySecondH3>

            <PrivacySecondH1>How we protect your personal data</PrivacySecondH1>
            <PrivacySecondH3>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              elit turpis, faucibus nec quam quis, tempor rhoncus massa.
              Vestibulum eu magna id elit scelerisque mattis. Vestibulum tortor
              sem, pellentesque in dolor at, vestibulum consectetur nibh. Aenean
              fringilla nisl eu porta porta. Etiam ornare velit ac vehicula
              auctor. Vestibulum a vehicula orci. Mauris ullamcorper nulla a
              diam sollicitudin placerat. Mauris a velit ac enim bibendum
              placerat. Donec rhoncus leo fermentum, aliquam neque nec, aliquam
              lectus. Sed vel justo vel neque pellentesque faucibus vitae sed
              risus. Donec porta sem orci. Sed et erat ante. Donec porttitor
              placerat laoreet.
            </PrivacySecondH3>
            <PrivacySecondH3>
              Aliquam lacinia elit eu velit pretium tempus. Aliquam sem orci,
              tempor ac magna sit amet, sollicitudin elementum purus. Proin
              imperdiet justo in commodo sodales. Nulla mollis sit amet nunc id
              cursus. Suspendisse porttitor est nisl, eu tincidunt lorem mollis
              et. Phasellus tristique neque urna, vel sodales risus efficitur
              non. Suspendisse eu tellus sed orci gravida congue pretium sed
              sem. Suspendisse ut sapien mi.
            </PrivacySecondH3>
          </PrivacyContainer>
        </PrivacyBackroundColor>
      </div>
    </>
  );
};

export default PrivacyPolicy;
