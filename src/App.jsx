// import Header from './header.jsx'
// import Footer from './Footer.jsx'
// import Food from './Food.jsx'
import Awards from './List/Awards.jsx'
import Card from './Card.jsx'
import Button from './Button/Button.jsx';
import Student from './Student.jsx'
import Achivements from './Achivements/Achivements.jsx';
// import Button2 from './Button2.jsx'; 

function App() {
  const messiAwards = [
  { id: 1, name: "Ballon d'Or", year: 2009 },
  { id: 2, name: "FIFA World Player of the Year", year: 2009 },
  { id: 3, name: "FIFA Club World Cup Golden Ball", year: 2009 },
  { id: 4, name: "UEFA Best Player in Europe", year: 2009 },
  { id: 5, name: "La Liga Player of the Year", year: 2009 },
  { id: 6, name: "Ballon d'Or", year: 2010 },
  { id: 7, name: "European Golden Shoe", year: 2010 },
  { id: 8, name: "La Liga Top Scorer (Pichichi Trophy)", year: 2010 },
  { id: 9, name: "La Liga Player of the Year", year: 2010 },
  { id: 10, name: "Ballon d'Or", year: 2011 },
  { id: 11, name: "FIFA Club World Cup Golden Ball", year: 2011 },
  { id: 12, name: "UEFA Best Player in Europe", year: 2011 },
  { id: 13, name: "La Liga Player of the Year", year: 2011 },
  { id: 14, name: "Ballon d'Or", year: 2012 },
  { id: 15, name: "European Golden Shoe", year: 2012 },
  { id: 16, name: "La Liga Top Scorer (Pichichi Trophy)", year: 2012 },
  { id: 17, name: "La Liga Player of the Year", year: 2012 },
  { id: 18, name: "European Golden Shoe", year: 2013 },
  { id: 19, name: "La Liga Top Scorer (Pichichi Trophy)", year: 2013 },
  { id: 20, name: "La Liga Player of the Year", year: 2013 },
  { id: 21, name: "FIFA World Cup Golden Ball", year: 2014 },
  { id: 22, name: "Ballon d'Or", year: 2015 },
  { id: 23, name: "UEFA Best Player in Europe", year: 2015 },
  { id: 24, name: "La Liga Player of the Year", year: 2015 },
  { id: 25, name: "European Golden Shoe", year: 2017 },
  { id: 26, name: "La Liga Top Scorer (Pichichi Trophy)", year: 2017 },
  { id: 27, name: "European Golden Shoe", year: 2018 },
  { id: 28, name: "La Liga Top Scorer (Pichichi Trophy)", year: 2018 },
  { id: 29, name: "Ballon d'Or", year: 2019 },
  { id: 30, name: "FIFA The Best Men's Player", year: 2019 },
  { id: 31, name: "European Golden Shoe", year: 2019 },
  { id: 32, name: "La Liga Top Scorer (Pichichi Trophy)", year: 2019 },
  { id: 33, name: "La Liga Top Scorer (Pichichi Trophy)", year: 2020 },
  { id: 34, name: "Laureus World Sportsman of the Year", year: 2020 },
  { id: 35, name: "Ballon d'Or", year: 2021 },
  { id: 36, name: "La Liga Top Scorer (Pichichi Trophy)", year: 2021 },
  { id: 37, name: "Copa America Golden Ball (Best Player)", year: 2021 },
  { id: 38, name: "FIFA The Best Men's Player", year: 2022 },
  { id: 39, name: "FIFA World Cup Golden Ball", year: 2022 },
  { id: 40, name: "Ballon d'Or", year: 2023 },
  { id: 41, name: "FIFA The Best Men's Player", year: 2023 },
  { id: 42, name: "MLS MVP", year: 2024 },
  { id: 43, name: "MLS Golden Boot", year: 2025 }
];
  const messiSilverware = [
  { id: 1, name: "La Liga", year: 2005, team: "FC Barcelona" },
  { id: 2, name: "FIFA World Youth Championship", year: 2005, team: "Argentina U20" },
  { id: 3, name: "Supercopa de España", year: 2005, team: "FC Barcelona" },
  { id: 4, name: "La Liga", year: 2006, team: "FC Barcelona" },
  { id: 5, name: "UEFA Champions League", year: 2006, team: "FC Barcelona" },
  { id: 6, name: "Supercopa de España", year: 2006, team: "FC Barcelona" },
  { id: 7, name: "Olympic Gold Medal", year: 2008, team: "Argentina U23" },
  { id: 8, name: "Copa del Rey", year: 2009, team: "FC Barcelona" },
  { id: 9, name: "La Liga", year: 2009, team: "FC Barcelona" },
  { id: 10, name: "UEFA Champions League", year: 2009, team: "FC Barcelona" },
  { id: 11, name: "Supercopa de España", year: 2009, team: "FC Barcelona" },
  { id: 12, name: "UEFA Super Cup", year: 2009, team: "FC Barcelona" },
  { id: 13, name: "FIFA Club World Cup", year: 2009, team: "FC Barcelona" },
  { id: 14, name: "La Liga", year: 2010, team: "FC Barcelona" },
  { id: 15, name: "Supercopa de España", year: 2010, team: "FC Barcelona" },
  { id: 16, name: "La Liga", year: 2011, team: "FC Barcelona" },
  { id: 17, name: "UEFA Champions League", year: 2011, team: "FC Barcelona" },
  { id: 18, name: "Supercopa de España", year: 2011, team: "FC Barcelona" },
  { id: 19, name: "UEFA Super Cup", year: 2011, team: "FC Barcelona" },
  { id: 20, name: "FIFA Club World Cup", year: 2011, team: "FC Barcelona" },
  { id: 21, name: "Copa del Rey", year: 2012, team: "FC Barcelona" },
  { id: 22, name: "La Liga", year: 2013, team: "FC Barcelona" },
  { id: 23, name: "Supercopa de España", year: 2013, team: "FC Barcelona" },
  { id: 24, name: "La Liga", year: 2015, team: "FC Barcelona" },
  { id: 25, name: "Copa del Rey", year: 2015, team: "FC Barcelona" },
  { id: 26, name: "UEFA Champions League", year: 2015, team: "FC Barcelona" },
  { id: 27, name: "UEFA Super Cup", year: 2015, team: "FC Barcelona" },
  { id: 28, name: "FIFA Club World Cup", year: 2015, team: "FC Barcelona" },
  { id: 29, name: "La Liga", year: 2016, team: "FC Barcelona" },
  { id: 30, name: "Copa del Rey", year: 2016, team: "FC Barcelona" },
  { id: 31, name: "Supercopa de España", year: 2016, team: "FC Barcelona" },
  { id: 32, name: "Copa del Rey", year: 2017, team: "FC Barcelona" },
  { id: 33, name: "La Liga", year: 2018, team: "FC Barcelona" },
  { id: 34, name: "Copa del Rey", year: 2018, team: "FC Barcelona" },
  { id: 35, name: "Supercopa de España", year: 2018, team: "FC Barcelona" },
  { id: 36, name: "La Liga", year: 2019, team: "FC Barcelona" },
  { id: 37, name: "Copa del Rey", year: 2021, team: "FC Barcelona" },
  { id: 38, name: "Copa América", year: 2021, team: "Argentina" },
  { id: 39, name: "Ligue 1", year: 2022, team: "Paris Saint-Germain" },
  { id: 40, name: "Finalissima", year: 2022, team: "Argentina" },
  { id: 41, name: "Trophée des Champions", year: 2022, team: "Paris Saint-Germain" },
  { id: 42, name: "FIFA World Cup", year: 2022, team: "Argentina" },
  { id: 43, name: "Ligue 1", year: 2023, team: "Paris Saint-Germain" },
  { id: 44, name: "Leagues Cup", year: 2023, team: "Inter Miami" },
  { id: 45, name: "Copa América", year: 2024, team: "Argentina" },
  { id: 46, name: "Supporters' Shield", year: 2024, team: "Inter Miami" },
  { id: 47, name: "MLS Cup", year: 2025, team: "Inter Miami" }
];
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
    {messiAwards.length > 0 ? <Awards awards={messiAwards} category="Awards" /> : null}
    {messiSilverware.length > 0 && <Awards awards={messiSilverware} category="Silverware" />}
    <Achivements cupName="World Cup" year = {2022} playerOfTheTourny={true} age={35} />
    <Achivements cupName="UCL" year = {2015} playerOfTheTourny={true} age={26} />
    <Achivements year={2023}/>
    <Student name='Neymar' age={32} isStudent={true} />

  </>
  );
}

export default App
