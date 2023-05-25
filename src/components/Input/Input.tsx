interface IInputProps {
  id: string;
  type?: string;
  value: any;
  disabled?: boolean;
  onChange: (event: React.FormEvent<HTMLInputElement>) => void;
}

const Input: React.FC<IInputProps> = ({
  id,
  type = 'text',
  value,
  disabled,
  onChange
}) => (
  <input
    id={id}
    type={type}
    value={value}
    disabled={disabled}
    onChange={onChange}
    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
    required
  />
);

export default Input;