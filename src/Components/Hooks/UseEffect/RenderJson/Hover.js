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
import React, { useRef, useEffect } from 'react';

export default function DisplayData({data}) {
  const buttonRefs = useRef([]);

  useEffect(() => {

    const wrappers = document.querySelectorAll('.wrapper');

    wrappers.forEach((button) => {
      button.addEventListener('mouseover', handleMouseOver);
      button.addEventListener('mouseout', handleMouseOut);

      return () => {
        button.removeEventListener('mouseover', handleMouseOver);
        button.removeEventListener('mouseout', handleMouseOut);
      };
    });
  }, []);

  const handleMouseOver = (event) => {
    console.log(event.target.id);
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
          </p>
        </div>
      ))}
    </div>
  );
}