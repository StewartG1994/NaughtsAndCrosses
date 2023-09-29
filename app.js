const player = (player, option) =>{
    let playerInfo =() => console.log('Hi my name is' + `${player}`)
    return {player, option, playerInfo}
}

const gameboard = (() => {})