import {
  LOAD_PRODUCTS,
  SET_LISTVIEW,
  SET_GRIDVIEW,
  UPDATE_SORT,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  CLEAR_FILTERS,
} from "../actions";

let hour = 0;
const filter_reducer = (state, action) => {
  if (action.type === LOAD_PRODUCTS) {
    let maxSalary = action.payload.map((p) => p.salary);
    maxSalary = Math.max(...maxSalary);
    let maxHours = action.payload.map((p) => p.hours);
    maxHours = Math.max(...maxHours);
    hour = maxHours;

    return {
      ...state,
      all_products: [...action.payload],
      filtered_products: [...action.payload],
      filters: {
        ...state.filters,
        max_salary: maxSalary,
        salary: maxSalary,
        max_hours: maxHours,
        hours: maxHours,
      },
    };
  }

  if (action.type === SET_GRIDVIEW) {
    return { ...state, grid_view: true };
  }
  if (action.type === SET_LISTVIEW) {
    return { ...state, grid_view: false };
  }
  if (action.type === UPDATE_SORT) {
    return { ...state, sort: action.payload };
  }
  if (action.type === SORT_PRODUCTS) {
    const { sort, filtered_products } = state;
    let tempProducts = [...filtered_products];

    if (sort === "price-lowest") {
      tempProducts = tempProducts.sort((a, b) => a.salary - b.salary);
    }
    if (sort === "price-highest") {
      tempProducts = tempProducts.sort((a, b) => b.salary - a.salary);
    }
    if (sort === "name-a") {
      tempProducts = tempProducts.sort((a, b) => {
        return a.title.localeCompare(b.title);
      });
    }
    if (sort === "name-z") {
      tempProducts = tempProducts.sort((a, b) => {
        return b.title.localeCompare(a.title);
      });
    }

    return { ...state, filtered_products: tempProducts };
  }

  if (action.type === UPDATE_FILTERS) {
    const { name, value } = action.payload;
    return { ...state, filters: { ...state.filters, [name]: value } };
  }

  if (action.type === FILTER_PRODUCTS) {
    const { all_products } = state;
    const { text, title, company, location, salary, hours, closeDate } =
      state.filters;
    let tempProducts = [...all_products];
    // text
    if (text) {
      tempProducts = tempProducts.filter((product) => {
        return product.title.toLowerCase().startsWith(text);
      });
    }
    //title
    if (title !== "all") {
      tempProducts = tempProducts.filter((product) => {
        return product.title === title;
      });
    }
    //category
    // if (category !== "all") {
    //   tempProducts = tempProducts.filter((product) => {
    //     return product.category === category;
    //   });
    // }

    // company
    if (company !== "all") {
      tempProducts = tempProducts.filter((product) => {
        return product.company === company;
      });
    }
    // close dates
    if (closeDate !== "all") {
      tempProducts = tempProducts.filter((product) => {
        return product.closeDate === closeDate;
      });
    }

    // location
    if (location !== "all") {
      tempProducts = tempProducts.filter((product) => {
        return product.location === location;
      });
    }

    //salary
    tempProducts = tempProducts.filter((product) => product.salary <= salary);

    // working hours
    tempProducts = tempProducts.filter((product) => product.hours <= hours);

    return { ...state, filtered_products: tempProducts };
  }

  if (action.type === CLEAR_FILTERS) {
    return {
      ...state,
      filters: {
        ...state.filters,
        text: "",
        title: "all",
        company: "all",
        location: "all",
        closeDate: "all",
        hours: hour,
        salary: state.filters.max_salary,
      },
    };
  }
  throw new Error(`No Matching "${action.type}" - action type`);
};

export default filter_reducer;
