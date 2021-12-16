import { useContext, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import CreateContext from "../context/CreateContext"

function PrivateRoute({ children }) {
    const { user, isAuth} = useContext(CreateContext)
    const navigate = useNavigate();
    useEffect(() => {
        if(!isAuth){
            navigate('/login')
        }
    }, [isAuth])
    
        let getAuthFromLocalStorage;
        let getUserFromLocalStorage;
    if (!isAuth) {
        navigate('/login')
        getAuthFromLocalStorage = isAuth ? isAuth : JSON.parse(window.localStorage.getItem('isAuth'));
        getUserFromLocalStorage = user ? user : JSON.parse(window.localStorage.getItem('user'));
    }

    if (isAuth && user) {
        window.localStorage.setItem('isAuth', JSON.stringify(isAuth))
        window.localStorage.setItem('user', JSON.stringify(user))
    }


    return children;
}

export default PrivateRoute;