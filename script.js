let form = document.getElementById('addForm');
let itemList = document.getElementById('items');
let filter = document.getElementById('filter');

// Form submit event
form.addEventListener('submit', addItem);
//delete event
itemList.addEventListener('click', removeItem);
// filter event
filter.addEventListener('keyup', filterItems);

// add item

function addItem(e){
e.preventDefault();

//get input value
let newItem = document.getElementById('item').value;

// create new li element 
let li = document.createElement('li');
// add class name to li
li.className= 'list-group-item';
// add text node with input value
li.appendChild(document.createTextNode(newItem));

// create del button element
let deleteBtn = document.createElement('button');
// add classes to the button
deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

//append text node
deleteBtn.appendChild(document.createTextNode('X'));

//append button to li
li.appendChild(deleteBtn);

//append li to list
itemList.appendChild(li);
}


// remove item

function removeItem(e){
    if(e.target.classList.contains('delete')){
        // console.log(1); used to view if the if st. is working
        if(confirm("Are you sure?")){
            let li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}

// filter items

function filterItems(e){
    // convert text to lowerCase
    let text = e.target.value.toLowerCase();
    // get lis
    let items = itemList.getElementsByTagName('li');
// convert items to array
Array.from(items).forEach(function(item){
    var itemName = item.firstChild.textContent;
   if(itemName.toLowerCase().indexOf(text) != -1){
    item.style.display = 'block';
   }else{
    item.style.display = 'none';
   }
});

}