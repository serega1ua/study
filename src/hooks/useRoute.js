import { useNavigate } from "react-router-dom";
export default function useRoute(to) {
  const navigate = useNavigate();
  const navigateToPage = () => {
    navigate(to);
  };
  return navigateToPage;
}
