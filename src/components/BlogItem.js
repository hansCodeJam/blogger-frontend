import React from 'react';
import Button from './Button';
import './App.css';
// import OnUpdate from './OnUpdate'


const BlogItem = ({onDelete, onUpdate, blog: {title, author, subject, article, _id:id}}) => {
    return(
            <div className="ui card" style={{ width: '75%', padding: '20px' }}>
                    <div className="content">
                      <div className="header">{title}</div>
                      <br />
                      <div className="meta">Author: {author}</div>
                      <div className="meta">Subject: {subject}</div>
                      <hr />
                      <div className="description"> {article} </div>
                      <Button className="ui primary button" style={{margin: '10px 15px'}} onClick={() => {
                            return onDelete(id)
                        }}>
                           Delete
                      </Button>
                      <Button className="ui primary button green" style={{margin: '10px 15px'}} onClick={() => {
                            // return console.log(`Update: ${objectId}`)
                            return onUpdate(id);
                        }}>
                           Update
                      </Button>
                      {/* <OnUpdate /> */}
                    </div>
                  </div>
    )
}

export default BlogItem
