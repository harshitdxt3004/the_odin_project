let rainbowIndex = 0;
const allowedColor = ['#ff0000', '#ffa500', '#ffff00', '#008000', '#0000ff', '#4b0082', '#ee82ee'];

let gridSize = 16;

function createGrid(){
    const gridContainer = document.querySelector('.grid-container');
    gridContainer.innerHTML = '';
    gridContainer.style.gridTemplateRows = `repeat(${gridSize}, ${1/gridSize}fr)`;
    gridContainer.style.gridTemplateColumns = `repeat(${gridSize}, ${1/gridSize}fr)`; 
    for(let i = 0; i < gridSize; ++i){
        for(let j = 0; j < gridSize; ++j){
            const div = document.createElement('div');
            div.className = "grid-item";
            gridContainer.appendChild(div);
        }
    }
}

function setGridColor(color, reset){
    gridItemAll = document.querySelectorAll('.grid-item');
    gridItemAll.forEach((gridItem) => {
        if(reset){
            gridItem.style.backgroundColor='white';
        }
        gridItem.addEventListener('mouseover', (e)=>{
            e.target.style.backgroundColor = color;
        })
    })
}

function resetGrid(){
    setGridColor('black', true);
}

createGrid();

let gridItemAll = document.querySelectorAll('.grid-item');

resetGrid();

function eraserActivate(){
    setGridColor('white', false);
    
}

function rainbowActivate(){
    gridItemAll.forEach((gridItem)=>{
        gridItem.addEventListener('mouseover', (e)=>{
            e.target.style.backgroundColor = allowedColor[rainbowIndex];
            rainbowIndex = (rainbowIndex+1) % 7;
        })
    })
}

function eraserDeactivate(){
    setGridColor('black', false);
}

function changeColor(e){
    setGridColor(e.target.value, false);
}

function changeGridSize(e){
    gridSize = e.target.value;
    createGrid();
    resetGrid();
}

const eraserBtn = document.querySelector('#eraser');
eraserBtn.addEventListener('click', eraserActivate);

const resetBtn = document.querySelector('#reset');
resetBtn.addEventListener('click', resetGrid);

const blackBtn = document.querySelector('#black');
blackBtn.addEventListener('click', eraserDeactivate);

const rainbowBtn = document.querySelector('#rainbow');
rainbowBtn.addEventListener('click', rainbowActivate);

const picker = document.querySelector('#picker');
picker.addEventListener('change', changeColor);

const range = document.querySelector('#range');
range.addEventListener('change', changeGridSize);