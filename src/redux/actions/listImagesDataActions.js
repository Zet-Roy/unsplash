export const GET_DATA_IMAGES = 'GET_DATA_IMAGES'

function getDataPhoto(data) {
    return {
        type: GET_DATA_IMAGES,
        data
    };
}

export const getListImagesDataActions = () => {
    return (dispatch) => {

        fetch('https://api.unsplash.com/photos?client_id=896d4f52c589547b2134bd75ed48742db637fa51810b49b607e37e46ab2c0043').then(function (response) {
            return response.json()
        }).then(function (data) {
            let arr = [];
            data.forEach(function (item) {
                arr.push({
                    id: item.id,
                    name: item.user.name,
                    urlImageSmall: item.urls.thumb,
                    urlImageBig: item.urls.full
                })
            });

            // console.warn(arr);
            dispatch(getDataPhoto(arr));
        }).catch(function (error) {
            console.log('Error: ' + error.message)
        });

        // dispatch(getDataPhoto([
        //     { id: 1, name: "name 1" },
        //     { id: 2, name: "name 2" },
        //     { id: 3, name: "name 3" },
        //     { id: 4, name: "name 4" },
        //     { id: 5, name: "name 5" }
        // ]))
        // dispatch(getDataPhoto({ id: 2 }))
        // let myHeaders = new Headers();
        // myHeaders.append("Authorization", "Client-ID 378b4ffbc0583b4d64d398c50f72fea73e84844000fc1d94f7998debaa5160bc");

        // fetch("https://api.unsplash.com/photos",
        //     {
        //         method: 'GET',
        //         headers: myHeaders
        //     }
        // ).then((res) => {
        //     return res.json();
        // }).then((data) => {
        //     dispatch({
        //         type: GET_DATA,
        //         payload: data
        //     })
        //     // console.warn("data: ", data);
        // }).catch((err) => {
        //     console.warn("Error: ", err);
        // });


    }
}