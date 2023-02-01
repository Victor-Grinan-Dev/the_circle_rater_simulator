export const replacePlayer = (ratingPlayer, ratedPlayer, position) => {
    // const newRatingPlayer = 
    // print(ratingPlayer.myRates.splice(position-1, ratedPlayer));
    // console.log(ratingPlayer.myRates.splice(position-1, ratedPlayer));
    // ratingPlayer.myRates.splice(position-1, ratedPlayer);
    // print(ratingPlayer.myRates);

    for (let spot in ratingPlayer.myRates){
        if (parseInt(spot) === parseInt(position)){
            // console.log(parseInt(spot));
            ratingPlayer.myRates[parseInt(spot)] = ratedPlayer;
            // console.log('position', parseInt(spot + 1), ratedPlayer);
            }
        }
    console.log(ratingPlayer.myRates);
    return ratingPlayer.myRates.splice(position-1, ratedPlayer);
}
export const deletePlayer = (ratingPlayer, position) => {
    ratingPlayer.myRates.splice(position-1, null);
    return ratingPlayer;
}
export const isPlayerDuplicated = (ratingPlayer, ratedPlayer) => {
    return ratingPlayer.myRates.includes(ratedPlayer);
}
export const getPlayerPosition = (ratingPlayer, ratedPlayer) => {
    return ratingPlayer.myRates.indexOf(ratedPlayer);
}

const print = (data) => console.log(data);
