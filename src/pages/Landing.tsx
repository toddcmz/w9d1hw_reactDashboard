import pic1 from '../static/read5.png'
import pic2 from '../static/read2.png'
import pic3 from '../static/read3.png'
import pic4 from '../static/read4.png'


export default function Landing(){

    return(
        <>
            <div className="landingImagesContainer">
                <h2>"They who have finished a book have much to say."</h2>
                <div className="imagesContainer flexMeRow">
                    <img src={pic1} alt="pic1" className="landingImage" />
                    <img src={pic2} alt="pic2" className="landingImage" />
                </div>
                <div className="imagesContainer flexMeRow">
                    <img src={pic3} alt="pic3" className="landingImage" />
                    <img src={pic4} alt="pic4" className="landingImage" />
                </div>
            </div>
        </>
    )

}