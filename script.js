const grid = document.querySelector(".grid-container")


let gridDimensions = prompt('Choose the dimensions of a grid');

for (let item = 0; item < Math.pow(gridDimensions,2); item++) {
    const newGridItem = document.createElement('div')

    newGridItem.classList.add("grid-item")

    grid.appendChild(newGridItem)
    
}

grid.style["grid-template-columns"] = `repeat(${gridDimensions}, auto)`;

const gridItems = document.querySelectorAll(".grid-item")

gridItems.forEach(function(gridItem){
    gridItem.addEventListener('mouseover', function(e){
        e.target.style.background = 'blue';
    });
});



const resetButton = document.querySelector("#reset-button");
resetButton.addEventListener('click', ()=>{
    gridItems.forEach(gridItem => {
        gridItem.style.background = 'white';
    });
})

