import { FormEvent, KeyboardEvent, useState } from "react";
import { Header } from "../components/Header";
import { Separator } from "../components/Separator";
import { Tweet } from "../components/Tweet";

import './Timeline.css';

export function Timeline() {

  const [newTweet, setNewTweet] = useState('')

  const [tweets, setTweets] = useState([
    "My first tweet 🙂",
    "Testing...",
    "It's working!"
  ])

  function createNewTweet(event: FormEvent) {
    event.preventDefault()
    setTweets([newTweet, ...tweets ]);
    setNewTweet('')
  }

  function handleHotKeySubmit(event: KeyboardEvent) {
    if(event.key === 'Enter' && (event.ctrlKey || event.metaKey)) { //Ctrl & metaKey for Mac users (Command)
      setTweets([newTweet, ...tweets ]);
      setNewTweet('')
    } 
  }

  return (

    <main className='timeline'>

      <Header title='Home' />          

      <form onSubmit={createNewTweet} className='new-tweet-form'>
        <label htmlFor="tweet">
          <img src="https://avatars.githubusercontent.com/u/74906513?s=40&amp;v=4" alt='Marta Hil' />
          <textarea 
          id="tweet" 
          placeholder="What's hapenning?" 
          value={newTweet}
          onKeyDown={handleHotKeySubmit}
          onChange={(event) => {
            setNewTweet(event.target.value)
          }} 
          />
        </label>

        <button type='submit'>Tweet</button>
      </form>

      <Separator />

      {tweets.map(tweet => {
        return <Tweet key={tweet} content={tweet} />;
      })}

    </main>

  );
}