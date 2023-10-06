const ErrorPage = () => {
  return (
    <div className="flex flex-col justify-center space-y-3 items-center h-screen">
      <h1 className="text-2xl font-bold">Opps.......Error 404</h1>
      <p className="text-md text-gray-600">Sorry, the page you are looking for does not exist.</p>
    </div>
  );
};

export default ErrorPage;
