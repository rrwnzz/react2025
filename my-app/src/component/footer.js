import {Link} from 'react-router-dom'
import '../css/footer.css'
export default function Footer(){
    return(
        <div id='footer'>
            <h1>Footer</h1>
           <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                 <li>
                    <Link to='/about'>About</Link>
                </li>
                <li>Contact</li>
            </ul>
            <p id='copy'>copy right @ 2025</p>
        </div>
    )
}

    