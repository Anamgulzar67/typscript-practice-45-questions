interface Album {
  artist: string;
  album: string;
  tracks?: number;
}

const make_album = (artist: string, album: string, tracks?: number) => {
  let albumObj: Album = {
    artist,
    album,
    ...(tracks != null && {
      tracks,
    }),
  };
  return albumObj;
};
console.log(make_album("hania", "heer ranja",7));