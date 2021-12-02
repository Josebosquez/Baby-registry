const productList = [
    {
        id: '1',
        name: 'baby shoes',
        price: "$5",
        image: 'https://ae01.alicdn.com/kf/Hef7180c1e0484854a3e4ac44a8ac4510i/Baby-Boy-Shoes-New-Classic-Canvas-Newborn-Baby-shoes-For-Boy-Prewalker-First-Walkers-child-kids.jpg',
        description: "A pair of baby shoes",
        age: '0 - 3 months',
        productDimensions: "4.33 x 3.15 x 1.57 inches; 2.82 Ounces",
        department: "Clothing",
        reviews: 25,
    },{
        id: '2',
        name: 'diapers',
        price: "$20",
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbZ8RX_gxA2GAhxzGIdkuUEs0rQKGwsL_VlA&usqp=CAU',
        description: "A pack of diapers",
        reviews: 301,
        age: '0 - 3 months',
        productDimensions: "13 x 9.69 x 11.63 inches; 4.1 Pounds",
        department: "Diapering",
        reviews: 25,
    },{
        id: '3',
        name: 'bath tub',
        price: "$15",
        image: 'https://www.contoursbaby.com/wp-content/uploads/sites/5/2021/05/Full-Product-No-Child-1-768x768.jpg',
        description: "A small, light weight bath tub for your little one",
        reviews: 503,
        age: '0 - 12 months',
        productDimensions: "17.75 x 8.66 x 30.5 inches; 2.29 Pounds",
        department: "Health and Safety",
        reviews: 12986,
    },{
        id: '4',
        name: 'onesies',
        price: "$5",
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYdm9f_jk8ZHxsIQ8N-9nZWd5qTUxrW2nmSQ&usqp=CAU',
        description: "One small onesie, perfect for styling your baby.",
        reviews: 88,
        age: '0 - 18 months',
        productDimensions: "17.75 x 8.66 x 30.5 inches; 2.29 Pounds",
        department: "Clothing",
        reviews: 12986,
    },{
        id: '6',
        name: 'car seat',
        price: "$100",
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-ezGJ4f2C8io1uyT-Z0gUkP6k65kMvPu9iw&usqp=CAU',
        description: "A safe and baby approved car seat from ages 0 - 2",
        reviews: 67,
        age: '0 - 6 years',
        productDimensions: "19.2 x 22.1 x 25.2 inches; 19.25 Pounds",
        department: "Car seats",
        reviews: 12986,
    }
]

export const fetchProducts = () => new Promise((resolve, reject) => {
    console.log('fetching Data from imaginary products database')
    setTimeout(() => {
        try {
            // fetchingData from imaginary database
            resolve(productList)
        } catch (error) {
            reject(error);
        }
    }, 1000);
});

// create a func that grabs the id of the item that i click on.

export const renderBabyProductItem = (id) => new Promise((resolve, reject) => {
    console.log('fetching data for baby product page')

    const itemFound = productList.find(productId => {
        if (id === productId.id){
            return true;
        } return false
    })

    setTimeout(() => {
        try {
            if (itemFound){
                return resolve(itemFound)
            }
            throw new Error('Something went wrong.')
        } catch (error) {
            reject(error);
        }
    }, 1000);
});

// create a func that grabs the department when i click on categories.
export const fetchCategoryItems = (department) => new Promise((resolve, reject) => {
    console.log('fetching data for baby product page')

    const itemFound = productList.find(productDepartment => {
        if (department === productDepartment.department) {
            return true;
        } return false
    })

    setTimeout(() => {
        try {
            if (itemFound) {
                return resolve(itemFound)
            }
            throw new Error('Something went wrong.')
        } catch (error) {
            reject(error);
        }
    }, 1000);
});