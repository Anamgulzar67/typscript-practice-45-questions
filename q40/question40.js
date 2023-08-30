"use strict";
const make_album = (artist, album, tracks) => {
    let albumObj = Object.assign({ artist,
        album }, (tracks != null && {
        tracks,
    }));
    return albumObj;
};
console.log(make_album("hania", "heer ranja", 7));
