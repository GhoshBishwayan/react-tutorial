import messi from './assets/Messi.jpg'
import messi_boot_kissing from './assets/messi_boot_kissing.jpg'
import Button2 from './Button2.jsx'


function Card(){

    const changeImage = () => {
        const img = document.getElementById("playerImage");
        img.src = messi_boot_kissing;
    }

    return(
        <div className="card">
            <img id='playerImage' className="card-image" src={messi} alt="Goat" width="300" />
            <h2 className='card-title'>Messi</h2>
            <p className='card-description'>The Greatest Footballer Ever</p>
            <Button2 onClick = {changeImage} />

        </div>

    );

}

export default Card