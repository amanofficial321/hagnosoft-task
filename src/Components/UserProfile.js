import React, { useState, useEffect } from "react";
import axios from "axios";

const UserProfile = () => {
  const [userData, setUserData] = useState();
  const fetchUser = async () => {
    try {
      const response = await axios.get(
        "https://fakerapi.it/api/v1/persons?_quantity=1&amp;_gender=male&amp;_birthday_start=2005-01-01"
      );
      setUserData(response.data.data[0]);
    } catch (error) {
      console.log(error);
    }
  };

  const [companyData, setCompanyData] = useState();
  const fetchCompany = async () => {
    try {
      const response = await axios.get(
        "https://fakerapi.it/api/v1/companies?_quantity=1"
      );
      setCompanyData(response.data.data[0]);
    } catch (error) {
      console.log(error);
    }
  };

  const [cardData, setCardData] = useState();
  const fetchCard = async () => {
    try {
      const response = await axios.get(
        "https://fakerapi.it/api/v1/credit_cards?_quantity=1"
      );
      setCardData(response.data.data[0]);
      // console.log(response.data.data[0]);
    } catch (error) {
      console.log(error);
    }
  };

  const [productData, setProductData] = useState();
  const fetchProducts = async () => {
    try {
      const response = await axios.get(
        "https://fakerapi.it/api/v1/products?_quantity=3&amp;_taxes=1&amp;_categories_type=uuid"
      );
      setProductData(response.data.data);
      // console.log(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const [productImages, setProductImages] = useState([]);
  const fetchImages = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");

      response.data.map((item) =>
        setProductImages((prev) => [...prev, item.image])
      );
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUser();
    fetchCompany();
    fetchCard();
    fetchProducts();
    fetchImages();
  }, []);

  return (
    <div
      className="container-fluid"
      style={{
        minHeight: "100vh",
        fontFamily: "ubuntu",
        // backgroundColor: "#dfdfdf",
      }}
    >
      <div className="row">
        {userData && (
          <div className="card col-sm-12 col-md-4 p-2">
            <h3>Basic User Details</h3>
            <img
              src="https://www.esri.com/content/dam/esrisites/en-us/user-research-testing/assets/user-research-testing-overview-holistic-testing-events.jpg"
              className="card-img-top"
              alt="User Dummy"
              height={"250px"}
            />
            <div className="card-body">
              <p>
                Name : {userData.firstname} {userData.lastname}
              </p>
              <p>Email : {userData.email}</p>
              <p>Phone : {userData.phone}</p>
              <p>Date of Birth : {userData.birthday}</p>
              <p>Gender : {userData.gender}</p>
              <p>
                Address :{" "}
                {`Building No. ${userData.address.buildingNumber}, ${userData.address.street}, ${userData.address.city}, ${userData.address.country}`}
              </p>
              {cardData && (
                <>
                  <hr />
                  <h3>Credit Card Details</h3>
                  <p>Card Number : {cardData.number}</p>
                  <p>Card Type : {cardData.type}</p>
                  <p>Expiry Date : {cardData.expiration}</p>
                  <p>Card Owner : {cardData.owner}</p>
                </>
              )}
            </div>
          </div>
        )}
        {companyData && (
          <div className="card col-sm-12 col-md-5 p-2">
            <h3>Company Details</h3>
            <img
              src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y29tcGFueXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
              className="card-img-top"
              alt="User Dummy"
              height={"250px"}
            />
            <div className="card-body">
              <p>Name : {companyData.name}</p>
              <p>Email : {companyData.email}</p>
              <p>Phone : {companyData.phone}</p>
              <p>Country : {companyData.country}</p>
              <p>Website : {companyData.website}</p>
              <p>Addresses :</p>
              {companyData.addresses.map((address, index) => {
                return (
                  <p key={index}>
                    {`${index + 1}) Building No. ${address.buildingNumber}, ${
                      address.street
                    }, ${address.city}, ${address.country}`}
                  </p>
                );
              })}
            </div>
          </div>
        )}
        {productData && (
          <div className="card col-sm-12 col-md-3 p-2" style={{ gap: "15px" }}>
            <h3>Previously Ordered Products</h3>
            {productData.map((product, index) => {
              return (
                <div key={index} className="card" style={{ width: "100%" }}>
                  <img
                    src={productImages[index]}
                    className="card-img-top"
                    alt=""
                    height={"200px"}
                  />
                  <div className="card-body">
                    <h5 style={{ fontWeight: "600" }} className="card-title">
                      {product.name}
                    </h5>
                    <p className="card-text">{product.description}</p>
                    <p>Price : {product.price} $</p>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default UserProfile;
