const Projects = ({ data }) => {
  return (
    <div className="
      grid 
      grid-cols-1 
      sm:grid-cols-2 
      lg:grid-cols-3 
      gap-4 
      p-4 md:p-10
    ">
      {data?.map((project) => (
        <div key={project.id} className="overflow-hidden">
          <img
            src={project.image}
            className="w-full h-[250px] object-cover hover:scale-110 transition"
          />
        </div>
      ))}
    </div>
  );
};
export default Projects;