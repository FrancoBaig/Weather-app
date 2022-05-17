import react from "react";
import SyncLoader from "react-spinners/SyncLoader";

function Loader({ loading }) {
    return (
        <div className="loader">
            <SyncLoader
                className="spinner"
                color={"#e7e7eb"}
                loading={loading}
                size={15}
            />
        </div>
    );
}

export default Loader;
