const AdvancedSearch = ({
  beds,
  setBeds,
  bathrooms,
  setBathrooms,
  propertyType,
  setPropertyType,
  city,
  setCity,
  minPropertyPrice,
  setMinPropertyPrice,
  maxPropertyPrice,
  setMaxPropertyPrice,
  onSearch,
  onCancel,
}) => {
  const handleSearch = async (e) => {
    e.preventDefault();
    onSearch();
  };

  const handleCancel = async (e) => {
    e.preventDefault();
    onCancel();
  };
  return (
    <div className="p-3 border dark:border-dark">
      <h1 className="font-semibold">Recherche Avancée</h1>
      <form>
        <div className="mt-3">
          <label
            htmlFor="propertyType"
            className="text-medium font-semibold text-slate-900"
          >
            Address
          </label>
          <select
            name=""
            id=""
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="flex h-9 w-full !rounded-md !border border-zinc-300 bg-white dark:border-zinc-600 dark:bg-zinc-800 px-3 py-1 !shadow-sm transition-colors placeholder:text-slate-400 focus-visible:outline-none focus:border-transparent focus-visible:ring-2 focus-visible:ring-primary disabled:cursor-not-allowed disabled:opacity-50"
          >
            <option value="">Ville/Village</option>
            <option value="Cotonou">Cotonou</option>
            <option value="Ouidah">Ouidah</option>
            <option value="Porto Novo">Porto Novo</option>
            <option value="Parakou">Parakou</option>
            <option value="Lokossa">Lokossa</option>
          </select>
        </div>
        <div className="mt-3">
          <label
            htmlFor="propertyType"
            className="text-medium font-semibold text-slate-900"
          >
            Type de Propriete
          </label>
          <select
            name=""
            id=""
            value={propertyType}
            onChange={(e) => setPropertyType(e.target.value)}
            className="flex h-9 w-full !rounded-md !border border-zinc-300 bg-white dark:border-zinc-600 dark:bg-zinc-800 px-3 py-1 !shadow-sm transition-colors placeholder:text-slate-400 focus-visible:outline-none focus:border-transparent focus-visible:ring-2 focus-visible:ring-primary disabled:cursor-not-allowed disabled:opacity-50"
          >
            <option value="">Proprietes</option>
            <option value="Villa">Villa</option>
            <option value="Bureau">Bureau</option>
            <option value="Appartement">Appartement</option>
            <option value="mansions">Maison</option>
            <option value="Espace commercial">Espace commercial</option>
          </select>
        </div>

        <div className="gap-2 mt-3 flex-align-center">
          <div>
            <label
              htmlFor="douche"
              className="text-medium font-semibold text-slate-900"
            >
              Chambre
            </label>
            <input
              type="number"
              value={beds}
              onChange={(e) => setBeds(e.target.value)}
              className="flex h-9 w-full !rounded-md !border border-zinc-300 bg-white dark:border-zinc-600 dark:bg-zinc-800 px-3 py-1 !shadow-sm transition-colors placeholder:text-slate-400 focus-visible:outline-none focus:border-transparent focus-visible:ring-2 focus-visible:ring-primary disabled:cursor-not-allowed disabled:opacity-50"
            />
          </div>
          <div>
            <label
              htmlFor="douche"
              className="text-medium font-semibold text-slate-900"
            >
              Douche
            </label>
            <input
              type="number"
              value={bathrooms}
              onChange={(e) => setBathrooms(e.target.value)}
              className="flex h-9 w-full !rounded-md !border border-zinc-300 bg-white dark:border-zinc-600 dark:bg-zinc-800 px-3 py-1 !shadow-sm transition-colors placeholder:text-slate-400 focus-visible:outline-none focus:border-transparent focus-visible:ring-2 focus-visible:ring-primary disabled:cursor-not-allowed disabled:opacity-50"
            />
          </div>
        </div>

        <div className="gap-2 mt-3 flex-align-center">
          <div>
            <label
              htmlFor="price"
              className="text-medium font-semibold text-slate-900"
            >
              Prix Min
            </label>
            <input
              type="number"
              value={minPropertyPrice}
              onChange={(e) => setMinPropertyPrice(e.target.value)}
              className="flex h-9 w-full !rounded-md !border border-zinc-300 bg-white dark:border-zinc-600 dark:bg-zinc-800 px-3 py-1 !shadow-sm transition-colors placeholder:text-slate-400 focus-visible:outline-none focus:border-transparent focus-visible:ring-2 focus-visible:ring-primary disabled:cursor-not-allowed disabled:opacity-50"
            />
          </div>
          <div>
            <label
              htmlFor="douche"
              className="text-medium font-semibold text-slate-900"
            >
              Prix Max
            </label>
            <input
              type="number"
              value={maxPropertyPrice}
              onChange={(e) => setMaxPropertyPrice(e.target.value)}
              className="flex h-9 w-full !rounded-md !border border-zinc-300 bg-white dark:border-zinc-600 dark:bg-zinc-800 px-3 py-1 !shadow-sm transition-colors placeholder:text-slate-400 focus-visible:outline-none focus:border-transparent focus-visible:ring-2 focus-visible:ring-primary disabled:cursor-not-allowed disabled:opacity-50"
            />
          </div>
        </div>
        <div className="d-flex gap-4 ">
          <button
            className="btn bg-primary w-full mt-4 text-slate-200 rounded-2xl"
            onClick={handleSearch}
          >
            Rechercher
          </button>

          <button
            className="btn bg-secondary w-full mt-4 text-slate-200 rounded-2xl"
            onClick={handleCancel}
          >
            Annuler
          </button>
        </div>
      </form>
    </div>
  );
};

export default AdvancedSearch;
