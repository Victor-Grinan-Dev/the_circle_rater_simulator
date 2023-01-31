export const insertPlayer = (ratingPlayer, ratedPlayer, position) => {
    ratingPlayer.myRates.insert(position-1, ratedPlayer);
}
export const replacePlayer = (ratingPlayer, ratedPlayer, position) => {
    ratingPlayer.myRates.splice(position-1, ratedPlayer);
}
export const deletePlayer = (ratingPlayer, position) => {
    ratingPlayer.myRates.splice(position-1, null);
}
export const isPlayerDuplicated = (ratingPlayer, ratedPlayer) => {
    return ratingPlayer.myRates.includes(ratedPlayer);
}


