import Amplify from 'aws-amplify';
import config from '../aws-exports';
import { API, Storage, graphqlOperation } from 'aws-amplify';
import { createGame, updateGame, deleteGame, createPlayer, updatePlayer, deletePlayer, createFacts, deleteFacts } from '../graphql/mutations';
import { getPlayer, getGame } from '../graphql/queries';

Amplify.configure(config);

// We need to configure user accounts because right now this allows *anyone* to freely access the API endpoint through aws-exports in production!
// It might be okay for the private beta though...

async function uploadFile(playerId, file) {
    await Storage.put(playerId, file);
}

async function getFile(playerId) {
    const file = await Storage.get(playerId);
    return file;
}

async function removeFile(playerId) {
    await Storage.remove(playerId);
}

async function createNewHost(playerName) {
    const apiData = await API.graphql(graphqlOperation(
        createPlayer,
        {
            input: {
                name: playerName
            }
        }
    ));
    
    return apiData.data.createPlayer.id;
}

async function createNewPlayer(playerName, gameId) {
    // Implement: only allow to create new player if there are spots left
    const apiData = await API.graphql(graphqlOperation(
        createPlayer,
        {
            input: {
                name: playerName,
                playerGameId: gameId
            }
        }
    ));
    
    return apiData.data.createPlayer.id;
}

async function createNewGame(gameName, gameHost, gameType = "TWO_TRUTHS_AND_LIE") {
    const apiData = await API.graphql(graphqlOperation(
        createGame,
        {
            input: {
                name: gameName,
                gameHostId: gameHost,
                type: gameType,
                enabled: false,
                // generate random code eventually!
                code: "random"
            }
        }
    ));
    
    // Add host as a player
    await API.graphql(graphqlOperation(
        updatePlayer,
        {
            input: {
                id: gameHost,
                playerGameId: apiData.data.createGame.id
            }
        }
    ));

    return apiData.data.createGame.id;
}

async function enableGame(gameId, playerNumber, playerSec) {
    const apiData = await API.graphql(graphqlOperation(
        updateGame,
        {
            input: {
                id: gameId,
                enabled: true,
                playerNum: playerNumber,
                playerSeconds: playerSec
            }
        }
    ));

    return apiData.data.updateGame.id;
}

async function addFacts(gameId, playerId, fact1, status1, fact2, status2, fact3, status3) {
    const newFacts = {
        factsGameId: gameId,
        factsPlayerId: playerId,
        facts: 
            [{
                name: fact1,
                valid: status1,
            },
            {
                name: fact2,
                valid: status2,
            },
            {
                name: fact3,
                valid: status3
            }]
        ,
    }

    const apiData = await API.graphql(graphqlOperation(
        createFacts,
        {
            input: newFacts
        }
    ));

    return apiData.data.createFacts.id;
}

async function findGame(gameId) {
    const apiData = await API.graphql(graphqlOperation(
        getGame,
        {
            input: {
                id: gameId
            }
        }
    ));

    return apiData.data.getGame;
}

async function finishGame(gameId){
    const apiData = await API.graphql(graphqlOperation(
        deleteGame,
        {
            input: {
                id: gameId
            }
        }
    ));

    // Also delete facts and players
    // And figure out if it returns the id or not
}

export { uploadFile, getFile, removeFile, createNewHost, createNewPlayer, createNewGame, enableGame, addFacts, findGame, finishGame };

/*

TESTS

(async () => {
    const newHost = await createNewHost("Arek Der-Sarkissian");
    console.log("Host: " + newHost);
    const newGame = await createNewGame("Testing Game", newHost);
    console.log("Game: " + newGame);
    const newPlayer = await createNewPlayer("John Doe", newGame);
    console.log("Player: " + newPlayer);
    await enableGame(newGame, 3, 200);
    await addFacts(newGame, newPlayer, "random 1", false, "random 2", true, "random 3", false);
})()
*/

