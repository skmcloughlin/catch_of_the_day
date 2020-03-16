import React from "react";

//FUNCTIONAL STATELESS COMPONENT USING ES6 SYNTAX AND DESTRUCTURING
const Header = ({ tagline }) => (
  <header className="top">
    <h1>
      Catch
      <span className="ofThe">
        <span className="of">Of</span>
        <span className="the">The</span>
      </span>
      Day
    </h1>
    <h3 className="tagline">
      <span>{tagline}</span>
    </h3>
  </header>
);


//FUNCTIONAL STATELESS COMPONENT USING ES6 SYNTAX
// const Header = props => (
//     <header className="top">
//       <h1>
//         Catch
//         <span className="ofThe">
//           <span className="of">Of</span>
//           <span className="the">The</span>
//         </span>
//         Day
//       </h1>
//       <h3 className="tagline">
//         <span>{props.tagline}</span>
//       </h3>
//     </header>
//   );



// BELOW IS FULLY DECLARATIVE STATELESS FUNCTIONAL COMPONENT
// function Header(props) {
//   return(
//         <header className="top">
//           <h1>
//             Catch
//             <span className="ofThe">
//               <span className="of">Of</span>
//               <span className="the">The</span>
//             </span>
//             Day
//           </h1>
//           <h3 className="tagline">
//             <span>{props.tagline}</span>
//           </h3>
//         </header>
//   )
// }



// BELOW IS NOW UNNECESSARY AFTER REFACTORING TO STATELESS FUNCTIONAL COMPONENTS
// class Header extends React.Component {
//   render() {
//     return (
//       <header className="top">
//             <h1>Catch
//                  <span className="ofThe">
//                     <span className="of">Of</span>
//                     <span className="the">The</span>
//                  </span>
//                 Day
//         </h1>
//         <h3 className="tagline">
//           <span>{this.props.tagline}</span>
//         </h3>
//       </header>
//     );
//   }
// }

export default Header;