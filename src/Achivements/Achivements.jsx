import styles from "./Achivements.module.css"
import PropTypes from 'prop-types'


function Achivements(props = {
    cupName: "Silverware",
    year: 0,
    playerOfTheTourny: false,
    age: 0
}
    ){

    return(
        <>
            <div className={styles.tourny}>
                <p>Torunament Name: {props.cupName}</p>
                <p>Year : {props.year}</p>
                <p>Highlight:{props.playerOfTheTourny ? "MVP" : "N/A"} </p>
                <p>Age: {props.age}</p>
            </div>        
        </>
    );
}
Achivements.propTypes = {
    cupName: PropTypes.string,
    year: PropTypes.number,
    playerOfTheTourny: PropTypes.bool,
    age: PropTypes.number
}


// PRE REACT 18 DEFAULTPROPS
// Achivements.defaultProps = {
//     cupName: "Silverware",
//     year: 0,
//     playerOfTheTourny: false,
//     age: 0
// }
export default Achivements