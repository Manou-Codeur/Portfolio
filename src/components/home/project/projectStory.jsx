const ProjectStory = ({ projectName }) => {
  if (projectName === "Fash")
    return (
      <div className="project__story">
        <h2>About The Project</h2>
        <p>
          Fash is an e-commerce web application where you can search for some
          products (clothes and shoes) and simulate an online payment. By the
          Home page you will get some suggestions and trendings, there's genre
          pages (Men, Women and kids products), you can sign in into your
          account or create a new one, and of course it contains also a Profile
          and Card pages.
        </p>

        <h2>Technical Sheet</h2>
        <p>
          Fash is a full stack web app. I did develop the front-end and Firebase
          took care of the back-end, so i used React as UI library, Redux for
          the state management and Formik as a form library to handle
          validation. I worked with Jwt (json web token) to secure the user
          authentication. By the back-end, i made a fake data base in form of a
          big JS object that contains all the products, and another file from
          where i can import all the db functions to get that fake data. <br />I
          did the design of this application.
        </p>

        <h2>Technologies</h2>
        <ul>
          <li>HTML</li>
          <li>SCSS</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>React Router Dom</li>
          <li>Redux</li>
          <li>Material UI</li>
          <li>Formik</li>
          <li>Framer Motion</li>
          <li>Firebase</li>
        </ul>
      </div>
    );
  else if (projectName === "Mysplash")
    return (
      <div className="project__story">
        <h2>About The Project</h2>
        <p>
          Mysplash is a stock images web application, it allows you to search,
          like and download high quality pictures. You can sign in into your
          account or create a new one, and you can even take a look at the
          profile of the photo owner where you'll see all his work and
          interactions.
        </p>

        <h2>Technical Sheet</h2>
        <p>
          Mysplash is a full stack web app. I built the front-end and Firebase
          took care of the back-end. For the front-end part, i worked with React
          as UI library and Formik as a form library to handle validation. I
          consumed the Unsplash API to get the images and for that i used axios
          for HTTP requests, so i added error boundary to handle the errors that
          can occur from calling the external API (Unsplash) and prevent the app
          from craching. Utilized Jwt (json web token) to secure the user
          authentication. For the back-end part, i used firebase for handling
          authentication and to store user interactions (likes).
        </p>

        <h2>Technologies</h2>
        <ul>
          <li>HTML</li>
          <li>SCSS</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>React Router Dom</li>
          <li>Axios</li>
          <li>Material UI</li>
          <li>Formik</li>
          <li>Firebase</li>
        </ul>
      </div>
    );
  else
    return (
      <div className="project__story">
        <h2>About The Project</h2>
        <p>
          GitHub Search is a search engine that allows you to search for github
          profiles and repositories.
        </p>

        <h2>Technical Sheet</h2>
        <p>
          GitHub Search is a front end web app. I developed it for one and only
          one reason which is to practise my GraphQl and Apollo Client
          knowledge, so i wrote graphql queries and mutations then i consumed
          the github graphql API by using apollo client which lets me to fetch,
          catch and modify application data, all while automatically updating
          the UI. I added error boundary to handle apollo errors and prevent the
          app from craching. <br />
          It's me who did the design of this application.
        </p>

        <h2>Technologies</h2>
        <ul>
          <li>HTML</li>
          <li>SCSS</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>GraphQl</li>
          <li>Apollo Client</li>
          <li>Immer Js</li>
          <li>React Router Dom</li>
          <li>Material UI</li>
        </ul>
      </div>
    );
};

export default ProjectStory;
