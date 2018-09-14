import React from 'react';
import Table from './table';



export default () => {
    // <h1>My first React functional component</h1>
    
    const students = [ 
        { name: 'peter parker',
        course: 'Intro photography',
        grade: 100
        },
        { name: 'brouce banner',
        course: 'psychology',
        grade: 100
        },
        { name: 'tony start',
        course: 'mechanical engineering',
        grade: 100
        }
     ];

     return (
        <div className="container">
            <div>
                <h1>Student Grade Table</h1>
                <Table data={students}/>
            </div>
        </div>
     )
    

}


// export default App;