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

    return (
        <ContextState.Provider value={{ user, setUser, valueOfItemAdded, setValueOfItemAdded, Value, setValue, departmentProducts, setDepartmentProducts, productData, setProductData, babyProductData, setBabyProductData, setRenderProductDetails, renderProductDetails, toggleCategory, setToggleCategory}}>
            {props.children}
        </ContextState.Provider>
    )
};

export default AppState