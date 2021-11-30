import React, {useState} from "react"
import ContextState from "./CreateContext"

const AppState = (props)=> {
    const [productData, setProductData] = useState([]);
    const [babyProductData, setBabyProductData] = useState({})

    return (
        <ContextState.Provider value={{ productData, setProductData, babyProductData, setBabyProductData}}>
            {props.children}
        </ContextState.Provider>
    )
};

export default AppState