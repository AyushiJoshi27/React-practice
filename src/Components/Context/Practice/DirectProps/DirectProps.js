import React from 'react';
import ButtonHolder from './ButtonHolder';
import { ContextThemeColor } from './DirectContext';

class DirectProps extends React.Component {
  render() {
    return (
      <ContextThemeColor.Provider value="blue">           
        <ButtonHolder />
      </ContextThemeColor.Provider>         
    )
  }
}
export default DirectProps;
export {ContextThemeColor};
