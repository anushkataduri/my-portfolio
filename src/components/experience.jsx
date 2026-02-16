// import bgImage from '../assets/experience-bg.jpg';

export default function Experience() {
    const experience = [
        {
            company: "CareerAxis",
            role: "Frontend Developer Intern",
            description: "Currently working as part of a development team to design and develop scalable web applications using Angular, TypeScript, and modern frontend technologies. Responsible for building reusable UI components, implementing routing and form validations, and integrating RESTful APIs for dynamic data handling. Actively collaborating with backend developers to ensure seamless data flow and application performance. Contributing to UI/UX enhancements, bug fixing, and feature improvements while following best practices for clean code and version control using Git."
        },
        {
            company: "Intellisurge Technologies",
            role: "App Developer Intern",
            description: "Worked on a project to develop a machine learning model for predicting customer churn. Utilized Python and libraries such as scikit-learn and pandas for data preprocessing, feature engineering, and model training. Collaborated with the team to analyze the results and optimize the model's performance, achieving an accuracy of 85% in predicting customer churn."
        }
    ];
    return (
        <section id="experience" className="section" >
            <h2>Experience</h2>
            <div className="experience-container">  
                {experience.map((exp, index) => (
                    <div key={index} className="glass experience-item">
                        <h3>{exp.company}</h3>              
                        <h4>{exp.role}</h4>
                        <p>{exp.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
