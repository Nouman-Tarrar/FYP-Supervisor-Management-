const supervisors = [
  { id: 1, name: "Ahsan Ali", researchDomain: "AI", availableSlots: 2, contactInfo: "ahsanali@cs.uol.edu.pk" },
  { id: 2, name: "Fatima Ahmed", researchDomain: "Cybersecurity", availableSlots: 1, contactInfo: "fatimaahmed@cs.uol.edu.pk" },
  { id: 3, name: "Dr. Kamran", researchDomain: "Data Science", availableSlots: 2, contactInfo: "drkamran@cs.uol.edu.pk" },
  { id: 4, name: "Sara Khan", researchDomain: "Web Development", availableSlots: 0, contactInfo: "sarakhan@cs.uol.edu.pk" },
  { id: 5, name: "Usman Shan", researchDomain: "Machine Learning", availableSlots: 1, contactInfo: "usmanshan@cs.uol.edu.pk" },
  { id: 6, name: "Salman Maaz", researchDomain: "Mobile Development", availableSlots: 1, contactInfo: "salmanmaaz@cs.uol.edu.pk"},
  { id: 7, name: "Zulfiqar Ali", researchDomain: "AI", availableSlots: 1, contactInfo: "zulfiqarali@cs.uol.edu.pk" },
  { id: 8, name: "Dr. Shah", researchDomain: "Web Development", availableSlots: 0, contactInfo: "drshah@cs.uol.edu.pk" },
  { id: 9, name: "Dr. Liaqat", researchDomain: "Data Science", availableSlots: 0, contactInfo: "drliaqat@cs.uol.edu.pk" },
  { id: 10, name: "Imad Waseem", researchDomain: "Machine Learning", availableSlots: 2, contactInfo: "imadwaseem@cs.uol.edu.pk" }
];

let bookmarked = [];

const displaySupervisors = (list, containerId) => {
  let container = document.getElementById(containerId);
  container.innerHTML = list.length 
      ? list.map(s => `
          <div class="p-4 bg-gray-50 border rounded-lg shadow-sm">
              <div class="flex justify-between items-center">
                  <div>
                      <h3 class="font-bold text-lg text-sky-700">${s.name}</h3>
                      <p class="text-sm text-gray-600">Research: ${s.researchDomain}</p>
                      <p class="text-sm text-gray-600">Contact: ${s.contactInfo}</p>
                      <span class="text-xs px-2 py-1 rounded-full 
                          ${s.availableSlots > 0 ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}">
                          ${s.availableSlots > 0 ? `${s.availableSlots} Slots Available` : "No Slots"}
                      </span>
                  </div>
                  <button onclick="${containerId === 'supervisorsList' ? `bookmark(${s.id})` : `removeBookmark(${s.id})`}" 
                          class="text-white px-3 py-1 rounded ${containerId === 'supervisorsList' ? 'bg-green-500 hover:bg-green-600' : 'bg-red-500 hover:bg-red-600'}">
                      ${containerId === 'supervisorsList' ? 'Bookmark' : 'Remove'}
                  </button>
              </div>
          </div>
      `).join('') 
      : `<p class="text-gray-500">No supervisors found.</p>`;
};

const filterSupervisors = () => {
  let searchValue = document.getElementById("searchDomain").value.toLowerCase();
  displaySupervisors(
      supervisors.filter(s => s.researchDomain.toLowerCase().includes(searchValue) && s.availableSlots > 0), 
      "supervisorsList"
  );
};

const bookmark = (id) => {
  let supervisor = supervisors.find(s => s.id === id);
  bookmarked.some(s => s.id === id) || (bookmarked.push(supervisor), displaySupervisors(bookmarked, "bookmarkedList"));
};

const removeBookmark = (id) => {
  bookmarked = bookmarked.filter(s => s.id !== id);
  displaySupervisors(bookmarked, "bookmarkedList");
};

displaySupervisors(supervisors, "supervisorsList");
