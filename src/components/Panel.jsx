import useClasses from "../hooks/useClasses";

function Panel({ children, className, ...rest }) {
  const classNames = useClasses(
    "flex flex-row justify-center items-center",
    className
  );
  return (
    <div className={classNames} {...rest}>
      {children}
    </div>
  );
}
export default Panel;
