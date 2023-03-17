import React from 'react';
import catImg1 from '../images/category/cat1.png';
import catImg2 from "../images/category/cat2.png";
import catImg3 from "../images/category/cat3.png";
import catImg4 from "../images/category/cat4.png";
import catImg5 from "../images/category/cat5.png";
import catImg6 from "../images/category/cat6.png";
import catImg7 from "../images/category/cat5.png";
import catImg8 from "../images/category/cat6.png";
import catImg9 from "../images/category/cat6.png";
import catImg10 from "../images/category/cat5.png";
import catImg11 from "../images/category/cat6.png";

const data = [
  {
      cateImg:catImg1,
      cateName:"fashion"
  },
  {
    cateImg: catImg2,
    cateName: "Electronic",
  },
  {
    cateImg: catImg3,
    cateName: "Cars",
  },
  {
    cateImg: catImg4,
    cateName: "Home & Garden",
  },
  {
    cateImg: catImg5,
    cateName: "Gifts",
  },
  {
    cateImg: catImg6,
    cateName: "Music",
  },
  {
    cateImg: catImg7,
    cateName: "Health & Beauty",
  },
  {
    cateImg: catImg8,
    cateName: "Pets",
  },
  {
    cateImg: catImg9,
    cateName: "Baby Toys",
  },
  {
    cateImg: catImg10,
    cateName: "Groceries",
  },
  {
    cateImg: catImg11,
    cateName: "Books",
  },
]

const CategoryList = () => {
  

  return (
     <>
        {
          data.map((value,i)=>{
            return(
              <div key={i} className='category d-flex px-2 pt-2'>
                  <img src={value.cateImg} alt={value.cateName} className='my-auto' /> 
                  <span>{value.cateName}</span>
              </div>
            )
          })
        }
     </>
  )
    
}

export default CategoryList