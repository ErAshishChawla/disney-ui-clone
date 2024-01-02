import useClasses from "../hooks/useClasses";

function Button({ children, primary, transparent, className, ...rest }) {
  const classNames = useClasses(
    "flex justify-center items-center border rounded px-4 py-2 uppercase cursor-pointer",
    {
      "bg-transparent text-[#f9f9f9] border-[#f9f9f9] hover:bg-[#f3f3f333]":
        transparent,
      "bg-[#0063e5] text-[#f9f9f9] border-none hover:bg-[#0063e5DD]": primary,
    },
    className
  );
  return (
    <button className={classNames} {...rest}>
      {children}
    </button>
  );
}

export default Button;
