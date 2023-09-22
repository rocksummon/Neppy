document.addEventListener("DOMContentLoaded", () => {
    const dataList = document.getElementById("data-list");

    // Fetch the JSON data from the file
    fetch("data.json")
        .then((response) => response.json())
        .then((data) => {
            // Loop through the JSON data and create list items
            data.forEach((item) => {
                const listItem = document.createElement("li");
                listItem.innerHTML = `<strong>${item.name}:</strong> ${item.description}`;
                dataList.appendChild(listItem);
            });
        })
        .catch((error) => {
            console.error("Error fetching data:", error);
        });
});