import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faQuoteLeft} from '@fortawesome/free-solid-svg-icons';
export default function QuoteSection (){
    return(
        <div className="section qoute">
            <p className="qoute-text"><FontAwesomeIcon icon={faQuoteLeft}/>Food is everything we are. It's an extension of nationalist feeling, ethnic feeling, your personal history, your province, your region, your tribe, your grandma. It's inseparable from those form the get-go.</p>
            <p className="qoute-auther">- Anthony Bourdain</p>
        </div>
    )

}