function Student(props){
    return(
        <div>
            <p>Student name is {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Still a Student? {props.isStudent ? "Yes" : "No"}</p>
        </div>
    );
}

export default Student