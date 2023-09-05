const TYPE = "BUTTON/TYPE" as const;

const initialState = {
  type: "ALL",
};

type state = {
  type: string;
};

export const types = (types: string) => ({ type: TYPE, types });

type action = ReturnType<typeof types>;

const typeInfo = (state: state = initialState, action: action) => {
  switch (action.type) {
    case TYPE:
      return {
        ...state,
        type: action.types,
      };
    default:
      return state;
  }
};

export default typeInfo;
