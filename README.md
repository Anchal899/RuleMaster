RuleMaster
(Rule Engine with AST)
Overview:
RuleMaster is a comprehensive rule evaluaƟon and management system designed to parse
and evaluate complex rules dynamically. Built using the MERN (MongoDB, Express, React,
Node.js) stack, RuleMaster provides a flexible plaƞorm for defining, parsing, and evaluaƟng
rules based on various condiƟons. It is ideal for applicaƟons requiring complex business logic
and condiƟonal operaƟons.
Features:
- Rule DefiniƟon: Allows users to define complex rules using logical operators (AND, OR) and
comparison operators (==, !=, <, >, etc.).
- Rule Parsing: Efficiently parses and constructs Abstract Syntax Trees (AST) for complex rules
to facilitate easy evaluaƟon.
- Data EvaluaƟon:Evaluates defined rules against provided data to determine whether the
condiƟons are met.
- Error Handling: Provides detailed error messages for invalid rule formats and evaluaƟon
issues.
- Rule Management: Supports creaƟng, updaƟng, and deleƟng rules, offering flexibility in
rule management.
- Real-Time EvaluaƟon: ConƟnuously evaluates rules in real-Ɵme or on-demand based on
user interacƟons or system events.
Technologies:
- MongoDB: NoSQL database for storing rules and associated data.
- Express: Web framework for building the server-side applicaƟon and API endpoints.
- React: Frontend library for building the user interface and handling interacƟons.
- Node.js: JavaScript runƟme for building the backend and handling server-side logic.
- Vercel/GitHub: Deployment and version control for hosƟng and managing the project.
Rollups and Aggregates:
1. Rule AggregaƟon:
 - Rule Parsing and ConstrucƟon:Parses input rules and constructs ASTs for easy evaluaƟon.
 - CondiƟon AggregaƟon: Aggregates various condiƟons into a cohesive rule set for
evaluaƟon.

2. Error Handling:
 - Invalid Format DetecƟon: Alerts users to errors in rule formaƫng and provides guidance
for correcƟon.
 - Detailed Error ReporƟng: Provides detailed logs and error messages for debugging.
Usage:
1. Rule CreaƟon: Define rules using a user-friendly interface or API endpoints.
2. Data Input: Submit data for evaluaƟon against the defined rules.
3. Rule EvaluaƟon: View results of rule evaluaƟons and receive error messages for invalid
rules.
4. Real-Time Updates: Monitor and evaluate rules in real-Ɵme or at specified intervals.
Deployment:
The project is deployed on Vercel.
Backend is deployed on render and Frontend is deployed on Vercel
You can access the live applicaƟon at: hƩps://rule-master-bice.vercel.app/
GitHub:
Frontend Link: hƩps://github.com/Anchal899/RuleMaster/tree/main
Backend Link: hƩps://github.com/Anchal899/RuleMaster-backend

Example:
Input:
(age>30 AND name=="Saroj" AND salary>50 OR department=="Sales")
