"use strict";
const current_users = [
    "ahmed",
    "hassaan",
    "sabrina",
    "danish",
    "abeeha",
];
const new_users = [
    "AHMED",
    "Zaib",
    "Sandy",
    "Danish",
    "Musfirah",
];
new_users.map((name) => {
    if (current_users.includes(name.toLowerCase())) {
        console.log(name, "will need to enter a new username");
    }
    else {
        console.log(name, "is available.");
    }
});
// const current_users: Array<string> = [
//     "ahmed",
//     "hassaan",
//     "sabrina",
//     "danish",
//     "abeeha",
//   ];
//   const new_users: Array<string> = [
//     "AHMED",
//     "Zaib",
//     "Sandy",
//     "Danish",
//     "Musfirah",
//   ];
//   new_users.map((name: string) => {
//     if (current_users.includes(name.toLowerCase())) {
//       console.log("username", name, "already in use. Please rename yourself");
//     } else {
//       console.log("username", name, "is available");
//     }
//   });
