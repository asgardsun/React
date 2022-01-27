import React from 'react';
import Device from './Device';

function App(){ //function을 사용하여 함수같지만 이것은 컴포넌트이다.
  return(
  
 <div>
  Hello
  <Device mydevice="iPad Pro" myfavoritecharacter="Mickey Mouse"/>
  <Device mydevice="iPhone Xs" myfavoritecharacter="iron man"/>
  <Device mydevice="Apple Watch" myfavoritecharacter="Pooh"/>
  <Device mydevice="MacBook Pro" myfavoritecharacter="Spider man"/>
  <Device mydevice="AirPods Pro" myfavoritecharacter="Harry"/>
  </div>     //컴포넌트명의 첫번째 글자는 대문자로 작성해야 한다. -> JSX(javscript + html)
  );
}

export default App;
