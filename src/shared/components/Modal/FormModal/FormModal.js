import React, { PureComponent } from 'react';
import Modal from '../Modal';

class FormModal extends PureComponent {

  state = {
    showModal: this.props.showModal,
  };

  // handleShow = () => this.setState({ showModal: true });

  componentWillReceiveProps(nextProps) {

    this.setState({ showModal: nextProps.showModal });

  }

  handleHide = () => {

    console.log(this.props);
    this.setState({ showModal: false });

  };

  showModal() {

    return this.state.showModal ? (
      <Modal>
        <div className="form-modal">
          <div
            className="modal-ovarlay"
            role="presentation"
            onClick={this.handleHide}
          />
          <div className="modal-body col-lg-4 col-md-6 col-xs-10">
            {this.props.children}
            <button
              className="btn btn-primary"
              onClick={this.handleHide}
            >
              Cancel
            </button>
          </div>
        </div>
      </Modal>
    ) : null;

  }

  render() {

    return (
      <div>
        {this.showModal()}
      </div>
    );

  }

}

export default FormModal;
