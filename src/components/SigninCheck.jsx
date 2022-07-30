export const PwCheck = (asValue) =>{
    const regExp =
      /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+]).{8,16}$/;

    return regExp.test(asValue); // 형식에 맞는 경우 true 리턴
  }


export const IdCheck = (asValue) => {
	const regExp = /^[a-z]+[a-z0-9]{5,19}$/g;
 
	return regExp.test(asValue);
}


