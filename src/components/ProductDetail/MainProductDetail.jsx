import React, { useState } from "react";
import Product from "./Product";
import ProductImage from "./ProductImage";
import BreadCrum from "../GlobalComponents/BreadCrum";
import Layout from "../Layout/Layout";
import BtnGlobal from "../GlobalComponents/BtnGlobal";
import { Rating } from "primereact/rating";
import { Dialog } from "primereact/dialog";
import { Editor } from "primereact/editor";

const MainProductDetail = () => {
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
    

  const reviewContent = (
    <div>
      <BtnGlobal
        label="Cancel"
        onClick={() => setVisible(false)}
        className="mr-2 text-sm font-medium p-3 w-44  text-blackV"
        content="Cancel"
      />

      <BtnGlobal
        label="Submit"
        onClick={() => {
          // Save the new review to the state
          const newReview = {
            name: 'User Name', // will be replaced when I will handle authentication
            content: text,
            rating: value,
          };

          setReviews((prevReviews) => [...prevReviews, newReview]);
          setVisible(false);
        }}
        className="mr-2 text-sm font-medium border-[0.5px] border-black p-3 w-44 bg-blackV text-white"
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
  const items = [{ label: "Women" }, { label: "Djelaba" }];
  return (
    // test data
    <Layout>
      <div className="mb-6 lg:px-20 px-12 mt-8">
        <BreadCrum items={items} />
      </div>
      <section className="w-full lg:px-20 px-12 flex lg:flex-row lg:gap-12 flex-col justify-between lg:my-20  font-DIN">
        <Product
          title="Product Title"
          price="$00.00"
          description="Lorem ipsum refers to a placeholder text commonly used in the publishing and graphic design industries. It's a string of Latin-looking words that have no actual meaning. "
          color="Blue"
        />
        <ProductImage />
      </section>
      {/* reviews section */}
      <section className="p-11 w-full border-b-2  border-t-2 border-blackV  bg-userProfile">
        <h1 className="font-NewYork flex justify-center text-4xl text-blackV">
          Reviews
        </h1>
        {/* //each customer review here */}
        <div className=" flex flex-col gap-9 my-5">
        {reviews.map((review, index) => (
            <div key={index} className="flex flex-col justify-center bg-white  mx-96 p-7 gap-5 border-2">
              <h2 className="text-lg font-semibold">{review.name}</h2>
              <p dangerouslySetInnerHTML={{ __html: review.content }} className="" />
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
          <div className="card flex justify-content-center">
            <Dialog
              header="Product Review"
              visible={visible}
              style={{ width: "50vw" }}
              onHide={() => setVisible(false)}
              footer={reviewContent}
            >
              <p className="py-5">Rate the product :</p>
              <Rating
                value={value}
                onChange={(e) => setValue(e.value)}
                cancel={false}
              />

              <p className="py-5">Explain Your Rating :</p>
              <Editor
                value={text}
                onTextChange={(e) => setText(e.htmlValue)}
                headerTemplate={header}
                style={{ height: "320px" }}
              />
            </Dialog>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default MainProductDetail;
