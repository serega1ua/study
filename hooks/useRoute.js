import { useRouter } from "next/router";
export default function useRoute(to) {
  const navigate = useRouter();
  const navigateToPage = () => {
    navigate.push(to);
  };
  return navigateToPage;
}
