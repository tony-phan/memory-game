const makeDogObject = (url) => {
    return {
        url: url,
        clicked: false
    }
}

const getDogData = async (setDogImages) => {
    try {
        const response = await fetch('https://dog.ceo/api/breeds/image/random/9');
        const data = await response.json();

        const dogObjects = [];

        for(let i = 0; i < data.message.length; ++i) {
            dogObjects.push(makeDogObject(data.message[i]));
        }
        setDogImages(dogObjects);

    } catch (error) {
        console.log('Dog fetch failed');
        console.log(error);
        setDogImages([]);
    }
}

function getDogImages(setDogImages) {
    getDogData(setDogImages);
}

export { getDogImages }