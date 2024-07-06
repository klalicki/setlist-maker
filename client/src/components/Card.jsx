const Card = ({ children, className, ...rest }) => {
  return (
    <div
      className={"bg-white bg-opacity-75 rounded shadow p-3 " + className}
      {...rest}
    >
      {children}
    </div>
  );
};
export default Card;
