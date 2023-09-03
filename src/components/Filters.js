import React from "react";
import styled from "styled-components";
import { useFilterContext } from "../context/filter_context";
import { getUniqueValues, formatPrice } from "../utils/helpers";
import { FaCheck } from "react-icons/fa";

const Filters = () => {
  const {
    filters: {
      text,
      title,
      company,
      // category,
      location,
      closeDate,
      hours,
      max_hours,
      min_salary,
      max_salary,
      salary,
    },
    updateFilters,
    clearFilters,
    all_products,
  } = useFilterContext();

  const titles = getUniqueValues(all_products, "title");
  //const categories = getUniqueValues(filtered_products, "category");
  //const categories = getUniqueValues(all_products, "category");
  const categories = getUniqueValues(all_products, "category");
  const companies = getUniqueValues(all_products, "company");
  const locations = getUniqueValues(all_products, "location");
  const closeDates = getUniqueValues(all_products, "closeDate");

  // console.log(all_products);
  // console.log(filtered_products);
  // let a1 = [];
  // a1 = all_products.filter((item) => item.gen === gen);
  // console.log(a1);

  // let newCat = [];
  // newCat = all_products.map((c) => c);
  // console.log(newCat);
  // newCat = newCat.map((itm) => {
  //   return itm.gen === gen;
  // });
  // console.log(newCat);

  // let newCat1 = newCat.push[true];
  // console.log(newCat1);
  // const categories = getUniqueValues(a1, "category");
  return (
    <Wrapper>
      <div className="content">
        <form onSubmit={(e) => e.preventDefault()}>
          {/* search input */}
          <div className="form-control">
            <input
              type="text"
              name="text"
              placeholder="search"
              className="search-input"
              value={text}
              onChange={updateFilters}
            ></input>
          </div>
          {/* search Title */}
          <div className="form-control">
            <h5>Title</h5>
            <div>
              {titles.map((c, index) => {
                return (
                  <button
                    key={index}
                    onClick={updateFilters}
                    name="title"
                    type="button"
                    className={`${title === c.toLowerCase() ? "active" : null}`}
                  >
                    {c}
                  </button>
                );
              })}
            </div>
          </div>

          {/* category */}
          {/* <div className="form-control">
            <h5>category</h5>
            <div>
              {categories.map((c, index) => {
                return (
                  <button
                    key={index}
                    onClick={updateFilters}
                    name="category"
                    type="button"
                    className={`${
                      category === c.toLowerCase() ? "active" : null
                    }`}
                  >
                    {c}
                  </button>
                );
              })}
            </div>
          </div> */}

          {/* company */}
          <div className="form-control">
            <h5>company</h5>
            <select
              name="company"
              value={company}
              onChange={updateFilters}
              className="company"
            >
              {companies.map((c, index) => {
                return (
                  <option key={index} value={c}>
                    {c}
                  </option>
                );
              })}
            </select>
          </div>

          {/* location */}
          <div className="form-control">
            <h5>Location</h5>
            <div>
              {locations.map((c, index) => {
                return (
                  <button
                    key={index}
                    onClick={updateFilters}
                    name="location"
                    type="button"
                    className={`${
                      location === c.toLowerCase() ? "active" : null
                    }`}
                  >
                    {c}
                  </button>
                );
              })}
            </div>
          </div>

          {/* salary */}
          <div className="form-control">
            <h5>Salary</h5>
            <p className="price">{salary}</p>
            <input
              type="range"
              name="salary"
              onChange={updateFilters}
              min={min_salary}
              max={max_salary}
              value={salary}
            ></input>
          </div>

          {/* Hours */}
          <div className="form-control">
            <h5>Working Hours</h5>
            <p className="price">{hours}</p>
            <input
              type="range"
              name="hours"
              onChange={updateFilters}
              min={0}
              max={max_hours}
              value={hours}
            ></input>
          </div>

          {/* close dates */}
          <div className="form-control">
            <h5>Close Dates</h5>
            <div>
              {closeDates.map((c, index) => {
                return (
                  <button
                    key={index}
                    onClick={updateFilters}
                    name="closeDate"
                    type="button"
                    className={`${
                      closeDate === c.toLowerCase() ? "active" : null
                    }`}
                  >
                    {c}
                  </button>
                );
              })}
            </div>
          </div>
        </form>
        {/* button */}
        <button type="button" className="clear-btn" onClick={clearFilters}>
          clear filters
        </button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .form-control {
    margin-bottom: 1.25rem;
    h5 {
      margin-bottom: 0.5rem;
    }
  }
  .search-input {
    padding: 0.5rem;
    background: var(--clr-grey-10);
    border-radius: var(--radius);
    border-color: transparent;
    letter-spacing: var(--spacing);
  }
  .search-input::placeholder {
    text-transform: capitalize;
  }

  button {
    display: block;
    margin: 0.25em 0;
    padding: 0.25rem 0;
    text-transform: capitalize;
    background: transparent;
    border: none;
    border-bottom: 1px solid transparent;
    letter-spacing: var(--spacing);
    color: var(--clr-grey-5);
    cursor: pointer;
  }
  .active {
    border-color: var(--clr-grey-5);
  }
  .company {
    background: var(--clr-grey-10);
    border-radius: var(--radius);
    border-color: transparent;
    padding: 0.25rem;
  }
  .colors {
    display: flex;
    align-items: center;
  }
  .color-btn {
    display: inline-block;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background: #222;
    margin-right: 0.5rem;
    border: none;
    cursor: pointer;
    opacity: 0.5;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      font-size: 0.5rem;
      color: var(--clr-white);
    }
  }
  .all-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 0.5rem;
    opacity: 0.5;
  }
  .active {
    opacity: 1;
  }
  .all-btn .active {
    text-decoration: underline;
  }
  .price {
    margin-bottom: 0.25rem;
  }
  .shipping {
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    text-transform: capitalize;
    column-gap: 0.5rem;
    font-size: 1rem;
    max-width: 200px;
  }
  .clear-btn {
    background: var(--clr-red-dark);
    color: var(--clr-white);
    padding: 0.25rem 0.5rem;
    border-radius: var(--radius);
  }
  @media (min-width: 768px) {
    .content {
      position: sticky;
      top: 1rem;
    }
  }
`;

export default Filters;
