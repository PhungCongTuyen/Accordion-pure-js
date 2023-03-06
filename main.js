window.onload = function () {
  const getMockData = () => {
    fetch("/data.json")
      .then((r) => r.json())
      .then(async (data) => {
        mapData(data);
      });
  };

  getMockData();

  const handleClick = (event) => {
    console.log(event.target);
    const index = event.target.id;
    const a = document.getElementsByClassName("accordion__wrapper");
    for (const item of a) {
      item.classList.remove("accordion__active");
    }
    a[index].classList.toggle("accordion__active");
  };

  const mapData = (data) => {
    document.getElementById("accordion").innerHTML = data
      .map(
        (item, index) =>
          `
            <div class="accordion__wrapper" id="${index}">
              <div 
                class="accordion__label" 
              >
                <div class="accordion__title">${item.title}</div>
              </div>
              <p class="accordion__description">${item.description}</p>
            </div>
          `
      )
      .join("");
  };

  document.getElementById("accordion").addEventListener("click", handleClick);
};
