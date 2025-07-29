export interface TextFieldProps {
  /** Optional click handler */
  onChange?: () => void;
  placeholder?: string;
}

/** Primary UI component for user interaction */
export const TextField = ({ placeholder, ...props }: TextFieldProps) => {
  return (
    <input
      className="border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      placeholder={placeholder ?? ""}
      {...props}
    />
  );
};
