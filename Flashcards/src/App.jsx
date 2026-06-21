import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const cardPairs = [
    { question: 'How do you say "hello" in Spanish?', answer: 'Hola' },
    { question: 'How do you say "hello" in French?', answer: 'Bonjour' },
    { question: 'How do you say "hello" in German?', answer: 'Hallo' },
    { question: 'How do you say "hello" in Japanese?', answer: 'こんにちは (Konnichiwa)' },
    { question: 'How do you say "hello" in Italian?', answer: 'Ciao' },
    { question: 'How do you say "hello" in Portuguese?', answer: 'Olá' },
    { question: 'How do you say "hello" in Mandarin Chinese?', answer: '你好 (Nǐ hǎo)' },
    { question: 'How do you say "hello" in Russian?', answer: 'Здравствуйте (Zdravstvuyte)' },
    { question: 'How do you say "hello" in Arabic?', answer: 'مرحبا (Marhaba)' },
    { question: 'How do you say "hello" in Hindi?', answer: 'नमस्ते (Namaste)' }
  ];

  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const currentCard = cardPairs[currentCardIndex];
  const [noNextCard, setNoNextCard] = useState(false);
  const [noPreviousCard, setNoPreviousCard] = useState(false);
  const [userAnswer, setUserAnswer] = useState('');

  const toggleFlip = () => setIsFlipped((prev) => !prev);
  const nextCard = () => {
    if (currentCardIndex + 1 === cardPairs.length) {
      setNoNextCard(true);
    } else {
      setCurrentCardIndex((prev) => (prev + 1));
      setNoNextCard(false);
    }
    setIsFlipped(false);
  }

  const previousCard = () => {
    if (currentCardIndex === 0) {
      setNoPreviousCard(true);
    } else {
      setCurrentCardIndex((prev) => (prev - 1));
      setNoPreviousCard(false);
    }
    setIsFlipped(false);
  }

  const nextCardRandom = () => {
    setCurrentCardIndex(Math.floor(Math.random() * cardPairs.length));
    setIsFlipped(false);
  };

  const handleUserAnswerChange = (e) => {
    setUserAnswer((prev) => [...prev, e.target.value]);
  }

  const handleSumbit = (e) => {
    e.preventDefault();
    if ((userAnswer.toLowerCase() === currentCard.answer.toLowerCase)){
      
    } else {
      
    }
  
  return (

    <div className="App"> 
      <h1>Hello Across The World</h1>
      <h2>Do you know how to say "hello" in different languages? Test your skills here!</h2>
      <h3>Number of cards: {cardPairs.length}</h3>

      <div className="flashcard-area">
        
        <div className="flashcard" onClick={toggleFlip}>
          <div className={`flashcard-face ${isFlipped ? 'back' : 'front'}`}>
            {isFlipped ? currentCard.answer : currentCard.question}
          </div>
        </div>

        <div className="guess-area">
          <form>
            <label>Answer: 
              <input type="text" placeholder="Type your answer here..." value={userAnswer} onChange={handleUserAnswerChange} />
            </label>
            <button type="submit" onClick={handleSubmit}>Submit</button>
          </form>
        </div>

        <div className="forward and backward buttons">
          <button onClick={previousCard}>←</button>
          <button onClick={nextCard}>→</button>
        </div>
        <button className="next-card" onClick={nextCardRandom}>
          Shuffle Cards
        </button>

      </div>
    </div>
  );

};

export default App;
