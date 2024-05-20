 // Definicja pytań i odpowiedzi
const pytania = [
    {
        pytanie: "Który klub wygrał najwięcej tytułów La Liga?",
        odps: [
            { text: "FC Barcelona", correct: false },
            { text: "Real Madryt", correct: true },
            { text: "Celta Vigo", correct: false },
            { text: "Atlético Madryt", correct: false },

        ]
        
    },
    {
        pytanie: "Który sezon La Liga uważany jest za najbardziej emocjonujący w historii?",
        odps: [
            { text: "2011/2012", correct: false },
            { text: "2009/2010", correct: false },
            { text: "2006/2007", correct: true },
            { text: "1999/2000", correct: false },

        ]
        
    },
    {
        pytanie: "Który klub zadebiutował w La Liga jako pierwszy spośród klubów spoza Hiszpanii?",
        odps: [
            { text: "Real Madryt", correct: false },
            { text: "FC Barcelona", correct: false },
            { text: "Valencia CF", correct: false },
            { text: "Athletic Bilbao", correct: true },

        ]
        
    },
    {
        pytanie: "Który trener ma najwięcej wygranych tytułów La Liga?",
        odps: [
            { text: "Pep Guardiola", correct: false },
            { text: "Miguel Muñoz", correct: true },
            { text: "Johan Cruyff", correct: false },
            { text: "Diego Simeone", correct: false },

        ]
       
    },
    {
        pytanie: "Który klub miał najdłuższy okres bez spadku z La Liga?",
        odps: [
            { text: "Las Palmas", correct: false },
            { text: "FC Barcelona", correct: true },
            { text: "Granada", correct: false },
            { text: "Celta de Vigo", correct: false },

        ]
        
    },
    {
        pytanie: "Który klub ma najwięcej zdobytych tytułów z rzędu w historii La Liga?",
        odps: [
            { text: "FC Barcelona", correct: false },
            { text: "Real Madryt", correct: true },
            { text: "Atletico Madryt", correct: false },
            { text: "Valencia", correct: false },

        ]
        
    },
    {
        pytanie: "Który klub ma najwięcej przegranych finałów w La Liga?",
        odps: [
            { text: "Valencia CF", correct: false },
            { text: "FC Barcelona", correct: false },
            { text: "Real Madryt", correct: false },
            { text: "Atletico Madryt", correct: true },

        ]
        
    },
    {
        pytanie: "Ile trwala najdłuższa seria zwycięstw w jednym sezonie w La Liga?",
        odps: [
            { text: "20", correct: true },
            { text: "5", correct: false },
            { text: "14", correct: false },
            { text: "22", correct: false },

        ]
        
    },
    {
        pytanie: "Kto jest najmłodszym debiutantem w La Liga?",
        odps: [
            { text: "Lamine Yamal", correct: false },
            { text: "Ansu Fati", correct: false },
            { text: "Luka Romero", correct: true },
            { text: "Lionel Messi", correct: false },

        ]
        
    },
    {
        pytanie: "Jaki rekord transferowy został ustanowiony w La Liga i kiedy?",
        odps: [
            { text: "200 milionów euro", correct: false },
            { text: "180 milionów euro", correct: false },
            { text: "250 milionów euro", correct: false },
            { text: "222 miliony euro", correct: true },

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
        pytanie: "Który klub jest znany z przydomka Los Colchoneros w hiszpańskiej lidze?",
        odps: [
            { text: "FC Barcelona", correct: false },
            { text: "Atlético Madryt", correct: true },
            { text: "Real Madryt", correct: false },
            { text: "Valencia CF", correct: false },

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
        pytanie: "Który trener poprowadził Real Madryt do trzech kolejnych triumfów w Lidze Mistrzów?",
        odps: [
            { text: "Pep Guardiola", correct: false },
            { text: "Zinédine Zidane", correct: true },
            { text: "José Mourinho", correct: false },
            { text: "Carlo Ancelotti", correct: false },

        ]
    
    },
	
	{
        pytanie: "Który klub zdobył najwięcej bramek w jednym sezonie La Liga?",
        odps: [
            { text: "Atletico Madryt", correct: false },
            { text: "Real Madryt", correct: false },
            { text: "Valencia CF", correct: false },
            { text: "FC Barcelona", correct: true },

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
    currentPytanieIndex =0; // ustawia currentpytanieindex na 0 co oznacza rozpoczecie quizu od poczatku z wynikiem 0 
    score = 0;
    dalejButton.innerHTML = "Dalej"; // ustawia tekst przycisku na dalej
    pokazPytanie(); // wywoluje funkcje ktora pokazuje pierwsze pytanie w quizie
}
// Funkcja wyświetlająca pytanie oraz odpowiedzi
function pokazPytanie(){
    resetState();  // usuwa wszystkie odpowiedzi na ekranie 
    let currentPytanie = pytania[currentPytanieIndex] // przechowuje aktualne pytanie 
    let pytanieNo = currentPytanieIndex + 1; // zmienna pytanieno zawiera numer aktualnego pytania bo dodaje +1 co kazde pytanie a index zaczyna sie od 0
    questionElement.innerHTML = pytanieNo + ". " + currentPytanie.pytanie; // ustawia element questionelement na tekst pytaniaz numerem itd
    

    currentPytanie.odps.forEach(odp => {
    const button = document.createElement("button"); // dla kazdej odpowiedzi w currentpytanie tworzy nowy przycisk dalej 
button.innerHTML = odp.text; // ustawia tekst przycisku na tekst odp
button.classList.add("btn"); // dodaje klase btn do przycisku
answerButton.appendChild(button); 
if(odp.correct){
    button.dataset.correct = odp.correct; // jesli odpowiedz jest poprawna dodaje wartosc odp.correct do przycisku 
}
button.addEventListener("click", selectAnswer); // dodaje click ktory pobiera po kliknieciu przycisku funkcje selectanswer


    

});
}
// Funkcja resetująca stan odpowiedzi
function resetState(){
    dalejButton.style.display = "none"; // ukrywa przycisk dalej ustawiajac jego display na none poniewaz przycisk ten nie powinien byc widoczny dopoki uzytkownik nie wybierze odpowiedzi
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild); // resetuje stan odpowiedzi aby przygotowac miejsce na nowe przyciski odpowiedzi dla nowego pytania
    }
}
        // Funkcja obsługująca wybór odpowiedzi
function selectAnswer(e){
    const selectedBtn = e.target; // pobiera element ktory zostal klikniety
    const isCorrect = selectedBtn.dataset.correct === "true"; // sprawdza czy odpowiedz jest poprawna czyli pobiera wartosc data-correct z kliknietego przycisku i porownuje ja z wartoscia true
    if(isCorrect){
    selectedBtn.classList.add("correct");  // dodaje klase correct do przycisku
    score++; // jesli odpowiedz jest poprawna powieksza score o 1 czyli zwieksza wynik uzytkownika w quizie 
    }else{
    selectedBtn.classList.add("incorrect"); // jesli odpowiedz jest niepoprawna to dodaje klase incorrect i nie dodaje nic do wyniku 
    }
    
Array.from(answerButton.children).forEach(button => {
    if(button.dataset.correct === "true"){ // sprawdza czy odpowiedz jest poprawna
    button.classList.add("correct");
    }
    button.disabled = true; // wylacza przyciski zeby nie mozna bylo ich klikac zeby zapobiec wybraniu kilku odpowiedzi na raz 
    });
    dalejButton.style.display = "block"; // pokazuje przycisk dalej aby przejsc dalej po wybraniu odpowiedzi 
    }
// Obsługa przycisku Dalej
    dalejButton.addEventListener("click", ()=>{ // dalejbutton pobiera event wciskania
    if (currentPytanieIndex < pytania.length){  // jezeli aktualne pytani	e jest mniejsze niż liczba pytan w bazie to odpala się handledalejbutton
        handleDalejButton(); // handlebutton zwieksza index aktualnego pytania czyli przechodzi do następnego dopóki nie dojdzie do konca
    }else{
    startQuiz(); // jesli nie ma wiecej pytan uruchamia funkcje startquiz ktory resetuje quiz do samego poczatku czyli daje score na 0 itd
    }
});


        // Funkcja przechodząca do następnego pytania lub pokazująca wynik
 function handleDalejButton(){
    currentPytanieIndex++; // przechodzi do nastepnego pytania przez zwiekszenie indexu o 1 
            if (currentPytanieIndex < pytania.length) // sprawdza czy index jest mniejszy niz dlugosc tablicy pytania czyli ustala czy sa jeszcze pytania w tym quizie 
            {
                pokazPytanie(); // jesli sa jeszcze pytania do wyswietlenia to wywoluje funkcje pokazpytanie i pokazuje kolejne pytanie w quizie 
            }
            else {
            showScore(); // jesli nie ma ich wiecej to funkcja showscore pokazuje wynik quizu czyli liczbe odpowiedzi itd
            }
            }
    // Funkcja wyświetlająca wynik końcowy
function showScore(){ // na showscore odpala resetstate i pokazuje tekst
resetState(); // wywoluje resetstate aby usunac przyciski bo przygotowuje do pokazania do pokazania wyniku 
questionElement.innerHTML = `Zdobyłeś ${score} punktów na ${pytania.length
length}!`; // pokazuje uzytkownikowi ile punktow na ile mozliwych 
dalejButton.innerHTML = "Zagraj jeszcze raz"; // zmienia przycisk dalej na przycisk zagraj jeszcze raz 
dalejButton.style.display = "block"; // wyswietla przycisk dalej aby moc zresetowac quiz
                }



startQuiz(); // po wszystkim rozpoczyna quiz 