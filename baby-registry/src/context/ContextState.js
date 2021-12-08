import React, {useState} from "react"
import ContextState from "./CreateContext"

const AppState = (props)=> {
    const [productData, setProductData] = useState([]);
    const [babyProductData, setBabyProductData] = useState({})
    const [renderProductDetails, setRenderProductDetails] = useState(true)
    const [departmentProducts, setDepartmentProducts] = useState([])
    const [Value, setValue] = useState('')
    const [toggleCategory, setToggleCategory] = useState(false)

    // quantity of cart 
    const [valueOfItemAdded, setValueOfItemAdded] = useState('')

    //user 
    const [user, setUser] = useState(null)


    // create user
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [spouseFirstName, setSpouseFirstName] = useState('')
    const [spouseLastName, setSpouseLastName] = useState('')
    const [gender, setGender] = useState('')
    const [dueDate, setDueDate] = useState('')

    return (
        <ContextState.Provider value={{ dueDate, setDueDate, gender, setGender, spouseLastName, setSpouseLastName, spouseFirstName, setSpouseFirstName,lastName, setLastName,firstName, setFirstName,password, setPassword, email, setEmail, user, setUser, valueOfItemAdded, setValueOfItemAdded, Value, setValue, departmentProducts, setDepartmentProducts, productData, setProductData, babyProductData, setBabyProductData, setRenderProductDetails, renderProductDetails, toggleCategory, setToggleCategory}}>
            {props.children}
        </ContextState.Provider>
    )
};

export default AppState