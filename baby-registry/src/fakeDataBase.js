const productList = [
    {
        id: '1',
        name: 'baby shoes',
        price: 5,
        image: 'https://ae01.alicdn.com/kf/Hef7180c1e0484854a3e4ac44a8ac4510i/Baby-Boy-Shoes-New-Classic-Canvas-Newborn-Baby-shoes-For-Boy-Prewalker-First-Walkers-child-kids.jpg',

    },
    {
        id: '2',
        name: 'diapers',
        price: 5,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbZ8RX_gxA2GAhxzGIdkuUEs0rQKGwsL_VlA&usqp=CAU',
    },
    {
        id: '3',
        name: 'bath tub',
        price: 5,
        image: 'https://www.contoursbaby.com/wp-content/uploads/sites/5/2021/05/Full-Product-No-Child-1-768x768.jpg',
    }
    ,
    {
        id: '4',
        name: 'onesies',
        price: 5,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYdm9f_jk8ZHxsIQ8N-9nZWd5qTUxrW2nmSQ&usqp=CAU',
    }
    ,
    {
        id: '6',
        name: 'car seat',
        price: 5,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-ezGJ4f2C8io1uyT-Z0gUkP6k65kMvPu9iw&usqp=CAU',
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