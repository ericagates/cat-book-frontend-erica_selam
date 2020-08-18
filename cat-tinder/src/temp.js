<Route path="/catindex" render = { (props) => < CatIndex allCats={cats}/>}              
/>
<Route path="/catshow/:id" 
render={(props)=> {
    let id = props.match.params.id
    let cat = cats.find(cat => cat.id === parseInt(id))
    return ( 
    <CatShow cat = { cat }/>
    )
}}
/>         