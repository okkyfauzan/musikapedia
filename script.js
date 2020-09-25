let username = prompt('Sebutkan nama anda')

const data = [
    {
        
            question: "Dari band berikut band mana yang bukan asal Inggris?",
            a: "Pink floyd",
            b: "Radio head",
            c: "Bon jovi",
            d: "Black sabbath",
            correct: "c",
        
    },
    {
        question: "Siapa vocalist dari group band Oasis??",
        a: "Liam Gallagher",
        b: "Kurt Cobain",
        c: "Brandon Boyd",
        d: "Noel Gallagher",
        correct: "a",
    },
    {
        question: "Apa nama band dengan anggota berikut: John Deacon, Brian May, Freddie Mercury, Roger Taylor?",
        a: "Metallica",
        b: "Queen",
        c: "Foo Fighters",
        d: "Black Sabbath",
        correct: "b",
    },
    {
        question: "Apakah judul lagu hits yang melambungkan nama band Nirvana?",
        a: "Hey jude",
        b: "Stand by me",
        c: "Learn to fly",
        d: "Smell like teen spirit",
        correct: "d",
    },
];

const data1 = document.getElementById("data1")
const data2 = document.getElementById("data2")
const data3 = document.getElementById("data3")
const data4 = document.getElementById("data4")
const quiz = document.getElementById("quiz");
const jawaban = document.querySelectorAll(".answer")
const soal = document.getElementById("question")
const submitBtn = document.getElementById("submit")

let currentQuiz = 0
let score = 0

musicQuiz()

function musicQuiz() {
    wrongAnswers()

    const currentData = data[currentQuiz];

    soal.innerText = currentData.question;
    data1.innerText = currentData.a
    data2.innerText = currentData.b
    data3.innerText = currentData.c
    data4.innerText = currentData.d
}

function getSelected() {
    let answer = undefined

    jawaban.forEach((inAnswer) => {
        if (inAnswer.checked) {
            answer = inAnswer.id
        }
    });

    return answer
}

function wrongAnswers() {
    jawaban.forEach((inAnswer) => {
        inAnswer.checked = false
    });
}

submitBtn.addEventListener("click", () => {
    
    const answer = getSelected()

    if (answer) {
        if (answer === data[currentQuiz].correct) {
            score++
        }

        currentQuiz++
        if (currentQuiz < data.length) {
            musicQuiz()
        } else {
            quiz.innerHTML = `
                <h2>Selamat ${username}! kamu menjawab benar ${score} dari ${data.length} pertanyaan.</h2>
                
                <button onclick="location.reload()">BACK</button>
            `;
        }
    }
})