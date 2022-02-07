
console.log(document)

const blogDetails = document.getElementsByTagName('h2');
for(let h2 of blogDetails){
    console.log(h2.innerText)
}

let peraGraph = document.getElementsByTagName('p');
for (let pera of peraGraph){
    console.log(pera.innerText)
}

let result = document.getElementById('article').style.color = 'green'

function tryDom(request){
    let a = 10
    let b = 10
    if(a == b){
        for(let i = 0; i <= 50; i++){
            const third = document.getElementById('second-art')
            third.style.fontWeight = 'bold';
            third.innerText = 'this is our second peragraph article made by jaascript DOM'
            third.style.backgroundColor = 'crimson'
            third.style.color = 'white'
            third.style.padding = '20px'
            third.style.textTransform = 'capitalize'
        }
    }
}

tryDom(0)


let li = document.createElement('li');
li.innerText = 'Blog-05';
let ul = document.getElementById('blogs')
ul.appendChild(li)

document.getElementsByTagName