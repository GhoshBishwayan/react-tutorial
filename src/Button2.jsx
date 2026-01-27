//inline css

function Button2(){

    const styles = {
        backgroundColor: "hsl(0, 0.00%, 40%)",
        color: "aliceblue",
        padding: "10px 20px",
        borderRadius: "5px",
        border: "none",
        cursor: "pointer",
        display: "block",
        margin: "10px",
    }
    
    return(<button style={styles}>Click Me</button>)
}

export default Button2