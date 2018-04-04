import React from 'react';

const FormErrors = ({ formErrors }) =>
  (
    <div className="formErrors">
      {
        Object.keys(formErrors)
          .map((fieldName) => {

            if (formErrors[fieldName].length > 0) {

              return (
                <p
                  className="alert alert-danger"
                  key={fieldName}
                >
                  {fieldName} {formErrors[fieldName]}
                </p>
              );

            }
            return '';

          })
      }
    </div>
  );

export default FormErrors;
