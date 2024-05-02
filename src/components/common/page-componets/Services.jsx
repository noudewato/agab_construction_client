const Services = () => {
  return (
    <div className="py-10">
      <div className="text-center">
        <h1 className="mx-auto text-primary text-2xl font-bold my-[1rem]">Nos Services</h1>
        <h1 className="heading">
          des services tres spécialises fournis dans notre domaine
        </h1>
      </div>
      {/* <div className="grid grid-cols-1 gap-4 mt-5 sm:grid-cols-2 md:grid-cols-3">
        {services.map(({ id, name, icon, text }) => (
          <div
            className="p-3 text-center rounded-lg hover:card-shadow hover:border-t-4 hover:border-t-primary dark:hover:bg-card-dark"
            key={id}
          >
            <div className="icon-box !opacity-100 !w-14 !h-14 mx-auto !bg-primary/20 text-primary hover:!bg-primary hover:text-white">
              <div className="text-2xl"> {icon}</div>
            </div>
            <h1 className="mt-2 heading !text-xl">{name}</h1>
            <p className="mt-2">{text}</p>
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default Services;
