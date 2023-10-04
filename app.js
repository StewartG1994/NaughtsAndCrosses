const player = (player, option) =>{
    let array = [];
    let playerInfo =() => console.log('Hi my name is' + `${player}`);
    return {player, option,array, playerInfo}
}

const gameboard = (() => {

    const playerOneInput = document.getElementById('playerOne');
    const playerTwoInput = document.getElementById('playerTwo');
    const textarea = document.querySelector('.textarea')

    const cell = document.querySelectorAll('.cell')
    const playButton = document.getElementById('playBtn')
    let counter = 0;
    let playerOne = null
    let playerTwo = null


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

    const drawCheck = (counter) =>{
        if (counter = 9) {console.log('draw')}
        else {counter++}
    }

    const playerInfo = () =>{

        playButton.addEventListener('click', () =>{
            event.preventDefault()
            playerOne = player(playerOneInput.value , 'X')
            playerTwo = player(playerTwoInput.value , 'O')
            textarea.textContent = playerOne.player + 'its your turn first!'


            console.log(playerOne,playerTwo)

        })

    }

    const playGame = () =>{
        playerInfo()
        let playerOneTurn = true;
        let playerTwoTurn = false;

        Array.from(cell).forEach(cell =>{
            cell.addEventListener('click', () =>{
                console.log(cell)

                if (cell.textContent === 'X' || cell.textContent === 'O') 
                {
                    console.log('cellcheck')
                    return}

                else if (playerOneTurn) {
                    cell.textContent = playerOne.option;
                    let dataNumber = cell.getAttribute('data-value')
                    let parsedData = parseInt(dataNumber)
                    playerOne.array.push(parsedData);
                    winCheck(playerOne.array)
                    drawCheck(counter)
                    console.log(playerOne);
                    playerOneTurn = false;
                    playerTwoTurn = true;
                }
                
                else if (playerTwoTurn) {
                    cell.textContent = playerTwo.option; 
                    playerOneTurn = true;
                    playerTwoTurn = false;
                    
                  }

            })
        })

    }
    return {playGame}
}
)();

gameboard.playGame()
