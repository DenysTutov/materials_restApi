import { Material } from 'components/Material/Material';

export const MaterialList = ({ materials, ...otherProps }) => {
  return (
    <ul>
      {materials.map(material => {
        return (
          <li key={material.id}>
            <Material material={material} {...otherProps} />
          </li>
        );
      })}
    </ul>
  );
};
