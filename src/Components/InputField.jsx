function InputField({ label, type = "text", ...props }) {
  return (
    <div className="flex flex-col">
      <label className="text-gray-700 mb-1 font-medium">{label}</label>
      <input
        type={type}
        className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 transition duration-200"
        {...props}
      />
    </div>
  );
}

export default InputField;
