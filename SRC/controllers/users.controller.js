import view from "../views/users.html";

export default () => {
  const divElement = document.createElement("div");
  divElement.innerHTML = view;

  return divElement;
};
