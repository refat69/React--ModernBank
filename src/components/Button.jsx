export const Button = ({ styles }) => {
  return (
    <button
      type="button"
      className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient hover:bg-sky-700 rounded-[10px] outline-none ${styles}`}>
      Get Started
    </button>
  );
};
