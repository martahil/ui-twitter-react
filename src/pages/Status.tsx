import { FormEvent, KeyboardEvent, useState } from "react";
import { Header } from "../components/Header";
import { Separator } from "../components/Separator";
import { Tweet } from "../components/Tweet";

import './Status.css';
import { PaperPlaneRight } from "phosphor-react";

export function Status() {

  const [newAnswer, setNewAnswer] = useState('')

  const [answers, setAnswers] = useState([
    "I agree",
    "It makes sense",
    "Congrats for your effort"
  ])

  function createNewAnswer(event: FormEvent) {
    event.preventDefault()
    setAnswers([newAnswer, ...answers ]);
    setNewAnswer('')
  }

  function handleHotKeySubmit(event: KeyboardEvent) {
    if(event.key === 'Enter' && (event.ctrlKey || event.metaKey)) { //Ctrl & metaKey for Mac users (Command)
      setAnswers([newAnswer, ...answers ]);
      setNewAnswer('')
    } 
  }

  return (
    <main className='status'>

      <Header title='Tweet' />      

      <Tweet content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium praesentium saepe sapiente? Sit impedit pariatur velit voluptates. Necessitatibus veritatis quos debitis enim. Voluptas optio illo itaque? Atque, cupiditate at. Beatae!
      "/>    

      <Separator />

      <form onSubmit={createNewAnswer} className='answer-tweet-form'>
        <label htmlFor="tweet">
          <img src="..\src\assets\profile-img.jpg" alt='Marta Hil' />
          <textarea 
          id="tweet" 
          placeholder="Tweet your answer"
          value={newAnswer} 
          onKeyDown={handleHotKeySubmit}
          onChange={(event) => {
            setNewAnswer(event.target.value)
          }}
          />
        </label>

        <button type='submit'>
          <PaperPlaneRight />
          <span>Answer</span>
        </button>
      </form>      

      {answers.map(answer => {
        return <Tweet key={answer} content={answer} />;
      })} 

    </main>
  );

}