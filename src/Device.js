// import React from 'react';
//  //Map() 함수 사용
// const mydata = {
//     "myDeviceData":[
//       {
//         "name":"iPad Pro",
//         "RAM":6,
//         "HomeButton":false,
//         "TouchID":"No",
//         "FaceID":"Yes"
//       },{
//         "name":"iPhone Xs",
//         "RAM":4,
//         "HomeButton":false,
//         "TouchID":"No",
//         "FaceID":"Yes"
//       },{
//         "name":"iPhone 6",
//         "RAM":1,
//         "HomeButton":true,
//         "TouchID":"Yes",
//         "FaceID":"No"
//       }
//     ]
// };
 
// function Device() {
//     return (
//         <div>
//             {
//                 mydata.myDeviceData.map((myAppleDevice) => {
//                     console.log('idx is ' + JSON.stringify(myAppleDevice.name));
//                     return(
//                         <div>
//                             이름 : { myAppleDevice.name } <br></br>
//                             램 : { myAppleDevice.RAM }GB<br></br>
//                             홈버튼 : { ((myAppleDevice.HomeButton === true) ? '있음' : '없음') } <br></br>
//                             터치 ID : { myAppleDevice.TouchID } <br></br>
//                             페이스 ID : { myAppleDevice.FaceID } <br></br><br></br>
//                          </div>
//                     );
//                 })
//             }
//         </div>
//     );
 
// }
 
// export default Device;


//함수형 컴포넌트 생성 방법
import React, { Component } from 'react';
 
class Device extends Component {
    constructor(props) {
        super(props);
        console.log('in constructor');
    }
 
    componentDidMount() {
        console.log('in componentDidMount');
    }
 
    componentDidUpdate() {
        console.log('in componentDidUpdate');
    }
 
    componentWillUnmount() {
        console.log('in componentWillUnmount');
    }
 
    render() {
        return <div>Here is Device Component</div>;
    }
}
 
export default Device;


