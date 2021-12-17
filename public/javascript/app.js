window.addEventListener("load", () => {
  const form = document.getElementById("form");
        btn = document.getElementById("submit-btn"),
        response = document.getElementById("response");
        
  let isSending = false;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Prevent send multiple times while it's sending:
    if (isSending) {
      return;
    }
    isSending = true;
    // Reset HTML
    btn.classList.add('sending');
    response.innerHTML = '';

    const formData = new FormData(form);
    const options = {
      method: 'POST',
      body: JSON.stringify(Object.fromEntries(formData)),
      headers: {
        'Content-Type': 'application/json'
      }
    };
    // Call the API
    fetch(form.action, options)
      .then(res => res.json())
      .then(res => response.innerHTML = res.reversed)
      .catch(err => console.error(err))
      .finally(res => {
        isSending = false;
        btn.classList.remove('sending');
      });
  });
});