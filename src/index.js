console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const imgContainer = document.querySelector("#dog_image_container")
const image = document.createElement("img")

fetch(imgUrl)
 .then(res => res.json())
 .then(data => {
    data.forEach(element => {
        image.append(element)
      imgContainer.append(image)
    });
 })