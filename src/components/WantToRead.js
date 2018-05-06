import React,{Component} from 'react'
import onChangeHandle from '../App.js'
import PropTypes from 'prop-types'

const bookstatus= [
    {bookstat:'Move To'},
    {bookstat:'currently Reading'},
    {bookstat:'Want to Read'},
    {bookstat:'Read'},
    {bookstat:'none'}
    ]
  
class WantToRead extends Component{
  onChangeHandle(want_read,e) {
    
       }
render(){
return(
  <ol className="books-grid">
{this.props.wanttoread.map((want_read)=>(
                     <li key={want_read.title} >
                        
                        <div className="book"> 
                          <div className="book-top">
                            <div className="book-cover" style={{ 
                            backgroundImage:`url(${want_read.imageUrl})`,
                            width: 128,
                             height: 193}}></div>
                             
                     <div className="book-shelf-changer" >
                     <select id="dropdown" onChange={this.props.onChangeHandle.bind(this,want_read)} value={this.value} >
                    <option value="disab" disabled>{bookstatus[0].bookstat}</option>
                    <option value="currently Reading">{bookstatus[1].bookstat}</option>
                    <option value="Want to Read" selected="Checked">&#10003;{bookstatus[2].bookstat}</option>
                    <option  value="Read">{bookstatus[3].bookstat}</option>
                    <option value="none">{bookstatus[4].bookstat}</option>
                    </select>
                            </div>
                            </div>
                           <div> 
                 <div className="book-title">{want_read.title}</div>
               <div className="book-authors">{want_read.author}</div>
               </div>
                              
                        </div>
                      </li>
                     
    
))}
</ol>
)
}
}
export default WantToRead
