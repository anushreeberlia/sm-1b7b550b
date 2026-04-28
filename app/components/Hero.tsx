const Hero = () => {
  return (
    <div className="bg-cover bg-center h-64 flex items-center justify-center text-white" style={{backgroundImage: 'url(/hero-image.jpg)'}}>
      <h1 className="text-4xl font-bold">Drive Your Dream Car Today</h1>
      <button className="bg-accent-color mt-4">Book Test Drive</button>
    </div>
  );
};

export default Hero;
