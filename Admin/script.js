// https://612b668c22bb490017893b1d.mockapi.io/health/v1/activites
//https://612b668c22bb490017893b1d.mockapi.io/health/v1/patients

// fecting of api call
let url ="https://612b668c22bb490017893b1d.mockapi.io/health/v1/patients";

fetch(url)
    .then(response => response.json())
    .then(data=> {
        console.log(data)
        let totalPatients = data.totalPatients;
        let totalWaitingRoom = data.waitinfRoom;
        let totalAppointSchedule = data.scheduledAppointments
        let allApoints = data.appointments

        let waitRoom = document.querySelector('#wr');
        waitRoom.innerHTML=totalWaitingRoom

        document.getElementById('patientsnum').innerHTML=totalPatients
        document.getElementById('appt').innerHTML= allApoints.length;
        document.getElementById('inline-appt').innerHTML=totalAppointSchedule
        document.getElementById('inline-total').innerHTML=totalPatients

        // geting all patients data 
        allApoints.forEach(items => {
            let d = new Date(items.createdAt);
            let hour, mainHour, minute, timeFrame;
            if(d.getHours() > 11){
                hour = d.getHours() - 12;
                timeFrame = 'pm'
                if(hour <= 9){
                    mainHour = '0' + hour;
                } else {
                    mainHour = hour;
                }
            } else {
                hour = d.getHours();
                timeFrame = 'am'
                if(hour <= 9){
                    mainHour = '0' + hour;
                } else {
                    mainHour = hour;
                }
            }
            if(d.getMinutes() <= 9){
                minute = '0' + d.getMinutes()
            } else {
                minute = d.getMinutes()
            }

            let time= `${mainHour}:${minute}${timeFrame}`;
            document.querySelector('.patientsList').innerHTML +=`
            <div class="full-width grid-text smallpd">
                <div class="full-width onerem"> <span class="pd"> ${time}</span></div>
                <div class="full-width grid-text-reverse-s fade-black radius">
                <div class="full-width smallpd"> 
                    <div class="grid-text-reverse-s centerjust pointer"> 
                        <div class="full-width"> <img src="${items.avatar}" alt="" srcset=""></div>
                        <div class="full-width onerem smallpd">${items.name}</div>
                    </div>
                </div>
                <div class="full-width pd flex-end centerjust"> 
                    <a href="#"><img src="img/Group.svg" alt="" srcset=""></a>
                </div>
                </div>
            </div> `
        });

        
    })
    let urlAct ='https://612b668c22bb490017893b1d.mockapi.io/health/v1/activites'

    fetch(urlAct)
        .then(response => response.json())
        .then(data=> {
            console.log(data.activities)
            let active = data.activities
            active.forEach(items => {
                if(items.type.toLowerCase() ==='report') {
                    document.getElementById('Activities').innerHTML +=`
                    <div class="full-width grid-text smallpd">
                    <div class="full-width centerjust">
                        <img src="img/Vector (6).svg" alt="" srcset="">
                    </div>
                    <div class="full-width centerjust">
                        <span class="left-align"> ${items.title}</span>
                    </div>
                 </div> 
                    `
                }else if(items.type.toLowerCase() ==='interview') {
                    document.getElementById('Activities').innerHTML += `
                    <div class="full-width grid-text smallpd">
                    <div class="full-width centerjust">
                        <img src="img/ant-design_info-circle-outlined.svg" alt="" srcset="">
                    </div>
                    <div class="full-width centerjust">
                        <span class="left-align"> ${items.title}</span>
                    </div>
                 </div>
                    `
                }else if (items.type.toLowerCase() === 'appointment') {
                    document.getElementById('Activities').innerHTML += `
                    <div class="full-width grid-text smallpd">
                    <div class="full-width centerjust">
                        <img src="img/uil_calender.svg" alt="" srcset="">
                    </div>
                    <div class="full-width centerjust">
                        <span class="left-align">${items.title}</span>
                    </div>
                 </div>
                    `
                }else {
                    document.getElementById('Activites').innerHTML += `
                    <div class="full-width grid-text smallpd">
                    <div class="full-width centerjust">
                        <img src="img/ion_close-circle-outline.svg" alt="" srcset="">
                    </div>
                    <div class="full-width centerjust">
                        <span class="left-align">${items.title}</span>
                    </div>
                 </div>
                    `
                }
            })            
        })

/// Adding Toggle Menu

let toggle = document.querySelector('.toggle');
let nav = document.querySelector('.fixed');

toggle.addEventListener('click', ()=>{
    nav.classList.toggle('block')
})
