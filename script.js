const Getdata = async ()=>{
    const request = await fetch('http://localhost:5000/users')
    const response = await request.json()
        RenderUsers(response)
}
Getdata()


function RenderUsers(user){
user.map(item =>{
        const tbody = document.getElementById('tbody')
    const tr = document.createElement('tr')
    tr.innerHTML = `
          <tr>
        <th>${item.id}</th>
        <td>${item.name}</td>
        <td>${item.company.name}</td>
        <td>${item.website}</td>
      </tr>
    `

    tbody.append(tr)
})
}



const Getdata2 = async ()=>{
    const request = await fetch('http://localhost:5000/products')
    const response = await request.json()
        RenderProducts(response)
}
Getdata2()




function RenderProducts(product){
product.map(item =>{
        const parent = document.getElementById('parent')
    const div = document.createElement('div')
    div.innerHTML = `
<div class="card bg-base-100 w-96 shadow-sm">
  <figure>
    <img
      src="${item.img}"
      alt="Shoes" />
  </figure>
  <div class="card-body">
    <h2 class="card-title">${item.title}</h2>
    <p>${item.description}</p>
        <p>Category ${item.category}</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">${item.price} $</button>
    </div>
  </div>
</div>
    `

    parent.append(div)
})
}