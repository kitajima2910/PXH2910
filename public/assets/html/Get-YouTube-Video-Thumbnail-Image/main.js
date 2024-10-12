const btnGet = document.querySelector('#get');
const url = document.querySelector('#url');
const imageSddefault = document.querySelector('#image-sddefault');
const imageHqdefault = document.querySelector('#image-hqdefault');
const imageMqdefault = document.querySelector('#image-mqdefault');
const imageMaxresdefault = document.querySelector('#image-maxresdefault');

btnGet.addEventListener('click', () => {

    const urlValue = url.value;
    const urlID = urlValue.split('v=')[1];

    imageMaxresdefault.innerHTML = '';
    const maxresdefault = document.createElement('img');
    imageMaxresdefault.appendChild(maxresdefault);
    maxresdefault.src = `https://i3.ytimg.com/vi/${urlID}/maxresdefault.jpg`;

    imageHqdefault.innerHTML = '';
    const hqdefault = document.createElement('img');
    imageHqdefault.appendChild(hqdefault);
    hqdefault.src = `https://i3.ytimg.com/vi/${urlID}/hqdefault.jpg`;

    imageMqdefault.innerHTML = '';
    const mqdefault = document.createElement('img');
    imageMqdefault.appendChild(mqdefault);
    mqdefault.src = `https://i3.ytimg.com/vi/${urlID}/mqdefault.jpg`;

    imageSddefault.innerHTML = '';
    const sddefault = document.createElement('img');
    imageSddefault.appendChild(sddefault);
    sddefault.src = `https://i3.ytimg.com/vi/${urlID}/sddefault.jpg`;
});
