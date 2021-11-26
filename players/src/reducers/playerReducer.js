const playerReducer = (players = [], action) => {
    debugger;

    switch(action.type){
        case 'GET':
                let players = []
                const fetchPlayers = async () => {
                    const data = await fetch('https://player-manager.herokuapp.com/')
                    players = await data.json()
                };
                fetchPlayers()
            return players
        case 'POST':
            console.log("edit")
        break;
        case 'PUT':
            console.log("edit")
            break;
        case 'DELETE':
            console.log("delete")
            break;
        default:
            return players;
    }
}

export default playerReducer;