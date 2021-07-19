import {HashLoader} from "react-spinners";

const HashSpinner = ({isLoading = true, size = 75}) => {
    return (
        <div
            className="container min-h-screen max-w-full flex justify-center bg-gray-50 mx-auto"
            style={{
                position: "fixed",
                background: "#54545487",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                display: isLoading ? "block" : "none",
                zIndex: 9999,
            }}
        >
            <HashLoader
                color="#E97313"
                loading={isLoading}
                size={size}
                css={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                }}
            />
        </div>
    );
}

export default HashSpinner;
