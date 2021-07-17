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
          validation. I worked with Jwt(json web token) to secure the user
          authentication. By the back-end, i made a fake data base in form of a
          big JS object that contains all the products, and another file from
          where i can import all the db functions to get that fake data.
        </p>

        <h2>Technologies</h2>
        <p>HTML</p>
        <p>SCSS</p>
        <p>JavaScript</p>
        <p>React</p>
        <p>React Router Dom</p>
        <p>Redux</p>
        <p>Material UI</p>
        <p>Formik</p>
        <p>Framer Motion</p>
        <p>Firebasex</p>
      </div>
    );
  else if (projectName === "MYSPASH")
    return (
      <div className="project__story">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
          necessitatibus numquam alias eveniet voluptatem consequuntur quidem
          repellat illo iusto rem recusandae nobis pariatur dicta, excepturi
          odio perferendis consectetur! Molestias eveniet repellat dolorem
          fugiat cumque unde, voluptatum nesciunt at quae ipsum. Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Esse necessitatibus
          numquam alias eveniet voluptatem consequuntur quidem repellat illo
          iusto rem recusandae nobis pariatur dicta, excepturi odio perferendis
          consectetur! Molestias eveniet repellat dolorem fugiat cumque unde,
          voluptatum nesciunt at quae ipsum.
        </p>
      </div>
    );
  else
    return (
      <div className="project__story">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
          necessitatibus numquam alias eveniet voluptatem consequuntur quidem
          repellat illo iusto rem recusandae nobis pariatur dicta, excepturi
          odio perferendis consectetur! Molestias eveniet repellat dolorem
          fugiat cumque unde, voluptatum nesciunt at quae ipsum. Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Esse necessitatibus
          numquam alias eveniet voluptatem consequuntur quidem repellat illo
          iusto rem recusandae nobis pariatur dicta, excepturi odio perferendis
          consectetur! Molestias eveniet repellat dolorem fugiat cumque unde,
          voluptatum nesciunt at quae ipsum.
        </p>
      </div>
    );
};

export default ProjectStory;
