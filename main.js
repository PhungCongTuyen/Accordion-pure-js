(function getMockData() {
    fetch("/data.json")
      .then((r) => r.json())
      .then(async (data) => {
        mapData(data);
      });
  })();
  
  function handleClick(id) {
    const a = document.getElementsByClassName("accordion__wrapper");
    for (let i = 0; i < a.length; i++) {
      if (i === id - 1) {
        a[i].classList.toggle("accordion__active");
      } else a[i].classList.remove("accordion__active");
    }
  }
  
  function mapData(data) {
    document.getElementById("accordion").innerHTML = data
      .map(
        (item, index) =>
          `
            <div class="accordion__wrapper">
              <div 
                class="accordion__label" 
                onclick="handleClick(${index + 1})"
              >
                <div class="accordion__title">${item.title}</div>
              </div>
              <p class="accordion__description">${item.description}</p>
            </div>
          `
      )
      .join("");
  }
  