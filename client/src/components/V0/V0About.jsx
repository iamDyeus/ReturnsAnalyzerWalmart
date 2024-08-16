export default function V0About() {
    return (
        <div className="flex flex-col min-h-[100dvh] bg-background">
            <main className="container mx-auto px-4 py-12 md:px-6 lg:py-16">
                <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
                    <div className="space-y-6">
                        <div>
                            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                                Hackathon Project: Analysis of Point of Failure in Returned Products
                            </h1>
                            <p className="mt-4 text-muted-foreground md:text-xl">
                                Our hackathon project aims to address the issues faced by Walmart in analyzing points of failure in returned products, helping to improve their services and increase product retention.
                            </p>
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold">The Problem</h2>
                            <p className="mt-4 text-muted-foreground md:text-xl">
                                To prevent delivery problems, we start by analyzing past delivery data to identify recurring issues. Using Machine Learning, we can detect patterns that may signal future problems. Predictive models are then created to forecast potential delays or other issues before they occur. By acting on these predictions, we can adjust delivery plans or processes accordingly. Regular updates to the models with new data ensure they remain accurate. This proactive approach helps us address issues before they impact delivery, reducing costs and improving customer satisfaction. Continuous improvement ensures a more reliable and efficient delivery system.
                            </p>
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold">Our Solution</h2>
                            <p className="mt-4 text-muted-foreground md:text-xl">
                                To effectively tackle delivery failures, our solution involves using a Machine Learning classifier combined with SHAP (SHapley Additive exPlanations) to predict and analyze these failures. We first develop a classifier trained on historical delivery data to predict the likelihood of delivery failures. This classifier examines various factors such as delivery routes, weather conditions, and past performance metrics to identify patterns and potential failure points.

                                Once the classifier is operational, SHAP is used to interpret its predictions. SHAP provides detailed explanations of the model’s decisions, highlighting specific factors that significantly influence the risk of delivery failures. For example, it might show that weather conditions or delays in sorting facilities are major contributors to failures.

                                By examining these insights, we can identify the root causes of mishandling and address them directly. For instance, if data reveals that adverse weather conditions frequently lead to delays, we might adjust delivery schedules or enhance contingency plans for bad weather. Similarly, if certain routes consistently show higher failure rates, we can investigate and optimize those routes.

                                This approach not only predicts potential delivery issues but also targets and resolves the underlying causes effectively. By continuously refining our models and incorporating new data, we ensure a more reliable and efficient delivery process, reducing both operational costs and customer dissatisfaction.
                            </p>
                        </div>
                    </div>
                    <div className="space-y-6">
                        <div>
                            <h2 className="text-2xl font-bold">Meet the Team</h2>
                            <div className="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2">
                                <div className="flex items-start gap-4">
                                    <div className="h-12 w-12 rounded-full bg-muted text-4xl flex items-center justify-center">A</div>
                                    <div>
                                        <h3 className="text-lg font-medium">Arsh</h3>
                                        <p className="text-muted-foreground">Frontend Developer</p>
                                        <p className="text-muted-foreground">
                                            Arsh is responsible for the frontend functionality.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="h-12 w-12 rounded-full bg-muted text-4xl flex items-center justify-center">SM</div>
                                    <div>
                                        <h3 className="text-lg font-medium">Sujal Maheshwari</h3>
                                        <p className="text-muted-foreground">Machine Learning Expert</p>
                                        <p className="text-muted-foreground">
                                            Sujal is responsible for the machine learning algorithms.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="h-12 w-12 rounded-full bg-muted text-4xl flex items-center justify-center">PR</div>
                                    <div>
                                        <h3 className="text-lg font-medium">Pradeep Rawat</h3>
                                        <p className="text-muted-foreground">Backend Developer</p>
                                        <p className="text-muted-foreground">
                                            Pradeep is responsible for the backend implementation.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="h-12 w-12 rounded-full bg-muted text-4xl flex items-center justify-center">AA</div>
                                    <div>
                                        <h3 className="text-lg font-medium">Abhijeet Ansal</h3>
                                        <p className="text-muted-foreground">Content Writer</p>
                                        <p className="text-muted-foreground">
                                            Abhijeet is responsible for content writing.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold">Challenges and Learnings</h2>
                            <p className="mt-4 text-muted-foreground md:text-xl">
                                Developing this project presented several challenges, including integrating diverse data sources, ensuring real-time data updates, and designing an intuitive user interface. However, our team overcame these obstacles through effective collaboration, research, and iterative development. We learned valuable lessons about building resilient systems, leveraging emerging technologies, and prioritizing user needs. These experiences have equipped us with the skills to tackle complex problems in the future.
                            </p>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}
