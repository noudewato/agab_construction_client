const Form = () => {
  return (
    <div className="pt-10 pb-8">
      <div className="flex-col gap-4 flex-align-center sm:flex-row">
        <div className="flex-1 w-full">
          <p>Noms</p>
          <input type="text" className="w-full input" placeholder="Noms.." />
        </div>
        <div className="flex-1 w-full">
          <p>Prenoms</p>
          <input type="text" className="w-full input" placeholder="Prenoms.." />
        </div>
      </div>
      <div className="mt-4">
        <p>Address Email</p>
        <input
          type="text"
          className="w-full input"
          placeholder="Address Email.."
        />
      </div>
      <div className="mt-4">
        <p>Message</p>
        <textarea
          rows={4}
          className="w-full input"
          placeholder="Message.."
        ></textarea>
      </div>
      <div className="mt-4 flex-center-center">
        <button className="btn btn-primary">Message</button>
      </div>
    </div>
  );
};

export default Form;
