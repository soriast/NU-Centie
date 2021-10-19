// import React, { useState } from "react";
// import NavBar from "../../NavbarFooter/NavBar";
// import { Link } from "react-router-dom";
// import {
//   HeroContainer,
//   HeroContent,
//   HeroItems,
//   HeroItems1,
//   HeroH1,
//   HeroP,
//   HeroS,
//   HeroBtn,
// } from "./HeroElements";

// const Hero = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggle = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <HeroContainer>
//       <HeroContent>
//         <HeroItems>
//           <HeroH1>INNOVATORS</HeroH1>
//         </HeroItems>
//         <HeroItems1>
//           <div className="storyContainer1">
//             <ul>
//               <li className="linkpage1" style={{listStyleType:"none"}}>
//                 <Link to ="/main">
//                   {" "}
//                   <HeroP> INNOVATORS</HeroP>{" "}
//                 </Link>{" "}
//               </li>
//             </ul>
//           </div>

//           <div className="storyContainer1">
//             <ul>
//               <li className="linkpage1" style={{listStyleType:"none"}}>
//               <Link to ="/ViewStory">
//                   {" "}
//                   <HeroS>ACHIEVEMENT & STORIES</HeroS>{" "}
//                 </Link>{" "}
//               </li>
//             </ul>
//           </div>
//         </HeroItems1>
//       </HeroContent>
//     </HeroContainer>
//   );
// };

// export default Hero;


import { useEffect } from "react";
import style from "../../product_components/components/Products/Heading.module.css";

const categories = [
  { category: "innovators" },
  { category: "stories" },
 
];

function Hero({ category }) {
  useEffect(() => {
    console.log(category);
  }, []);

  return (
    <div className={style.heading}>
      <h1 className={style.heading__label} style={{padding:"57px"}}>Innovators</h1>
      <div className={style.heading__divider}></div>
      <div className="container">
        <div className={style.heading__categories}>
          {categories.map((item, index) => (
            <h2
              className={
                item.category === category
                  ? style.heading__categories_selected
                  : ""
              }
              key={index}
            >
              <a href={`/main/${item.category}`}>{item.category}</a>
            </h2>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Hero;
