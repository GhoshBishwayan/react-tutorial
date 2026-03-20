import styles from "./Awards.module.css"
import PropTypes from 'prop-types'

function Awards(props){

    const category = props.category;
    const awardList = props.awards;

    // awards.sort((a, b)=> a.name.localeCompare(b.name)); //Alphabetical sort
    // awards.sort((a, b)=> b.name.localeCompare(a.name)); //Rev Alphabetical sort
    // awards.sort((a, b)=> a.year.localeCompare(b.year)); //Numerical sort
    // awards.sort((a, b)=> b.year.localeCompare(a.year)); //Rev Numerical sort
    
    

    //filter object 
    const latestAwards = awardList.filter(award => award.year > 2022);

    const listItems = latestAwards.map(latestAward => <li key={latestAward.id}>
                                            {latestAward.name}: &nbsp; 
                                            <b>{latestAward.year}</b> </li>
                                    );
        // make sure key is unique
    return(<>
            <div className={styles.listItems}>
                <h3>{category}</h3>
                <ul>{listItems}</ul>
            </div>
        </>);


}

Awards.propTypes = {
    category: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({id: PropTypes.number,
                                             name:PropTypes.string,
                                             year: PropTypes.number,

    }))
}

Awards.defaultProps = {
    category : "Category",
    awardList : [],
}
export default Awards