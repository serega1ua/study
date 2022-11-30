export default function usePopup(routeFunction, showFunction, showValue) {
  if (routeFunction) {
    const closePopup = () => {
      routeFunction();
      showFunction(!showValue);
    };
    return closePopup;
  } else {
    const closePopup = () => {
      showFunction(!showValue);
    };
    return closePopup;
  }
}
