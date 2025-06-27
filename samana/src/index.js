import React from "react";  //remember 
import ReactDOM from "react-dom/client"; 
import App from "./App"; // Importing the main App component
import { BrowserRouter } from "react-router-dom"; // Importing BrowserRouter for routing

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./app.css"; // Assuming you have a CSS file named app.css
// const App = () => {
//     return (
//         <div className="container">
//             This is print statement
//             <h1>Samana Shrestha</h1>
//             <p>My name is samana</p>
//             <p>i am samana </p>
                                   
//         </div>
//     )
// };

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<App/>);

// import React from "react";  //remember 
// import ReactDOM from "react-dom/client"; 
// //import "./app.css"; // Importing the CSS file
// import UserProfileCard from "./UserProfileCard/UserProfileCard"
// const App = () => {
//   return (
//     // <div className="container">
//     // <div className="card">
//     //   <h2> Identity card</h2>
//     //   <h1>Kathmandu College of Technology </h1>
//     //   <p> Samana Shrestha</p>
//     //   <p> Bhaktapur</p>
//     //   <p> Bsc CSIT</p>
//     //   <p> 2080</p>
//     //   <p> 4th Semester</p>
//     //   <button className="btn">Save</button>
//     // </div>
//     // </div>
    
//     <div>
//       <UserProfileCard 
//         name="Samana Shrestha"
//         bio="A passionate software developer with a love for creating innovative solutions."
//         avatar="https://www.pixelstalk.net/wp-content/uploads/2016/06/Beautiful-Flowers-wallpapers-hd.jpg"
//         style={{ width: "300px", 
//           margin: "20px auto", 
//           textAlign: "center" ,
//         backgroundColor: "#f0f0f0",}}//inline css style
//       />


//           <UserProfileCard
//         name="sama stha"
//         bio="A creative designer with a knack for visual storytelling."
//         avatar="https://static.vecteezy.com/system/resources/previews/011/954/422/large_2x/watercolor-flower-background-frame-free-vector.jpg"
//         style={{ width: "300px", 
//           margin: "20px auto", 
//           textAlign: "center",
//           backgroundColor: "pink",}} //inline css style
//       />
//     </div>
//   );

// }

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<App />);

// //create a simple button with a "click me " text


