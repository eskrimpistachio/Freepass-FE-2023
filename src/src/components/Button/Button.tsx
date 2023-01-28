import { Link } from "react-router-dom";

const Button = (props : any, direct : string)  => {
  return (
    <div className="bg-secondary rounded-xl text-lg px-12 py-3 2xl:px-16 2xl:py-4 2xl:text-xl font-bold">
      <Link to={direct}>{props.children}</Link>
    </div>
  );
};

export default Button;
