const reviews = [
    {
      id: 1,
      name: 'susan smith',
      job: 'web developer',
      img: 'https://www.course-api.com/images/people/person-1.jpeg',
      text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
      id: 2,
      name: 'anna johnson',
      job: 'web designer',
      img: 'https://www.course-api.com/images/people/person-2.jpeg',
      text: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
    },
    {
      id: 3,
      name: 'peter jones',
      job: 'intern',
      img: 'https://www.course-api.com/images/people/person-4.jpeg',
      text: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
    },
    {
      id: 4,
      name: 'bill anderson',
      job: 'the boss',
      img: 'https://www.course-api.com/images/people/person-3.jpeg',
      text: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
    },
]

const img = document.querySelector('.img-person')
const namePerson = document.querySelector('.name')
const jobName = document.querySelector('.job-name')
const infoPerson = document.querySelector('.info-person')
const buttonLeft = document.querySelector('.button-left')
const buttonRight = document.querySelector('.button-right')
const randomBtn = document.querySelector('.button-surprise-me')
let count = 0

const dataPerson = (num) => {
    img.src = reviews[num].img
    img.alt = reviews[num].name
    namePerson.innerHTML = convertirPrimeraLetraMayuscula(reviews[num].name)
    jobName.innerHTML = convertirAMayusculas(reviews[num].job)
    infoPerson.innerHTML = reviews[num].text
}

const numeroAleatorio = (min, max) => {
    var numeroAleatorio = Math.floor(Math.random() * (max - min) + min)
    while (numeroAleatorio == count){
        numeroAleatorio = Math.floor(Math.random() * (max - min) + min)
    }

    return numeroAleatorio
    
}

function convertirPrimeraLetraMayuscula(string) {
    var palabras = string.split(" ");
    var resultado = [];

    for (var i = 0; i < palabras.length; i++) {
        var palabra = palabras[i];
        var primeraLetra = palabra.charAt(0).toUpperCase();
        var restoPalabra = palabra.slice(1).toLowerCase();
        var palabraEnMayusculas = primeraLetra + restoPalabra;
        resultado.push(palabraEnMayusculas);
    }

    return resultado.join(" ");
}

function convertirAMayusculas(string) {
    var palabras = string.split(" "); // Dividir el string en un array de palabras
    var resultado = [];
    
    for (var i = 0; i < palabras.length; i++) {
      var palabra = palabras[i];
      var palabraEnMayusculas = palabra.toUpperCase();
      resultado.push(palabraEnMayusculas);
    }
    
    return resultado.join(" "); // Unir las palabras en un nuevo string
  }

dataPerson(count)

buttonRight.addEventListener('click', () => {
    if (count == reviews.length-1) {
        count = 0
        dataPerson(count)
    }else{
        count++
        dataPerson(count)
    }
})

buttonLeft.addEventListener('click', () => {
    if (count == 0) {
        count = reviews.length-1
        dataPerson(count)
    }else{
        count--
        dataPerson(count)
    }
})

randomBtn.addEventListener('click', () => {
    count = numeroAleatorio(0, reviews.length-1)
    dataPerson(count)
})

