export interface ILabelProps {
  targetField: string;
  children: React.ReactNode;
}

const Label: React.FC<ILabelProps> = ({ targetField, children }) => {
  return (
    <label
      htmlFor={targetField}
      className="block mb-2 text-sm font-medium text-gray-900"
    >
      {children}
    </label>
  );
}

export default Label;