import { Component } from 'react';
import * as API from '../services/api';
import { MaterialEditor } from './MaterialEditor/MaterialEditor';
import { MaterialList } from './MaterialList/MaterialList';

export class App extends Component {
  state = {
    materials: [],
  };

  async componentDidMount() {
    try {
      const materialsData = await API.getMaterial();
      this.setState({ materials: materialsData });
    } catch (error) {
      console.log(error);
    }
  }

  addMaterial = async values => {
    try {
      const newMaterial = await API.addMaterial(values);
      this.setState(prev => ({ materials: [...prev.materials, newMaterial] }));
    } catch (error) {
      console.log(error);
    }
  };

  handleDeleteMaterial = async id => {
    try {
      await API.deleteMaterial(id);

      this.setState(prevState => ({
        materials: prevState.materials.filter(material => material.id !== id),
      }));
    } catch (error) {
      console.log(error);
    }
  };

  handleUpdateMaterial = async fields => {
    const updatedMaterial = await API.updateMaterial(fields);

    this.setState(prevState => ({
      materials: prevState.materials.map(material =>
        material.id === fields.id ? updatedMaterial : material
      ),
    }));
  };

  render() {
    const { materials } = this.state;

    return (
      <div>
        <MaterialEditor onSubmit={this.addMaterial} />

        <MaterialList
          materials={materials}
          onDeleteMaterial={this.handleDeleteMaterial}
          onUpdateMaterial={this.handleUpdateMaterial}
        />
      </div>
    );
  }
}
