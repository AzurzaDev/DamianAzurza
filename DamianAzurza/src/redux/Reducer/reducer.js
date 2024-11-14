import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  USER_LOGOUT,
  CREATE_CONTACT_SUCCESS,
  CREATE_CONTACT_FAIL,
  GET_ALL_CONTACTS_SUCCESS,
  GET_ALL_CONTACTS_FAIL,
  GET_ALL_ADMINS_SUCCESS ,
  GET_ALL_ADMINS_FAIL ,
  CREATE_SHOW_SUCCESS,
  CREATE_SHOW_FAIL,
  GET_ALL_SHOWS_SUCCESS,
  GET_ALL_SHOWS_FAIL,
  GET_SHOW_SUCCESS,
  GET_SHOW_FAIL,
  UPDATE_SHOW_REQUEST,
  UPDATE_SHOW_SUCCESS,
  UPDATE_SHOW_FAILURE,
  DELETE_SHOW_REQUEST,
  DELETE_SHOW_SUCCESS,
  DELETE_SHOW_FAILURE,
  DELETE_ADMIN,
 EDIT_ADMIN,
} from "../Actions/actions-types";

const initialState = {
  adminInfo: null,
  token: null,
  contacts: [],
  contact: null,
  admins:[],
  shows: [],
  show: null,
  loading: false,
  error: null,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
      return {
        ...state,
        adminInfo: action.payload.admin,
        token: action.payload.token,
        error: null,
      };
    case REGISTER_FAIL:
    case LOGIN_FAIL:
      return {
        ...state,
        error: action.payload,
      };
      case USER_LOGOUT:
      return { ...state, adminInfo: null };

    case CREATE_CONTACT_SUCCESS:
      return {
        ...state,
        contact: action.payload.contact,
        error: null,
      };
    case GET_ALL_CONTACTS_SUCCESS:
      return {
        ...state,
        contacts: action.payload,
        error: null,
      };
    case CREATE_CONTACT_FAIL:
    case GET_ALL_CONTACTS_FAIL:
      return {
        ...state,
        error: action.payload,
      };

      case GET_ALL_ADMINS_SUCCESS:
        return {
          ...state,
          admins: action.payload,
          error: null,
        };
      
      case GET_ALL_ADMINS_FAIL:
        return {
          ...state,
          error: action.payload,
        };
        case DELETE_ADMIN:
          return {
            ...state,
            admins: state.admins.filter(admin => admin.adminId !== action.payload),
          };
        case EDIT_ADMIN:
          return {
            ...state,
            admins: state.admins.map(admin =>
              admin.adminId === action.payload.adminId ? action.payload : admin
            ),
          };
    case CREATE_SHOW_SUCCESS:
      return {
        ...state,
        show: action.payload,
        error: null,
      };
    case GET_ALL_SHOWS_SUCCESS:
      return {
        ...state,
        shows: action.payload,
        error: null,
      };
    case GET_SHOW_SUCCESS:
      return {
        ...state,
        show: action.payload,
        error: null,
      };
    case CREATE_SHOW_FAIL:
    case GET_ALL_SHOWS_FAIL:
    case GET_SHOW_FAIL:
      return {
        ...state,
        error: action.payload,
      };
    case UPDATE_SHOW_REQUEST:
    case DELETE_SHOW_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case UPDATE_SHOW_SUCCESS:
      return {
        ...state,
        loading: false,
        shows: state.shows.map((show) =>
          show.idShow === action.payload.idShow ? action.payload : show
        ),
      };

    case UPDATE_SHOW_FAILURE:
    case DELETE_SHOW_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case DELETE_SHOW_SUCCESS:
      return {
        ...state,
        loading: false,
        shows: state.shows.filter((show) => show.idShow !== action.payload),
      };

    default:
      return state;
  }
};
export default rootReducer;