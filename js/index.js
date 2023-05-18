//remember contents is 0-indexed which means that contents[0] is the content of the first day of the month
var contents = new Array(31);

for (var i = 0; i < 31; i++){
    contents[i] = `
        <h2>Content of the ${i + 1}th day</h2>
        <p>Description of the content</p>
        <img src="" alt="image"> <br>
        <a href="test.html">Read more<a/>
    `;
}

const container = document.querySelector('.container');

function closeBox(){
    container.className = "container de-active";

    setTimeout(() => {
        container.style.display = 'none';
    }, 2000)
}

function openBox(contentIndex){
    container.style.display = '';
    container.className = "container active";
    container.querySelector('.box').innerHTML = contents[contentIndex];
}
