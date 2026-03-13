//inline css
function Button2(props){

    const styles = {
        backgroundColor: "hsl(213, 100%, 18%)",
        color: "aliceblue",
        padding: "10px 20px",
        borderRadius: "5px",
        border: "none",
        cursor: "pointer",
        display: "block",
        margin: "10px",
        textAlign: "center",
    }

    
    return( 
        <button onClick={props.onClick} className={styles}>
            Change Image
        </button>
    )
}

export default Button2