import { useAuthStore } from "../store/authStore";

function LoginPage() {
  const {user,login,isLoading} = useAuthStore();
  console.log(user);
  console.log(isLoading);
  return (
    <div className="z-50">
      LoginPage
      <button onClick={login}>Login</button>
    </div>
  )
}

export default LoginPage