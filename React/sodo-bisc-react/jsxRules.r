# do run this just notes
-you must explicity close self-closing element like <br/> not like browser will close it for use , no jsx is sensitive for that

-IMPORTANT : if you want to return two input or alot of code by using jsx ,you can not return more than one to solev this problem 
you should wrap them like this 
function Login() {
  return (
    <div>
      <input type="text" placeholder="username" />
      <input type="password" placeholder="password" />
    </div>
  );
}
export default Login;
# look I return one div have to input and jsx is happy with us

-ok if you donot to use div or from you need them three sperit lines 
you can use react fragment
<>
  <input type="text" placeholder="username" />
  <input type="password" placeholder="password" />
</>