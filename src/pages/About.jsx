import image1 from "../assets/images/image1.jpg";
import image2 from "../assets/images/image2.jpg";

const About = () => {
  return (
    <div className="bg-white font-[Poppins] text-gray-900 flex flex-col gap-8 pt-20">
      {/* Hero Section */}
      <section className="bg-blue-50 py-20 text-center font-[Poppins]">
        <div className="max-w-5xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-blue-600">
            Welcome to Gokul Computers
          </h1>
          <p className="text-gray-700 text-lg md:text-xl mb-6 leading-relaxed">
            Established in 2007, Gokul Computers is Gondia’s premier institute
            for cutting-edge computer education. We have been transforming
            careers for over 15 years by empowering students with practical
            skills, industry-relevant knowledge, and real-world experience.
          </p>
          <p className="text-gray-700 text-base md:text-lg mb-8">
            Our focus on hands-on training, experienced faculty, and dynamic
            courses makes us a trusted choice for students and professionals
            alike.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-center">
            <div className="bg-white rounded-lg shadow p-6 w-60">
              <h3 className="text-blue-600 text-2xl font-bold mb-2">
                15+ Years
              </h3>
              <p className="text-gray-700 text-sm">
                of Excellence in IT Education
              </p>
            </div>
            <div className="bg-white rounded-lg shadow p-6 w-60">
              <h3 className="text-blue-600 text-2xl font-bold mb-2">
                15+ Courses
              </h3>
              <p className="text-gray-700 text-sm">
                covering Software & Hardware Skills
              </p>
            </div>
            <div className="bg-white rounded-lg shadow p-6 w-60">
              <h3 className="text-blue-600 text-2xl font-bold mb-2">10,000+</h3>
              <p className="text-gray-700 text-sm">
                Students & Professionals Trained
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Journey */}
      <section className="max-w-6xl mx-auto py-16 px-6 flex flex-col md:flex-row gap-10 items-center">
        <img
          src={image1}
          alt="Our Journey"
          className="rounded-lg shadow-lg w-full md:w-1/2"
        />
        <div className="flex-1">
          <h2 className="text-3xl font-bold mb-4 text-blue-600">Our Journey</h2>
          <p className="text-gray-700 mb-4">
            Founded in 2007, Gokul Computers started with a mission to provide
            quality IT education in Gondia. Over the years, we have grown to
            become one of the most trusted institutions in the region, training
            thousands of students and professionals in computer technologies. We
            continually evolve our curriculum to match the latest industry
            trends, ensuring our students stay ahead in the ever-changing tech
            world.
          </p>
        </div>
      </section>

      {/* Leading Institute */}
      <section className="bg-gray-50 py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-6 text-blue-600">
          Leading Computer Education Institute
        </h2>
        <p className="text-gray-700 max-w-4xl mx-auto text-lg mb-4">
          Gokul Computer is a leading computer education institute building a
          skilled manpower pool for various IT-based requirements.
        </p>
        <p className="text-gray-700 max-w-4xl mx-auto text-lg">
          The institute was set up in 2007 to help students, organizations,
          private firms, educational institutes, and training institutes by
          offering learning solutions. Gokul Computers has been successfully
          providing training since its inception to a wide range of students,
          teachers, and professionals.
        </p>
      </section>

      {/* Expertise & Courses */}
      <section className="max-w-6xl mx-auto py-16 px-6 flex flex-col md:flex-row gap-10 items-center">
        <div className="flex-1 order-2 md:order-1">
          <h2 className="text-3xl font-bold mb-4 text-blue-600">
            Our Expertise & Courses
          </h2>
          <p className="text-gray-700 mb-4">
            Gokul Computer is an expert in learning content development,
            training delivery, education process management, and project
            development.
          </p>
          <p className="text-gray-700">
            The Computer and IT courses running at Gokul Computers include:
            Basics, MS-Office, C, C++, Java, Advanced Java, Oracle, Visual
            Basic, VB.Net, ASP.Net, C#.Net, Web Page Designing, PHP and MySQL,
            Hardware, Networking, Photoshop, Flash, Coreldraw, Graphic Design,
            Website Development, Search Engine Optimization, Software Testing,
            MS Project, Dot Net Courses, E-commerce, Java Scripting, University
            Syllabus of BE, Poly, BCCA, BCA, MCA, MCM, BSc, MSc, 11th & 12th IT
            and CS State CBSE Course, and Live Projects.
          </p>
          <p className="text-gray-700 mt-4">
            Project guidance is provided for final-year students. Crash,
            fast-track, and regular batches for every course are available.
          </p>
        </div>
        <img
          src={image2}
          alt="Our Expertise"
          className="rounded-lg shadow-lg w-full md:w-1/2 order-1 md:order-2"
        />
      </section>
    </div>
  );
};

export default About;
