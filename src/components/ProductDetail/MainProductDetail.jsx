import React, { useState } from "react";
import Product from "./Product";
import ProductImage from "./ProductImage";
import BreadCrum from "../GlobalComponents/BreadCrum";
import Layout from "../Layout/Layout";
import BtnGlobal from "../GlobalComponents/BtnGlobal";
import { Rating } from "primereact/rating";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";

const MainProductDetail = () => {
  //set Stars value of rating
  const [value, setValue] = useState(null);
  //set revies demo visible
  const [visible, setVisible] = useState(false);
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
        onClick={() => setVisible(false)}
        className="mr-2 text-sm font-medium border-[0.5px] border-black p-3 w-44 bg-blackV text-white"
        content="Submit"
      />
    </div>
  );

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
          <div className="flex flex-col justify-center bg-white  mx-96 p-7 gap-5 border-2">
            <h2 className="text-lg font-semibold">user.name</h2>
            <p className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias,
              ipsa obcaecati voluptas est quos hic atque mollitia quo dolorem
              optio nesciunt quisquam reiciendis accusantium eius distinctio
              harum quidem? Sunt, amet.
            </p>
            <Rating
              value={value}
              onChange={(e) => setValue(e.value)}
              cancel={false}
            />
          </div>
         
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
              header="Add your review"
              visible={visible}
              style={{ width: "50vw" }}
              onHide={() => setVisible(false)}
              footer={reviewContent}
            >
              <p className="m-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                eni m ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </Dialog>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default MainProductDetail;
