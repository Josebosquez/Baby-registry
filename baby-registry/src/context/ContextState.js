import React, {useState} from "react"
import ContextState from "./CreateContext"

const AppState = (props)=> {
    const [productData, setProductData] = useState([]);
    const [babyProductData, setBabyProductData] = useState({})
    const [renderProductDetails, setRenderProductDetails] = useState(true)
    const [departmentProducts, setDepartmentProducts] = useState([])
    const [Value, setValue] = useState('')
    const [toggleCategory, setToggleCategory] = useState(false)

    return (
        <ContextState.Provider value={{ Value, setValue, departmentProducts, setDepartmentProducts, productData, setProductData, babyProductData, setBabyProductData, setRenderProductDetails, renderProductDetails, toggleCategory, setToggleCategory}}>
            {props.children}
        </ContextState.Provider>
    )
};

export default AppState