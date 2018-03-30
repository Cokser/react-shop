import React, { Component } from 'react';
import FormErrors from './FormErrors/FormErrors';

export default class ProductForm extends Component {

  constructor(props) {

    super(props);

    this.initialState = {
      formErrors: { name: '', count: '' },
      nameValid: false,
      countValid: false,
      formValid: false,
      name: '',
      description: '',
      count: '',
      material: '',
    };
    this.state = this.initialState;

    this.handleSubmit = this.handleSubmit.bind(this);

  }

  componentDidMount() {

    setTimeout(() => {

      this.nameInput.focus();

    }, 10);

  }

  handleChange = (event) => {

    const { target: { name, value } } = event;

    this.setState(
      { [name]: value },
      () => {

        this.validateField(name, value);

      },
    );

  };

  validateField(fieldName, value) {

    const formState = Object.assign(this.state);
    const fieldValidationErrors = formState.formErrors;

    let { nameValid } = formState;
    let { countValid } = formState;

    switch (fieldName) {

      case 'name': {

        const requireValid = value.length > 0;
        fieldValidationErrors.name = requireValid ? '' : ' is required';

        nameValid = value.length <= 32;
        fieldValidationErrors.name = nameValid ? '' : ' is too long';

        nameValid = !!(requireValid && nameValid);
        break;

      }
      case 'count': {

        const requireValid = value.length > 0;
        fieldValidationErrors.count = requireValid ? '' : ' is required';

        countValid = !Number.isNaN(value);
        fieldValidationErrors.count = countValid ? '' : ' is not a number';

        countValid = (requireValid) ? countValid : requireValid;

        break;

      }
      default:
        break;

    }

    this.setState(
      {
        formErrors: fieldValidationErrors,
        nameValid,
        countValid,
      },
      this.validateForm,
    );

  }

  validateForm() {

    this.setState({
      formValid:
      this.state.nameValid && this.state.countValid,
    });

  }

  handleSubmit = (event) => {

    event.preventDefault();

    const stateClone = Object.assign(this.state);

    if (stateClone.name.length === 0 || stateClone.count.length === 0) {

      const fieldValidationErrors = stateClone.formErrors;

      const requireNameValid = stateClone.name.length > 0;
      fieldValidationErrors.name = requireNameValid ? '' : ' is required';

      const requireCountValid = stateClone.count.length > 0;
      fieldValidationErrors.count = requireCountValid ? '' : ' is required';

      this.setState(
        {
          formErrors: fieldValidationErrors,
          nameValid: requireNameValid,
          countValid: requireCountValid,
        },
        this.validateForm,
      );

    }

    if (stateClone.formValid) {

      if (stateClone.description.length === 0) {

        stateClone.description = stateClone.name;

      }

      this.props.addSubmitted({
        name: stateClone.name,
        description: stateClone.description,
        count: Number.parseInt(stateClone.count, 10),
        id: this.props.id,
        material: stateClone.material,
      });

      this.setState(this.initialState);

    }

  };

  render() {

    return (
      <div className="row">
        <form
          onSubmit={this.handleSubmit}
          noValidate
          className="col-md-8 col-xs-10 mx-auto"
        >
          <div className="panel panel-default">
            <FormErrors formErrors={this.state.formErrors} />
          </div>
          <div className="form-group">
            <label htmlFor="name">Product Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={this.state.name}
              ref={(input) => {

                this.nameInput = input;

              }}
              placeholder="Enter Name"
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Product Description</label>
            <input
              type="text"
              className="form-control"
              id="description"
              name="description"
              value={this.state.description}
              placeholder="Enter Description"
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="material">Product Material</label>
            <input
              type="text"
              className="form-control"
              id="material"
              name="material"
              value={this.state.material}
              placeholder="Enter Material"
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="count">Product Count</label>
            <input
              type="number"
              min="1"
              className="form-control"
              name="count"
              value={this.state.count}
              id="count"
              placeholder="Enter Count"
              onChange={this.handleChange}
            />
          </div>
          <input
            type="submit"
            className="btn btn-primary"
            value="Add Product"
          />
        </form>
      </div>
    );

  }

}
