const listEl = document.querySelector("#jobs")


const renderJob = (htmlString) => {
  listEl.innerHTML.innerHTML += htmlString
}