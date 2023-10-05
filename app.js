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

    const clearBoard = () =>{
        playerOneInput.textContent = '';
        playerTwoInput.textContent = '';
        Array.from(cell).forEach(cell =>{ cell.textContent = '';})


    }

    const winCheck = (array , playerC) => {
       winningSequences.forEach(item => {
        if (item.every(elem => array.includes(elem))){
            textarea.textContent = playerC.player + ' has won'
            setTimeout(clearBoard, 5000)
        }
       })
    }

    const drawCheck = (counter) =>{
        if (counter === 9) {console.log('draw')}
    }

    const playerInfo = () =>{

        playButton.addEventListener('click', () =>{
            event.preventDefault()
            playerOne = player(playerOneInput.value , 'X')
            playerTwo = player(playerTwoInput.value , 'O')
            textarea.textContent = playerOne.player + ' its your turn first!'


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
                    counter++
                    cell.textContent = playerOne.option;
                    let dataNumber = cell.getAttribute('data-value')
                    let parsedData = parseInt(dataNumber)
                    playerOne.array.push(parsedData);
                    drawCheck(counter)
                    playerOneTurn = false;
                    playerTwoTurn = true;
                    textarea.textContent = playerTwo.player + ' its your turn!'   
                    winCheck(playerOne.array, playerOne)


                }
                
                else if (playerTwoTurn) {
                    counter++
                    cell.textContent = playerTwo.option; 
                    let dataNumber = cell.getAttribute('data-value')
                    let parsedData = parseInt(dataNumber)
                    playerTwo.array.push(parsedData);
                    drawCheck(counter)
                    playerOneTurn = true;
                    playerTwoTurn = false;
                    textarea.textContent = playerOne.player + ' its your turn!'
                    winCheck(playerTwo.array, playerTwo)

                  }

            })
        })

    }
    return {playGame}
}
)();

gameboard.playGame()
