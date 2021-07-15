const ProjectStory = ({ projectName }) => {
  if (projectName === "Fash")
    return (
      <p className="project__story">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
        necessitatibus numquam alias eveniet voluptatem consequuntur quidem
        repellat illo iusto rem recusandae nobis pariatur dicta, excepturi odio
        perferendis consectetur! Molestias eveniet repellat dolorem fugiat
        cumque unde, voluptatum nesciunt at quae ipsum. Lorem ipsum dolor sit
        amet consectetur adipisicing elit. Esse necessitatibus numquam alias
        eveniet voluptatem consequuntur quidem repellat illo iusto rem
        recusandae nobis pariatur dicta, excepturi odio perferendis consectetur!
        Molestias eveniet repellat dolorem fugiat cumque unde, voluptatum
        nesciunt at quae ipsum.
      </p>
    );
  else if (projectName === "MYSPASH")
    return (
      <p className="project__story">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
        necessitatibus numquam alias eveniet voluptatem consequuntur quidem
        repellat illo iusto rem recusandae nobis pariatur dicta, excepturi odio
        perferendis consectetur! Molestias eveniet repellat dolorem fugiat
        cumque unde, voluptatum nesciunt at quae ipsum. Lorem ipsum dolor sit
        amet consectetur adipisicing elit. Esse necessitatibus numquam alias
        eveniet voluptatem consequuntur quidem repellat illo iusto rem
        recusandae nobis pariatur dicta, excepturi odio perferendis consectetur!
        Molestias eveniet repellat dolorem fugiat cumque unde, voluptatum
        nesciunt at quae ipsum.
      </p>
    );
  else
    return (
      <p className="project__story">
        In my spare time, i read books about self development, i learn
        photography and i watch scientific documentary. I contribute to AIESEC
        projects (AIESEC is an international youth-run organization that
        provides young people with leadership development, cross-cultural
        internships, and global volunteer exchange experiences), thing that
        helps me to develop my soft skills, get to know more people and grow my
        network. <br /> <br /> In my spare time, i read books about self
        development, i learn photography and i watch scientific documentary. I
        contribute to AIESEC projects (AIESEC is an international youth-run
        organization that provides young people with leadership development,
        cross-cultural internships, and global volunteer exchange experiences),
        thing that helps me to develop my soft skills, get to know more people
        and grow my network.
      </p>
    );
};

export default ProjectStory;
