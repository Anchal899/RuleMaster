import React, { useState } from 'react';

const RuleForm = () => {
    const [name, setName] = useState('');
    const [ruleString, setRuleString] = useState('()');
    const [combinedRuleStrings, setCombinedRuleStrings] = useState([]);
    const [data, setData] = useState('{}');
    const [evaluationResult, setEvaluationResult] = useState(null);
    const BASE_URL='https://rulemaster-backend-1.onrender.com';
  
    const handleCreateRule = async () => {
        try {
            const response = await fetch(`${BASE_URL}/create_rule`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, ruleString }),
            });
            console.log(response);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const result = await response.json();
            console.log(result);
            alert('Rule created: ' + JSON.stringify(result));
        } catch (error) {
            console.error(error);
            alert('Error creating rule');
        }
    };

    const handleCombineRules = async () => {
        try {
            const response = await fetch(`${BASE_URL}/combine_rules`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ ruleStrings: combinedRuleStrings,name }),
            });
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const result = await response.json();
            alert('Combined AST: ' + JSON.stringify(result));
        } catch (error) {
            console.error(error);
            alert('Error combining rules');
        }
    };

    const handleEvaluateRule = async () => {
        try {
            console.log('Data before parsing:', data);
    
            // Format the data
            const formattedData = data
                .replace(/([a-zA-Z0-9_]+):/g, '"$1":') // Add double quotes around keys
                .replace(/(:\s*)([a-zA-Z0-9_]+)/g, '$1"$2"'); // Add double quotes around values
    
            console.log('Formatted Data:', formattedData);
    
            // Attempt to parse formattedData
            let parsedData;
            try {
                parsedData = JSON.parse(formattedData);
            } catch (e) {
                console.error('Error parsing data:', e);
                alert('Error parsing data');
                return;
            }
    
            // Format the ruleString
            const formattedRule = ruleString
                .replace(/([a-zA-Z0-9_]+):/g, '"$1":') // Add double quotes around keys
                .replace(/(:\s*)([a-zA-Z0-9_]+)/g, '$1"$2"'); // Add double quotes around values
    
            console.log('Formatted Rule:', formattedRule);
           
            // Attempt to parse formattedRule
           
            // Send data to the server
            const response = await fetch(`${BASE_URL}/evaluate_rule`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ rule: ruleString, data: parsedData }),
            });
    
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
    
            const result = await response.json();
            setEvaluationResult(result.result); // result.result will be true or false
        } catch (error) {
            console.error('Error evaluating rule:', error);
            alert('Error evaluating rule');
        }
    };
    
    
    return (
        <div className="max-w-xl mx-auto p-8">
            <h2 className="text-2xl font-bold mb-4">Create Rule</h2>
            <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-2 mb-4 border border-gray-300 rounded"
            />
            <input
                placeholder="Rule String"
                value={ruleString}
                onChange={(e) => setRuleString(e.target.value)}
                className="w-full p-2 mb-4 border border-gray-300 rounded"
            ></input>
            <button
                onClick={handleCreateRule}
                className="w-full p-2 mb-4 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
                Create Rule
            </button>
           
            <h2 className="text-2xl font-bold mb-4">Combine Rules</h2>
            <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-2 mb-4 border border-gray-300 rounded"
            />
            <input
                placeholder="Rule Strings (comma separated)"
                value={combinedRuleStrings.join(', ')}
                onChange={(e) => setCombinedRuleStrings(e.target.value.split(', '))}
                className="w-full p-2 mb-4 border border-gray-300 rounded"
            ></input>
            <button
                onClick={handleCombineRules}
                className="w-full p-2 mb-4 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
                Combine Rules
            </button>

            <h2 className="text-2xl font-bold mb-4">Evaluate Rule</h2>
            <input
                placeholder="AST JSON"
                value={ruleString}
                onChange={(e) => setRuleString(e.target.value)}
                className="w-full p-2 mb-4 border border-gray-300 rounded"
            ></input>
            <input
                placeholder="Data JSON"
                value={JSON.stringify(data)}
                onChange={(e) => setData(JSON.parse(e.target.value))}
                className="w-full p-2 mb-4 border border-gray-300 rounded"
            ></input>
           
            <button
                onClick={handleEvaluateRule}
               
                className="w-full p-2 mb-4 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
                Evaluate Rule
            </button>
            {evaluationResult !== null && <p className="text-lg font-semibold">Evaluation Result: {evaluationResult.toString()}</p>}
        </div>
    );
};

export default RuleForm;
