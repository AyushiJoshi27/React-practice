/*import React, {useEffect, useState} from "react";

export default function DisplayData({data}) {

    const [hoveredButtonId, setHoveredButtonId] = useState(null);

  useEffect(() => {
    const HandleMouseEnter = (e) => {
      setHoveredButtonId(Number(e.target.id));
      //console.log(e.target.id);
    }

    const HandleMouseLeave = (e) => {
      setHoveredButtonId(Number(null));
      //console.log(e.target.id);
    }

    console.log(HandleMouseEnter === HandleMouseLeave);

    const buttons = document.querySelectorAll('.wrapper');

    buttons.forEach((buttons) => {
      buttons.addEventListener("mouseenter", HandleMouseEnter);
      buttons.addEventListener("mouseleave", HandleMouseLeave);
    });

    return () => {
      buttons.forEach((button) => {
        button.removeEventListener("mouseenter", HandleMouseEnter);
        button.removeEventListener("mouseleave", HandleMouseLeave);
      });
    };
  }, []);

    return (
        <div>
            {data.map((obj) => (
                <div className="wrapper" id={obj.id} key={obj.id}>
                    <p>
                        <button >{obj.a}</button>
                    </p>
                </div>
            ))}
        </div>
    );
} */
import React, { useRef, useEffect, useState } from 'react';

export default function DisplayData({data}) {
  const buttonRefs = useRef([]);
  const [btnId, setBtnId] = useState([]);

  useEffect(() => {

    const wrappers = document.querySelectorAll('.wrapper');
    const toBtn = document.querySelectorAll('.add-to-btn');

    toBtn.forEach((obj) => {
      obj.addEventListener('click', onBtn);
    })

    wrappers.forEach((button) => {
      button.addEventListener('mouseover', handleMouseOver);
      button.addEventListener('mouseout', handleMouseOut);

      return () => {
        button.removeEventListener('mouseover', handleMouseOver);
        button.removeEventListener('mouseout', handleMouseOut);
      };
    });
  }, []);

  const onBtn = (e) => {
    setBtnId(e.target.id);
  }

  console.log(btnId);

  const handleMouseOver = (event) => {
    event.target.closest('.wrapper').style.backgroundColor = 'red';
  };

  const handleMouseOut = (event) => {
    event.target.closest('.wrapper').style.backgroundColor = 'white';
  };

  return (
    <div>
      {data.map((obj, index) => (
        <div className="wrapper" id={obj.id} key={obj.id}>
          <p>
            <button id={obj.id} ref={(el) => (buttonRefs.current[index] = el)}>
              {obj.a}
            </button>
            <button className='add-to-btn' id={obj.id}>add data</button>
          </p>
        </div>
      ))}
    </div>
  );
}