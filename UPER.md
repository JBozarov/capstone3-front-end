<h1>The Problem Solving Framework : 'UPER'</h1>

* U = "Understand"
* P = "Plan"
* E = "Execute"
* R = "Reflect" / "Refactor"

<h2>1. Understanding the Problem</h2>

*  Create a working back-end API using Spring Boot

* Include data persistance using a relational/non-relational database

* Incorporate API login authentication using JSON Web Tokens (JWT)

* Create a database schema diagram using a graphical tool such as dbdesigner.net, lucid charts, etc.

* Code should reflect TDD concepts.  Tests should be written for the back end. 

* API should reflect at least one OOP design pattern (Singleton for Database, Factory, Facade, Producer/Consumer, etc)

* Published API documentation using Swagger, Postman, Github, etc.

* Entire application (Front End/Back End) must be deployed and accessible via the web (Netlify, Heroku, Digital Ocean, Oracle Cloud, etc.)

* Bonus functionality includes: 
	-test written for the front end (React-testing-library, Mocha, Chai, Jest)
	-CSS preprocessor/library is used on the front end (Less, Sass, Tailwind)
	-Social medial authentication using OAuth (Google, Facebook, LinkedIn, Github, etc.)

	
<h2>
    2. Planning the Solution
</h2>

* Before work began, the group held a "kick-off" meeting via Webex.  In that meeting discussed our branching strategy, and possible tools that we would use in order to complete the App. 

* We decided on to have a branching strategy that would include a Master Branch, Production Branch, and Individual Branches. 

* As a group we decided that each time a Developer pushed to their branch, perform a pull request to merge from their branch to Production. We set up rules in Github to require two reviews before the branch could be merged.  Once two Developers reviewed the code and merged, each of us would pull the latest version to our local repo. After successful acceptance of that feature, we would merge from Production Branch to Master Branch. 

* Next, using Dependency Inversion, we decided to start with the UI.  

* In order to get acquainted with each other's work, we took the time to review previous Capstone Projects done by the team members.  This step was critical, because it would determine how much time needed to be focused on the Front End. The team unanimously agreed that John's React app was the most professional looking and since he was able to implement all of the required Capstone 1 functionality, choosing his was an easy decision

* Then we discussed how we would work together. None of us had ever worked as a part of a software development team before and we attempted to discern the possible benefits and problems of modularizing potential tasks versus working in pairs versus mob programming. We quickly agreed that the fundamental problem was how we could work separately without overlap, specifically, on how to avoid merge conflicts without constant communication. Would the potential problems outweigh the increased efficiency of five people coding at once? Would our github branching strategies be enough to overcome the disconnect of five different people solving problems in five unique ways? Everyone had different ideas

*We also discussed where everyone’s programming strengths laid, where everyone was most comfortable, and where we wanted to work.

*The User Stories were fairly straight forward. We split up the work and had no problem… until the demo. The Product Owner wanted to be able to test the product himself which presented a huge issue, deployment. None of us knew anything about the subject, how could we solve this problem? As a team, we discussed the best possible ways and decided on the best resources to follow.

<h2>
    3. Executing the Plan
</h2>

*We decided that we should try to imitate an experienced development team and attempt to work apart while staying in regular contact to stay on the same page. We immediately ran into a merge conflict. As our first user story was refined to the back end, we decided that we had to mob program, at least until we had more diverse requirements

*The next problem was deployment. This took us a while to solve and then we had multiple blockers during the process like installing Java on the server for the deployed Spring Boot and difficulty connecting the deployed React to the deployed Spring application.

*We had plenty of frustrating moments but we were buoyed by being blessed with such a great team. Everyone got along, everyone pulled their weight, and all important decisions were made as a team. We had plenty of spirited debate on how to approach/solve problems while avoiding any arguments.

*We worked 14 hours, every day, while also finishing up our last assignment and taking the IKM tests. It was exhausting and we had plenty of frustrating blockers, but every member of the team was supported by the rest of the team and we plugged away at all our blockers

*We had great teamwork. This was the key to our success. We cohesively operated as a unit and collaborated to solve all our blockers.

*Overall, it was a very rewarding experience. We had a lot of fun working together and shared a lot of laughs. We also took great pride in our work and we are proud to demonstrate what we were able to accomplish as a team.

<h2>
    4. Reflection / Refactor
</h2>

*We had to refactor our code for multiple user stories that required extra functionality. Chief among these requirements was the addition of Regions. We had an easy solution present in simply adding another field but we knew our Scrum Master desired an extra table. We discussed the best way to implement this. There was initially some confusion over whether this constituted a Many-To-Many or One-To-Many. We decided that the easiest implementation was a Uni-Directional One-To-Many but it certainly wasn’t easy.

*Another component that we spent a lot of time refactoring was the testing. We began the user stories following TDD principles. Unfortunately, we didn’t know how and not only that, we didn’t know that we didn’t know. None of us had any experience with TDD with Spring Boot and we did not realize that our tests were actually writing to the Database. Some of our tests were predicated on unique values not being replicated. We passed these tests, but they were only good for one shot. We learned that we needed to import Mockito to “mock” the database calls as well as the Service, Repository, and Controller to simulate the program’s behavior. 

*On reflection, there is not too much we would change. One point would be researching areas that we were not experienced with, like testing Spring Test. We could have saved time had we been aware of Mockito before we began. This also applies to Dev Tools in Spring. Spring’s default errors are often not helpful and we often struggled to pinpoint the origin of any problems. Had we taken the time to learn Spring debugging, we probably would have saved time overall.

*The only other difficulty that we might want to change on reflection was the choice to use the entirety of John’s Capstone 1 for our front end because it was using Redux which is a tool that none of the rest of the team was familiar with. We had multiple problems passing the information with Redux and unfortunately, John was stuck working on the front end as he was the only one familiar with the system of passing data through the front end. While the guts of John’s app was very professionally looking, we should have taken that and converted it over to passing data via props which was a process that the whole team was familiar with.
