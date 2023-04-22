import useSWR from "swr";
import { Apis } from "../api/axios";
import NavbarComponent from "./Navbar";

import { Card } from "flowbite-react";
import { Link } from "react-router-dom";

interface CardComponentProps {
  name: string;
  slug: string;
}

const CategoryCardComponent = ({ name, slug }: CardComponentProps) => (
  <Link to={`/${slug}`} state={{ categoryName: name }}>
    <Card className="flex items-center font-semibold text-white transition-all hover:scale-105 bg-gradient-to-tr from-indigo-400 to-purple-400">
      <h2 className="h-full">{name}</h2>
    </Card>
  </Link>
);

const Category = () => {
  const { data, error, isLoading } = useSWR("api/category", Apis.getCategory);

  return isLoading ? (
    <div>Loading...</div>
  ) : error ? (
    <div>error</div>
  ) : (
    <div className="container">
      <NavbarComponent isActive={true} />
      <h1 className="py-4 text-2xl font-medium border-b">Kategoriyanı seçin</h1>
      <div className="grid grid-cols-1 gap-4 py-4">
        {data?.map(({ id, name, slug }) => (
          <CategoryCardComponent key={id} slug={slug} name={name} />
        ))}
      </div>
    </div>
  );
};

export default Category;
