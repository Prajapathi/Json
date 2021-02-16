const start = async () => {
    const response = await fetch("https://dog.ceo/api/breeds/list/all");
    const data = await response.json();
    createBreedList(data.message);
};

start()

const createBreedList = (breedList) => {
    document.querySelector('.breed').innerHTML = `
        <select class="select" onChange="loadByBreed(this.value)" >
                <option disabled selected >Choose a Dog Breed</option>
                ${Object.keys(breedList).map((breed) => {
        return `<option>${breed}</option>`
    }).join('')}
            </select>
    `
}

const loadByBreed = async (breed) => {
    const response = await fetch(`https://dog.ceo/api/breed/${breed}/images`);
    const data = await response.json();
    CreateSlides(data.message);
}

const CreateSlides = (imgList) => {
    const slide = document.querySelector('.slide');
    let index = 0;
    setInterval(() => {
        if (index === imgList.length) {
            index = 0;
        }
        else {
            slide.style.backgroundImage = `url(${imgList[index]})`;
            index += 1;
        }
    }, 3500)
};