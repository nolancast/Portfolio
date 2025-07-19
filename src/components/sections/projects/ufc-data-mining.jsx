export const UFCDataMining = () => {
  return (
        <div style={{ maxWidth: 1400, margin: "0 auto", padding: "2rem 1rem", paddingTop: "5rem" }}>
            <h1 className="text-3xl font-bold mb-8 bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent text-center">
                Modeling UFC Victories with Data Science
            </h1>
            <div
                style={{
                    display: "flex",
                    gap: "2rem",
                    alignItems: "flex-start",
                }}
            >
                {/* Left Side: Project Info */}
                <div style={{ flex: "1 1 250px", minWidth: 200 }}>
                    <img 
                    src="/Portfolio/ufc.webp" 
                    alt="ufc logo" 
                    className="rounded-lg mb-4 w-full object-cover"/>
                    <div style={{ marginBottom: "1.5rem" }}>
                        <h3 className="text-xl font-bold text-gray-300">Project Type</h3>
                        <p className="text-gray-300">Data Analytics - 
                            <a
                                href="https://docs.google.com/presentation/d/1mWo-QIlcLBgSzmn7LLZdZhcZWXw0wScdhNyYcpNGpas/edit?usp=sharing"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-indigo-500 hover:underline ml-1"
                            > Presentation</a>
                        </p>
                    </div>
                    <div style={{ marginBottom: "1.5rem" }}>
                        <h3 className="text-xl font-bold text-gray-300">Location</h3>
                        <p className="text-gray-300">Bloomington</p>
                    </div>
                    <div style={{ marginBottom: "1.5rem" }}>
                        <h3 className="text-xl font-bold text-gray-300">Date</h3>
                        <p className="text-gray-300">April (2025)</p>
                    </div>
                    <div style={{ marginBottom: "1.5rem" }}>
                        <h3 className="text-xl font-bold text-gray-300">Role</h3>
                        <p className="text-gray-300"> Project Leader</p>
                    </div>
            
                
                </div>
                {/* Right Side: Description */}
                <div style={{ flex: "1 1 700px" }}>
                    <div style={{ marginBottom: "2rem" }}>
                        <h2 className="font-bold text-gray-300">Problem Statement</h2>
                        <p className="text-gray-300 mt-2">
                            The Ultimate Fighting Championship (UFC) is a fast-growing sport with a complex and dynamic competitive landscape. Fans, analysts, and bettors are often interested in predicting fight outcomes based on various statistics and odds. This project aims to develop a classification model that predicts UFC fight winners using historical data, including fighter odds and expected values, while exploring the relationship between betting metrics and fight outcomes. By building predictive models, we hope to provide a data-driven approach that offers insights into fighter performance trends and informs future match predictions.
                        </p>
                    </div>
                    <div style={{ marginBottom: "2rem" }}>
                        <h2 className="font-bold text-gray-300">Process</h2>
                        <p className="text-gray-300 mt-2"> 
                            We began the project by sourcing our data from Kaggle’s “Ultimate UFC Dataset,” which provided historical fight information, including fighter betting odds and expected values. After loading the data, we conducted preprocessing steps to clean and prepare it for modeling. This included removing rows with missing target values, encoding the fight winner as a binary variable (Red = 1, Blue = 0), and engineering two key features: the difference in odds between fighters (OddsDiff) and the difference in expected values (ExpectedValueDiff). For models sensitive to scale, such as logistic regression, we applied standardization to the feature set.
                        </p>
                        <p className="text-gray-300 mt-2">
                            With the cleaned and engineered dataset in place, we trained and tuned two classification models: Logistic Regression and Decision Tree. Using GridSearchCV, we performed hyperparameter tuning and evaluated each model’s performance through 5-fold cross-validation, optimizing for ROC AUC scores. To further assess performance, we analyzed model accuracy, confusion matrices, ROC curves, and learning curves, which helped us compare how well each model generalized to unseen data. Visualization played a major role in our evaluation phase, allowing us to clearly identify overfitting patterns in the Decision Tree model and the more stable performance of Logistic Regression.
                        </p>
                    
                    </div>
                    <div>
                        <h2 className="font-bold text-gray-300">Final Reflection</h2>
                        <p className="text-gray-300 mt-2">
                            This project demonstrated the real-world application of classification techniques in a sports analytics context. Logistic Regression outperformed the Decision Tree in both accuracy and AUC, indicating better generalization and robustness to overfitting. While betting odds provided a strong signal for prediction, the limited number of features and mild class imbalance highlighted some limitations.
                        </p>
                        <p className="text-gray-300 mt-2">
                            Still, our model reached up to 71% AUC, showing promising potential for future expansion using more diverse fighter stats (e.g., striking, grappling, physical attributes). This experience strengthened our skills in data preprocessing, model tuning, and communicating technical insights, skills that are critical in data science and machine learning roles.
                        </p>
                    
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UFCDataMining;