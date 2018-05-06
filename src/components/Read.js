import React,{Component} from 'react'

const bookstatus= [
    {bookstat:'Move To'},
    {bookstat:'currently Reading'},
    {bookstat:'Want to Read'},
    {bookstat:'Read'},
    {bookstat:'none'}
    ]
  
class Read extends Component{
  onChangeHandl(reads,e) {
    
       }
render(){
return(
  <ol className="books-grid">
{this.props.read.map((reads)=>(
                      <li key={reads.title}>
                        <div className="book"> 
                          <div className="book-top">
                            <div className="book-cover" style={{ 
                            backgroundImage:`url(${reads.imageUrl})`,
                            width: 128,
                             height: 193}}></div>
                             
                     <div className="book-shelf-changer" >
                     <select id="dropdown" onChange={this.props.onChangeHandl.bind(this,reads)} value={this.value} >
                    <option value="disab" disabled>{bookstatus[0].bookstat}</option>
                    <option value="currently Reading">{bookstatus[1].bookstat}</option>
                    <option value="Want to Read" >{bookstatus[2].bookstat}</option>
                    <option  value="Read" selected="checked">&#10003;{bookstatus[3].bookstat}</option>
                    <option value="none">{bookstatus[4].bookstat}</option>
                    </select>
                            </div>
                            </div>
                           <div> 
                 <div className="book-title">{reads.title}</div>
               <div className="book-authors">{reads.author}</div>
               </div>
                              
                        </div>
                      </li>
                     
    
))}
</ol>
)
}
}

export default Read