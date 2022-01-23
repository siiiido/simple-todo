import React from 'react';
import {NavLink} from 'react-router-dom';


const FocusMain = () => {
  return(
    <div>
      <h1>Focus Mode</h1>

      <h4>집중 집중 집중!!</h4>
      <div>
        하나의 todo만 적는 곳. (최대 글자 수 몇칸으로??)
      </div>
      <div>
        <button>완료!!</button>
      </div>
      <NavLink to='/'>
        <button>todo페이지로 이동</button>
      </NavLink>
    </div>
  ) 
  
};

export default FocusMain;
