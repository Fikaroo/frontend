import { useLocation, useParams } from "react-router-dom";
import useSWR from "swr";
import { Apis } from "../api/axios";
import NavbarComponent from "./Navbar";
import { useForm } from "react-hook-form";
import { useState } from "react";
import {
  Accordion,
  Badge,
  Button,
  Card,
  Label,
  Modal,
  Radio,
} from "flowbite-react";
import { Link } from "react-router-dom";
import { ClockIcon, PlusCircleIcon } from "@heroicons/react/24/outline";
import { Category } from "../types";

interface QuizCardComponentProps {
  name: string;
  slug: string;
  badge: boolean;
  children: Category[];
}

const QuizCardComponent = ({
  name,
  slug,
  badge = false,
  children: subjects,
}: QuizCardComponentProps) => {
  const [selectedLang, setSelectedLang] = useState("en");
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Card className="relative shadow">
      {badge && (
        <Badge className="absolute top-0 right-0 rounded-none rounded-tr rounded-bl">
          New
        </Badge>
      )}

      <h5 className="px-6 py-2 font-medium border rounded-md bg-slate-100">
        {name}
      </h5>

      <span className="text-sm font-bold">Detail Exam Subject:</span>

      <ul role="list" className="space-y-5">
        {subjects?.map(({ name }) => (
          <li className="flex space-x-3 text-gray-500 dark:text-gray-400">
            <PlusCircleIcon className="w-5 h-5" />
            <span className="text-base font-normal leading-tight ">{name}</span>
          </li>
        ))}
      </ul>

      <Button onClick={() => setIsOpen(!isOpen)}>Enroll Exam</Button>
      <Modal
        show={isOpen}
        size="md"
        popup={true}
        className="h-full "
        onClose={() => setIsOpen(!isOpen)}
      >
        <Modal.Header />
        <Modal.Body>
          <h3 className="flex items-center gap-1 mb-4 font-semibold">
            <ClockIcon className="w-5 h-5" />
            Time Estimate : <span className="font-normal">3 hours</span>
          </h3>

          <div className="flex w-full gap-4">
            <Button
              gradientDuoTone="purpleToBlue"
              className="w-full"
              outline={selectedLang === "en" ? false : true}
              onClick={() => setSelectedLang("en")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                className="mr-2"
                viewBox="0 0 64 64"
              >
                <path
                  fill="#2a5f9e"
                  d="M22 60.3V46.5l-10.3 7.6c2.9 2.7 6.4 4.8 10.3 6.2m20 0c3.9-1.4 7.4-3.5 10.3-6.2L42 46.4v13.9M3.7 42c.3 1 .7 1.9 1.2 2.9L8.8 42H3.7m51.5 0l3.9 2.9c.4-.9.8-1.9 1.2-2.9h-5.1"
                />
                <path
                  fill="#fff"
                  d="M23.5 38H2.6c.3 1.4.7 2.7 1.1 4h5.1l-3.9 2.9c.8 1.7 1.7 3.2 2.8 4.7L18 42h4v2l-11.7 8.6l1.4 1.4L22 46.5v13.8c1.3.5 2.6.8 4 1.1V38h-2.5m37.9 0H38v23.4c1.4-.3 2.7-.7 4-1.1V46.5L52.3 54c1.4-1.3 2.6-2.7 3.8-4.2L45.4 42h6.8l6.1 4.5c.3-.5.6-1.1.8-1.6L55.2 42h5.1c.4-1.3.8-2.6 1.1-4"
                />
                <path
                  fill="#ed4c5c"
                  d="M7.7 49.6c.8 1.1 1.6 2.1 2.5 3.1L22 44.1v-2h-4L7.7 49.6M45.5 42l10.7 7.8c.4-.5.7-1 1.1-1.5c.1-.1.1-.2.2-.2c.3-.5.7-1.1 1-1.6L52.2 42h-6.7"
                />
                <path
                  fill="#2a5f9e"
                  d="M42 3.7v13.8l10.3-7.6C49.4 7.2 45.9 5.1 42 3.7m-20 0c-3.9 1.4-7.4 3.5-10.3 6.2L22 17.6V3.7M60.3 22c-.3-1-.7-1.9-1.2-2.9L55.2 22h5.1M8.8 22l-3.9-2.9c-.4 1-.8 1.9-1.2 2.9h5.1"
                />
                <path
                  fill="#fff"
                  d="M40.5 26h20.8c-.3-1.4-.7-2.7-1.1-4h-5.1l3.9-2.9c-.8-1.7-1.7-3.2-2.8-4.7L46 22h-4v-2l11.7-8.6l-1.4-1.4L42 17.5V3.7c-1.3-.5-2.6-.8-4-1.1V26h2.5M2.6 26H26V2.6c-1.4.3-2.7.7-4 1.1v13.8L11.7 10c-1.4 1.3-2.6 2.7-3.8 4.2L18.6 22h-6.8l-6.1-4.5c-.3.5-.6 1.1-.8 1.6L8.8 22H3.7c-.4 1.3-.8 2.6-1.1 4"
                />
                <g fill="#ed4c5c">
                  <path d="M56.3 14.4c-.8-1.1-1.6-2.1-2.5-3.1L42 19.9v2h4l10.3-7.5M18.5 22L7.9 14.2c-.4.5-.7 1-1.1 1.5c-.1.1-.1.2-.2.2c-.3.5-.7 1.1-1 1.6l6.1 4.5h6.8" />
                  <path d="M61.4 26H38V2.6c-1.9-.4-3.9-.6-6-.6s-4.1.2-6 .6V26H2.6c-.4 1.9-.6 3.9-.6 6s.2 4.1.6 6H26v23.4c1.9.4 3.9.6 6 .6s4.1-.2 6-.6V38h23.4c.4-1.9.6-3.9.6-6s-.2-4.1-.6-6" />
                </g>
              </svg>
              En
            </Button>

            <Button
              outline={selectedLang === "ru" ? false : true}
              gradientDuoTone="purpleToBlue"
              className="w-full"
              onClick={() => setSelectedLang("ru")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                className="mr-2"
                viewBox="0 0 64 64"
              >
                <path
                  fill="#f9f9f9"
                  d="M31.9 2c-13 0-24.1 8.4-28.2 20h56.6C56.1 10.4 45 2 31.9 2z"
                />
                <path
                  fill="#ed4c5c"
                  d="M31.9 62c13.1 0 24.2-8.4 28.3-20H3.7c4.1 11.7 15.2 20 28.2 20z"
                />
                <path
                  fill="#428bc1"
                  d="M3.7 22C2.6 25.1 2 28.5 2 32s.6 6.9 1.7 10h56.6c1.1-3.1 1.7-6.5 1.7-10s-.6-6.9-1.7-10H3.7"
                />
              </svg>
              Ru
            </Button>
          </div>
        </Modal.Body>
        <Modal.Footer className="flex justify-center">
          <Link to={`${slug}`} state={selectedLang}>
            <Button>Start Exam</Button>
          </Link>
        </Modal.Footer>
      </Modal>
    </Card>
  );
};

type QuizFromProps = {
  quizLanguange: string;
};

const Quiz = () => {
  const { categoryName } = useLocation().state;
  const { categorySlugName } = useParams();

  const { data, isLoading, error } = useSWR(
    categorySlugName ? `/api/category/${categorySlugName}` : null,
    Apis.getSubCategory
  );

  const { watch, register, handleSubmit } = useForm<QuizFromProps>({
    defaultValues: { quizLanguange: "en" },
  });

  return isLoading ? (
    <div>Loading...</div>
  ) : error ? (
    <div>Error</div>
  ) : (
    <div className="container">
      <NavbarComponent />

      <div className="flex w-full p-4 bg-slate-100 rounded-xl">
        <h2 className="text-xl font-semibold">
          {categoryName ? categoryName : "CategoryName"}
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-4 my-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {data?.[0].children?.map(({ id, name, slug, children }, idx) => (
          <QuizCardComponent
            key={id}
            badge={idx === 0 ? true : false}
            name={name}
            slug={`/${categorySlugName}/${slug}/exam`}
            children={children}
          />
        ))}
      </div>
    </div>
  );
};

export default Quiz;
