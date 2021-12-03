import React, { useEffect, useContext } from 'react'
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import { fetchCategoryItems } from '../fakeDataBase';
import CreateContext from "../context/CreateContext"

const Category = () => {
    const { Value, setValue, departmentProducts, setDepartmentProducts, babyProductData } = useContext(CreateContext)

    useEffect(() => {
        fetchCategoryItems(Value)
            .then(item => { setDepartmentProducts(item) })
    }, [Value])

    const OnClickFunc = (value) => {
        if (value === "Clothing") {
            console.log("value that i typed:", value);
            setValue(value)
        }

        if (value === "Health and Safety") {
            console.log("value that i typed:", value);
            setValue(value)
        }
        if (value === "Car seats") {
            console.log("value that i typed:", value);
            setValue(value)
        }
        if (value === "Diapering") {
            console.log("value that i typed:", value);
            setValue(value)
        }
    }

    console.log(departmentProducts);
    return (
        <Box sx={{
            flexGrow: 1
        }}>
            <Toolbar sx={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', alignContent: 'center', color: "black" }}>
                <IconButton
                    sx={{ fontSize: '10px', display: 'flex', flexDirection: 'column' }}
                    value="Clothing"
                    onClick={(e) => OnClickFunc(e.target.value)}>
                    <img src="https://img.icons8.com/external-vitaliy-gorbachev-lineal-vitaly-gorbachev/30/000000/external-clothes-summer-vitaliy-gorbachev-lineal-vitaly-gorbachev.png" alt="" />
                    Clothing
                </IconButton>
                <IconButton
                    sx={{ fontSize: '10px', display: 'flex', flexDirection: 'column' }}
                    value="Health and Safety"
                    onClick={(e) => OnClickFunc(e.target.value)}>
                    <img src="https://img.icons8.com/external-inipagistudio-mixed-inipagistudio/30/000000/external-health-immune-system-inipagistudio-mixed-inipagistudio.png" alt="" />
                    Health and Safety
                </IconButton>
                <IconButton
                    sx={{ fontSize: '10px', display: 'flex', flexDirection: 'column' }}
                    value="Diapering"
                    onClick={(e) => OnClickFunc(e.target.value)}>
                    <img src="https://img.icons8.com/external-becris-lineal-becris/30/000000/external-diaper-baby-becris-lineal-becris.png" alt="" />
                    Diapering
                </IconButton>
                <IconButton
                    sx={{ fontSize: '10px', display: 'flex', flexDirection: 'column' }}
                    value="Car seats"
                    onClick={(e) => OnClickFunc(e.target.value)}>
                    <img src="https://img.icons8.com/fluency-systems-regular/30/000000/baby-car-seat.png" alt="" />
                    Car seats
                </IconButton>
            </Toolbar>
            <Toolbar>
                
            </Toolbar>


        </Box>
    )
}

export default Category