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
  modal: {
    status: string;
    flag: number;
    bitcoinHash: string;
    ethereumHash: string;
    open: false;
  };
  provider: any;
  signer: any;
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
  modal: {
    status: "",
    flag: 0,
    bitcoinHash: "",
    ethereumHash: "",
    open: false,
  },
  provider: null,
  signer: null,
};

function appReducer(state = initialState, action: any) {
  console.log("Called ", action.type, " With payload, ", action.payload);
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
  if (action.type == "modal") {
    console.log(action.payload.modal);
    return {
      ...state,
      modal: action.payload,
    };
  }

  console.log("Unknown dispatch call " + action.type + " exiting");
  return state;
}

const store = createStore(appReducer);

export default store;
