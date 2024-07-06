import axios from "axios";
import { setLoading, setUser } from "../../reducers/userReducer";
import { API_URL } from "../../http";


export const registration = async (
  tel,
  email,
  password,
  secretWord,
  firstName,
  lastName,
  surName,
  referal,
) => {
    const { data } = await axios.post(`${API_URL}/api/auth/registration`, {
      tel,
      email,
      password,
      secretWord,
      referal,
      firstName,
      lastName,
      surName
    });
    return data;
};

export const login = async (tel, email, password) => {
  const { data } = await axios.post(`${API_URL}/api/auth/login`, {
    tel,
    email,
    password,
  });
  return data;
};

export const auth = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`${API_URL}/api/auth/auth`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("accessToken")}` },
      });
      localStorage.setItem("accessToken", response.data.token);
      dispatch(setUser(response.data));
      
      //получаем нашего юзера и переменную, которая показывает, авторизован ли пользователь

      //локальное хранилище для токена, чтобы при обновлении страницы не слетала авторизация
    } catch (e) {
      console.log("2")

      localStorage.removeItem("accessToken");
    } finally {
      console.log("3");
      dispatch(setLoading(false));
    }
  };
};

export const getUserInfo = () => {
 return async (dispatch) => {
    try {
      const response = await axios.get(`${API_URL}/api/auth/me`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("accessToken")}` },
      });
      dispatch(setUser(response.data.user));
    } catch (e) {
      console.error(e);
      // Обработка ошибок, например, удаление токена из локального хранилища, если запрос не удался
      localStorage.removeItem("accessToken");
    }
  };
};
