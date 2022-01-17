import { createStore } from "redux";
interface IState {
  btcAmount: {
    isValid: boolean;
    amount: number;
  };
  targetChoice: {
    isValid: boolean;
    choice: string;
  };
  ethAddress: {
    isValid: boolean;
    address: string;
  };
  provider: null;
  signer: null;
}
const initialState: IState = {
  btcAmount: {
    isValid: false,
    amount: 0,
  },
  targetChoice: {
    isValid: false,
    choice: "",
  },
  ethAddress: {
    isValid: false,
    address: "",
  },
  provider: null,
  signer: null,
};

function appReducer(state = initialState, action: any) {
  if (action.type == "btcAmount") {
    return {
      ...state,
      btcAmount: {
        isValid: action.payload.isValid,
        amount: action.payload.amount,
      },
    };
  }
  if (action.type == "targetChoice") {
    return {
      ...state,
      targetChoice: {
        isValid: action.payload.isValid,
        choice: action.payload.choice,
      },
    };
  }
  if (action.type == "ethAddress") {
    return {
      ...state,
      ethAddress: {
        isValid: action.payload.isValid,
        address: action.payload.address,
      },
    };
  }
  if (action.type == "wallet") {
    return {
      ...state,
      provider: action.payload.provider,
      signer: action.payload.signer,
    };
  }

  console.log("Unknown dispatch call " + action.type + " exiting");
  return state;
}

const store = createStore(appReducer);

export default store;
