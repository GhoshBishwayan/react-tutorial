function Awards(){
    const awards = [{name: 'Ballon dor', year: 2023}, 
        {name: 'Golden boot', year: 2019}];


    // awards.sort((a, b)=> a.name.localeCompare(b.name)); //Alphabetical sort
    // awards.sort((a, b)=> b.name.localeCompare(a.name)); //Rev Alphabetical sort
    // awards.sort((a, b)=> a.year.localeCompare(b.year)); //Numerical sort
    // awards.sort((a, b)=> b.year.localeCompare(a.year)); //Rev Numerical sort
    
    const listItems = awards.map(award => <li key={award.name}>{award.name}: &nbsp; <b>{award.year}</b> </li>);
        // make sure key is unique
    return(<ul>{listItems}</ul>);
}

export default Awards