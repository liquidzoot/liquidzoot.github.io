 // Definicja pytań i odpowiedzi
const pytania = [
    {
        pytanie: "Kto jest najmłodszym strzelcem w historii La Liga?",
        odps: [
            { text: "Lamine Yamal", correct: true },
            { text: "Rafael Varane", correct: false },
            { text: "Arda Guler", correct: false },
            { text: "Koke", correct: false },

        ]
        
    },
    {
        pytanie: "Który zespół jest najbardziej utytułowany w europejskich pucharach?",
        odps: [
            { text: "FC Barcelona", correct: false },
            { text: "Real Madryt", correct: true },
            { text: "Malaga", correct: false },
            { text: "Atlético Madryt", correct: false },

        ]
        
    },
    {
        pytanie: "Jakie są największe derby w La Liga?",
        odps: [
            { text: "El Clasico", correct: true },
            { text: "Derby Kataloni", correct: false },
            { text: "Derby Madrytu", correct: false },
            { text: "Seville Derby", correct: false },

        ]
        
    },
    {
        pytanie: "Jak nazywa się stadion FC Barcelony?",
        odps: [
            { text: "Camp Nou", correct: true },
            { text: "Wembley", correct: false },
            { text: "Santiago Bernabeu", correct: false },
            { text: "Cívitas Metropolitano", correct: false },

        ]
       
    },
    {
        pytanie: "Kto jest rekordzistą pod względem liczby zdobytych bramek w jednym sezonie w La Liga?",
        odps: [
            { text: "Lionel Messi", correct: true },
            { text: "Cristiano Ronaldo", correct: false },
            { text: "Johan Cruyff", correct: false },
            { text: "Robert Lewandowski", correct: false },

        ]
        
    },
    {
        pytanie: "Jaki klub był pierwszy, który zdobył potrójną koronę w Hiszpanii (La Liga, Puchar Króla i Liga Mistrzów) w jednym sezonie?",
        odps: [
            { text: "FC Barcelona", correct: true },
            { text: "Real Madryt", correct: false },
            { text: "Atletico Madryt", correct: false },
            { text: "Valencia", correct: false },

        ]
        
    },
    {
        pytanie: "Kto był najlepszym strzelcem La Liga w sezonie 2020/2021?",
        odps: [
            { text: "Karim Benzema", correct: false },
            { text: "Gerard Moreno", correct: false },
            { text: "Luis Suarez", correct: false },
            { text: "Lionel Messi", correct: true },

        ]
        
    },
    {
        pytanie: "Który klub zrekrutował najwięcej gwiazd futbolu w historii La Liga?",
        odps: [
            { text: "Galactios Realu Madryt", correct: true },
            { text: "FC Barcelona 2009", correct: false },
            { text: "Malaga 2012", correct: false },
            { text: "Atletico Madryt 2015", correct: false },

        ]
        
    },
    {
        pytanie: "Który klub zajął ostatnie miejsce w poprzednim sezonie La Liga?",
        odps: [
            { text: "Almeria", correct: false },
            { text: "Espanyol", correct: false },
            { text: "Elche", correct: true },
            { text: "Getafe", correct: false },

        ]
        
    },
    {
        pytanie: "Kto jest zwany El Pichichi w hiszpańskiej Primera Division?",
        odps: [
            { text: "Krol Strzelcow", correct: true },
            { text: "Krol asyst", correct: false },
            { text: "Najwiecej hattrickow w sezonie", correct: false },
            { text: "Najlepszy gol", correct: false },

        ]
    
    },
    
    {
        pytanie: "Kto jest najskuteczniejszym strzelcem w historii La Liga?",
        odps: [
            { text: "Cristiano Ronaldo", correct: false },
            { text: "Hugo Sánchez", correct: false },
            { text: "Telmo Zarra", correct: false },
            { text: "Lionel Messi", correct: true },

        ]
    
    },
	
	{
        pytanie: "Który zespół jest nazywany Los Franjirrojos?",
        odps: [
            { text: "FC Barcelona", correct: false },
            { text: "Rayo Vallecano", correct: true },
            { text: "Granada", correct: false },
            { text: "Real Madryt", correct: false },

        ]
    
    },
	
	{
        pytanie: "Kto jest najdłużej pełniącym funkcję kapitana w historii La Liga?",
        odps: [
            { text: "Carles Puyol", correct: false },
            { text: "Raúl González", correct: false },
            { text: "Iker Casillas", correct: false },
            { text: "Francisco Gento", correct: true },

        ]
    
    },
	
	{
        pytanie: "Kto jest obecnie trenerem Realu Madryt?",
        odps: [
            { text: "Pep Guardiola", correct: false },
            { text: "Zinédine Zidane", correct: false },
            { text: "José Mourinho", correct: false },
            { text: "Carlo Ancelotti", correct: true },

        ]
    
    },
	
	{
        pytanie: "Który zespół jest obecnie liderem w tabeli La Liga?",
        odps: [
            { text: "Atletico Madryt", correct: false },
            { text: "Real Madryt", correct: true },
            { text: "Valencia CF", correct: false },
            { text: "FC Barcelona", correct: false },

        ]
    
    },
];


const questionElement = document.getElementById("pytanie");
const answerButton = document.getElementById("odp-buttons");
const dalejButton = document.getElementById("dalej-btn");
const zdjecie = document.getElementById("zdj");

let currentPytanieIndex = 0;
let score = 0;
 // Funkcja rozpoczynająca quiz
function startQuiz(){
    currentPytanieIndex =0;
    score = 0;
    dalejButton.innerHTML = "Dalej";
    pokazPytanie();
}
// Funkcja wyświetlająca pytanie oraz odpowiedzi
function pokazPytanie(){
    resetState();
    let currentPytanie = pytania[currentPytanieIndex]
    let pytanieNo = currentPytanieIndex + 1;
    questionElement.innerHTML = pytanieNo + ". " + currentPytanie.pytanie;
    

    currentPytanie.odps.forEach(odp => {
    const button = document.createElement("button");
button.innerHTML = odp.text;
button.classList.add("btn");
answerButton.appendChild(button);
if(odp.correct){
    button.dataset.correct = odp.correct;
}
button.addEventListener("click", selectAnswer);


    

});
}
// Funkcja resetująca stan odpowiedzi
function resetState(){
    dalejButton.style.display = "none";
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild);
    }
}
        // Funkcja obsługująca wybór odpowiedzi
function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true"; 
    if(isCorrect){
    selectedBtn.classList.add("correct");
    score++;
    }else{
    selectedBtn.classList.add("incorrect");
    }
    
Array.from(answerButton.children).forEach(button => {
    if(button.dataset.correct === "true"){
    button.classList.add("correct");
    }
    button.disabled = true;
    });
    dalejButton.style.display = "block";
    }
// Obsługa przycisku Dalej
    dalejButton.addEventListener("click", ()=>{
    if (currentPytanieIndex < pytania.length){ 
        handleDalejButton();
    }else{
    startQuiz();
    }
});


        // Funkcja przechodząca do następnego pytania lub pokazująca wynik
 function handleDalejButton(){
    currentPytanieIndex++;
            if (currentPytanieIndex < pytania.length)
            {
                pokazPytanie();
            }
            else {
            showScore();
            }
            }
    // Funkcja wyświetlająca wynik końcowy
function showScore(){
resetState();
questionElement.innerHTML = `Zdobyłeś ${score} punktów na ${pytania.
length}!`;
dalejButton.innerHTML = "Zagraj jeszcze raz";
dalejButton.style.display = "block";
                }



startQuiz();