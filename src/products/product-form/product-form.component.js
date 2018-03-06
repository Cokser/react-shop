import React from "react";
import "./product-form.component.css";
import { FormErrorsComponent } from "./form-errors/form-errors.component";

export default class ProductFormComponent extends React.Component {
  
  constructor(props) {

    super(props);

    this.initialState = {
      formErrors: { name: '', count: '' },
      nameValid: false,
      countValid: false,
      formValid: false,
      name: '',
      description:'',
      count: '',
      material: ''
    };
    this.state = this.initialState;
  }

  componentDidMount() {
    setTimeout(function () {
      this.nameInput.focus();
    }.bind(this), 10);
  }

  handleChange(event) {

    const name = event.target.name;
    const value = event.target.value;

    this.setState(
      {[name]: value},
      () => {
        this.validateField(name, value);
      }
    );
  }

  validateField(fieldName, value) {
    
    let formState = Object.assign(this.state);

    let fieldValidationErrors = formState.formErrors;
    let nameValid = formState.nameValid;
    let countValid = formState.countValid;

    switch (fieldName) {
      case 'name': {

        let requireValid = value.length > 0;
        fieldValidationErrors.name = requireValid ? '' : ' is required';

        nameValid = value.length <= 32;
        fieldValidationErrors.name = nameValid ? '' : ' is too long';

        nameValid = !!(requireValid && nameValid);
        break;
      }
      case 'count': {

        let requireValid = value.length > 0;
        fieldValidationErrors.count = requireValid ? '' : ' is required';

        countValid = !isNaN(value);
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
        nameValid: nameValid,
        countValid: countValid
      },
      this.validateForm
    );
  }

  validateForm() {

    this.setState(
      { formValid: 
        this.state.nameValid && this.state.countValid 
      }
    );
  }

  errorClass(error) {
    return error.length === 0 ? '' : 'has-error';
  }

  handleSubmit(event) {

    event.preventDefault(); 

    const stateClone = Object.assign(this.state);

    if (stateClone.name.length === 0 || stateClone.count.length === 0) {
      let fieldValidationErrors = stateClone.formErrors;

      let requireNameValid = stateClone.name.length > 0;
      fieldValidationErrors.name = requireNameValid ? '' : ' is required';

      let requireCountValid = stateClone.count.length > 0;
      fieldValidationErrors.count = requireCountValid ? '' : ' is required';

      this.setState({
          formErrors: fieldValidationErrors,
          nameValid: requireNameValid,
          countValid: requireCountValid
        },
        this.validateForm
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
        material: stateClone.material
      });

      this.setState(this.initialState);
    }
  }

  render() {

    return (
      <div className="row">
        <form
          onSubmit={this.handleSubmit.bind(this)}
          noValidate
          className="col-md-8 col-xs-10 mx-auto"
        >
          <div className="panel panel-default">
            <FormErrorsComponent formErrors={this.state.formErrors} />
          </div>
          <div className="form-group">
            <label htmlFor="name">Product Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={this.state.name}
              ref={(input) => { this.nameInput = input; }}
              placeholder="Enter Name"
              onChange={this.handleChange.bind(this)}
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
              onChange={this.handleChange.bind(this)}
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
              onChange={this.handleChange.bind(this)}
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
              onChange={this.handleChange.bind(this)}
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
