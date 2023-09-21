let questionEl=document.getElementById("question");
let textA=document.getElementById("text-a");
let textB=document.getElementById("text-b");
let textC=document.getElementById("text-c");
let textD=document.getElementById("text-d");
let submitBtn=document.getElementById("submit");
let list=document.getElementById("list");
const QuizData=[
    {
        question:"What’s the national flower of Japan?",
        a:"Rose",
        b:"Lily",
        c:"Cherry blossom",
        d:"Jasmine",
        correct:"c"
    },
    {
        question:"How many days does it take for the Earth to orbit the Sun?",
        a:365,
        b:360,
        c:367,
        d:364,
        correct:"a"
    },
    {
        question:"Name Disney’s first film.",
        a:"Cinderalla",
        b:"Snow White",
        c:"Barbie",
        d:"Beauty and the Beast",
        correct:"b"

    },
    {
        question:"How many keys does a classic piano have?",
        a:88,
        b:81,
        c:90,
        d:92,
        correct:"a"

    },
    {
        question:"How many bones do we have in an ear?",
        a:1,
        b:2,
        c:3,
        d:4,
        correct:"c"

    }
]

let currentQuestion=0;
let correctAnswer=0;
loadQuiz();
function loadQuiz(){
    let currentQuestionData=QuizData[currentQuestion];
    questionEl.textContent=currentQuestionData.question;
    textA.textContent=currentQuestionData.a;
    textB.textContent=currentQuestionData.b;
    textC.textContent=currentQuestionData.c;
    textD.textContent=currentQuestionData.d;
}
submitBtn.addEventListener("click",()=>{
    let answer=getSelected();
    if(answer!=undefined){
    if(answer===QuizData[currentQuestion].correct){
        correctAnswer++;
            }
        }
        currentQuestion++;
        if(currentQuestion<QuizData.length){
        loadQuiz();
        }
        else{
        list.innerHTML="";
        submitBtn.remove();
        if(correctAnswer===5){
        questionEl.innerHTML=`<h2>SCORE:  ${correctAnswer}/5</h2>
        <h3>Excellent!!!</h3>
        <button onclick="location.reload()">Reload</button>`;
        }
        else if(correctAnswer===4){
            questionEl.innerHTML=`<h2>SCORE:  ${correctAnswer}/5</h2>
            <h3>Well Done</h3>
            <button onclick="location.reload()">Reload</button>`;
        }
        else{
            questionEl.innerHTML=`<h2>SCORE:  ${correctAnswer}/5</h2>
            <h3>Keep it up!</h3>
            <button onclick="location.reload()">Reload</button>`;
        }
        }
}

);
function getSelected(){
    let getSelectedValue = document.querySelector( 'input[name="quiz"]:checked');
        if(getSelectedValue!==null){
        return getSelectedValue.id;
    }
    else{
        return undefined;
    }

}






