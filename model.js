import app from './main.js';
import { getDatabase, ref, set,push,child} from "https://www.gstatic.com/firebasejs/9.6.11/firebase-database.js";

function writeUserData(userId, name, email) {
    const db = getDatabase();
    const newPostKey = push(child(ref(db), 'posts')).key;
    set(ref(db, 'customers/' + newPostKey), {
        username: name,
        email: email,
    }).then(()=>alert("data saved")).catch(()=>alert("data not saved.."));
}

var f=document.getElementById('form');
f.addEventListener("submit",(e)=>{
    e.preventDefault();
    var formdata=new FormData(f);
    writeUserData(3,formdata.get("email"),formdata.get("pswd"));
    f.reset();
});

