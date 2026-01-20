import InspirationContent from "./component/InspirationContent"
import Sample from "./component/Sample"
import Slider from "./component/Slider"

const Inspiration = () => {
    return(
        <div className="inspiration">
            <InspirationContent/>
            <Sample/>
            <Slider/>
        </div>
    )
}
export default Inspiration