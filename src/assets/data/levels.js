import level1 from "../images/level1.jpg";
import level2 from "../images/level2.jpg";
import level3 from "../images/level3.jpg";
import level4 from "../images/level4.jpg";
import level5 from "../images/level5.jpg";
import level6 from "../images/level6.jpg";
import level7 from "../images/level7.jpg";
import level8 from "../images/level8.jpg";
import level9 from "../images/level9.jpg";
import level10 from "../images/level10.jpg";
// import level11 from "../images/level11.jpg";
// import level12 from "../images/level12.jpg";
// import level13 from "../images/level13.jpg";
// import level14 from "../images/level14.jpg";
// import level15 from "../images/level15.jpg";
// import level16 from "../images/level16.jpg";
// import level17 from "../images/level17.jpg";
// import level18 from "../images/level18.jpg";
// import level19 from "../images/level19.jpg";
// import level20 from "../images/level20.jpg";
// import level21 from "../images/level21.jpg";
// import level22 from "../images/level22.jpg";
// import level23 from "../images/level23.jpg";
// import level24 from "../images/level24.jpg";
// import level25 from "../images/level25.jpg";
// import level26 from "../images/level26.jpg";
// import level27 from "../images/level27.jpg";
// import level28 from "../images/level28.jpg";
// import level29 from "../images/level29.jpg";
// import level30 from "../images/level30.jpg";
// import level31 from "../images/level31.jpg";
// import level32 from "../images/level32.jpg";
// import level33 from "../images/level33.jpg";
// import level34 from "../images/level34.jpg";
// import level35 from "../images/level35.jpg";
// import level36 from "../images/level36.jpg";
// import level37 from "../images/level37.jpg";
// import level38 from "../images/level38.jpg";
// import level39 from "../images/level39.jpg";
// import level40 from "../images/level40.jpg";
// import level41 from "../images/level41.jpg";
// import level42 from "../images/level42.jpg";
// import level43 from "../images/level43.jpg";
// import level44 from "../images/level44.jpg";
// import level45 from "../images/level45.jpg";
// import level46 from "../images/level46.jpg";
// import level47 from "../images/level47.jpg";
// import level48 from "../images/level48.jpg";
// import level49 from "../images/level49.jpg";
// import level50 from "../images/level50.jpg";

const levels = [
    {
        id: 1,
        image: level1,
        answer: "monas",
        hintWords: ["mon", "nas", "man"]
    },
    {
        id: 2,
        image: level2,
        answer: "helikopter",
        hintWords: ["helikopte", "heli", "kop", "ter"] // buat hint mendekati
    },
    {
        id: 3,
        image: level3,
        answer: "karpet",
        hintWords: ["kar", "pet", "arp"] // buat hint mendekati
    },
    {
        id: 4,
        image: level4,
        answer: "keong",
        hintWords: ["keo", "ong", "kong"]
    },
    {
        id: 5,
        image: level5,
        answer: "atom",
        hintWords: ["ato", "biji", "molekul"] // buat hint mendekati
    },
    {
        id: 6,
        image: level6,
        answer: "galon",
        hintWords: ["gal", "botol", "lon"] // buat hint mendekati
    },
    {
        id: 7,
        image: level7,
        answer: "tai telinga",
        hintWords: ["upil", "tompel", "tai"] // buat hint mendekati
    },
    {
        id: 8,
        image: level8,
        answer: "gelang",
        hintWords: ["jedai", "cepitan rambut", "kalung"]
    },
    {
        id: 9,
        image: level9,
        answer: "kloset",
        hintWords: ["jamban", "setrika", "jam"] // buat hint mendekati
    },
    {
        id: 10,
        image:  level10,
        answer: "labubu",
        hintWords: ["beruang", "boneka", "bubu", "bubu-bubu"] // buat hint mendekati
    },
    // {
    //     id: 11,
    //     image:  level11,
    //     answer: "gajah",
    //     hintWords: ["gaj", "jah", "gah"] // buat hint mendekati
    // },
    // {
    //     id: 12,
    //     image:  level12,
    //     answer: "pisang",
    //     hintWords: ["pis", "san", "sang"]
    // },
    // {
    //     id: 13,
    //     image:  level13,
    //     answer: "gajah",
    //     hintWords: ["gaj", "jah", "gah"] // buat hint mendekati
    // },
    // {
    //     id: 14,
    //     image:  level14,
    //     answer: "pisang",
    //     hintWords: ["pis", "san", "sang"]
    // },
    // {
    //     id: 15,
    //     image:  level15,
    //     answer: "gajah",
    //     hintWords: ["gaj", "jah", "gah"] // buat hint mendekati
    // },
    // {
    //     id: 16,
    //     image:  level16,
    //     answer: "pisang",
    //     hintWords: ["pis", "san", "sang"]
    // },
    // {
    //     id: 17,
    //     image:  level17,
    //     answer: "gajah",
    //     hintWords: ["gaj", "jah", "gah"] // buat hint mendekati
    // },
    // {
    //     id: 18,
    //     image:  level18,
    //     answer: "pisang",
    //     hintWords: ["pis", "san", "sang"]
    // },
    // {
    //     id: 19,
    //     image:  level19,
    //     answer: "gajah",
    //     hintWords: ["gaj", "jah", "gah"] // buat hint mendekati
    // },
    // {
    //     id: 20,
    //     image:  level20,
    //     answer: "pisang",
    //     hintWords: ["pis", "san", "sang"]
    // },
    // {
    //     id: 21,
    //     image:  level21,
    //     answer: "gajah",
    //     hintWords: ["gaj", "jah", "gah"] // buat hint mendekati
    // },
    // {
    //     id: 22,
    //     image:  level22,
    //     answer: "pisang",
    //     hintWords: ["pis", "san", "sang"]
    // },
    // {
    //     id: 23,
    //     image:  level23,
    //     answer: "gajah",
    //     hintWords: ["gaj", "jah", "gah"] // buat hint mendekati
    // },
    // {
    //     id: 24,
    //     image:  level24,
    //     answer: "pisang",
    //     hintWords: ["pis", "san", "sang"]
    // },
    // {
    //     id: 25,
    //     image:  level25,
    //     answer: "gajah",
    //     hintWords: ["gaj", "jah", "gah"] // buat hint mendekati
    // },
    // {
    //     id: 26,
    //     image:  level26,
    //     answer: "pisang",
    //     hintWords: ["pis", "san", "sang"]
    // },
    // {
    //     id: 27,
    //     image:  level27,
    //     answer: "gajah",
    //     hintWords: ["gaj", "jah", "gah"] // buat hint mendekati
    // },
    // {
    //     id: 28,
    //     image:  level28,
    //     answer: "pisang",
    //     hintWords: ["pis", "san", "sang"]
    // },
    // {
    //     id: 29,
    //     image:  level29,
    //     answer: "gajah",
    //     hintWords: ["gaj", "jah", "gah"] // buat hint mendekati
    // },
    // {
    //     id: 30,
    //     image:  level30,
    //     answer: "pisang",
    //     hintWords: ["pis", "san", "sang"]
    // },
    // {
    //     id: 31,
    //     image:  level31,
    //     answer: "gajah",
    //     hintWords: ["gaj", "jah", "gah"] // buat hint mendekati
    // },
    // {
    //     id: 32,
    //     image:  level32,
    //     answer: "pisang",
    //     hintWords: ["pis", "san", "sang"]
    // },
    // {
    //     id: 33,
    //     image:  level33,
    //     answer: "gajah",
    //     hintWords: ["gaj", "jah", "gah"] // buat hint mendekati
    // },
    // {
    //     id: 34,
    //     image:  level34,
    //     answer: "pisang",
    //     hintWords: ["pis", "san", "sang"]
    // },
    // {
    //     id: 35,
    //     image:  level35,
    //     answer: "gajah",
    //     hintWords: ["gaj", "jah", "gah"] // buat hint mendekati
    // },
    // {
    //     id: 36,
    //     image:  level36,
    //     answer: "pisang",
    //     hintWords: ["pis", "san", "sang"]
    // },
    // {
    //     id: 37,
    //     image:  level37,
    //     answer: "gajah",
    //     hintWords: ["gaj", "jah", "gah"] // buat hint mendekati
    // },
    // {
    //     id: 38,
    //     image:  level38,
    //     answer: "pisang",
    //     hintWords: ["pis", "san", "sang"]
    // },
    // {
    //     id: 39,
    //     image:  level39,
    //     answer: "gajah",
    //     hintWords: ["gaj", "jah", "gah"] // buat hint mendekati
    // },
    // {
    //     id: 40,
    //     image:  level40,
    //     answer: "pisang",
    //     hintWords: ["pis", "san", "sang"]
    // },
    // {
    //     id: 41,
    //     image:  level41,
    //     answer: "gajah",
    //     hintWords: ["gaj", "jah", "gah"] // buat hint mendekati
    // },
    // {
    //     id: 42,
    //     image:  level42,
    //     answer: "pisang",
    //     hintWords: ["pis", "san", "sang"]
    // },
    // {
    //     id: 43,
    //     image:  level43,
    //     answer: "gajah",
    //     hintWords: ["gaj", "jah", "gah"] // buat hint mendekati
    // },
    // {
    //     id: 44,
    //     image:  level44,
    //     answer: "pisang",
    //     hintWords: ["pis", "san", "sang"]
    // },
    // {
    //     id: 45,
    //     image:  level45,
    //     answer: "gajah",
    //     hintWords: ["gaj", "jah", "gah"] // buat hint mendekati
    // },
    // {
    //     id: 46,
    //     image:  level46,
    //     answer: "pisang",
    //     hintWords: ["pis", "san", "sang"]
    // },
    // {
    //     id: 47,
    //     image:  level47,
    //     answer: "gajah",
    //     hintWords: ["gaj", "jah", "gah"] // buat hint mendekati
    // },
    // {
    //     id: 48,
    //     image:  level48,
    //     answer: "pisang",
    //     hintWords: ["pis", "san", "sang"]
    // },
    // {
    //     id: 49,
    //     image:  level49,
    //     answer: "pisang",
    //     hintWords: ["pis", "san", "sang"]
    // },
    // {
    //     id: 50,
    //     image:  level50,
    //     answer: "pisang",
    //     hintWords: ["pis", "san", "sang"]
    // },
    // {
    //     id: 51,
    //     image: "/images/level51.jpg",
    //     answer: "gajah",
    //     hintWords: ["gaj", "jah", "gah"] // buat hint mendekati
    // },
    // {
    //     id: 52,
    //     image: "/images/level52.jpg",
    //     answer: "pisang",
    //     hintWords: ["pis", "san", "sang"]
    // },
    // {
    //     id: 53,
    //     image: "/images/level53.jpg",
    //     answer: "gajah",
    //     hintWords: ["gaj", "jah", "gah"] // buat hint mendekati
    // },
    // {
    //     id: 54,
    //     image: "/images/level54.jpg",
    //     answer: "pisang",
    //     hintWords: ["pis", "san", "sang"]
    // },
    // {
    //     id: 55,
    //     image: "/images/level55.jpg",
    //     answer: "gajah",
    //     hintWords: ["gaj", "jah", "gah"] // buat hint mendekati
    // },
    // {
    //     id: 56,
    //     image: "/images/level56.jpg",
    //     answer: "pisang",
    //     hintWords: ["pis", "san", "sang"]
    // },
    // {
    //     id: 57,
    //     image: "/images/level57.jpg",
    //     answer: "gajah",
    //     hintWords: ["gaj", "jah", "gah"] // buat hint mendekati
    // },
    // {
    //     id: 58,
    //     image: "/images/level58.jpg",
    //     answer: "pisang",
    //     hintWords: ["pis", "san", "sang"]
    // },
    // {
    //     id: 59,
    //     image: "/images/level59.jpg",
    //     answer: "pisang",
    //     hintWords: ["pis", "san", "sang"]
    // },
    // {
    //     id: 60,
    //     image: "/images/level60.jpg",
    //     answer: "pisang",
    //     hintWords: ["pis", "san", "sang"]
    // },
    // {
    //     id: 61,
    //     image: "/images/level61.jpg",
    //     answer: "gajah",
    //     hintWords: ["gaj", "jah", "gah"] // buat hint mendekati
    // },
    // {
    //     id: 62,
    //     image: "/images/level62.jpg",
    //     answer: "pisang",
    //     hintWords: ["pis", "san", "sang"]
    // },
    // {
    //     id: 63,
    //     image: "/images/level63.jpg",
    //     answer: "gajah",
    //     hintWords: ["gaj", "jah", "gah"] // buat hint mendekati
    // },
    // {
    //     id: 64,
    //     image: "/images/level64.jpg",
    //     answer: "pisang",
    //     hintWords: ["pis", "san", "sang"]
    // },
    // {
    //     id: 65,
    //     image: "/images/level65.jpg",
    //     answer: "gajah",
    //     hintWords: ["gaj", "jah", "gah"] // buat hint mendekati
    // },
    // {
    //     id: 66,
    //     image: "/images/level66.jpg",
    //     answer: "pisang",
    //     hintWords: ["pis", "san", "sang"]
    // },
    // {
    //     id: 67,
    //     image: "/images/level67.jpg",
    //     answer: "gajah",
    //     hintWords: ["gaj", "jah", "gah"] // buat hint mendekati
    // },
    // {
    //     id: 68,
    //     image: "/images/level68.jpg",
    //     answer: "pisang",
    //     hintWords: ["pis", "san", "sang"]
    // },
    // {
    //     id: 69,
    //     image: "/images/level69.jpg",
    //     answer: "pisang",
    //     hintWords: ["pis", "san", "sang"]
    // },
    // {
    //     id: 70,
    //     image: "/images/level70.jpg",
    //     answer: "pisang",
    //     hintWords: ["pis", "san", "sang"]
    // },
    // {
    //     id: 71,
    //     image: "/images/level71.jpg",
    //     answer: "gajah",
    //     hintWords: ["gaj", "jah", "gah"] // buat hint mendekati
    // },
    // {
    //     id: 72,
    //     image: "/images/level72.jpg",
    //     answer: "pisang",
    //     hintWords: ["pis", "san", "sang"]
    // },
    // {
    //     id: 73,
    //     image: "/images/level73.jpg",
    //     answer: "gajah",
    //     hintWords: ["gaj", "jah", "gah"] // buat hint mendekati
    // },
    // {
    //     id: 74,
    //     image: "/images/level74.jpg",
    //     answer: "pisang",
    //     hintWords: ["pis", "san", "sang"]
    // },
    // {
    //     id: 75,
    //     image: "/images/level75.jpg",
    //     answer: "gajah",
    //     hintWords: ["gaj", "jah", "gah"] // buat hint mendekati
    // },
    // {
    //     id: 76,
    //     image: "/images/level76.jpg",
    //     answer: "pisang",
    //     hintWords: ["pis", "san", "sang"]
    // },
    // {
    //     id: 77,
    //     image: "/images/level77.jpg",
    //     answer: "gajah",
    //     hintWords: ["gaj", "jah", "gah"] // buat hint mendekati
    // },
    // {
    //     id: 78,
    //     image: "/images/level78.jpg",
    //     answer: "pisang",
    //     hintWords: ["pis", "san", "sang"]
    // },
    // {
    //     id: 79,
    //     image: "/images/level79.jpg",
    //     answer: "pisang",
    //     hintWords: ["pis", "san", "sang"]
    // },
    // {
    //     id: 80,
    //     image: "/images/level80.jpg",
    //     answer: "pisang",
    //     hintWords: ["pis", "san", "sang"]
    // },
    // {
    //     id: 81,
    //     image: "/images/level81.jpg",
    //     answer: "gajah",
    //     hintWords: ["gaj", "jah", "gah"] // buat hint mendekati
    // },
    // {
    //     id: 82,
    //     image: "/images/level82.jpg",
    //     answer: "pisang",
    //     hintWords: ["pis", "san", "sang"]
    // },
    // {
    //     id: 83,
    //     image: "/images/level83.jpg",
    //     answer: "gajah",
    //     hintWords: ["gaj", "jah", "gah"] // buat hint mendekati
    // },
    // {
    //     id: 84,
    //     image: "/images/level84.jpg",
    //     answer: "pisang",
    //     hintWords: ["pis", "san", "sang"]
    // },
    // {
    //     id: 85,
    //     image: "/images/level85.jpg",
    //     answer: "gajah",
    //     hintWords: ["gaj", "jah", "gah"] // buat hint mendekati
    // },
    // {
    //     id: 86,
    //     image: "/images/level86.jpg",
    //     answer: "pisang",
    //     hintWords: ["pis", "san", "sang"]
    // },
    // {
    //     id: 87,
    //     image: "/images/level87.jpg",
    //     answer: "gajah",
    //     hintWords: ["gaj", "jah", "gah"] // buat hint mendekati
    // },
    // {
    //     id: 88,
    //     image: "/images/level88.jpg",
    //     answer: "pisang",
    //     hintWords: ["pis", "san", "sang"]
    // },
    // {
    //     id: 89,
    //     image: "/images/level89.jpg",
    //     answer: "pisang",
    //     hintWords: ["pis", "san", "sang"]
    // },
    // {
    //     id: 90,
    //     image: "/images/level90.jpg",
    //     answer: "pisang",
    //     hintWords: ["pis", "san", "sang"]
    // },
    // {
    //     id: 91,
    //     image: "/images/level91.jpg",
    //     answer: "gajah",
    //     hintWords: ["gaj", "jah", "gah"] // buat hint mendekati
    // },
    // {
    //     id: 92,
    //     image: "/images/level92.jpg",
    //     answer: "pisang",
    //     hintWords: ["pis", "san", "sang"]
    // },
    // {
    //     id: 93,
    //     image: "/images/level93.jpg",
    //     answer: "gajah",
    //     hintWords: ["gaj", "jah", "gah"] // buat hint mendekati
    // },
    // {
    //     id: 94,
    //     image: "/images/level94.jpg",
    //     answer: "pisang",
    //     hintWords: ["pis", "san", "sang"]
    // },
    // {
    //     id: 95,
    //     image: "/images/level95.jpg",
    //     answer: "gajah",
    //     hintWords: ["gaj", "jah", "gah"] // buat hint mendekati
    // },
    // {
    //     id: 96,
    //     image: "/images/level96.jpg",
    //     answer: "pisang",
    //     hintWords: ["pis", "san", "sang"]
    // },
    // {
    //     id: 97,
    //     image: "/images/level97.jpg",
    //     answer: "gajah",
    //     hintWords: ["gaj", "jah", "gah"] // buat hint mendekati
    // },
    // {
    //     id: 98,
    //     image: "/images/level98.jpg",
    //     answer: "pisang",
    //     hintWords: ["pis", "san", "sang"]
    // },
    // {
    //     id: 99,
    //     image: "/images/level99.jpg",
    //     answer: "pisang",
    //     hintWords: ["pis", "san", "sang"]
    // },
    // {
    //     id: 100,
    //     image: "/images/level100.jpg",
    //     answer: "pisang",
    //     hintWords: ["pis", "san", "sang"]
    // },
    // ... hingga level 100
]

export default levels;
