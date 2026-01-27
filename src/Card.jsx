import messi from './assets/Messi.jpg'

function Card(){
    return(
        <div className="card">
            <img className="card-image" src={messi} alt="Goat" />
            <h2 className='card-title'>Messi</h2>
            <p className='card-description'>The Greates Footballer Ever</p>
        </div>

    );

}

export default Card