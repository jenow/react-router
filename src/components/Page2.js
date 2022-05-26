import {Link} from "react-router-dom";

function Page2() {
    return (
        <div>
            <h2>Page 2</h2>
            <Link to={`/`}>Go to Page 1</Link>
        </div>
    );
}

export default Page2;