import React,{Component} from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import Current from './components/Current'
import WantToRead from  './components/WantToRead'
import Read from './components/Read'
import ListBooks from './components/ListBooks'
import escapeRegexp from  'escape-string-regexp'
import sortBy from 'sort-by'

class BooksApp extends React.Component {
  
  state= {
currentbook: [
{
"title":   "To Kill a Mockingbird",
"author":  "Harper Lee",
"status": "currently Reading",
"imageUrl": "http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api"
},
{
"title": "Ender\'s Game",
"author":"Orson Scott Card",
"status": "currently Reading",
"imageUrl":"http://books.google.com/books/content?id=yDtCuFHXbAYC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72RRiTR6U5OUg3IY_LpHTL2NztVWAuZYNFE8dUuC0VlYabeyegLzpAnDPeWxE6RHi0C2ehrR9Gv20LH2dtjpbcUcs8YnH5VCCAH0Y2ICaKOTvrZTCObQbsfp4UbDqQyGISCZfGN&source=gbs_api"
}
],
 wanttoread: [
{
"title": "1776",
"author":"David McCullough",
"status":"Want to Read",
"imageUrl":"http://books.google.com/books/content?id=uu1mC6zWNTwC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73pGHfBNSsJG9Y8kRBpmLUft9O4BfItHioHolWNKOdLavw-SLcXADy3CPAfJ0_qMb18RmCa7Ds1cTdpM3dxAGJs8zfCfm8c6ggBIjzKT7XR5FIB53HHOhnsT7a0Cc-PpneWq9zX&source=gbs_api"
},
{
"title": "Harry Potter and the Sorcerer's Stone",
"author":"J.K.Rowling",
"status":"Want to Read",
"imageUrl":"http://books.google.com/books/content?id=wrOQLV6xB-wC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72G3gA5A-Ka8XjOZGDFLAoUeMQBqZ9y-LCspZ2dzJTugcOcJ4C7FP0tDA8s1h9f480ISXuvYhA_ZpdvRArUL-mZyD4WW7CHyEqHYq9D3kGnrZCNiqxSRhry8TiFDCMWP61ujflB&source=gbs_api"
}
],

 read:[
  {
 "title": 'The Hobbit',
 "author": 'J.R.R. Tolkien',
 "status":"Read",
 "imageUrl":"http://books.google.com/books/content?id=pD6arNyKyi8C&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE70Rw0CCwNZh0SsYpQTkMbvz23npqWeUoJvVbi_gXla2m2ie_ReMWPl0xoU8Quy9fk0Zhb3szmwe8cTe4k7DAbfQ45FEzr9T7Lk0XhVpEPBvwUAztOBJ6Y0QPZylo4VbB7K5iRSk&source=gbs_api" 
 },
 {
 "title":'Oh, the Places You\'ll Go!',
 "author":'Seuss',
 "status":"Read",
 "imageUrl":"http://books.google.com/books/content?id=1q_xAwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE712CA0cBYP8VKbEcIVEuFJRdX1k30rjLM29Y-dw_qU1urEZ2cQ42La3Jkw6KmzMmXIoLTr50SWTpw6VOGq1leINsnTdLc_S5a5sn9Hao2t5YT7Ax1RqtQDiPNHIyXP46Rrw3aL8&source=gbs_api"
  },
  {
 "title": 'The Adventures of Tom Sawyer',
 "author": 'Mark Twain',
 "status":"Read",
 "imageUrl":"http://books.google.com/books/content?id=32haAAAAMAAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72yckZ5f5bDFVIf7BGPbjA0KYYtlQ__nWB-hI_YZmZ-fScYwFy4O_fWOcPwf-pgv3pPQNJP_sT5J_xOUciD8WaKmevh1rUR-1jk7g1aCD_KeJaOpjVu0cm_11BBIUXdxbFkVMdi&source=gbs_api"
  }                           
 ],
 addbook: [
{
"title":   "fitbook-1",
"author":  "Harper Lee",
"status":  "none",
"imageUrl": "http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api"
},
{
"title": "gamebook-1",
"author":"Orson Scott Card",
"status": "none",
"imageUrl":"http://books.google.com/books/content?id=yDtCuFHXbAYC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72RRiTR6U5OUg3IY_LpHTL2NztVWAuZYNFE8dUuC0VlYabeyegLzpAnDPeWxE6RHi0C2ehrR9Gv20LH2dtjpbcUcs8YnH5VCCAH0Y2ICaKOTvrZTCObQbsfp4UbDqQyGISCZfGN&source=gbs_api"
},
{
 "title": 'gamebook-2',
 "author": 'Mark Twain',
 "status":"none",
 "imageUrl":"http://books.google.com/books/content?id=32haAAAAMAAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72yckZ5f5bDFVIf7BGPbjA0KYYtlQ__nWB-hI_YZmZ-fScYwFy4O_fWOcPwf-pgv3pPQNJP_sT5J_xOUciD8WaKmevh1rUR-1jk7g1aCD_KeJaOpjVu0cm_11BBIUXdxbFkVMdi&source=gbs_api"
  } ,
{
 "title": 'yoga-2',
 "author": 'Mark Twain',
 "status":"none",
 "imageUrl":"http://books.google.com/books/content?id=32haAAAAMAAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72yckZ5f5bDFVIf7BGPbjA0KYYtlQ__nWB-hI_YZmZ-fScYwFy4O_fWOcPwf-pgv3pPQNJP_sT5J_xOUciD8WaKmevh1rUR-1jk7g1aCD_KeJaOpjVu0cm_11BBIUXdxbFkVMdi&source=gbs_api"
  } ,

],
     
 
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    
    showSearchPage: false
  }
    
    updateQuery = (query) =>{
      this.setState({ query:query.trim() })
    }

  onChangeHandler=(current_book,e)=> {
                          //updating value
     current_book.status=e.target.value;
     
     this.setState({[current_book.status]:e.target.value})
     
     if(current_book.status=="Want to Read")
     {
      
       this.setState({ wanttoread: this.state.wanttoread.concat(current_book) })
     }
     else
     if(current_book.status=="Read")
     {
      
     this.setState({ read: this.state.read.concat(current_book) })
    }
   
     this.setState((state) => ({
      currentbook: state.currentbook.filter((c) => c.status =="currently Reading")
    }))
    
     }
  
     onChangeHandle=(want_read,e)=> {
                          //updating value
     want_read.status=e.target.value;
   
     if(want_read.status=="currently Reading")
     {
        
       this.setState({currentbook : this.state.currentbook.concat(want_read) })
     }
     else
     if(want_read.status=="Read")
     {
       
     this.setState({ read: this.state.read.concat(want_read) })
    }
   
      this.setState((state) => ({
      wanttoread: state.wanttoread.filter((c) => c.status =="Want to Read")
    }))
     }
  
    onChangeHandl=(reads,e)=> {
                          //updating value
     reads.status=e.target.value;
    

     if(reads.status=="currently Reading")
     {
        
       this.setState({currentbook : this.state.currentbook.concat(reads) })
     }
     else
     if(reads.status=="Want to Read")
     {
      
     this.setState({ wanttoread: this.state.wanttoread.concat(reads) })
    }
    
    this.setState((state) => ({
      read: state.read.filter((c) => c.status =="Read")
    }))
     }

    onAdd = (add_book,e)=>
    { 
      console.log("status"+add_book.status)
      if(add_book.status === "none"){
       add_book.status ="currently Reading"
       
      this.setState({currentbook:this.state.currentbook.concat(add_book)})
    }
      
      
    }
  render() {
   
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <div className="search-books">
            <div className="search-books-bar">
              <a className="close-search"  onClick={() => this.setState({ showSearchPage: false })}>Close</a>
              <div className="search-books-input-wrapper">
              
                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                
                  <ListBooks onAdd={this.onAdd.bind(this)} addbook={this.state.addbook}/>
              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid"></ol>
            </div>
           
          </div>
         

        ) : (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Currently Reading</h2>
                  <div className="bookshelf-books">
                   <Current onChangeHandler={this.onChangeHandler.bind(this)} currentbook={this.state.currentbook}/>
                  </div>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Want to Read</h2>
                  <div className="bookshelf-books">
                 <WantToRead onChangeHandle={this.onChangeHandle.bind(this)}  wanttoread={this.state.wanttoread}/>
                  </div>
                </div>
                <div className="bookshelf">
                <h2 className="bookshelf-title">Read</h2>
                  <div className="bookshelf-books">
                   <Read onChangeHandl={this.onChangeHandl.bind(this)} read={this.state.read}/> 
                  </div>
                </div>
              </div>
            </div>
            <div className="open-search">
              <a  onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
             
            </div>
          </div>
        )}
      </div>
    )
  }
}
export function onChangeHandler(){}
export default BooksApp
