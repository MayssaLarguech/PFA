import React, { useState } from 'react'
import './index.css'

const Home = () => {
    
    const [showBinomeSection, setShowBinomeSection] = useState(false);
    const onShowBinomeSection=(event)=>{
        setShowBinomeSection(event.target.checked);
    };
   
   
    return (
      
            <div class="containeForHome">
                <h1>PFA Registration Form</h1>
                <form >
                    <div>
                        <label for="firstName">First Name*:</label>
                        <input type="text" id="firstName" name="firstName"  required />
                    </div>
                    <div>
                        <label for="lastName">Last Name*:</label>
                        <input type="text" id="lastName" name="lastName" required />
                    </div>
                    <div>
                        <label for="cin">CIN Number*:</label>
                        <input type="text" id="cin" name="cin" required />
                    </div>
                    <div>
                        <label for="class">Class*:</label>
                        <input type="text" id="class" name="class" required />
                    </div>
                    <div>
                        <label for="email">Email Address*:</label>
                        <input type="email" id="email" name="email" required />
                    </div>
                    <div class="search-container">
                        <label for="Project Name">Project Name</label>
                        <div>
                            <input type="text" id="Your Project Name" class="search-input" placeholder="Your Project Name" />

                        </div>

                    </div>
                    <div class="search-container">
                        <label for="supervisor">Professor Responsible for the Project*:</label>
                        <div>
                            <input type="text" id="Your Supervisor" class="search-input" placeholder="Your Supervisor" />

                        </div>

                    </div>

                    <div>
                        <h2>Your Address</h2>
                        <label for="yourAddress">Address:</label>
                        <textarea id="yourAddress" name="yourAddress" required></textarea>
                    </div>
                    <h2>Binome Information (if applicable)</h2>
                    <div>
                        <label id="hasBinomeLabel" for="hasBinome">Do you have a Binome?</label>
                        <input type="checkbox" value={true} id="hasBinome" name="hasBinome" onChange={onShowBinomeSection} />
                    </div>
                    {showBinomeSection &&
                        <div id="binomeSection">
                            <label for="binomeFirstName">Binome First Name*:</label>
                            <input type="text" id="binomeFirstName" name="binomeFirstName" />
                            <label for="binomeLastName">Binome Last Name*:</label>
                            <input type="text" id="binomeLastName" name="binomeLastName" />
                            <label for="binomeCin">Binome CIN Number*:</label>
                            <input type="text" id="binomeCin" name="binomeCin" />
                            <label for="binomeClasse">Binome Class*:</label>
                            <input type="text" id="binomeClasse" name="binomeClasse" />
                            <label for="binomeEmail">Binome Email Address*:</label>
                            <input type="email" id="binomeEmail" name="binomeEmail" />
                        </div>}

                    <button type="submit">Submit Registration</button>
                </form>
            </div>
        
    )
    
}
export default Home