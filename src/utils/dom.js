// adds a new element to dom
export const addSection = (container, template, place) =>
  container.insertAdjacentHTML(place, template);

// insert a new block inside an existing selector
export const appendSection = (container, element) => {
  container.append(element);
};

export const createElement = (template, selector = `div`, classNames) => {
  const newElement = document.createElement(selector);
  if (classNames) {
    for (let item of classNames) {
      newElement.classList.add(item);
    }
  }
  newElement.innerHTML = template;
  return newElement;
};
