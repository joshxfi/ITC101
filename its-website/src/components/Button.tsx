export const Button = ({ text }: { text: string }) => {
  return (
    <button
      type='button'
      className='from-green-500 to-gray-800 bg-gradient-to-br shadow-md font-medium rounded px-8 py-3 text-sm md:text-base transition-all'
    >
      {text}
    </button>
  );
};
