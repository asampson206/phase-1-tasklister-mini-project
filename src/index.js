document.addEventListener("DOMContentLoaded", () => {
  // your code here
  document.addEventListener('DOMContentLoaded', () => {
    let form = document.querySelector('form'); form.addEventListener('submit', (e) => {
    e.preventDeault()
    buildToDo(e.target.new_todo.valur)
    form.reset()})})
    function handleToDo(todo){
    let p = document.creatElement('p')
    let btn = document.createElement('button')
    btn.addEventListener('click', handleDelete)
    btn.textContent = 'x'
    p.textContent = `${todo}`
    p.appendChild(btn)
    console.log(p)
    document.querySelector('#todo_container').appendChild(p)}
    function handleDelete(e){
    e.target.parentNode.remove()}
    
});
