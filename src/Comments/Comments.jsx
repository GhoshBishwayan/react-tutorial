import  React, {useState} from 'react';
import styles from './Comments.module.css'

function Comments(){ 
    const [name, setName] = useState("Guest");
    const [comment, setComment] = useState("");
    const [payment, setPayment] = useState("");
    const [amount, setAmount] = useState("");
    
    function handleNameChange(event){
        setName(event.target.value);
    }
    function forMessi(event){
        setComment(event.target.value);
    }

    function commentValue(event){
        setPayment(event.target.value);
    }
    function amountValue(event){
        setAmount(event.target.value);
    }

    return( 
        <div>
            <input value={name} onChange={handleNameChange} />
            <textarea value={comment} onChange={forMessi} placeholder='Leave a comment for Messi'/>
            <div className={styles.commentCard}>
                <p className={styles.userName}>Name: {name}</p>
                <p className={styles.userComment}>Comment: {comment}</p>
            </div>
                <p className={styles.userComment}>Payment: {payment}</p>
                <p className={styles.userComment}>Donation amount seleted: ${amount}</p>

            <select value={payment} onChange={commentValue}>
                <option value="">Select an option</option>
                <option value="Visa">Visa</option>
                <option value="Mastercard">Mastercard</option>
                <option value="Bitcoin">Bitcoin</option>
            </select>

            <label>
                <input type="radio" value="10"
                    checked={amount === "10"}
                    onChange={amountValue}/>
                $10
            </label>
            <label>
                <input type="radio" value="15"
                    checked={amount === "15"}
                    onChange={amountValue}/>
                $15
            </label>
            <label>
                <input type="radio" value="20"
                    checked={amount === "20"}
                    onChange={amountValue}/>
                $20
            </label>

        </div>
    )
}

export default Comments