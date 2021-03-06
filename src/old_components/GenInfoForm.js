/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';
import Input from "../components/ElemInput";
import Button from '../components/ElemButton';
import '../styles/formStyles.css';

class GenInfoForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { changeFunc, submitFunc, infoType } = this.props;

    return (
      <form id="genInfoForm" onSubmit={submitFunc} name={infoType}>
        <h2>General Info</h2>
        <Input 
          inputLabel="Name" 
          keyName="name" 
          section="newGenInfo" 
          changeFunc={changeFunc} 
        />
        <Input 
          inputLabel="Address" 
          keyName="address" 
          section="newGenInfo" 
          changeFunc={changeFunc} 
        />
        <div className="addressInfo">
          <Input 
            inputLabel="City" 
            keyName="city" 
            section="newGenInfo" 
            changeFunc={changeFunc} 
          />
          <Input 
            inputLabel="State" 
            keyName="state" 
            section="newGenInfo" 
            changeFunc={changeFunc} />
          <Input 
            inputLabel="Zip" 
            keyName="zip" 
            section="newGenInfo" 
            changeFunc={changeFunc} 
            inputType="number" />
        </div>
        <div>
          <Input 
            inputLabel="Phone" 
            keyName="phone" 
            inputType="number" 
            section="newGenInfo" 
            changeFunc={changeFunc} 
          />
          <Input 
            inputLabel="Email" 
            keyName="email" 
            inputType="email" 
            section="newGenInfo" 
            changeFunc={changeFunc} 
          />
        </div>
        <Button type="submit" btnText="Save" />
      </form>
    )
  }
}
export default GenInfoForm;