let list = [];
let newindex = -1;

function addlist() {
    let g = document.getElementById("grocery").value;
    if (newindex < 0) {
        list.push(g);
    }
    else {
        list[newindex] = g;
    }


    display();

    document.getElementById("grocery").value = " "
}
function display() {
    let a = list.map(function (value, index) {
        return `<div><p class="title">${value}</p>
        <div class="btn-container">
        
          <button type="button" class="edit-btn"
          onclick="editItem(${index})"
          >
            <i class="fas fa-edit"></i>
          </button>
          <!-- delete btn -->
          <button type="button" 
          class="delete-btn" onclick="deleteitem(${index})">
            <i class="fas fa-trash"></i>
          </button>
        </div>
        </div> `
    });

    document.getElementById("dis").innerHTML = a.join(" ")
    console.log(a)
}

function deleteitem(index) {
    list.splice(index, 1)
    display();
}

function editItem(index) {

    document.getElementById("grocery").value = list[index]

    newindex = index;

    display();

}

function clearall() {

    list.splice(0,)
    display();
}