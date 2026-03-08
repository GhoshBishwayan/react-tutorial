// import Header from './header.jsx'
// import Footer from './Footer.jsx'
// import Food from './Food.jsx'
import Awards from './Awards.jsx'
import Card from './Card.jsx'
import Button from './Button/Button.jsx';
import Student from './Student.jsx'
import Achivements from './Achivements/Achivements.jsx';
// import Button2 from './Button2.jsx'; 

function App() {
  return(
  <>
  {/* //   <Header/>
  //   <h1> Hello World</h1>
  //   <Food/>
  //   <Footer/> */}

    {/* different way to add css
        inline , modules , global aka external module is the best
    <Button/>
    <Button2/> */}
    <Card/>
    <Button/>
    <Awards/>
    <Achivements cupName="World Cup" year = {2022} playerOfTheTourny={true} age={35} />
    <Achivements cupName="UCL" year = {2015} playerOfTheTourny={true} age={26} />
    <Achivements year={2023}/>
    <Student name='Neymar' age={32} isStudent={true} />

  </>
  );
}

export default App
