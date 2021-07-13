# Software Developement III Deffered Group Project

### Authors
- James Allsop (1110612)
- Stephen Hove (1665879)
- Sinokubonga Mazibuko (1090327)
- Sinazo Thungo (1632198)
- Lungelo Chala (1586897)  

## Hiking Group Web App

This group projet is the developement of a web application for organizing and sharing hiking groups to allow hikers to connect with other like-minded hikers. It is already hard to meet people to form hiking groups due to busy modern life, and the Covid-19 pandemic has made it worse. This web app is designed to solve this problem.

## Functionality Requirements (as per brief)

- Each hiker should have an account on the app.
- A hiker should be able to either create a new hiking group and search and apply to join the existing hiking groups.
- A new membership application to an existing hiking group should be accepted only if the majority of the members of the group vote in favour of the applicant. The voting process must be online and anonymous. Similarly, a membership to a specific hiking group can be terminated by the group members only if the majority vote for it or the member decides to leave the group. Any member with a valid reason can start the termination process against to any other member of the group.
- A hiker can be a member of at most five hiking groups concurrently. 
- A member of the hiking group should be able to send invites to other hikers to join the group.
- A member of the hiking group should be able to organise a hiking session by posting hiking trail map. An invite for a hiking session can only be accepted by the members who comply with the University’s Covid-19 screening regulations. Hiking sessions must comply with the Government’s regulations and guidelines.
- After each hiking session, the app should also be able to track the GPS locations of the participants until they reach their safe destinations registered on the app and inform the group members accordingly.
- In case a hiker diagnosed with Covid-19 right after a hiking session, the other hikers participated in the session must be informed of this.
- A member should be able post any links to the external content relevant to the hiking group (e.g., pictures of hiking trails), however, the users are not allowed to host multimedia and document files on the platform due to IP related risks.
- Based on a member’s activities, the app should automatically be able to make recommendations to join other groups the hiker might be interested in.
- A member should be rated based on his/her activities on the app. Member ratings should be visible to all users of the app.
- It must be possible to access a log from the website which captures all actions taken in each study group. Each entry in the log should contain the date and time of the action, the nature of the action, and identify the study group member who initiated the action.

## Implemented Functionality
n/a  

## Deployment, Integration and Testing
- The web app is hosted and deployed on Microsoft Azure
- Unit tests are implmeneted using [Jest](https://jestjs.io/)
- Automated testing and code coverage is performed using [Travis CI](https://travis-ci.org/) and Coveralls

## File Structure
📦documenation  
 ┣ 📂ADRs  
 ┗ 📂meetings  
 ┃ ┗ 📜July_12_Initial_Meeting_and_Discussion.pdf  
📦src  
 ┣ 📂client  
 ┃ ┣ 📂model  
 ┃ ┃ ┗   
 ┃ ┣ 📂resources  
 ┃ ┃ ┗   
 ┃ ┣ 📂view_model  
 ┃ ┃ ┗   
 ┃ ┗ 📂views  
 ┃ ┃ ┗   
 ┗ 📂server  
 ┃ ┣ 📂respositories  
 ┃ ┃ ┗   
 ┃ ┣ 📂routes  
 ┃ ┃ ┗   
 ┃ ┗ 📂services  
 ┃ ┃ ┗   