// Программа, которая ...
let topic = {
    PE: 100,
    Math: 86,
    IT: 99,
    Right: {
        firstSemester: 89,
        secondSemester: 79,
    }
};

for (let key in topic) {
    if (typeof (topic[key]) == "object") {
        for (let k in topic[key]) {
            console.log(`В ${k} я набрал ${topic[key][k]}`);
        }
    } else {
        console.log(`По предмету ${key} я набрал ${topic[key]}`);
    }
}
