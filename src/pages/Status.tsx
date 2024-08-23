import { Header } from "../components/Header";
import { Separator } from "../components/Separator";
import { Tweet } from "../components/Tweet";

import './Status.css';

const answers = [
  "I agree",
  "It makes sense",
  "Congrats for your effort"
]

export function Status() {

  return (
    <main className='status'>

      <Header title='Tweet' />      

      <Tweet content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium praesentium saepe sapiente? Sit impedit pariatur velit voluptates. Necessitatibus veritatis quos debitis enim. Voluptas optio illo itaque? Atque, cupiditate at. Beatae!
      "/>    

      <Separator />

      <form className='answer-tweet-form'>
        <label htmlFor="tweet">
          <img src="https://github.com/martahil.png" alt='Marta Hil' />
          <textarea id="tweet" placeholder="Tweet your answer" />
        </label>

        <button type='submit'>Answer</button>
      </form>      

      {answers.map(answer => {
        return <Tweet key={answer} content={answer} />;
      })} 

    </main>
  );

}