export const fetchCoffees = (sortBy = "") => async (dispatch) => {
  dispatch({ type: "COFFEE_LOADING" });

  try {
    let url = "https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-coffee";
    if (sortBy) {
      url += `?sort=price&order=${sortBy}`;
    }

    const res = await fetch(url);
    const data = await res.json();
    dispatch({ type: "COFFEE_SUCCESS", payload: data.data });
  } catch (err) {
    dispatch({ type: "COFFEE_ERROR" });
  }
};


export const setSortBy = (sortBy) => ({
  type: "SET_SORT_BY",
  payload: sortBy,
});

