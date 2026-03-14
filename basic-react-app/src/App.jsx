import './App.css'
// import Footer from './Footer';
// import Profile from "./Profile";
// import Profile1 from './Profile1';
// import Person from './Person';
import Student from './Student';

function App() {
  return (
    <div>
      {/* <Profile1 name="Manish Sharma" age="23" college="Bhopal" /> */}
      <Student name = "Manish Jain" age= "24" city="Noida" />
      <Student name="Alok Saw" age="25" city="Aurangabad" />
    </div>
  );
}

export default App;
