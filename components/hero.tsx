import JobCard from "./jobCard";
export default function Hero() {
  const arr: Array<number> = [1, 2, 3, 4, 5, 6, 7];
  return (
    <div className="w-full min-h-screen text-red-500 py-20 max-sm:pt-30">
      <section>
        <div className="w-full flex flex-wrap md:space-x-4 space-y-4 justify-center md:justify-start items-center">
          {arr.map((item, index) => (
            <JobCard
              key={index}
              id="1"
              title="Product Designer"
              company="ClassPass"
              location="Manchester, UK"
              description="ClassPass is looking for Product Designer to help us build beautiful experiences..."
              type="Full Time"
              categories={["Marketing", "Design"]}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
