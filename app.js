//A user enters the website and finds a list of the names, dates, times, locations, and descriptions of all the parties that are happening.
//Next to each party in the list is a delete button. The user clicks the delete button for one of the parties. That party is then removed from the list.
//There is also a form that allows the user to enter information about a new party that they want to schedule. After filling out the form and submitting it, the user observes their party added to the list of parties

let activeParties = [];
const partyList = document.querySelector("#party-list");

async function fetchParties() {
  const response = await fetch(
    "https://fsa-crud-2aa9294fe819.herokuapp.com/api/2307-ftb-et-web-ft/events"
  );
  const json = await response.json();
  activeParties = json.data;
  renderParties();
}

function renderParties() {
  const html = activeParties
    .map(function (party) {
      console.log(party);
      return `
            <div>
                <h2>${party.name}</h2>
                <p>${party.description}</p>
                <p>${party.date}</p>
                <p>${party.location}</p>
            </div>
        `;
    })
    .join("");
  partyList.innerHTML = html;
}

fetchParties();
