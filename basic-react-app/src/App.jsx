// import './App.css'
// import Footer from './Footer';
// import Profile from "./Profile";
// import Profile1 from './Profile1';
// import Person from './Person';
// import Student from './Student';
import Card from './Card';
function App() {
  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: "50px" }}>
      <Card image="/MS.jpg"
       name="Manish Sharma"
       age="24" 
       city="Noida"
       profession="React Developer"
       />
     

    </div>
  );
}

export default App;
