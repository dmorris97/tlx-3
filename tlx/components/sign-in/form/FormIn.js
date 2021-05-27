import React from 'react';

const FormIn = ({ handleChange, label, ...otherProps }) => {
  return (
    <div className="FS-formRow">
      {label && (
        <label>
          {label}
        </label>
      )}

      <input className="FI-formInput" onChange={handleChange} {...otherProps} />
    </div>
  );
}

export default FormIn;