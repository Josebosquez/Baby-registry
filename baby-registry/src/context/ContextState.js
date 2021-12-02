import React, {useState} from "react"
import ContextState from "./CreateContext"

const AppState = (props)=> {
    const [productData, setProductData] = useState([]);
    const [babyProductData, setBabyProductData] = useState({})
    const [renderProductDetails, setRenderProductDetails] = useState(true)

    return (
        <ContextState.Provider value={{ productData, setProductData, babyProductData, setBabyProductData, setRenderProductDetails, renderProductDetails}}>
            {props.children}
        </ContextState.Provider>
    )
};

export default AppState