import { useState } from "react";
import { Link } from "react-router-dom";

const Recipe = () => {
  const [recipe] = useState([
    {
      imgUrl: "/receipe-img1.jpg",
      title: "Rasberry fresh lemonade with lemon, strawberry syrup and mint.",
      time: "20 min",
      toughness: "Easy",
      like: "Like",
    },
    {
      imgUrl: "/receipe-img2.jpg",
      title: "Penne Pasta with spinach and zucchini in a creamy sauce.",
      time: "30 min",
      toughness: "Hard",
      like: "Like",
    },
    {
      imgUrl: "/receipe-img3.jpg",
      title: "Garden Salad with a mixture of lettuce, cucumber and tomatoes.",
      time: "20 min",
      toughness: "Easy",
      like: "Like",
    },
  ]);

  const [recipeBook] = useState([
    {
      imgUrl: "/receipe-img4.jpg",
      bookName: "Cookbook",
      title: "The Best in Gastromony",
      author: "Dana Chambers",
      description:
        "An exquisite cookbook that takes readers on a culinary journey around the world. With stunning photography and detailed instructions ...",
      price: "$12.40",
    },
  ]);

  return (
    <>
      <div className='rec-main-wrapper'>
        <div className='rec-wrapper'>
          <h3 className='categories-heading'>Recipes</h3>
          <div className='rec-container'>
            <div className='rec-container1'>
              {recipe.map((item, index) => (
                <Link className='rec-link' key={index}>
                  <div className='rec-desc1'>
                    <div className='rec-img1'>
                      <img src={item.imgUrl} alt='' />
                    </div>
                    <div className='rec-img-desc1'>
                      <p>{item.title}</p>
                      <ul type='none' className='rec-img-desc1-ul'>
                        <li>
                          <i className='fa-regular fa-clock'></i>
                          {item.time}
                        </li>
                        <li>
                          <i className='fa-solid fa-bolt'></i>
                          {item.toughness}
                        </li>
                        <li>
                          <i className='fa-regular fa-heart'></i>
                          {item.like}
                        </li>
                      </ul>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            <div className='rec-main-container2'>
              <div className='rec-container2'>
                {recipeBook.map((item, index) => (
                  <div className='rec-desc2' key={index}>
                    <div className='rec-img2'>
                      <img src={item.imgUrl} alt='' />
                    </div>
                    <div className='rec-img-desc2'>
                      <span className='rec-desc2-heading'>{item.bookName}</span>
                      <h3 className='rec-desc2-title'>{item.title}</h3>
                      <p className='rec-desc2-author'>
                        Author : <span>{item.author}</span>
                      </p>
                      <p className='rec-desc2-para'>{item.description}</p>
                      <p className='rec-desc2-price'>{item.price}</p>
                      <Link className='rec-desc2-btn'>
                        Shop Now
                        <i className='fa-solid fa-arrow-right'></i>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Recipe;
