import React,{Component} from 'react'
import onChangeHandler from '../App.js'
import PropTypes from 'prop-types'

const bookstatus= [
    {bookstat:'Move To'},
    {bookstat:'currently Reading'},
    {bookstat:'Want to Read'},
    {bookstat:'Read'},
    {bookstat:'none'}
    ]
  
 class Current extends Component{
 
   onChangeHandler(current_book,e) {
  
     }
     
render(){
  
 return(
<ol className="books-grid">
{this.props.currentbook.map((current_book)=>(
                      
                      <li key={current_book.title} >
                        
                        <div className="book"> 
                          <div className="book-top">
                            <div className="book-cover" style={{ 
                            backgroundImage:`url(${current_book.imageUrl})`,
                            width: 128,
                             height: 193}}></div>
                     <div className="book-shelf-changer" >
                     <select id="dropdown" onChange={this.props.onChangeHandler.bind(this,current_book)} value={this.value} >
                    <option value="disab" disabled>{bookstatus[0].bookstat}</option>
                    <option value="currently Reading" checked="checked">&#10003;{bookstatus[1].bookstat}</option>
                    <option value="Want to Read">{bookstatus[2].bookstat}</option>
                    <option  value="Read">{bookstatus[3].bookstat}</option>
                    <option value="none">{bookstatus[4].bookstat}</option>
                    </select>
                            </div>
                            </div>
                           <div> 
                 <div className="book-title">{current_book.title}</div>
               <div className="book-authors">{current_book.author}</div>
               </div>
                              
                        </div>
                      </li>
                     
    
))}
</ol>
)
}
}
export default Current









 