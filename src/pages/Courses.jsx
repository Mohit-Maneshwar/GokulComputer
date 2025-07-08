import { Link } from "react-router-dom";
import courses from "../data/coursesData";

const Courses = () => {
  return (
    <div className="bg-white font-[Poppins] py-16 px-6 max-w-7xl mx-auto pt-[6rem]">
      <h1 className="text-4xl md:text-6xl font-bold text-blue-600 text-center mb-12">Our Courses</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {courses.map(course => (
          <Link to={`/courses/${course.id}`} key={course.id} className="block group">
            <div className="bg-white border rounded-lg shadow hover:shadow-lg p-6 transition">
              <img
                src={course.image}
                alt={course.title}
                className="rounded mb-4 w-full h-40 object-cover group-hover:scale-105 transition"
              />
              <h2 className="text-2xl font-bold text-blue-600 mb-2">{course.title}</h2>
              <p className="text-gray-700 text-sm">{course.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Courses;
