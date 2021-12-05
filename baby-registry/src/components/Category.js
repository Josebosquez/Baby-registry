import React, { useEffect, useContext } from 'react'
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import { fetchCategoryItems } from '../fakeDataBase';
import CreateContext from "../context/CreateContext"
import { Link } from 'react-router-dom';

const Category = () => {
    const { Value, setValue, departmentProducts, setDepartmentProducts, babyProductData, toggleCategory, setToggleCategory } = useContext(CreateContext)

    useEffect(() => {
        fetchCategoryItems(Value)
            .then(item => { 
                setDepartmentProducts(item)
                
            })
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

        setToggleCategory(!toggleCategory)
    }

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
            {!toggleCategory 
            ? "" 
            : !departmentProducts 
                ? "hello you who" 
                : <Toolbar sx={{ width: '100%', display: 'flex', justifyContent: 'space-around', alignItems: 'center', alignContent: 'center', color: "black" }}>
                {departmentProducts.map(item => {
                    return <Box key={item.id} value={item.id} >
                        <Link to={`/product/${item.id}`}>
                            <img src={item.image} alt=""
                                style={{ width: "75px" }}
                                value={item}
                            />
                        </Link>
                        <br />
                    </Box>
                })}
            </Toolbar> }
            {/* { departmentProducts ? 
                <Toolbar sx={{ width: '100%', display: 'flex', justifyContent: 'space-around', alignItems: 'center', alignContent: 'center', color: "black" }}>
                {departmentProducts.map(item => {
                    return <Box key={item.id} value = {item.id} >
                        <Link to={`/product/${item.id}`}>
                            <img src={item.image} alt="" 
                            style={{ width: "75px" }} 
                            value={item}
                            />
                        </Link>
                        <br/>
                    </Box>
                })}
            </Toolbar> :
            ""
            } */}

        </Box>
    )
}

export default Category