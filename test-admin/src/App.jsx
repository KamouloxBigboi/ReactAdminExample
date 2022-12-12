import { Admin, Resource } from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import { PostList, PostEdit, PostCreate } from "./posts";
import { UserList } from "./users";

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="users" list={UserList} recordRepresentation="name" />
    <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} />
  </Admin>
  );

export default App;
