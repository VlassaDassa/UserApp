import { FC } from "react";
import exmapleImg from "./assets/example.png";

const Requirements: FC = () => (
  <div>
    <h1>Техническое задание</h1>
    <p>
      Дана функция <code>requestUsers</code> с аргументом типа
      <code> Query</code>, которая возвращает <code>{"Promise<User[]>"}</code>,
      и функция <code>requestUsersWithError</code>, которая возвращает
      <code> {"Promise.reject<string>"}</code> c ошибкой в виде строки. Обе
      функции имитируют работу с апи.
    </p>

    <h2>Необходимо:</h2>
    <ol>
      <li>
        Реализовать показ списка пользователей (имя и возраст через запятую)
      </li>
      <li>
        Показывать текст <code>Loading...</code> при загрузке пользователей
        вместо списка пользователей.
      </li>
      <li>
        Обработать возможную ошибку при вызове requestUsers (можно проверить при
        помощи функции <code>requestUsersWithError</code>), показать текст
        ошибки вместо списка пользователей.
      </li>
      <li>
        Реализовать фильтрацию по имени (передавая в аргументе поле{" "}
        <code>name</code> в функцие <code>requestUsers</code>, например:{" "}
        <code>{'requestUsers({name: "Jack", ...})'}</code>). Значение по
        умолчанию - пустая строка.
      </li>
      <li>
        Реализовать фильтрацию по возрасту (передавая в аргументе поле{" "}
        <code>age</code> в функцие <code>requestUsers</code> -{" "}
        <code>{'requestUsers({age: "26", ...})'}</code>). Значение по умолчанию
        - пустая строка.
      </li>
      <li>
        Реализовать возможность смены страницы и количества элементов на
        странице - <code>{"requestUsers({limit: 4, offset: 4, ...})"}</code>.
        Здесь <code>offset</code> это не номер страницы, а сдвиг (
        <code>offset = (page - 1) * limit</code>), Значения по умолчанию: offset
        - 0, limit - 4.
      </li>
      <li>
        При получении пустого списка от функции <code>requestUsers</code>{" "}
        показывать сообщение
        <code> Users not found</code>
      </li>
    </ol>

    <h2>Пример интерфейса проекта</h2>
    <img src={exmapleImg} width={480} alt="Пример интерфейса проекта" />

    <p>
      Использование стилей, ui-kit и прочего не требуется. Достаточно
      использования нативных элементов.
    </p>
  </div>
);

export default Requirements;
