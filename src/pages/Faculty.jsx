import faculty from "../data/facultyData";

const Faculty = () => {
  return (
    <div className="pt-[6rem] font-[Poppins] py-16 px-6 max-w-7xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-bold text-blue-700 text-center mb-12">
        Meet Our Faculty
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {faculty.map((member) => (
          <div
            key={member.id}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-6 text-center"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-42 h-42 mx-auto rounded-full border-4 border-blue-100 mb-4"
            />
            <h2 className="text-xl font-semibold text-blue-700">{member.name}</h2>
            <p className="text-gray-600 text-sm mb-3">{member.education}</p>
            <div className="text-sm text-gray-700 space-y-1">
              <p>
                <span className="font-semibold text-blue-600">Experience:</span>{" "}
                {member.experience} years
              </p>
              <p>
                <span className="font-semibold text-blue-600">Specialization:</span>{" "}
                {member.specialization}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faculty;
