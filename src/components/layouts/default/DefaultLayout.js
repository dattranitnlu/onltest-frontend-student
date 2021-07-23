const DefaultLayout = ({children}) => {
    return (
        <div className="container min-h-screen max-w-full flex justify-center bg-gray-100 mx-auto">
            <div className="flex mx-auto my-auto bg-white max-w-full">
                {children}
            </div>
        </div>
    );
}

export default DefaultLayout;
