import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import EditorsInsight from "../../News/EditorsInsight/EditorsInsight";
import LeftEditorsInsight from "./LeftEditorsInsight";


const LeftNav = () => {
  const [categories, setCategories] = useState([]);

  useEffect(()=>{
    fetch('https://the-news-dragon-server-6qpsv3t05-imam-hossains-projects.vercel.app/categories')
    .then(res => res.json())
    .then(data => setCategories(data))
    .catch(error => console.error(error))
  }, []);

  return (
    <div >
      <h4 className="mb-3">All Categories</h4>
      {
        categories.map(category => <p
          key={category.id}
          className="m-0"
        >
          <button className="w-100 text-start border-0 ps-4 py-3 hover:">
          <Link to={`/category/${category.id}`} className="text-decoration-none text-secondary">{category.name}</Link>
          </button>
        </p>)
      }
      <LeftEditorsInsight/>
    </div>
  );
};

export default LeftNav;