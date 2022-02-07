/* eslint-disable */

// My Starter JavaScript Template

// Journal Entry Form

const entryForm = document.querySelector(`#entryForm`);
const entryResultsSection = document.querySelector(`#entryResultsSection`);
const entryResultItem = document.querySelector(`.entryResultItem`);
const entryResultRow = document.querySelector(`.entryResultRow`);
let getEntryTitle = document.getElementsByClassName(`entry-text-title`);
let getEntryText = document.getElementsByClassName(`entry-text-box`);

let data = [];
const entryHeading = document.createElement(`h3`);
const entryParagraph = document.createElement(`p`);
const entryDiv = document.createElement(`div`);

function addEntryToDom(event) {
  event.preventDefault();
  const d = new Date();
  const month = new Array();
  month[0] = "January";
  month[1] = "February";
  month[2] = "March";
  month[3] = "April";
  month[4] = "May";
  month[5] = "June";
  month[6] = "July";
  month[7] = "August";
  month[8] = "September";
  month[9] = "October";
  month[10] = "November";
  month[11] = "December";
  const n = month[d.getMonth()];
  const day = d.getDay();
  const year = d.getFullYear();

  // const heading = document.createElement(`h2`);
  // heading.className = `heading-results`;
  // heading.textContent = `Journal Entries`;
  // entryResultRow.insertAdjacentElement(`beforebegin`, heading)

  // Adding Div
  entryDiv.className = `single-entry-div`;

  // Adding Div Element h3
  entryHeading.className = `single-entry-heading`;
  //   entryHeading.textContent = getEntryTitle[0].value;
  //   entryDiv.appendChild(entryHeading);

  // Adding Div Element Date

  const entryDate = document.createElement(`p`);
  entryDate.className = `single-entry-date`;
  // eslint-disable-next-line no-cond-assign
  if (getEntryTitle[0].value) {
    entryDate.textContent = `Date Added: ${day} ${n} ${year}`;
    entryDiv.appendChild(entryDate);
  }

  // Adding Div Element paragraph
  entryParagraph.className = `single-entry-text`;
  data.push({ title: getEntryTitle[0].value, text: getEntryText[0].value });
  //   entryParagraph.textContent = getEntryText[0].value;
  //   entryDiv.appendChild(entryParagraph);
  getEntryText[0].value = ``;
  localStorage.setItem("todos", JSON.stringify(data));
}

entryForm.addEventListener(`submit`, addEntryToDom);

let newData = JSON.parse(localStorage.getItem("todos"));
console.log(newData);

newData.forEach((info) => {
  entryHeading.textContent = info.title;
  entryParagraph.textContent = info.text;
  entryDiv.appendChild(entryHeading);
  entryDiv.appendChild(entryParagraph);
  entryResultRow.appendChild(entryDiv);
});
