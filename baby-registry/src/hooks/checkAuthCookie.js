import {useContext} from "react"
import Cookie from "js-cookie"
import jwtDecode from 'jwt-decode'
import { useNavigate, Link } from "react-router-dom"
import CreateContext from "../context/CreateContext"

function CheckAuthCookie() {
    const { user, setUser } = useContext(CreateContext)

    function checkIfCookieExists() {
        const cookie = Cookie.get('jwt_cookie')

        if (cookie) {
            return true;
        } else {
            return null;
        }
    }
    
    function logUserIn() {
        let checkCookieExist = checkIfCookieExists();

        if (checkCookieExist) {
            const cookie = Cookie.get('jwt_cookie')

            // const jwtDecodeToken = jwtDecode(cookie)
            // console.log(jwtDecodeToken)
        } 
    }

    return { checkIfCookieExists, logUserIn }
}

export default CheckAuthCookie