/*
const text = [123, 245,356]


for(let i=0; i<text.length; i++){
    const link = document.createElement('a');
}
*/

let container = document.querySelector('.container');
console.log(typeof(container))


const list = document.querySelector('.indexsingerlist')
const links = document.querySelectorAll('a');
//const linkSel = document.querySelector('a');
//link.classList.add('singer');

// const content = document.createTextNode('ずっとまよなかでいいのに。')

// console.log(`${list}`)
/*
const aList = []
const aNode = []
const rowListTemp = []
const indexsingerlistTemp = []
console.log(list.childElementCount);
const countList = list.childElementCount;
console.log(`countList ${countList}`)


console.log(container)
*/

/*
for(let i=0; i<countList; i++){
    aList.push(links[i].textContent);
    const a = document.createElement('a')
    const rowList = document.createElement('div');
    console.log(rowList);
    const indexsingerlistDiv = document.createElement('div');
    indexsingerlistDiv.setAttribute('class', 'indexsingerlist');
    console.log(indexsingerlistDiv)
    rowList.setAttribute('class', 'row');
    a.href = "https://google.com"
    a.textContent = aList[i]
    a.classList.add('singer')
    aNode.push(a)
    rowListTemp.push(rowList)
    indexsingerlistTemp.push(indexsingerlistDiv)
    console.log(rowListTemp)
    console.log(indexsingerlistTemp)
    console.log(aNode)
    for(let j=0; j<countList; j++){
       // indexsingerlistTemp[i].appendChild(aNode[j])
    }
    // rowListTemp[i].appendChild(indexsingerlistDiv)
    // container.appendChild(rowListTemp[i])
    console.log(typeof(rowListTemp[i]))

}

*/

function randomNum(){
    const randomInt = Math.floor(Math.random()*3); // 0~3 (int)
    return randomInt
}


function handleResize(){
    const bodyWidth = window.innerWidth-16;
    /*
    let temp = `<div class="row"><div class="ver"><div class="indexsingerlist"><a href="singer/aimyon.html" data-key="1" class="singer">あいみょん</a><a href="singer/yorushika.html" data-key="2" class="singer">ヨルシカ</a><a href="singer/ZUTOMAYO.html" data-key="3" class="singer">ずっとまよなかでいいのに。</a></div><div class="indexsingerlist"><a href="singer/aimyon.html" data-key="4" class="singer">あいみょん</a><a href="singer/yorushika.html" data-key="5" class="singer">ヨルシカ</a><a href="singer/ZUTOMAYO.html" data-key="6" class="singer">ずっとまよなかでいいのに。</a></div><div class="indexsingerlist"><a href="singer/aimyon.html" data-key="7" class="singer">あいみょん</a><a href="singer/yorushika.html" data-key="8" class="singer">ヨルシカ</a><a href="singer/ZUTOMAYO.html" data-key="9" class="singer">ずっとまよなかでいいのに。</a></div></div></div>`
    */
    console.log(`bodyWidth: ${ bodyWidth }`);


    let times = Math.floor(bodyWidth/30); //60: width
    console.log(`times: ${times}`)
    //container.innerHTML = temp
    const content = ['あいみょん', 'ヨルシカ', 'ずっとまよなかでいいのに。']
    let randomInt = 0
    
    
    for(let i=0; i<times; i++){
        randomInt = randomNum()
        const templateString = `<div class="row"><div class="ver"><div class="indexsingerlist"><a href="singer/aimyon.html" class="singer">${content[randomInt]}</a><a href="singer/yorushika.html" class="singer">ヨルシカ</a><a href="singer/ZUTOMAYO.html" class="singer">${content[randomInt]}</a></div><div class="indexsingerlist"><a href="singer/aimyon.html" class="singer">${content[randomInt]}</a><a href="singer/yorushika.html" class="singer">${content[randomInt]}</a><a href="singer/ZUTOMAYO.html" class="singer">${content[randomInt]}</a></div><div class="indexsingerlist"><a href="singer/aimyon.html"  class="singer">${content[randomInt]}</a><a href="singer/yorushika.html" class="singer">${content[randomInt]}</a><a href="singer/ZUTOMAYO.html" class="singer">${content[randomInt]}</a></div></div></div>`
        container.innerHTML += templateString          
    }
}
    


window.addEventListener('load', () => {
    handleResize()
})

window.addEventListener('resize', () => {
    handleResize()
})

