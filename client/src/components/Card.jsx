const Card = ({ children, className, ...rest }) => {
  return (
    <div
      className={"bg-white bg-opacity-75 rounded p-3 shadow " + className}
      {...rest}
    >
      {children}
    </div>
  );
};
export default Card;
