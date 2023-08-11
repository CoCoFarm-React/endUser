import { useNavigate } from "react-router-dom";
import RegisterComponent from "../../components/consumer/QNARegisterComponent";
import QNARegisterComponent from "../../components/consumer/QNARegisterComponent";

const RegisterPage = () => {

  const navigate = useNavigate()

  const moveList = () => {
    navigate("/consumer/qapage")
  }

  return (
    <div>
      <div
        className="mt-4 text-3xl font-semibold"
      >
        Products Register Page
      </div>
      <QNARegisterComponent moveList={moveList}></QNARegisterComponent>
    </div>
  );
}

export default RegisterPage;