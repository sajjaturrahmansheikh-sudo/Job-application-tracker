let interviewList = [];
let rejectedList = [];
let currentStatus = 'all';


const totalCount = document.getElementById("totalCount");
const interviewCount = document.getElementById("interviewCount");
const rejectedCount = document.getElementById("rejectedCount");


const totalJobs = document.getElementById("totalJobs");


// filter btns 
const allFilterBtn = document.getElementById("all-filter-btn")
const interviewFilterBtn = document.getElementById("interview-filter-btn");
const rejectedFilterBtn = document.getElementById("rejected-filter-btn");



const allCardSection = document.getElementById("allCards");
const mainContainer = document.querySelector("main");
const filteredSection = document.getElementById("filtered-section");

let deleteBtn = document.querySelectorAll(".delete-btn");





function calculateCount() {
    totalCount.innerText = allCardSection.children.length;
    totalJobs.innerText = allCardSection.children.length;
    interviewCount.innerText = interviewList.length;
    rejectedCount.innerText = rejectedList.length;
}

calculateCount();

deleteBtn.forEach(deleteBtn => {
    deleteBtn.addEventListener("click", function () {
        let deleteCard = deleteBtn.parentNode.parentNode.parentNode.parentNode;
        deleteCard.classList.add("hidden");
        calculateCount();
    })
});


// step 1
function toggleStyle(id) {

    // adding bg 
    allFilterBtn.classList.add('bg-white');
    interviewFilterBtn.classList.add('bg-white');
    rejectedFilterBtn.classList.add('bg-white');

    // if any btn has blue then remove 
    allFilterBtn.classList.remove('bg-blue-500', 'text-white');
    interviewFilterBtn.classList.remove('bg-blue-500', 'text-white');
    rejectedFilterBtn.classList.remove('bg-blue-500', 'text-white');


    const selected = document.getElementById(id);
    currentStatus = id;

    selected.classList.remove('bg-white');
    selected.classList.add('bg-blue-500', 'text-white')


    if (id == 'interview-filter-btn') {
        allCardSection.classList.add('hidden');
        filteredSection.classList.remove('hidden');
        renderInterview();
    } else if (id == 'all-filter-btn') {
        allCardSection.classList.remove('hidden');
        filteredSection.classList.add('hidden');
    } else if (id == 'rejected-filter-btn') {
        allCardSection.classList.add('hidden');
        filteredSection.classList.remove('hidden');
        renderRejected();
    }



}

mainContainer.addEventListener("click", function (event) {



    if (event.target.classList.contains('interview-btn')) {
        const parenNode = event.target.parentNode.parentNode;

        const cardTitle = parenNode.querySelector('.cardTitle').innerText;
        const cardDes = parenNode.querySelector('.cardDes').innerText;
        const requiers = parenNode.querySelector('.requiers').innerText;
        let status = parenNode.querySelector('.status-btn').innerText;
        const notes = parenNode.querySelector('.notes').innerText;

        parenNode.querySelector('.status-btn').innerText = 'INTERVIEW';



        const cardInfo = {
            cardTitle,
            cardDes,
            requiers,
            status,
            notes
        }

        const plantExist = interviewList.find(item => item.cardTitle == cardInfo.cardTitle)

        if (!plantExist) {
            interviewList.push(cardInfo);
        }

        rejectedList = rejectedList.filter(item => item.cardTitle != cardInfo.cardTitle)

        if (currentStatus == 'rejected-filter-btn') {
            renderRejected();
        }

        calculateCount();

    } else if (event.target.classList.contains('rejected-btn')) {
        const parenNode = event.target.parentNode.parentNode;

        const cardTitle = parenNode.querySelector('.cardTitle').innerText;
        const cardDes = parenNode.querySelector('.cardDes').innerText;
        const requiers = parenNode.querySelector('.requiers').innerText;
        let status = parenNode.querySelector('.status-btn').innerText;
        const notes = parenNode.querySelector('.notes').innerText;

        parenNode.querySelector('.status-btn').innerText = 'REJECTED';

        const cardInfo = {
            cardTitle,
            cardDes,
            requiers,
            status,
            notes
        }
        const plantExist = rejectedList.find(item => item.cardTitle == cardInfo.cardTitle)

        if (!plantExist) {
            rejectedList.push(cardInfo);
        }

        interviewList = interviewList.filter(item => item.cardTitle != cardInfo.cardTitle);

        if (currentStatus == 'interview-filter-btn') {
            renderInterview();
        }

        calculateCount()
    }

})



function renderInterview() {
    filteredSection.innerHTML = '';

    for (let interview of interviewList) {

        let div = document.createElement("div");
        div.className = 'card bg-white p-5 mt-8'
        div.innerHTML = `
                <div class="space-y-4">

                    <div class="flex justify-between">
                        <div>
                            <h3 class="cardTitle text-[#002C5C] font-semibold text-[18px]">${interview.cardTitle}</h3>
                            <p class="cardDes text-[#64748B]"> ${interview.cardDes} </p>
                        </div>
                        <div>
                            <button  class="delete-btn btn btn-circle"><i
                                    class="fa-regular fa-trash-can"></i></button>
                        </div>
                    </div>
                    <p class="requiers text-[#64748B]"> ${interview.requiers} </p>
                    <div class="space-y-2">
                        <button class="status-btn btn btn-outline btn-success"> INTERVIEW </button>
                        <p class="notes text-[#323B49]"> ${interview.notes} </p>
                    </div>
                    <div class="flex gap-2">
                        <button class="interview-btn btn btn-outline btn-success">INTERVIEW</button>
                        <button class="rejected-btn btn btn-outline btn-error">REJECTED</button>
                    </div>



                </div>
        `


        filteredSection.appendChild(div);

    }
}


function renderRejected() {
    filteredSection.innerHTML = '';

    for (let rejected of rejectedList) {

        let div = document.createElement("div");
        div.className = 'card bg-white p-5 mt-8'
        div.innerHTML = `
                <div class="space-y-4">

                    <div class="flex justify-between">
                        <div>
                            <h3 class="cardTitle text-[#002C5C] font-semibold text-[18px]"> ${rejected.cardTitle} </h3>
                            <p class="cardDes text-[#64748B]"> ${rejected.cardDes} </p>
                        </div>
                        <div>
                            <button class="delete-btn btn btn-circle"><i
                                    class="fa-regular fa-trash-can"></i></button>
                        </div>
                    </div>
                    <p class="requiers text-[#64748B]"> ${rejected.requiers} </p>
                    <div class="space-y-2">
                        <button class="status-btn btn btn-outline btn-error"> REJECTED </button>
                        <p class="notes text-[#323B49]"> ${rejected.notes} </p>
                    </div>
                    <div class="flex gap-2">
                        <button class="interview-btn btn btn-outline btn-success">INTERVIEW</button>
                        <button class="rejected-btn btn btn-outline btn-error">REJECTED</button>
                    </div>



                </div>
        `


        filteredSection.appendChild(div);

    }
}