import React from 'react';
import styled from 'styled-components';
import {
    useHref,
    useLinkClickHandler,
  } from "react-router-dom";
  
  const StyledLink = styled("a", { color: "fuchsia" });
  
  const Link = React.forwardRef(
    (
      {
        onClick,
        replace = false,
        state,
        target,
        to,
        ...rest
      },
      ref
    ) => {
      let href = useHref(to);
      let handleClick = useLinkClickHandler(to, {
        replace,
        state,
        target,
      });
  
      return (
        <StyledLink
          {...rest}
          href={href}
          onClick={(event) => {
            onClick?.(event);
            if (!event.defaultPrevented) {
              handleClick(event);
            }
          }}
          ref={ref}
          target={target}
        />
      );
    }
  );

export default Link;
/*
function NewCompo() {
    return (
        <Link to="/" target="/" >HEllo</Link>       
    )
}

export default NewCompo;*/