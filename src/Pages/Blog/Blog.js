import React from 'react';

const Blog = () => {
    return (
        <div>
           <div>
            <h2> 1. What is cors?</h2>
            <br />
            <p>Ans:Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources. </p>
           </div>

           <div>
            <h2>2. why are you using firebase ? What other options do you have to implement authentication?</h2>
            <br />
            <p>Ans:The Firebase Realtime Database lets you build rich, collaborative applications by allowing secure access to the database directly from client-side code. Data is persisted locally, and even while offline, realtime events continue to fire, giving the end user a responsive experience.
                <br />
            Usually, authentication by a server entails the use of a user name and password. Other ways to authenticate can be through cards, retina scans, voice recognition, and fingerprints.    
            </p>
           </div>

           <div>
            <h2>How does the private route work?</h2>
            <br />
            <p>Ans:The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in).</p>
            
           </div>

           <div>
             <h2>4. what is Node ? How does Node Work?</h2>
             <br />
             <p>Ans: js in 2009. Node allows developers to write JavaScript code that runs directly in a computer process itself instead of in a browser. 
            <br />
            It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.    
             </p>
           </div>

            
        </div>
    );
};

export default Blog;