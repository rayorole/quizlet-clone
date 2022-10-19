import { PhotographIcon } from '@heroicons/react/solid';
import React, { useState } from 'react';

export default function Newset(props) {
  const [inputValues, setInputValues] = useState({});
  const [counter, setCounter] = useState(0);

  // const handleClick = () => {
  //   setCounter(counter + 1);
  //   console.log(counter);
  // };

  return (
    <div>
      {Array.from(Array(props.count)).map((c, index) => {
        return <p>Hey</p>;
      })}
    </div>
  );
}
