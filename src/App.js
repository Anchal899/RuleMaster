import React from 'react';
import RuleForm from './components/RuleForm';

const App = () => {
    return (
        <div className="App flex flex-col">
        <div className='bg-blue-400 h-45 w-45'> 
        <h1 className='text-4xl text-center my-2'>Rule Master</h1>
        </div>
           <div >
           <RuleForm className='border border-cyan-400'/>
           </div>
            
        </div>
    );
};

export default App;
