import { Link } from "react-router-dom";
import { Button, Card } from "flowbite-react";
import NavbarComponent from "../components/Navbar";
import FooterComponent from "../components/Footer";
import {
  AcademicCapIcon,
  ClipboardDocumentListIcon,
  LinkIcon,
  SquaresPlusIcon,
} from "@heroicons/react/24/outline";
interface FeaturesCard {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  icon: any;
}

const FeaturesCard = ({
  id,
  title,
  subtitle,
  description,
  icon,
}: FeaturesCard) => (
  <Card>
    <div className="flex items-center gap-4 text-gray-500 cursor-default group hover:text-gray-900">
      {icon}
      <h5 className="font-medium xtext-xl dark:text-gray-400">
        Key Features {id}
      </h5>
    </div>

    <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
      {description}
    </span>

    <ul role="list" className="space-y-5 my-7">
      <li className="flex space-x-3">
        <svg
          className="w-5 h-5 text-blue-600 shrink-0 dark:text-blue-500"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            clipRule="evenodd"
          />
        </svg>
        <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
          {title}
        </span>
      </li>
      <li className="flex space-x-3">
        <svg
          className="w-5 h-5 text-blue-600 shrink-0 dark:text-blue-500"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            clipRule="evenodd"
          />
        </svg>
        <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
          {subtitle}
        </span>
      </li>
    </ul>
  </Card>
);

const LandingPage = () => {
  const keyFeatures = [
    {
      id: 1,
      title: "Take exams online, anytime, anywhere",
      subtitle: "Convenient access to exams on any device",
      icon: (
        <AcademicCapIcon className="transition-all duration-500 group-hover:scale-110 w-7 h-7 group-hover:rotate-180" />
      ),
      description:
        "The online exam system allows users to take exams on any device with internet access. Users can take exams at any time that is convenient for them, without the need for scheduling or travel. Exams are available 24/7, so users can take them whenever they feel ready.",
    },
    {
      id: 2,
      title: "Track your progress and view your exam history",
      subtitle: "Detailed performance reports and history",
      icon: (
        <ClipboardDocumentListIcon className="transition-all duration-500 group-hover:scale-110 w-7 h-7 group-hover:rotate-180" />
      ),

      description:
        "Users can track their progress by viewing their exam history and performance over time. The system provides detailed reports that show how well the user performed in each exam and category, including scores and time taken. Users can identify areas that need improvement and track their progress as they continue to take exams.",
    },
    {
      id: 3,
      title: "Choose from a variety of exam categories and subcategories",
      subtitle: "Wide range of categories and subcategories",
      icon: (
        <SquaresPlusIcon className="transition-all duration-500 group-hover:scale-110 w-7 h-7 group-hover:rotate-180" />
      ),

      description:
        "The online exam system offers a wide range of exam categories, including academic subjects, professional certifications, and more. Each category has several subcategories that allow users to focus on specific topics or areas of interest. Users can browse the list of available categories and subcategories to find the exams that best fit their needs.",
    },
    {
      id: 4,
      title: "Customize your exam settings to fit your needs",
      subtitle: "Tailored exams to fit your preferences",
      icon: (
        <LinkIcon className="transition-all duration-500 group-hover:scale-110 w-7 h-7 group-hover:rotate-180" />
      ),

      description:
        "Users can customize their exam settings to fit their specific needs and preferences. The system allows users to set the time limit for each exam, choose the difficulty level, and select the types of questions that they prefer. Users can also choose to take exams in different languages, making the system accessible to users around the world.",
    },
  ];
  return (
    <div className="container">
      <div
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <header className="w-full py-4">
        <NavbarComponent />
      </header>
      <main className="py-16">
        <div>
          <section className="relative flex items-center bg-white shadow-md rounded-xl">
            <div className="p-6 text-center">
              <h1 className="mb-8 text-5xl font-bold">
                Welcome to our online exam system
              </h1>
              <p className="px-20 mb-8">
                Take exams on your own time and track your progress with our
                user-friendly platform.
              </p>
              <Link to="/auth/register">
                <Button gradientDuoTone="purpleToBlue" className="px-5 mx-auto">
                  Get Start
                </Button>
              </Link>
            </div>
            <img
              className="object-cover w-1/2 h-full landing-frame-svg aspect-video rounded-r-xl"
              src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZXhhbXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
              alt="background"
            />
          </section>
          <section className="py-16">
            <div className="grid grid-cols-2 gap-4">
              {keyFeatures.map(({ id, icon, title, subtitle, description }) => (
                <FeaturesCard
                  icon={icon}
                  key={id}
                  id={id}
                  title={title}
                  subtitle={subtitle}
                  description={description}
                />
              ))}
            </div>
          </section>
        </div>
      </main>
      <div
        className="absolute inset-x-0 overflow-hidden -top-40 -z-10 transform-gpu blur-3xl sm:-top-80"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <FooterComponent />
    </div>
  );
};

export default LandingPage;
