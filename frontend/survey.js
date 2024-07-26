document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const formData = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      age: document.getElementById("age").value,
      gender: document.getElementById("gender").value,
      feedback: document.getElementById("feedback").value,
      purchaseFrequency: document.getElementById("purchase-frequency").value,
      satisfaction: document.getElementById("satisfaction").value,
      improvements: document.getElementById("improvements").value,
      recommend: document.getElementById("recommend").value,
      favoriteCategory: document.getElementById("favorite-category").value,
      paymentMethod: document.getElementById("payment-method").value,
      returnExperience: document.getElementById("return-experience").value,
      shippingPreference: document.getElementById("shipping-preference").value,
      loyaltyProgram: document.getElementById("loyalty-program").value,
      comparisonShopping: document.getElementById("comparison-shopping").value,
      techAdoption: document.getElementById("tech-adoption").value,
      feedbackImprovements: document.getElementById("feedback-improvements")
        .value,
    };

    console.log(formData);

    fetch("http://localhost:7000/survey/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Survey data saved successfully!", data);
        // Handle success response here
      })
      .catch((error) => {
        console.error("Error saving survey data: ", error);
        // Handle error here
      });
  });
});
