import { FormEvent, useState } from "react";
import { Header } from "../components/Header";
import { Separator } from "../components/Separator";
import { Tweet } from "../components/Tweet";

import './Status.css';

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

  return (
    <main className='status'>

      <Header title='Tweet' />      

      <Tweet content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium praesentium saepe sapiente? Sit impedit pariatur velit voluptates. Necessitatibus veritatis quos debitis enim. Voluptas optio illo itaque? Atque, cupiditate at. Beatae!
      "/>    

      <Separator />

      <form onSubmit={createNewAnswer} className='answer-tweet-form'>
        <label htmlFor="tweet">
          <img src="https://github.com/martahil.png" alt='Marta Hil' />
          <textarea 
          id="tweet" 
          placeholder="Tweet your answer"
          value={newAnswer} 
          onChange={(event) => {
            setNewAnswer(event.target.value)
          }}
          />
        </label>

        <button type='submit'>Answer</button>
      </form>      

      {answers.map(answer => {
        return <Tweet key={answer} content={answer} />;
      })} 

    </main>
  );

}