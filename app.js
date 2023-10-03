const player = (player, option) =>{
    let array = [];
    let playerInfo =() => console.log('Hi my name is' + `${player}`);
    return {player, option,array, playerInfo}
}

const gameboard = (() => {

    const playerOneInput = document.getElementById('playerOne');
    const playerTwoInput = document.getElementById('playerTwo');
    const cell = document.querySelectorAll('.cell')
    const playButton = document.getElementById('playBtn')
    let counter = 0;
    let playerOne = null
    let playerTwo = null
    let playerOneTurn = true;
    let playerTwoTurn = false;

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

    const playerInfo = () =>{

        playButton.addEventListener('click', () =>{
            event.preventDefault()
            playerOne = player(playerOneInput.value , 'X')
            playerTwo = player(playerTwoInput.value , 'O')

            console.log(playerOne,playerTwo)

        })

    }

    const playGame = () =>{
        playerInfo()

        if(playerOneTurn === true){

        Array.from(cell).forEach(cell =>{
            console.log(cell)
            cell.addEventListener('click', () =>{
                console.log(cell)

                cell.textContent = playerOne.option
                playerOneTurn = false
                return                
            })
        })}

        else{console.log('test')}
  }



    return {playGame}
}
)();

gameboard.playGame()
