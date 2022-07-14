import { Component } from 'react';
import { Modal } from 'components/Modal/Modal';

export class Material extends Component {
  state = {
    isModalOpen: false,
  };

  toggleModal = () => {
    this.setState(prevState => ({ isModalOpen: !prevState.isModalOpen }));
  };

  handleGetUpdateFields = newTitle => {
    this.setState({ updateFields: newTitle });
  };

  render() {
    const { material, onDeleteMaterial, onUpdateMaterial } = this.props;

    return (
      <>
        <p>Title: {material.title}</p>
        <p>Link: {material.link}</p>
        <button type="button" onClick={() => onDeleteMaterial(material.id)}>
          Delete
        </button>
        <button type="button" onClick={this.toggleModal}>
          Update
        </button>
        <hr />

        {this.state.isModalOpen && (
          <Modal
            onClose={this.toggleModal}
            onUpdateMaterial={onUpdateMaterial}
            id={material.id}
          />
        )}
      </>
    );
  }
}
