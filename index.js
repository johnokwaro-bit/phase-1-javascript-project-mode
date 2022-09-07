//fetch dishes
function inIt (){
  function fetchFood(dishes){
      const myFetch = fetch("http://localhost:3000/dishes")
      .then(resp => resp.json())
      .then(dishes => {
        // myDishes.append(dishes);
        renderDishes(dishes)
      })

      return myFetch;    
  }
  
  function renderDishes(dishes){  
    const menuList = document.querySelector('#dish-list')    
    dishes.forEach(dish =>{         
      const li = document.createElement("li")      
      li.innerHTML = `<div>
      <img src=${dish.image_url}/>
      <p>${dish.name}</p>
      <p>${dish.description}</p>      
      </div>`, 
      menuList.appendChild(li)
      console.log(menuList)        
      li.addEventListener("click", (e)=>{
        alert(`Dear customer, you have ordered ${dish.name}`)
      })
     
    }
      )}
      
  document.getElementById('review-form').addEventListener('submit', event=>{
    event.preventDefault();
    const form = event.target;
    const reviewList = document.getElementById('review-list')
    const p = document.createElement('p')
    const btn = document.createElement('button')
    btn.innerText = 'x'
    btn.addEventListener('click', handleDelete)
    p.innerHTML = `<li>${form.review.value}</li>`
    p.appendChild(btn)
    reviewList.append(p)
    form.reset();
  })

  function handleDelete(e){
    e.target.parentNode.remove();
  }
  fetchFood()
  fetchLocation()
}

  // /** 4  contains review submit form   and updating the review */ 
  document.addEventListener('DOMContentLoaded', inIt)