import './Resume.css';
export default function Resume() {
    return (
        <div>
            <div className="row">
                <div className="col col-3" id="sidebar">
                    <img id="imgProfile" src="images/profile.jpg" width="150" className="rounded-circle" />
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Skills</h5>
                            <p className="card-text">

                            </p><ul className="list-group">
                                <li className="list-group-item">
                                    <span className="badge badge-secondary">HTML</span>
                                </li>
                                <li className="list-group-item">
                                    <span className="badge badge-secondary">CSS</span>
                                </li>
                                <li className="list-group-item">
                                    <span className="badge badge-secondary">Javascript</span>
                                </li>
                                <li className="list-group-item">
                                    <span className="badge badge-secondary">MySQL</span>
                                </li>
                                <li className="list-group-item">
                                    <span className="badge badge-secondary">Node.js</span>
                                </li>
                                <li className="list-group-item">
                                    <span className="badge badge-secondary">Expressjs</span>
                                </li>
                                <li className="list-group-item">
                                    <span className="badge badge-secondary">MongoDB</span>
                                </li>
                                <li className="list-group-item">
                                    <span className="badge badge-secondary">ReactJS</span>
                                </li>
                                <li className="list-group-item">
                                    <span className="badge badge-secondary">Communication</span>
                                </li>
                                <li className="list-group-item">
                                    <span className="badge badge-secondary">Customer Service</span>
                                </li>
                                <li className="list-group-item">
                                    <span className="badge badge-secondary">Team Management</span>
                                </li>
                                <li className="list-group-item">
                                    <span className="badge badge-secondary">Tasks Management</span>
                                </li>
                                <li className="list-group-item">
                                    <span className="badge badge-secondary">Retail Analytics</span>
                                </li>
                            </ul>
                            <p></p>
                        </div>
                    </div>

                    <div className="card" id="awards">
                        <div className="card-body">
                            <h5 className="card-title"> Honor Awards</h5>
                            <p className="card-text">

                            </p><ul className="list-group">
                                <li className="list-group-item">
                                    <h6 className="">EOM - (3 time Awardee)</h6>
                                    <small>Swarovski North America, Ltd.</small>
                                </li>
                                <li className="list-group-item">
                                    <h6 className="">EOM - (2 time Awardee)</h6>
                                    <small>DFS, Ltd.</small>
                                </li>
                            </ul>
                            <p></p>
                        </div>
                    </div>

                    <div className="card" id="languages">
                        <div className="card-body">
                            <h5 className="card-title"> Languages</h5>
                            <p className="card-text">

                            </p><ul className="list-group">
                                <li className="list-group-item">
                                    <span className="">English - Fluent</span>
                                </li>
                                <li className="list-group-item">
                                    <span className="">Vietnamese - Native</span>
                                </li>
                            </ul>
                            <p></p>
                        </div>
                    </div>
                </div>

                <div className="col col-9" id="experience">
                    <h1>Kate Thao Lam</h1>
                    <div>
                        <a href="/resume.pdf">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cloud-download-fill" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M8 0a5.53 5.53 0 0 0-3.594 1.342c-.766.66-1.321 1.52-1.464 2.383C1.266 4.095 0 5.555 0 7.318 0 9.366 1.708 11 3.781 11H7.5V5.5a.5.5 0 0 1 1 0V11h4.188C14.502 11 16 9.57 16 7.773c0-1.636-1.242-2.969-2.834-3.194C12.923 1.999 10.69 0 8 0zm-.354 15.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 14.293V11h-1v3.293l-2.146-2.147a.5.5 0 0 0-.708.708l3 3z" />
                            </svg>
                            Download </a>
                    </div>
                    <p>I am a recent college graduate of Austin Community College and enrolled in the Full Stack Web Development Coding bootcamp at the University of Texas. I am looking for opportunities in web development. I have over 10 years work experience with various retail corporations, both in Vietnam and the US. During this time I have developed the following skills: customer service, team management, task priortization, and data analytics.</p>
                    <div className="container">
                        <div className="row">
                            <div className="col col-sm-6">
                                <div>
                                    <i className="fa-solid fa-envelope"></i>
                                    <a href="mailto:kate.lam.austin@gmail.com"> kate.lam.austin@gmail.com</a>
                                </div>
                                <span><i className="fa-solid fa-phone"></i> 737 203 1148</span>
                                <div><i className="fa-solid fa-location-pin"></i> Round Rock, TX</div>
                            </div>
                            <div className="col col-sm-6">
                                <div>
                                    <i className="fa-brands fa-linkedin"></i>
                                    <a href="http://linkedin.com/in/kate-thao-lam">linkedin.com/in/kate-thao-lam</a>
                                </div>
                                <div>
                                    <i className="fa-brands fa-github"></i>
                                    <a href="http://github.com/Kate-github">github.com/Kate-github</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container" id="edu-section">
                        <div className="row">
                            <div className="col col-md-12">
                                <h2>Education</h2>
                                <h4>UT Austin BootCamps</h4>

                                <div className="row">
                                    <div className="col-6">
                                        <h6>Certficate - Full Stack Web Development</h6>
                                    </div>
                                    <div className="col-6 align-right">October 2022</div>
                                </div>
                                <div className="row">
                                </div>
                                <h4>Austin Community College</h4>

                                <div className="row">
                                    <div className="col-6">
                                        <h6>Associates in Business Adminstration</h6>
                                    </div>
                                    <div className="col-6 align-right">December 2021</div>
                                </div>
                                <div className="row">
                                    <div className="col-6">GPA 4.0</div>
                                    <div className="col-6 align-right">Chancellor’s Honor Award</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container" id="project-section">
                        <div className="row">
                            <div className="col col-md-12">
                                <h2> Class Projects</h2>
                                <h4>Foodle</h4>
                                <p>Recipe search engine that allows users to search recipes of their favorite dishes. Users were able to save recipes to local storage and watch related videos.</p>
                                <h6>Technologies Used</h6>
                                <ul className="list-group">
                                    <li className="list-group-item">
                                        <span className="">HTML</span>
                                    </li>
                                    <li className="list-group-item">
                                        <span className="">JavaScript</span>
                                    </li>
                                    <li className="list-group-item">
                                        <span className="">CSS</span>
                                    </li>
                                    <li className="list-group-item">
                                        <span className="">Commercial Web Apis</span>
                                    </li>
                                </ul>
                                <h4>Track Stream</h4>
                                <p>Web application that keeps you notified of all the video streaming services you are subscribed too. The application gives a visual representation monthly expesses on streaming services and renewal periods.</p>
                                <h6>Technologies Used</h6>
                                <ul className="list-group">
                                    <li className="list-group-item">
                                        <span className="">NodeJs</span>
                                    </li>
                                    <li className="list-group-item">
                                        <span className="">Express</span>
                                    </li>
                                    <li className="list-group-item">
                                        <span className="">Mysql</span>
                                    </li>
                                    <li className="list-group-item">
                                        <span className="">Sequelize</span>
                                    </li>
                                    <li className="list-group-item">
                                        <span className="">Handlebars</span>
                                    </li>
                                    <li className="list-group-item">
                                        <span className="">Express-Session</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="container" id="work-section">
                        <div className="row">
                            <div className="col col-md-12">
                                <h2> Work Experience</h2>
                                <h4>Swarovski North America, Ltd</h4>
                                <h5>Assistant Store Manager</h5>

                                <div className="row">
                                    <div className="col-6">Nov 2018 - Jul 2021</div>
                                    <div className="col-6 align-right">Round Rock, TX</div>
                                </div>
                                <p>
                                </p><ul className="list-group">
                                    <li className="list-group-item">
                                        <span className="">Contributed 20%-25% to total store sales.</span>
                                    </li>
                                    <li className="list-group-item">
                                        <span className="">Worked with Store Manager on operating strategies to ensure the store meet monthly sales targets.</span>
                                    </li>
                                    <li className="list-group-item">
                                        <span className="">Customer service: Utilizing 'clientelling' skills to establish customer relationships and maintain customer loyalty. Handled customer complaints effectively.</span>
                                    </li>
                                    <li className="list-group-item">
                                        <span className="">Visual merchandising: Making sure to update the displays periodically following brand’s standards and promotional strategies.</span>
                                    </li>
                                    <li className="list-group-item">
                                        <span className="">Team management and development: Trained new sale staff on product knowledge, selling skills, and POS proficiency. Troubleshooted issues for the team in store and on phone. Communicated the “hurdles” to the team right before the shifts start to ensure daily sales targets will be achieved.</span>
                                    </li>
                                    <li className="list-group-item">
                                        <span className="">Loss prevention/Inventory Management: managing and arranging the stock on a regular basis, daily checking returned stock, weekly checking damaged stock, making sure shipment receiving processes are accurate.</span>
                                    </li>
                                </ul>
                                <p></p>
                                <h4>DFS Group, Ltd</h4>
                                <h5>Senior Key Account Assistant - Beauty Category</h5>

                                <div className="row">
                                    <div className="col-6">Mar 2013 - Apr 2016</div>
                                    <div className="col-6 align-right">Ho Chi Minh City, Vietnam</div>
                                </div>
                                <p>
                                </p><ul className="list-group">
                                    <li className="list-group-item">
                                        <span className="">Account Management for multiple luxury cosmetic and fragrance brands such as Christian Dior, Estee Lauder, Shiseido, SKII, L'occitane and other brands for Vietnam region.</span>
                                    </li>
                                    <li className="list-group-item">
                                        <span className="">Inventory Management: Responsible for tracking inventory levels, delivering proper and prompt actions for slow and best selling skus as well as to be expired stocks.</span>
                                    </li>
                                    <li className="list-group-item">
                                        <span className="">Brand Development and Strategy: Responsible for product assortments, requesting and setting up promotions/ events, sales targets, sales staffs commission structures, visual merchandising, and monthly/seasonal markdowns implementation.</span>
                                    </li>
                                    <li className="list-group-item">
                                        <span className="">Sales management: Duties included coordination with operations team to ensure sales targets are met.</span>
                                    </li>
                                </ul>
                                <p></p>
                                <h4>DANH GIA Co., Ltd</h4>
                                <h5>Assistant Operation Manager - Lacoste</h5>

                                <div className="row">
                                    <div className="col-6">May 2012 - Feb 2013</div>
                                    <div className="col-6 align-right">Ho Chi Minh City, Vietnam</div>
                                </div>
                                <p>
                                </p><ul className="list-group">
                                    <li className="list-group-item">
                                        <span className="">Vietnam regional store manager for Lacoste. Developed teamwork and culture that is aligned with brand's spirit. Established commission policy for sales teams.</span>
                                    </li>
                                    <li className="list-group-item">
                                        <span className="">Sales management: set sales targets for all retail stores in Vietnam, monitor teams to obtain sales targets, apply seasonal markdowns</span>
                                    </li>
                                    <li className="list-group-item">
                                        <span className="">Inventory management: inventory levels, track and give solutions for slow and bestselling items</span>
                                    </li>
                                </ul>
                                <p></p>
                                <h4>DFS Group, Ltd</h4>
                                <h5>Merchandising Associate - Fashion and Lux Watches</h5>

                                <div className="row">
                                    <div className="col-6">Jun 2007 - Apr 2010</div>
                                    <div className="col-6 align-right">Ho Chi Minh City, Vietnam</div>
                                </div>
                                <p>
                                </p><ul className="list-group">
                                </ul>
                                <p></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}