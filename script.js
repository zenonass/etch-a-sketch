const grid = document.querySelector(".grid-container");
const steplist = document.querySelector("#steplist-slider");
const resetButton = document.querySelector("#reset-button");

function makeGrid(gridDimensions){
    grid.innerHTML='';
    for (let item = 0; item < Math.pow(gridDimensions,2); item++) {
        const newGridItem = document.createElement('div');
        newGridItem.classList.add("grid-item")
        grid.appendChild(newGridItem)
    }
    grid.style["grid-template-columns"] = `repeat(${gridDimensions}, auto)`
    const gridItems = document.querySelectorAll('.grid-item');
    gridItems.forEach(function(gridItem){
            gridItem.addEventListener('mouseover', function(e){
                e.target.style.background = 'yellow';
            });
});
}

steplist.addEventListener('change', function(e){
    let gridDimensions= e.target.value;
    makeGrid(gridDimensions)
});

resetButton.addEventListener('click', ()=>{
    const gridItems = document.querySelectorAll('.grid-item');
    gridItems.forEach(gridItem => {
        gridItem.style.background = 'white';
    });
});

makeGrid(10)
