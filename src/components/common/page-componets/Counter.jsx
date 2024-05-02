const Counter = () => {
  return (
    <div className="flex-wrap justify-center gap-4 px-4 py-8 flex-align-center sm:justify-between bg-secondary">
      <div className="text-center">
        <h1 className="heading !text-slate-100">12+</h1>
        <p className="text-slate-100">Projets Rénovates</p>
      </div>
      <div className="text-center">
        <h1 className="heading !text-slate-100">10+</h1>
        <p className="text-slate-100">Membres D'Equipe</p>
      </div>
      <div className="text-center">
        <h1 className="heading !text-slate-100">15+</h1>
        <p className="text-slate-100">Projets Terminés</p>
      </div>
      <div className="text-center">
        <h1 className="heading !text-slate-100">100%</h1>
        <p className="text-slate-100">Clients Satisfaits</p>
      </div>
    </div>
  );
};

export default Counter;
