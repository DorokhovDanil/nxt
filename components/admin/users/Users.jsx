import out_logo from "./../../../assets/images/output.png";
import in_logo from "./../../../assets/images/input.png";
//import "./status.css";
import UniversalTable from "../../UI/table";
import React, { useState, useEffect } from "react";
import moment from "moment";
import $host from "../../../http";


const output_but = "Вывести";
const input_but = "Пополнить";

function transformUsersFormat(users) {
  return users.map((item) => ({
    ID: item._id,
    tel: item.tel,
    email: item.email,
    balance: `${item.balance} USDT`
  }));
}

const isClickableIndexes = [0]
//рендеринг странички "состояние счета"
function Users() {

  const [usersData, setUsersData] = useState([]);

  async function fetchUsersData() {
    try {
      const { data } = await $host.get("/api/user/users");
     
      return data;
    } catch (error) {
      console.error("There was a problem with your fetch operation:", error);
    }
  }
  useEffect(() => {
    async function fetchData() {
      const data = await fetchUsersData(); // Assuming fetchStakingData is defined as in the previous example
      setUsersData(data.users); // Assuming the data is structured as { stakings: [...] }
    }

    fetchData();
  }, []);
  // Example usage
  fetchUsersData().then((data) => { });
  //лого + ссылки + бегущая строка
  const headers = [
    "ID",
    "Телефон",
    "email",
    "Баланс",
  ];


  const columnTypes = [
    "default",
    "default",
    "default",
    "default"
  ];

  return (
    <div className="container container_status">
      <div className="title">
        {" "}
        <span>Пользователи</span>
      </div>
      <div className="main_con">
        <div className="main_con_partn">


          <UniversalTable
            //нужно заменить данные
            data={transformUsersFormat(usersData)}
            headers={headers}
            columnTypes={columnTypes}
            isClickableIndexes={isClickableIndexes}
          />

        </div>
      </div>
    </div>
  );
}
export default Users;
