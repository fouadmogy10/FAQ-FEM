document.addEventListener("DOMContentLoaded", function () {
  const questionItems = document.querySelectorAll(".question-item");

  questionItems.forEach((questionItem) => {
    const button = questionItem.querySelector(".quistionn-title");
    const img = button.querySelector(".btn-img");

    button.addEventListener("click", () => {
      const questionDesc = questionItem.querySelector(".question-desc");
      const open = questionDesc.classList.toggle("show");

      // Close other open descriptions
      questionItems.forEach((item) => {
        if (item !== questionItem) {
          const otherQuestionDesc = item.querySelector(".question-desc");
          otherQuestionDesc.classList.remove("show");
          otherQuestionDesc.style.maxHeight = null;
          const otherImg = item.querySelector(".btn-img");
          otherImg.setAttribute("src", "assets/images/icon-plus.svg");
        }
      });

      // Toggle icon
      img.setAttribute("src", open ? "assets/images/icon-minus.svg" : "assets/images/icon-plus.svg");
      questionDesc.style.maxHeight = open ? questionDesc.scrollHeight + "px" : null;
    });
  });
});
