/* Henter ut ID-er og deklarerer variabler */
var outputDiv = document.getElementById("output-div");
var startBtn = document.getElementById("start-btn");
var checkResultBtn = document.getElementById("check-result");
var usrInput = document.getElementById("usr-answer");
var pointsOutput = document.getElementById("points-output");

/* Deklarer answer her for å bruke senere i koden */
var answer;

/* Array med alle faktasetningene */
var factArray = ["Norge ble invadert av tyskland i 1940",
                "Etter mye forskning er det ganske sikkert at svenskene kom først til Norge",
                "Romerrike, etter splittelsen falt på 400-tallet",
                "Hubble teleskopet ble ferdigbygd 24 April 1990 etter å vært planlagt og bygd på i 50 år",
                "Siste henrettelse med giljotin var i 1977, samme året som den første star wars filmen kom ut",
                "Det er trolig tenkt at Alv Erlingsson i 1289 provoserte krig mot Danmark av hans provosering mot handelsskip", 
                "Første gang skytevåpen kom til Europa var trolig i 1118", 
                "En trolig grunn til at norrønt døde ut var at alle som kunne skrive det prester/skolærer døde av svartedauden imens de prøvde å gjøre andre friske",
                "Lederen for Los Alamos-laboratoriet der selve utviklingen av atombomben foregikk var Julius Robert Oppenheimer"
            ];

/* Array med alle bildene som går med faktatekstene */
var imageArray = ["norge.jpg", "havet.jpg", "romerriket.jpg", "hubble.jpg", "giljotin.jpg", "vikingskip.jpg", "våpen.jpg", "plaguedoctor.jpg","atombombe.jpg"];

/* Array med spørsmål i spillrunden */
var qArray = ["Når ble Norge invadert av Tyskland?", 
"Hvem kom først til Norge?",
"I hvilket år falt Romerriket?",
"I hvilket år ble Hubble teleskopet ferdigbygd?",
"I hvilket år kom den første Star Wars filmen?",
"Hvem provoserte trolig danskene nok til at det ble krig i 1289?",
"I hvilket år kom trolig skytevåpen til Europa?",
"Hva er en trolig grunn til at norrønt døde ut? Hint: bare ett ord",
"Hva het laboratoriet der Oppenheimer utviklet atombomben?"];

/* Riktig svar på faktaspørsmålene */
var correctArray = ["1940", "Svenskene", "400", "1990", "1977", "Alv Erlingsson", "1118", "Svartedauden", "Los Alamos"];

/* Setter inn de første i arrayet her, sånn at de kommer på siden med en gang man laster den inn, uten denne er det hverken bilde eller tekst før du trykker pilene */
outputDiv.innerHTML = `<h1>Trykk på pilene for å bevege deg til neste bilde</h1>`;
        
/* deklarerer en teller for å bruke for å gå gjennom arrayet hver gang man trykker pilen */        
var click = 0;

/* Funksjoner for å kunne gå fram og tilbake for å hente informasjon */
   function nextSlide() {
            click++; //hver gang man trykker knappen blir telleren 1 større
            if(click === imageArray.length){ // Hvis telleren er like lang som lengden til arrayet blir den null igjen, gir illusjonen at den roterer
                click = 0; 
            }
            outputDiv.innerHTML = `<img src="../images/${imageArray[click]}" onclick="showOrHideTxt()" width="700px" height="500px">
                                <h2 style="display: none">${factArray[click]}</h2>`;
        }

        /* Gjør det samme som forrige funskjon bare at telleren går nedover sånn at man kan trykke tilbake og*/
        function previousSlide() {
            click--
            if(click < 0){
             click = imageArray.length - 1; // hvis click er mindre enn 0 så går den over til siste plassen i arrayet, noe som gir illusjonen av rotasjon
            }
            outputDiv.innerHTML = `<img src="../images/${imageArray[click]}" onclick="showOrHideTxt()" width="700px" height="500px">
                                <h2 style="display: none">${factArray[click]}</h2>`;
            
        }

        /* Funksjon som kalles på av et onclick attributt i img-tagene for å vise og skjule h2 tagene som består av bildetekstene */
        function showOrHideTxt(){
            var imgTxt = document.getElementsByTagName("h2");
            if(imgTxt[0].style.display === "none"){
                imgTxt[0].style.display = "block";
            } else {
                imgTxt[0].style.display = "none";
            }
        }
 

        function startGame(){ // Starter gjettespillet

            /* Sletter alt som ikke skal være der når spillet starter */
            outputDiv.innerHTML = "";
            document.getElementById("rarrow").style.display = "none"; 
            document.getElementById("larrow").style.display = "none";
            document.getElementById("info").style.display = "none";
            startBtn.style.display = "none";  

            /* Synliggjør og lager elementene man bruker i spillet */
            usrInput.style.display = "inline"; 
            checkResultBtn.style.display = "inline"; 
            checkAnswer();
        }
        var points = 0; // Deklarerer poeng variablen
        /* Deklarerer en teller for denne funksjonen og */
        counter = 0; 
        function checkAnswer(){ //Denne telleren plusser indexen både på spørsmåls arrayet og riktig svar arrayet sånn at de displayer likt
            if(counter === qArray.length){ //Hvis counter er lik som lengden til arrayet er spillet ferdig
                alert(`Gratulerer du er ferdig og du fikk ${points} poeng!`);
                outputDiv.innerHTML = `Yeehaw!`; //Gartulasjonsmelding
            } else {
                outputDiv.innerHTML = `<h2>${qArray[counter]}</h2>`; //Hvis spillet ikke er ferdig, display neste spørsmål i qArray
                answer = usrInput.value;
                if(answer.toLowerCase() === correctArray[counter].toLowerCase()){ //Hvis brukersvar er lik som svaret i counter indexen gi 10 poeng og pluss på en i counter
                    counter++;
                    points = points + 10;
                    pointsOutput.innerHTML = `Dine poeng: ${points}`; //Displayer nye poeng
                    usrInput.value = ""; // Fjerner hva som var skrevet i input-feltet
                    checkAnswer(); // Går gjennom funskjonen igjen med oppdatert teller
                // Hvis man svarer feil på et spørsmål blir man trukket 10 poeng.
                } else if(answer.length > 0 && answer.toLowerCase() != correctArray[counter].toLowerCase()){
                    points = points - 10;
                    pointsOutput.innerHTML = `Dine poeng: ${points}`;
                }
            }
        }
        

            /* Gjør alle knappene trykkbare */
            checkResultBtn.onclick = checkAnswer;
            startBtn.onclick = startGame;