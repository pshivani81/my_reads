 import React,{Component} from 'react'
// import * as BooksAPI from './BooksAPI'
import Current from './Current'
import WantToRead from  './WantToRead'
import Read from './Read'
import escapeRegexp from  'escape-string-regexp'
import sortBy from 'sort-by'


class ListBooks extends Component {
  
  state= {
  query:''
}
  updateQuery=(query) =>{
    this.setState({query:query.trim()})
  }
 
 render()
 {
   let showingBooks
  
   if(this.state.query){
    

   const match = new RegExp(escapeRegexp(this.state.query),'i')
   showingBooks = this.props.addbook.filter((add_book)=>match.test(add_book.title))
   
   }
   else
   {
   showingBooks = this.props.addbook
  }
  const bookstatus= [
    {bookstat:'Move To'},
    {bookstat:'currently Reading'},
    {bookstat:'Want to Read'},
    {bookstat:'Read'},
    {bookstat:'none'}
    ]
   for(const i=0;i<(this.props.addbook.length);i++)
  {
    for(const j=0;j<4;j++)
    {
    
    if(this.props.addbook[i].status==bookstatus[j].bookstat)
    {
      
      bookstatus[j].bookstat="\u2713"+bookstatus[j].bookstat
     // console.log("bookstatusq"+bookstatus[j].bookstat)
    }
    else
  {
    bookstatus[j].bookstat=bookstatus[j].bookstat
  }
  }
  }
 
    return(
             <div>
            
             <div>
             <input type="text" placeholder="Search by title or author" value={this.state.query}
                onChange={(event)=>this.updateQuery(event.target.value)}
                 />       
             </div> 
             <div >
             <ol className="books-grid">
              {showingBooks.map((add_book)=>(
                      <li key={add_book.title}>
                        <div className="book"> 
                          <div className="book-top">
                            <div className="book-cover" style={{ 
                            backgroundImage:`url(${add_book.imageUrl})`,
                            width: 128,
                             height: 193}}></div>
                             
                     <div className="book-shelf-changer" >
                     <select id="dropdown"  >
                    <option value="disab" disabled>{bookstatus[0].bookstat}</option>
                    <option value="currently Reading">{bookstatus[1].bookstat}</option>
                    <option value="Want to Read" >{bookstatus[2].bookstat}</option>
                    <option  value="Read" >{bookstatus[3].bookstat}</option>
                    <option value="none">{bookstatus[4].bookstat}</option>
                    </select>
                     </div>
                       
                            </div>
                             <div>
                      <button onClick={this.props.onAdd.bind(this,add_book)} value={this.value}> + </button>
                    </div>
                           <div> 
                 <div className="book-title">{add_book.title}</div>
               <div className="book-authors">{add_book.author}</div>
               </div>
                              
                        </div>
                      </li>
                     
    
))}
</ol>
             </div>
             
            </div>
        )    
 } 
}

 

export default ListBooks
