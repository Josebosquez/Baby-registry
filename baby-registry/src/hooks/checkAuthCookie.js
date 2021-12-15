import Cookie from "js-cookie"
import jwtDecode from 'jwt-decode'

function CheckAuthCookie() {
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
            console.log('cookie: ', cookie)
            const jwtDecodeToken = jwtDecode(cookie)
        }
    }

    return { checkIfCookieExists, logUserIn }
}

export default CheckAuthCookie