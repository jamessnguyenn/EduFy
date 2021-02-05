import React, { useEffect, useState } from "react";
import "./motivation.css";

export default function Motivation() {
  const [quote, setQuote] = useState(
    "Don't count the days make the days count."
  );
  let quotesArr = [
    "Don't count the days make the days count.",
    "If people are doubting how far you can go , go so far that you can't hear them anymore.",
    "Why stop dreaming when you are awake.",
    "The only time you should look back, is to see how far you've come.",
    "I am in charge of how I feel and today I am choosing happiness.",
    "Be willing to go alone! Many who started with you won't finish with you.",
    "If you're making mistakes it mean you're out there doing something.",
    "Love the life you live. Live the life you love.",
    "Give your best everyday.",
    "Dream Believe. Do. Repeat.",
    "Difficult Roads lead to Beautiful Destinations",
    "Be Optimistic.",
    "You Got This.",
    "Fuel Your Dream."
  ];

  // Got random number genrator from:
  // https://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range

  /**
   * Returns a random integer between min (inclusive) and max (inclusive).
   * The value is no lower than min (or the next integer greater than min
   * if min isn't an integer) and no greater than max (or the next integer
   * lower than max if max isn't an integer).
   * Using Math.round() will give you a non-uniform distribution!
   */
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  useEffect(() => {
    const int = getRandomInt(0, quotesArr.length - 1);
    setQuote(quotesArr[int]);
  }, []);

  return (
    <div className="templateBG motivationContainer  shadow">
      <h3 className="motivationalQuotes"> Message for You</h3>
      <p className="quote"> {quote}</p>
    </div>
  );
}
