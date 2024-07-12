function Users ({
  params
} : {
  params : {names : string}
}){
  return (
    <>
    <h1>User Name : {params.names}</h1>
    </>
  );
}

export default Users;