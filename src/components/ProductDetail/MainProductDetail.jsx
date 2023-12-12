import React, { useState } from "react";
import Product from "./Product";
import ProductImage from "./ProductImage";
import BreadCrum from "../GlobalComponents/BreadCrum";
import Layout from "../Layout/Layout";
import BtnGlobal from "../GlobalComponents/BtnGlobal";
import { Rating } from "primereact/rating";
import { Dialog } from "primereact/dialog";
import { Editor } from "primereact/editor";
import { useParams } from "react-router";
import { useEffect } from "react";
import axios from "axios";

const MainProductDetail = () => {
  let { id } = useParams();
  if (!id) {
    id = "65771fc5107cb0a1414c1c55";
  }
  // make request to get all info of product
  // State for categories and subcategories
  const [categories, setCategories] = useState([]);
  const [subcategories, setSubcategories] = useState([]);
  const [filteredImages, setFilteredImages] = useState([]);

  // State for types, sizes, and colors
  const [types, setTypes] = useState([]);
  const [Titre, setTitre] = useState("");
  const [Price, setPrice] = useState("");
  // const [LongDescription, setLongDescription] = useState("");
  const [ShortDescription, setShortDescription] = useState("");
  const [sizes, setSizes] = useState([]);
  const [colors, setColors] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/product/getone/${id}`)
      .then((response) => {
        const data = response.data[0];
        console.log("response ", data);
        // Filter images
        // Generic helper function to filter an array based on a condition
        const filterArray = (array, condition) => {
          return array.filter(condition);
        };

        // Usage
        const imagesWithPathAndColor = filterArray(
          data.images,
          (image) => image.image_id.path
        );
        setFilteredImages(imagesWithPathAndColor);

        // You can reuse filterArray for other arrays
        const filteredTypes = filterArray(
          data.types,
          (type) => type.active === true
        );

        setTypes(filteredTypes); // for the gender /

        setTitre(data.title); // for titre of the clothe

        setPrice(data.price);

        // setLongDescription(data.long_description)
        setShortDescription(data.short_description);

        setCategories(data.categories_id);

        setSubcategories(data.sub_categorie_id);

        setSizes(data.sizes);

        const extractedColorNames = data.colors.map((color) => color.name);
        setColors(extractedColorNames);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false); // Update loading state in case of an error

        console.error("error", error);
      });
  }, []);
  // useEffect(() => {
  //   // console.log("Categories:", categories);
  //   // console.log("Subcategories:", subcategories);
  //   console.log("Filtered Images:", filteredImages[0].image_id.path);
  //   // console.log("Types:", types);
  //   // console.log("Titre:", Titre);
  //   // console.log("Sizes:", sizes);
  //   // console.log("Colors:", colors);
  // }, [categories, subcategories, filteredImages, types, Titre, sizes, colors]);
  //set Stars value of rating
  const [value, setValue] = useState(null);
  //set revies demo visible
  const [visible, setVisible] = useState(false);
  //Review Editor text
  const [text, setText] = useState(
    "<div>Hello There!</div><div> <b>Maghrebin</b> takes your reviews seriously</div><div><br></div>"
  );
  //create new review card
  const [reviews, setReviews] = useState([]);

  //the reviews don t get saved yet , will get back to it after configuring authentication
  const reviewContent = (
    <div>
      <BtnGlobal
        label="Cancel"
        onClick={() => setVisible(false)}
        className="mr-2 text-xs md:text-sm font-medium p-2 lg:p-3 md:w-28 lg:w-28 xl:w-44  text-blackV"
        content="Cancel"
      />

      <BtnGlobal
        label="Submit"
        onClick={() => {
          // Save the new review to the state
          const newReview = {
            name: "User Name", // will be replaced when I will handle authentication
            content: text,
            rating: value,
          };

          setReviews((prevReviews) => [...prevReviews, newReview]);
          setVisible(false);
        }}
        className="mr-2 text-xs md:text-sm font-medium border-[0.5px] border-black p-2 lg:p-3 w-20 md:w-28 lg:w-28 xl:w-44 bg-blackV text-white"
        content="Submit"
      />
    </div>
  );

  const editorComponents = () => {
    return (
      <span className="ql-formats">
        <button className="ql-bold" aria-label="Bold"></button>
        <button className="ql-italic" aria-label="Italic"></button>
        <button className="ql-underline" aria-label="Underline"></button>
      </span>
    );
  };
  const header = editorComponents();

  // BreadCrum
  // const items = [{ label: "Women" }, { label: "Djelaba" }];
  const items = [
    { label: "Home", link: "/" }, // You can customize the home link if needed
    ...types.map((type) => ({ label: type })),
    { label: Titre },
  ];
  // const items =
  // Render loading state
  if (loading) {
    return <p>Loading...</p>; // You can customize the loading UI
  }
  return (
    // test data
    <Layout>
      <div className="mb-6 lg:px-20 px-12 mt-8">
        <BreadCrum items={items} />
      </div>
      <section className="w-full lg:px-20 px-12 flex lg:flex-row lg:gap-12 flex-col justify-between lg:my-20  font-DIN">
        <Product
          title={Titre}
          price={Price}
          description={ShortDescription}
          color={colors}
          size={sizes}
        />
        <ProductImage selectedImage={filteredImages} />
      </section>
      {/* reviews section */}
      <section className="p-11 w-full border-b-2  border-t-2 border-blackV  bg-userProfile">
        <h1 className="font-NewYork flex justify-center text-4xl text-blackV">
          Reviews
        </h1>
        {/* //each customer review here */}
        <div className=" flex flex-col gap-9 my-5">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="flex flex-col justify-center bg-white  md:mx-16 lg:mx-36  xl:mx-72 p-5 gap-3 md:gap-5 border-2"
            >
              <h2 className="text-sm md:text-base font-semibold">
                {review.name}
              </h2>
              <p
                dangerouslySetInnerHTML={{ __html: review.content }}
                className="text-xs md:text-sm"
              />
              <Rating value={review.rating} cancel={false} />
            </div>
          ))}

          <div className="flex justify-center">
            <BtnGlobal
              label="Show"
              onClick={() => setVisible(true)}
              className="mr-2 text-sm font-medium border-[0.5px] border-black p-3 w-44 hover:bg-blackV hover:text-white"
              content="Add Review"
            />
          </div>
          <div className="card flex justify-content-center ">
            <Dialog
              header="Product Review"
              visible={visible}
              onHide={() => setVisible(false)}
              footer={reviewContent}
              className="w-[70vw] h-[150vw] md:w-[65vw] lg:w-[50vw]"
            >
              <p className="py-5 text-sm md:text-base">Rate the product :</p>
              <Rating
                value={value}
                onChange={(e) => setValue(e.value)}
                cancel={false}
              />

              <p className="py-5 text-sm md:text-base">Explain Your Rating :</p>
              <Editor
                value={text}
                onTextChange={(e) => setText(e.htmlValue)}
                headerTemplate={header}
                style={{ height: "255px" }}
              />
            </Dialog>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default MainProductDetail;
