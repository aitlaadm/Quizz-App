const questions=[{
    ques:`Le Vietnam a revendiqué l'indépendance de quel pays en 1945?`,
    rep_1:`Royaume-Unis`,
    rep_2:'Etats-Unis',
    rep_3:'France',
    correct:'rep_3'
},{
    ques:"Contre quel pays l'attaque allemande a poussé la Grande-Bretagne à entrer dans la Seconde Guerre mondiale?",
    rep_1:'La Grande Bretagne',
    rep_2:'France',
    rep_3:'Pologne',
    correct:'rep_2'
},{
    ques:'Quel était le prénom du médecin qui a inventé la manœuvre de Heimlich?',
    rep_1:'Henry',
    rep_2:'Heinrich',
    rep_3:'Sébastien',
    correct:'rep_1'
},{
    ques:'Quelle bataille américaine est parfois appelée «le dernier combat de Custer»?',
    rep_1:'La Batille de la Grande Bretagne',
    rep_2:'La Batille de Kursk',
    rep_3:'Bataille du petit Bighorn',
    correct:'rep_3'
},{
    ques:'En quelle année était le complot de poudre à canon?',
    rep_1:'1605',
    rep_2:'1884',
    rep_3:'1900',
    correct:'rep_1'
},{
    ques:'Quel monarque écossais a été reconnu coupable de trahison et décapité au château de Fotheringhay dans le Northamptonshire le 8 février 1587?',
    rep_1:'Mary I également connue sous le nom de Mary La Reine des Scots',
    rep_2:'Elizabeth I',
    rep_3:'Thomas Young',
    correct:'rep_1'
},{
    ques:'Comment New York était-elle connue avant 1664?',
    rep_1:'Yota',
    rep_2:'New Amsterdam',
    rep_3:'York',
    correct:'rep_2'
},{
    ques:"Qui a été le premier dirigeant de l'Union soviétique?",
    rep_1:'Mosolini',
    rep_2:'stalin',
    rep_3:'Lenin',
    correct:'rep_3'
}
];
const quiz = document.getElementById("quiz");
const questionElement=document.getElementById("question");
const a_text= document.getElementById("a_text");
const b_text= document.getElementById("b_text");
const c_text= document.getElementById("c_text");

const subBut=document.getElementById("sub");
let QuestionCourante=0;
let score=0;
loadQuiz();

function getSelect(){
    const rep = document.querySelectorAll('.reponse');
    let repC=undefined;
    rep.forEach((reponse)=>{
        if(reponse.checked){
            repC=reponse.id;
        }
    }); 
    return repC;
}

function refrechReponse(){
    const rep = document.querySelectorAll('.reponse');
    rep.forEach((reponse)=>{
        reponse.checked=false;
    })
}
function loadQuiz(){
    refrechReponse();
    const quizCourant=questions[QuestionCourante];
    questionElement.innerText=quizCourant.ques;

    a_text.innerText=quizCourant.rep_1;
    b_text.innerText=quizCourant.rep_2;
    c_text.innerText=quizCourant.rep_3;

}

subBut.addEventListener("click",()=>{
    const reponse = getSelect();
    if(reponse){
        if(reponse===questions[QuestionCourante].correct){
            score++;
        }
        QuestionCourante++;

        if(QuestionCourante<questions.length){
            loadQuiz();
        }else{
            quiz.innerHTML=`<h2>Vous Avez eu ${score} réponses correctes parmis ${questions.length} !</h2><button onClick="location.reload()">Refaire le Quiz</button>`
        }
    }


})