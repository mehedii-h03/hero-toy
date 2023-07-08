import { Helmet } from "react-helmet";

const Blog = () => {
    return (
        <div className="lg:px-24 p-4">
            <Helmet>
                <title>HeroToy | Blog</title>
                <meta name="description" content="Helmet application" />
            </Helmet>
            {/* question 1 */}
            <article className='mb-4'>
                <h1 className='text-3xl font-medium mb-4' >1. What is an access token and refresh token? How do they work and where should we store them on the client-side?</h1>
                <p className='text-gray-500 text-xl '> An access token and refresh token are commonly used in authentication and authorization systems. They serve different purposes and work together to provide secure and efficient access to protected resources.</p>
                <p>Access Token:</p>
                <ul className='ms-10 text-gray-500 text-lg' style={{ listStyleType: "disc" }}>
                    <li>An access token is a credential that is used to access protected resources, such as APIs or restricted areas of a website.</li>
                    <li>The client application includes the access token in each request to the protected resource to authenticate and authorize the user.</li>
                </ul>
                <p>Refresh Token:</p>
                <ul className='ms-10 text-gray-500 text-lg' style={{ listStyleType: "disc" }}>
                    <li>A refresh token is a credential used to obtain a new access token when the current one expires.</li>
                    <li>It is long-lived and typically has a longer expiration time compared to the access token.</li>
                </ul>
                <p>Storing Tokens on the Client-side:</p>
                <ul className='ms-10 text-gray-500 text-lg' style={{ listStyleType: "disc" }}>
                    <li>Access tokens and refresh tokens should be stored securely on the client-side to prevent unauthorized access.</li>
                    <li>Best practices include storing them in secure HTTP-only cookies, local storage, or session storage.</li>
                </ul>
            </article>
            {/* question-2 */}
            <article className='mb-4'>
                <h1 className='text-3xl font-medium mb-4' >2. Compare SQL and NoSQL databases?</h1>
                <p className='text-gray-500 text-xl '>SQL databases follow a rigid schema and use structured query language (SQL) for data management. They ensure data integrity and are suitable for complex data relationships. NoSQL databases have flexible schemas, use various query languages, and excel in scalability and handling unstructured data. The choice depends on specific requirements and trade-offs, with SQL for structured data and NoSQL for scalability and flexibility.</p>
            </article>
            {/* question 3 */}
            <article className='mb-4'>
                <h1 className='text-3xl font-medium mb-4' >3. What is express js? What is Nest JS</h1>
                <p className='text-gray-500 text-xl '> Express.js: Lightweight web application framework for Node.js, with minimalistic design, robust middleware support, and flexible routing. <br /> <br />

                    NestJS: Progressive and scalable framework for Node.js, built on Express.js, leveraging TypeScript, and emphasizing modular architecture and dependency injection. <br /> <br />

                    Express.js: Simplified web development framework for Node.js.
                    NestJS: Structured and opinionated framework, enhancing Express.js with TypeScript, modular design, and dependency injection. <br /> <br />

                    Express.js: Lightweight, flexible web framework for Node.js.
                    NestJS: Progressive framework built on Express.js, utilizing TypeScript and promoting scalable and maintainable server-side application development.</p>
            </article>
            {/* question 4 */}
            <article className='mb-5'>
                <h1 className='text-3xl font-medium mb-4' >4. What is MongoDB aggregate and how does it work </h1>
                <p className='text-gray-500 text-xl '> MongoDBs aggregate is a versatile method for processing and analyzing data in a collection. It uses a pipeline of stages to perform complex operations like grouping, filtering, sorting, and computing. It enables developers to retrieve aggregated data and extract meaningful insights from MongoDB collections.</p>
            </article>
        </div>
    );
};

export default Blog;