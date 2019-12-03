import React from 'react';
import { withRouter } from 'react-router';

function BibleVerse(props) {

  console.log(props.topics)
  
  return (
    < div className="bible-container" >
      {props.topics.length > 0 ?
        <h1>{props.topics[2].name}</h1>
        :
        <div></div>
      }
    </div >
  )
}
{/* {props.topics.map(topic => (
        <div key={topic.id}>
          <div>{topic.name}</div>
          {topic.verses.map(verse => (
            <div>
            <p>{verse.quote}</p>
              <p>{verse.location}</p>
              </div>
          ))}
        </div>
      ))} */}
export default withRouter(BibleVerse)