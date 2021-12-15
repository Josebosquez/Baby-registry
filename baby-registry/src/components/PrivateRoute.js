import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import CreateContext from "../context/CreateContext"

function PrivateRoute({ children }) {
    const { user, isAuth} = useContext(CreateContext)
    const navigate = useNavigate();

    if (isAuth && user) {
        window.localStorage.setItem('isAuth', JSON.stringify(isAuth))
        window.localStorage.setItem('user', JSON.stringify(user))
    }

    let getAuthFromLocalStorage;
    let getUserFromLocalStorage;
    console.log(getUserFromLocalStorage)

    if (!isAuth) {
        getAuthFromLocalStorage = isAuth ? isAuth : JSON.parse(window.localStorage.getItem('isAuth'));
        
        getUserFromLocalStorage = user ? user : JSON.parse(window.localStorage.getItem('user'));

        console.log(getAuthFromLocalStorage)
        navigate('/login')
        console.log('routing')
    }

    return children;
}

export default PrivateRoute;