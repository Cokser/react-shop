import React from 'react';

// export const ValidatorComp = ({ validators }) =>
//   <div className='formErrors'>
//     {Object.keys(validators)
//       .map((fieldName, i) => {
//         if (validators[fieldName].length > 0) {
//           return (
//             <p className="alert alert-danger"
//               key={i}>
//               {fieldName} {validators[fieldName]}
//             </p>
//           )
//         } else {
//           return '';
//         }
//       }
//       )}
//   </div>

export default class Validator extends React.Component  {

  constructor(props) {
    super(props);

    this.errorsList = [];
    this.state = {
      value: props.validateValue,
      validators: props.validators,
      valid: props.validValue
    };
  }

  isValid(fieldName) {
    this.props.onValid(fieldName, this.props.validateValue);
  }

  render() {
    return (
      <div className='formErrors'>
        {Object.keys(this.state.validators)
          .map((fieldName, i) => {

            switch (fieldName) {
              case 'min': {
                if (this.props.validateValue.length < this.state.validators[fieldName]) {
                  this.errorsList.push(fieldName);
                } else {
                  return;
                }
                break;
              }
              case 'max': {
                if (this.props.validateValue.length > this.state.validators[fieldName]) {
                  this.errorsList.push(fieldName);
                } else {
                  this.isValid(fieldName);
                  // console.log(this.props);
                  return;
                }
                break;
              }
              case 'number': {
                if (typeof(parseFloat(this.props.validateValue)) !== 'number') {
                  this.errorsList.push(fieldName);
                } else {
                  return;
                }
                break;
              }
              case 'required': {
                if (this.props.validateValue.length === 0) {
                  this.errorsList.push(fieldName);
                } else {
                  return;
                }
                break;
              }
              default: {
                break;
              }
            }

            if (this.errorsList.length > 0) {
              return (
                <p className="alert alert-danger" key={i} >
                  {fieldName} error
                </p>
              )
            } else {
              return this.props.valid = true;
            }
          }
          )}
      </div>
    )
  }
}