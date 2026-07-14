document.querySelector(".control-buttons span").onclick = function () {

    let name = prompt("what is your name? ");
    // set name to unknown 
    if (name == null || name == "") {
        document.querySelector(".name span").innerHTML = "unknown";
    }
    // set name to your name
    else {
        document.querySelector(".name span").innerHTML = name;
    }
    // remove splash screen
    document.querySelector(".control-buttons").remove();
};

let duration = 1000;
let blocksContainer = document.querySelector(".memory-game-blocks");

let blocks = Array.from(blocksContainer.children); // get array of element children 

let orderRange = Array.from(Array(blocks.length).keys()); // indexes of blocks

// console.log(orderRange); // before shuffle 
shuffle(orderRange);
// console.log(orderRange); // after

// add order css property to game blocks
blocks.forEach((block, index) => {
    block.style.order = orderRange[index];

    // when click on the block do this
    block.addEventListener("click", function () {
        flipBlock(block);
    })
});



// flip block function
function flipBlock(selectedBlock) {
    // add class isFlipped
    selectedBlock.classList.add('is-flipped');

    // collect all flipped cards (clicked cards)
    let allFlippedBlocks = blocks.filter(flippedBlock => flippedBlock.classList.contains('is-flipped'));
    // if there is two selected blocks
    if (allFlippedBlocks.length === 2) {
        // stop clicking function when user click two blocks using pointer event 
        stopClicking();

        // check method block function
        checkMatchedBlocks(allFlippedBlocks[0], allFlippedBlocks[1]);
    }
}

// check matched block
function checkMatchedBlocks(firstBlock, secondBlock) {
    let tries = document.querySelector('.tries span');

    if (firstBlock.dataset.technology === secondBlock.dataset.technology) {
        firstBlock.classList.remove('is-flipped');
        secondBlock.classList.remove('is-flipped');

        firstBlock.classList.add('has-match');
        secondBlock.classList.add('has-match');

        document.getElementById("success").play();
    }
    else {
        tries.innerHTML = parseInt(tries.innerHTML) + 1;

        setTimeout(() => {
            firstBlock.classList.remove('is-flipped');
            secondBlock.classList.remove('is-flipped');
        }, duration);
        
        document.getElementById("fail").play();
    }
}

function stopClicking() {
    blocksContainer.classList.add('no-clicking'); // add class no-clicking when user click twice
    setTimeout(() => {
        blocksContainer.classList.remove('no-clicking');
    }, duration);
}

// shuffle function
function shuffle(array) {
    // setting vars
    let current = array.length,
        temp,
        random;

    while (current > 0) {
        // get random number
        random = Math.floor(Math.random() * current);
        // decrease length 
        current--;

        // [1] save current in stash
        temp = array[current];
        // [2]
        // current element = random element
        array[current] = array[random];

        // [3] random element = get element from stash
        array[random] = temp;
    }
    return array;
}

