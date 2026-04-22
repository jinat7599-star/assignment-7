const LoadingSpinner = () => {
  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <section className="text-center">
      
        <div 
          className="mx-auto mb-4 h-16 w-16 animate-spin rounded-full border-4 border-slate-700 border-t-green-500"
          aria-hidden="true"
        />
        
        <p className="text-lg text-slate-300">
          Loading friends...
        </p>
      </section>
    </div>
  );
};

export default LoadingSpinner;