

function userName(u)
{
var username=u.target.value;
console.log(username);
}
function mail(e)
{
    let mailId=e.target.value;
    console.log(mailId)

}
function phone(p)
{
    let phoneNumber=p.target.value;
    console.log(phoneNumber)

}
function User() {
    
    return (
      <div>
       <form >
        <label htmlFor="username">User Name:</label>
      <input onChange={userName} minLength="4" maxLength="8" required type="text"></input>
      <br></br>
      <label htmlFor="email" >Email:</label>
      <input onChange={mail} type="email" pattern=".+@gmail\.com" required></input>
      <br></br>
      <label htmlFor="phone">Phone:</label>
      <input onChange={phone} type="tel" pattern="[0-9]{3}[0-9]{3}[0-9]{4}" required></input>
      <button>Submit</button>
    </form>
      </div>
      
    );
    }
export default User;