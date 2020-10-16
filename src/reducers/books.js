import { CREATEBOOK, UPDATEBOOK } from "../types/types";

const initialState = {
  books: [
    {
      title: "Harry Potter"
    },
    {
      title: "Capitalist Realism"
    },
    {
      title: "100 years of solitude"
    }
  ],
};

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
}