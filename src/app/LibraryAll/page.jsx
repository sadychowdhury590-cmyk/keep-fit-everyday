

import LibraryCard from  "../components/Cards/LibraryCard"

const getData = async () => {
  const res = await fetch("https://api.abcz.workers.dev/api/fitlog");

  if (!res.ok) {
    throw new Error("Failed to fetch workouts");
  }

  return res.json();
};

const Library = async () => {
  const datas = await getData();

  return (
    <section
      id="library"
      className="bg-[#0b0b0b] my-6 px-5 py-14 text-white md:px-8 md:py-20 lg:px-12"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section Heading */}
        <div className="mb-10">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-[#ccff00]">
            WORKOUT LIBRARY
          </p>

          <h2 className="text-4xl font-black uppercase tracking-tight sm:text-5xl md:text-6xl">
            THE LIBRARY
          </h2>

          <p className="mt-3 text-sm text-[#8b8d91] md:text-base">
            Twelve lifts covering every major muscle group.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {datas.map((data) => (
            <LibraryCard key={data.id} data={data} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Library;

