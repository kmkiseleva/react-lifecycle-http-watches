import Watch from "./Watch/Watch";

const WorldWatches = ({ watches, deleteWatches }) => {
  return (
    <div className="row pt-5">
      <div className="col d-flex flex-wrap">
        {watches.map(({ id, name, timeZone }) => (
          <Watch
            key={id}
            id={id}
            title={name}
            timeZone={timeZone}
            deleteWatches={deleteWatches}
          />
        ))}
      </div>
    </div>
  );
};

export default WorldWatches;
