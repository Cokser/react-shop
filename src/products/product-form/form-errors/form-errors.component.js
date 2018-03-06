import React from 'react';

export const FormErrorsComponent = ({ formErrors }) =>
  <div className='formErrors'>
    {Object.keys(formErrors)
      .map((fieldName, i) => {
        if (formErrors[fieldName].length > 0) {
          return (
            <p className="alert alert-danger"
              key={i}>
              {fieldName} {formErrors[fieldName]}
            </p>
          )
        } else {
          return '';
        }
      }
    )}
  </div>