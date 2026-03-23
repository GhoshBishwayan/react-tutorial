import  React, {useState} from 'react';
import styles from './Comments.module.css'

function Comments(){ 
    const [name, setName] = useState("Guest");
    const [comment, setComment] = useState("");
    const [payment, setPayment] = useState("");
    
    function handleNameChange(event){
        setName(event.target.value);
    }
    function forMessi(event){
        setComment(event.target.value);
    }

    function commentValue(event){
        setPayment(event.target.value);
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

            <select value={payment} onChange={commentValue}>
                <option value="">Select an option</option>
                <option value="Visa">Visa</option>
                <option value="Mastercard">Mastercard</option>
                <option value="Bitcoin">Bitcoin</option>
            </select>
        </div>
    )
}

export default Comments