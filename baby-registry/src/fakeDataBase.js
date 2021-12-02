const productList = [
    {
        id: '1',
        name: 'baby shoes',
        price: 5,
        image: 'https://ae01.alicdn.com/kf/Hef7180c1e0484854a3e4ac44a8ac4510i/Baby-Boy-Shoes-New-Classic-Canvas-Newborn-Baby-shoes-For-Boy-Prewalker-First-Walkers-child-kids.jpg',
        description: "A pair of baby shoes",
        reviews: 25,
        size: 'NB, 0-3, 3-6, 6-9, 1'
    },
    {
        id: '2',
        name: 'diapers',
        price: 20,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbZ8RX_gxA2GAhxzGIdkuUEs0rQKGwsL_VlA&usqp=CAU',
        description: "A pack of diapers",
        reviews: 301,
        size: 'NB, 0-3, 3-6, 6-9, 1',
    },
    {
        id: '3',
        name: 'bath tub',
        price: 15,
        image: 'https://www.contoursbaby.com/wp-content/uploads/sites/5/2021/05/Full-Product-No-Child-1-768x768.jpg',
        description: "A small, light weight bath tub for your little one",
        reviews: 503,
        size: '3 Feet'
    }
    ,
    {
        id: '4',
        name: 'onesies',
        price: 5,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYdm9f_jk8ZHxsIQ8N-9nZWd5qTUxrW2nmSQ&usqp=CAU',
        description: "One small onesie, perfect for styling your baby.",
        reviews: 88,
        size: 'NB, 0-3, 3-6, 6-9, 1'
    }
    ,
    {
        id: '6',
        name: 'car seat',
        price: 100,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-ezGJ4f2C8io1uyT-Z0gUkP6k65kMvPu9iw&usqp=CAU',
        description: "A safe and baby approved car seat from ages 0 - 2",
        reviews: 67,
        size: '1-2 years old'
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
    console.log('fetching for the baby product page')
    // get a copy of the arr

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
            throw new Error('nah fam')
        } catch (error) {
            reject(error);
        }
    }, 1000);
});
