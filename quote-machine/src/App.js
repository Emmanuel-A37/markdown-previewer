import React, { useEffect, useState } from 'react';
import './App.css';
import { FaXTwitter } from "react-icons/fa6";


const App = () => {
    const [quote, setQuote] = useState({content : '', author : ''});
    const [color, setColor] = useState("#3357FF");
    const fetchQuote = async () => {
        const resp = await fetch("https://api.quotable.io/random");
        const data = await resp.json();
        setQuote({content : data.content, author : data.author})
    }
    useEffect(() => {
        fetchQuote();
    }, []);
    const handleChange = () => {
        getRandomColor();
        fetchQuote();
    }
    
    const randomColors = [ "#FF5733", "#33FF57", "#3357FF","#F1C40F", "#9B59B6","#E67E22", "#1F618D","#C0392B","#2ECC71", "#F39C12" ];
    const getRandomColor = () => {
        const index = Math.floor(Math.random() * randomColors.length);
        setColor(randomColors[index]);
    }

    return (
    <div id='container' style={{backgroundColor : color}}>
        <div id='quote-box'>
            <h2 id='text' style={{color : color}}>{quote.content}</h2>
            <p id='author' style={{color : color}}>{quote.author}</p>
            <a target="_blank" id='tweet-quote' href='twitter.com/intent/tweet'><FaXTwitter color={color}/></a>
            <button id='new-quote'style={{background : color}} onClick={handleChange}>New Quote</button>
        </div>
    </div>
  )
}

export default App;