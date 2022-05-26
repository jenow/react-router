import { Link } from "react-router-dom";

function Page1() {
  return (
    <div>
      <h2>Page 1</h2>
      <Link to={`/page2`}>Go back to Page 2</Link>
    </div>
  );
}

export default Page1;