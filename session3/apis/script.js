const commonLink = 'https://jsonplaceholder.typicode.com/';
const apis = [
    {
        title:"posts",
        attr:[ "userId", "id", "title", "body" ]
    },
    {
        title:"photos",
        attr:[ "albumId", "id","title","url","thumbnailUrl" ]
    },
    {
        title:"todos",
        attr:[ "userId", "id", "title", "completed" ]
    }, 
    {
        title:"albums",
        attr:[ "userId", "id", "title" ]
    }
]
const createMyOwnElement = (parent, ele, txt=null, classes=null) =>{
    myElement = document.createElement(ele)
    parent.appendChild(myElement)
    if(txt) myElement.textContent = txt
    if(classes) myElement.classList=classes
    return myElement
}
const btnWrapper = document.querySelector("#btn-wrapper")
const dataWrapper = document.querySelector("#dataWrapper")
apis.forEach(api=>{
    btn = createMyOwnElement(btnWrapper, "button", api.title, "btn btn-primary mx-2")
    btn.addEventListener("click", async function(e){
        dataWrapper.textContent=""
        let data = await ( await fetch(`${commonLink}${api.title}`) ).json()
        const table = createMyOwnElement(dataWrapper, "table", "", "table table-bordered")
        const thead = createMyOwnElement(table, "thead")
        api.attr.forEach(att=>{
            createMyOwnElement(thead, "th", att)
        })
        const tbody = createMyOwnElement(table, "tbody")
        data.forEach(item=>{
            tr = createMyOwnElement(tbody, "tr")
            api.attr.forEach(att=>{
                createMyOwnElement(tr, "td", item[att])
            })
        })
    })
})



