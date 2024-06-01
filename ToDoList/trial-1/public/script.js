const formBtn = document.querySelector('.form-button');
const inp = document.querySelector('input');
const taskList = document.querySelector('ul');
const tasksarea = document.querySelector('.tasks-area');

function updateTasks(data) {
    taskList.innerText='';
    data.forEach(task => {
        let li = document.createElement('li');
        li.className = 'flex justify-around w-full'
        li.innerHTML = `
            <span class="taskName">${task}</span>
            <button class="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 dwnbtn">⬇️</button>
            <button class="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 delbtn">❎</button>
            <button class="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 upbtn">⬆️</button>
            
        `;
        taskList.appendChild(li);
    })
}

formBtn.addEventListener('click', async ev=>{
    ev.preventDefault();   //ye default behaviour ko hone se rokega

    try {
        let {data} = await axios.get(`/get-task?task=${inp.value}`); //ye axios ka method hai
        console.log(data);
        updateTasks(data);

    } catch (error) {
        console.log(error)
    }
})

tasksarea.addEventListener('click', async ev=>{
    try{
        let item = ev.target;
        // console.log(ev.target);
        // console.log(item.parentElement.querySelector('.taskName').innerText);
        if (item.classList.contains('upbtn')) {
            console.log('up btn daba dia');
            let {data} = await axios.get(`/moved-up?taskName=${item.parentElement.querySelector('.taskName').innerText}`); //ye axios ka method hai to call server jisse wo backend pe array mein change kar ske

            // console.log(item.parentElement.querySelector('.taskName').innerText);
            // console.log('response recieved '+data);

            updateTasks(data);  //ye change kardeti h displayed list in the browser in realtime
        }

        else if (item.classList.contains('delbtn')) {
            console.log('del btn daba dia');
            let {data} = await axios.get(`deleted?taskName=${item.parentElement.querySelector('.taskName').innerText}`);

            // console.log('response received' + data);
            updateTasks(data);
        }

        else if (item.classList.contains('dwnbtn')) {
            console.log('dwn btn daba dia');
            let {data} = await axios.get(`moved-down?taskName=${item.parentElement.querySelector('.taskName').innerText}`);

            updateTasks(data);

        }
    }
    catch(error){
        console.log(error);
    }
})