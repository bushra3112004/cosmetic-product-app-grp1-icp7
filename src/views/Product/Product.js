import React, { useEffect, useState } from 'react';
import './Product.css';
import banner from './banner.jpeg';
import banner2 from './banner2.jpg';
import Footer from './../../component/Footer/Footer';
import Navbar from './../../component/Navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ButtonBox from "./../../component/ButtonBox/ButtonBox";
import ProductCards from '../../component/ProductCards/ProductCards';
import Productdata from './../../component/ProductCards/Productdata/Data';

function Product() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [filteredItems, setFilteredItems] = useState(Productdata);

  let filters = ["Makeup", "Skin", "Hair", "Bath & Body"];

  const handleFilterButtonClick = (selectedCategory) => {
    if (selectedFilters.includes(selectedCategory)) {
      let filters = selectedFilters.filter((el) => el !== selectedCategory);
      setSelectedFilters(filters);
    } else {
      setSelectedFilters([...selectedFilters, selectedCategory]);
    }
  };

  useEffect(() => {
    filterItems();
  }, [selectedFilters, searchTerm]);

  const filterItems = () => {
    let tempItems = [...Productdata];

    if (selectedFilters.length > 0) {
      tempItems = tempItems.filter((item) => selectedFilters.includes(item.Categories));
    }

    if (searchTerm) {
      tempItems = tempItems.filter((val) => val.Title && val.Title.toLowerCase().includes(searchTerm.toLowerCase()));
    }

    setFilteredItems(tempItems);
  };

  return (
    <>
      <Navbar />

      <img className='banner-img' width={'100%'} src={banner} alt="Banner" />
      <h1 className='Slogun'>-----"Glow Naturally, Shine Confidently"-----</h1>
      <div className='search-container'>
        <span className='reults-heading'>All Results...</span>
        <input
          className='input-feild'
          type="text"
          placeholder="Search..."
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <hr />

      <div className='main-div'>

        <div className='pcardsContainers'>
          {
            filteredItems.map((item, i) => {
              const { id, ProductImg, Title, Price } = item;
              return (
                <ProductCards
                  key={i}
                  id={id}
                  ProductImg={ProductImg}
                  Title={Title}
                  Price={Price}
                />
              )
            })
          }
        </div>

        <div className='categories-div'>
          <ul type='none'>
            <li><h1 className='Sub-title'>Categories..</h1></li>
            <li>
              <ul type='circle'>
                {filters.map((category, i) => (
                  <li
                    onClick={() => handleFilterButtonClick(category)}
                    className={`list-2 `}
                   
                  >
                    {category}
                  </li>
                ))}
              </ul>
            </li>
          </ul>
          <hr />
          <h1 className='Sub-title'>Product Tags..</h1>
          <button className='tag-btn'>Cosmetics</button>
          <button className='tag-btn'>Facecare</button>
          <button className='tag-btn'>Skincare</button>
          <button className='tag-btn'>Perfume</button>
          <hr />
          <img className='banner2 img-fluid' src={banner2} alt="Banner 2" />
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
}

export default Product;
