function changeImage() {
    const imageSelector = document.getElementById("imageSelector").value;
    const imageElement = document.getElementById("displayedImage");

    switch (imageSelector) {
        case "utsg":
            imageElement.src = "utsg.png";
            break;
        case 'utm':

            break;
        case 'utsc':

            break;
        case 'uw':

            break;
        case 'qu':

            break;
        case 'mac':

            break;
        case 'wu':

            break;
        case 'tmu':

            break;
        case 'ott':

            break;
        case 'wlu':

            break;
        case 'yu':

            break;
        default:

            break;
    }
}