const player = (player, option) =>{
    let array = [];
    let playerInfo =() => console.log('Hi my name is' + `${player}`);
    return {player, option,array, playerInfo}
}

const gameboard = (() => {

    const playerOneInput = document.getElementById('playerOne');
    const playerTwoInput = document.getElementById('playerTwo');

    const winningSequences = 
    [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]

    const winCheck = (array) => {
       winningSequences.forEach(item => {
        if (item.every(elem => array.includes(elem))){console.log('compareCheck')}
       })
    }
}
)();