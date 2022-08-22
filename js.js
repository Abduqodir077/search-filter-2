const items = document.querySelector(".items");
const searchInput = document.getElementById("search");
let todos = []

const getItem = () => {
    fetch("https://jsonplaceholder.typicode.com/todos")
    .then(res => {res.json()
    .then(res => {
        todos = res;
     
    })
    .catch(err => console.log(err));
    })
    .catch(err => console.log(err));
};


searchInput.addEventListener('input', e => {
    const element = e.target.value.toLowerCase()

    const searchFunc = todos.filter(todo => {
        return todo.title.toLowerCase().includes(element)
    }
    )
  
    viewResults(searchFunc)
})

const viewResults = (arr) => {
    let output = "";

    arr.forEach(({ id,title }) => (output += `
    <tr>
        <td>
            <div class="results">
                 <div>
                     <h1>
                        ${id}
                     </h1>
                 </div>
                    <div>
                     <p>
                        ${title}
                     </p>
                    </div>
            </div>
        </td>
    </tr>


    `));
    items.innerHTML = output;
}

document.addEventListener("DOMContentLoaded",getItem);