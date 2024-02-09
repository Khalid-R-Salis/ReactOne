import "./login.css";
const LoginForm = () => {
const countries = [
  {name:"Nigeria", id:"ng"},
  {name:"Ghana", id:"gn"},
  {name:"China", id:"ch"},
  {name:"India", id:"ind"},
  {name:"United Kingdom", id:"uk"},
  {name:"United State", id:"us"},
]

const name = "Khaid Rabiu"

  return (
    <>
      <form action="">
        <p>{name}</p>
        <fieldset>
            <label htmlFor=""Email>email</label>
            <input type="email" name="email"/>
        </fieldset>
        <fieldset>
            <label htmlFor=""password>password</label>
            <input type="password" name="password"/>
        </fieldset>
        <fieldset>
        <label htmlFor=""country>country</label>
            <input type="password" name="password"/>
        </fieldset>

<fieldset>
  Country
</fieldset>

<select>
  <option>select country</option>
  {countries.map(country =>{
    return(
      <>
      <option value={country.id}>
        {country.name}
      </option>
      </>
    )
  })}
</select>

        <button type="submit">Submit</button>
        
      </form>
    </>

  );
};

export default LoginForm


