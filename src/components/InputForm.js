/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';
import '../App.css';
import Input from "./ElemInput";
import Button from "./ElemButton";

class InputForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { heading, 
            infoType, 
            sectionKey, 
            details, 
            inputList, 
            changeFunc, 
            submitFunc,
            updateFunc,
            cancelFunc } = this.props;

    const renderInputs = () => {
      return(
        inputList.map((input, i) => {
          const keyID = i;
          const inputName = input[0];
          const inputOrder = input[1];
 
          return(
            <Input
              infoType={infoType}
              sectionKey={sectionKey}
              inputValue={details[inputName]}

              defaultText={inputName}
              elemClass={inputOrder + "Form"}
              elemType={inputList[i][2]}
              elemLength={inputList[i][3]}

              key={keyID}

              changeFunc={changeFunc}
            />
          )
        })
      )
    }

    return (
      <form 
        data-name={infoType} 
        data-section={sectionKey}
        className={infoType + 'Form'} 
        onSubmit={submitFunc}
      >
        <h2 className="heading">{heading}</h2>
        {renderInputs()}

        <div className='bottomForm'>
        <Button 
          type="submit" 
          order="regularBtn" 
          btnText="Save" 
          section={sectionKey} 
          updateFunc={updateFunc}
         />     
        <Button 
          type='button'
          order="regularBtn" 
          btnText="Cancel" 
          section={sectionKey} 
          clickFunc={cancelFunc}
         />  
        </div>
      </form>
    )
  }
}
export default InputForm;