/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';
import '../App.css';
import Button from './ElemButton';

class HeaderTemplate extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {
      headerData,
      editFunc,
      infoType,
      isPublished,
    } = this.props;

    const renderHeader = () => {
      if(isPublished === false) {
        return (
          <div className='resumeHeader resume'>
            <div className='name bolded larger'>{headerData[0].Name}</div>
            <div className='address1'>
              {headerData[0].Address} | {headerData[0].City}, 
              {headerData[0].State} {headerData[0].Zip}
            </div>
            <div className='contacts'>
              {headerData[0].Email} | {headerData[0].Phone}
            </div>
            <Button 
              btnText="Edit" 
              clickFunc={editFunc} 
              infoType={infoType} 
              sectionKey="newGenInfo" 
              arrIndex='0' 
              order='regularBtn' />
          </div>
        )
      } else {
        return (
          <div className='pubHeader pubResume'>
          <div className='name bolded larger'>{headerData[0].Name}</div>
          <div className='address1'>
            {headerData[0].Address} | {headerData[0].City}, 
            {headerData[0].State} {headerData[0].Zip}
          </div>
          <div className='contacts'>
            {headerData[0].Email} | {headerData[0].Phone}
          </div>
        </div>
        )
      }
    }

    return (
      <div>
        {renderHeader()}
      </div>  
    )
  }
}
export default HeaderTemplate;