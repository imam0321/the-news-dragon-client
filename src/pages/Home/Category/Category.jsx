import { useLoaderData } from "react-router-dom";
import NewCart from "../NewCart/NewCart";


const Category = () => {
  const categoryNews = useLoaderData();
  return (
    <div>
      <h1>Dragon News Home</h1>
      {
        categoryNews.map(news => <NewCart
          key={news._id}
          news={news}
        ></NewCart>)
      }
    </div>
  );
};

export default Category;