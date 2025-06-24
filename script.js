const questions = [
            { question: "Δεν χρειάζεται να κάνεις θέμα την ταυτότητά σου – εμείς σε αποδεχόμαστε.", correctAnswer: "Λάθος", explanation: "Αυτό ακυρώνει τη σημασία της ορατότητας και μπορεί να μεταφραστεί ως ‘κρύψου για να σε αποδεχτούμε’." },
            { question: "Ο/Η/Το καθένας/μία/να έχει δικαίωμα να είναι ο εαυτός του, και αυτό είναι πλεονέκτημα.", correctAnswer: "Σωστό", explanation: "Η ορατότητα και η αποδοχή ενισχύουν την ασφάλεια και την παραγωγικότητα στον χώρο εργασίας." },
            { question: "Είσαι φυσιολογικός/ή, δεν θα καταλάβαινα ποτέ ότι είσαι γκέι!", correctAnswer: "Λάθος", explanation: "Η φράση υπονοεί ότι υπάρχει ‘μη φυσιολογικό’ και ενισχύει στερεότυπα." },
            { question: "Μερικές φορές δίνουμε περισσότερη σημασία στα ΛΟΑΤΚΙΑ+ θέματα απ’ όσο χρειάζεται.", correctAnswer: "Λάθος", explanation: "Η ορατότητα δεν είναι υπερβολή, είναι εργαλείο ενσωμάτωσης." },
            { question: "Δεν με νοιάζει τι κάνει κάποιος στην προσωπική του ζωή – αρκεί να είναι επαγγελματίας.", correctAnswer: "Λάθος", explanation: "Αποκλείει την έκφραση ταυτότητας που είναι σημαντικό μέρος του ‘εαυτού’ στο εργασιακό περιβάλλον." },
            { question: "Η διασφάλιση ίσων ευκαιριών για ΛΟΑΤΚΙΑ+ άτομα στην πρόσληψη και την προαγωγή είναι βασική αρχή μιας δίκαιης εργασιακής πολιτικής.", correctAnswer: "Σωστό", explanation: "Η δίκαιη εργασιακή πολιτική προϋποθέτει ότι όλοι οι εργαζόμενοι, ανεξαρτήτως φύλου, σεξουαλικού προσανατολισμού ή ταυτότητας φύλου, έχουν ίσες ευκαιρίες για πρόσληψη, ανάπτυξη και προαγωγή." },
            { question: "Ο σεξουαλικός προσανατολισμός είναι επιλογή.", correctAnswer: "Λάθος", explanation: "Ο σεξουαλικός προσανατολισμός είναι ένα έμφυτο χαρακτηριστικό, όχι επιλογή." },
            { question: "Η ομοφυλοφιλία είναι ψυχική ασθένεια.", correctAnswer: "Λάθος", explanation: "Ο Παγκόσμιος Οργανισμός Υγείας (ΠΟΥ) και οι περισσότερες ιατρικές και ψυχολογικές οργανώσεις έχουν αποχαρακτηρίσει την ομοφυλοφιλία ως ψυχική ασθένεια εδώ και δεκαετίες." },
            { question: "Το Pride Month δεν είναι μόνο για τους ομοφυλόφιλους.", correctAnswer: "Σωστό", explanation: "Το Pride Month γιορτάζει ολόκληρη την κοινότητα ΛΟΑΤΚΙΑ+, συμπεριλαμβανομένων των λεσβιών, γκέι, αμφιφυλόφιλων, τρανς, queer, ίντερσεξ, ασεξουαλικών και όλων των άλλων ταυτοτήτων." },
            { question: "Η αποδοχή και η υποστήριξη των ΛΟΑΤΚΙΑ+ ατόμων είναι σημαντική για την ψυχική τους υγεία.", correctAnswer: "Σωστό", explanation: "Μελέτες δείχνουν ότι η κοινωνική αποδοχή και υποστήριξη μειώνει σημαντικά τα ποσοστά κατάθλιψης, άγχους και αυτοκτονικών τάσεων στα ΛΟΑΤΚΙΑ+ άτομα." },
	    { question: "Οι ακτιβιστές ΛΟΑΤΚΙΑ+ επιδιώκουν ειδικά δικαιώματα.", correctAnswer: "Λάθος", explanation: "Οι ακτιβιστές ΛΟΑΤΚΙΑ+ αγωνίζονται για ίσα δικαιώματα και προστασία για όλους τους ανθρώπους, ανεξάρτητα από τον σεξουαλικό τους προσανατολισμό ή την ταυτότητα φύλου." },
            { question: "Το να είσαι σύμμαχος σημαίνει ότι πρέπει να ξέρεις τα πάντα για την κοινότητα ΛΟΑΤΚΙΑ+.", correctAnswer: "Λάθος", explanation: "Το να είσαι σύμμαχος σημαίνει να υποστηρίζεις ενεργά την κοινότητα, να εκπαιδεύεσαι και να μαθαίνεις, αλλά δεν απαιτεί να γνωρίζεις τα πάντα. Το σημαντικό είναι η διάθεση για μάθηση και υποστήριξη." },
            { question: "Ένας/μια/ένα εργαζόμενος/η/ο μπορεί να εκφράζει την ταυτότητα φύλου του/της όσο θέλει, αρκεί να μην προκαλεί ή να μην διαταράσσει την επαγγελματική ατμόσφαιρα.", correctAnswer: "Λάθος", explanation: "Η ταυτότητα φύλου δεν είναι ζήτημα «πρόκλησης» ή «διατάραξης» και η φράση αυτή αφήνει περιθώρια για αυθαίρετους περιορισμούς." },
            { question: "Όλοι στην κοινότητα ΛΟΑΤΚΙΑ+ έχουν τις ίδιες εμπειρίες.", correctAnswer: "Λάθος", explanation: "Η κοινότητα ΛΟΑΤΚΙΑ+ είναι εξαιρετικά ποικιλόμορφη. Οι εμπειρίες κάθε ατόμου επηρεάζονται από τον πολιτισμό, τη φυλή, την κοινωνικοοικονομική κατάσταση, την αναπηρία και άλλες ταυτότητες." },
            { question: "Η ιστορία του Pride Month ξεκίνησε με τις εξεγέρσεις του Stonewall.", correctAnswer: "Σωστό", explanation: "Οι εξεγέρσεις του Stonewall Inn τον Ιούνιο του 1969 στη Νέα Υόρκη θεωρούνται το σημείο καμπής για το σύγχρονο κίνημα για τα δικαιώματα των ΛΟΑΤΚΙΑ+ ατόμων και σηματοδότησαν την αρχή του Pride Month." },
	    { question: "Η ισότητα των ΛΟΑΤΚΙΑ+ αφορά μόνο τα δικαιώματα του γάμου.", correctAnswer: "Λάθος", explanation: "Η ισότητα ΛΟΑΤΚΙΑ+ περιλαμβάνει πολλά ζητήματα, όπως η προστασία από διακρίσεις στην εργασία και τη στέγαση, η υγειονομική περίθαλψη, τα δικαιώματα των τρανς ατόμων, οι ίσες προσβάσεις σε διαδικασίες γονεϊκότητας και πολλά άλλα." },
            { question: "Το να αστειεύεσαι για το ότι κάποιος/α/ο μπορεί να είναι ΛΟΑΤΚΙΑ+ είναι αποδεκτό αν γίνεται με καλό σκοπό και σε γνωστούς ανθρώπους.", correctAnswer: "Λάθος", explanation: "Ακόμη και «αστεία» μπορεί να προκαλέσουν δυσφορία και να ενισχύσουν αρνητικά στερεότυπα." },
            { question: "Το αρκτικόλεξο ΛΟΑΤΚΙΑ+ αντιπροσωπεύει τη διαφορετικότητα της κοινότητας.", correctAnswer: "Σωστό", explanation: "Το ΛΟΑΤΚΙΑ+ (Λεσβίες, Ομοφυλόφιλοι, Αμφιφυλόφιλοι, Τρανς, Κουήρ, Ίντερσεξ, Ασέξουαλ) είναι ένα ευρύ αρκτικόλεξο που περιλαμβάνει διάφορες σεξουαλικές ταυτότητες και ταυτότητες φύλου." },
            { question: "Οι τρανς άνθρωποι αλλάζουν το βιολογικό τους φύλο.", correctAnswer: "Λάθος", explanation: "Οι τρανς άνθρωποι αλλάζουν την έκφραση και την ταυτότητα φύλου τους ώστε να ευθυγραμμιστούν με το φύλο που αισθάνονται ότι είναι, ανεξάρτητα από το βιολογικό φύλο που τους αποδόθηκε κατά τη γέννηση. Το βιολογικό φύλο αναφέρεται στα βιολογικά χαρακτηριστικά." },
            { question: "Προτιμώ να μην συνεργάζομαι με άτομα που είναι ανοιχτά ΛΟΑΤΚΙΑ+, γιατί δημιουργούν εντάσεις.", correctAnswer: "Λάθος", explanation: "Υπονοεί ότι η σεξουαλική ταυτότητα προκαλεί προβλήματα, κάτι που δεν έχει βάση." }
        ];

let currentQuestionIndex = 0;
let score = 0;
let answeredThisQuestion = false;

const questionText = document.getElementById('question-text');
const trueButton = document.getElementById('true-button');
const falseButton = document.getElementById('false-button');
const feedback = document.getElementById('feedback');
const explanationText = document.getElementById('explanation-text');
const scoreText = document.getElementById('score-text');
const nextButton = document.getElementById('next-button');
const quizScreen = document.getElementById('quiz-screen');
const resultScreen = document.getElementById('result-screen');
const finalScore = document.getElementById('final-score');
const restartButton = document.getElementById('restart-button');

function displayQuestion() {
    answeredThisQuestion = false;
    feedback.textContent = '';
    feedback.className = 'feedback';
    explanationText.textContent = '';
    trueButton.disabled = false;
    falseButton.disabled = false;
    nextButton.classList.add('hidden');

    if (currentQuestionIndex < questions.length) {
        questionText.textContent = questions[currentQuestionIndex].question;
        scoreText.textContent = `Ερώτηση: ${currentQuestionIndex + 1} / ${questions.length}`;
    } else {
        showResults();
    }
}

function checkAnswer(userAnswer) {
    if (answeredThisQuestion) return;
    answeredThisQuestion = true;

    const currentQuestion = questions[currentQuestionIndex];
    if (userAnswer === currentQuestion.correctAnswer) {
        feedback.textContent = 'Σωστό!';
        feedback.classList.add('correct-feedback');
        feedback.classList.remove('incorrect-feedback');
        score++;
    } else {
        feedback.textContent = `Λάθος! Η σωστή απάντηση ήταν: ${currentQuestion.correctAnswer}`;
        feedback.classList.add('incorrect-feedback');
        feedback.classList.remove('correct-feedback');
    }
    explanationText.textContent = currentQuestion.explanation;
    trueButton.disabled = false;
    falseButton.disabled = false;
    nextButton.classList.remove('hidden');
}

function nextQuestion() {
    currentQuestionIndex++;
    displayQuestion();
}

function showResults() {
    quizScreen.classList.add('hidden');
    resultScreen.classList.remove('hidden');
    finalScore.textContent = `Το τελικό σας σκορ: ${score} / ${questions.length}`;
}

function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    quizScreen.classList.remove('hidden');
    resultScreen.classList.add('hidden');
    displayQuestion();
}

trueButton.addEventListener('click', () => checkAnswer('Σωστό'));
falseButton.addEventListener('click', () => checkAnswer('Λάθος'));
nextButton.addEventListener('click', nextQuestion);
restartButton.addEventListener('click', restartQuiz);

displayQuestion();

emailjs.init('726elMF1wFI1lSdGj');

document.getElementById('email-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const userName = document.getElementById('user-name').value;
    const emailStatus = document.getElementById('email-status');

    const templateParams = {
        from_name: userName,
        to_email: 'dimitris.michailidis@oracle.com',
        final_score: `${score} / ${questions.length}`
    };

    emailjs.send('service_ukpfhmw', 'template_71hjaoo', templateParams)
        .then(() => {
            emailStatus.textContent = "Το σκορ στάλθηκε επιτυχώς!";
            emailStatus.className = "text-green-600";
        }, () => {
            emailStatus.textContent = "Παρουσιάστηκε σφάλμα. Προσπαθήστε ξανά.";
            emailStatus.className = "text-red-600";
        });
});

document.getElementById("email-form").addEventListener("submit", function(e) {
  const userName = document.getElementById("user-name");
  const errorMsg = document.getElementById("errorMsg");

  if (!nameField.value.trim()) {
    event.preventDefault();
    errorMsg.style.display = "inline";
    userName.style.borderColor = "red";
  } else {
    errorMsg.style.display = "none";
    userName.style.borderColor = "green";
  }
});
