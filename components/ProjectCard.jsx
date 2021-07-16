import Image from "next/image";
import Link from "next/link";

const ProjectCard = ({ name, description, image }) => {
  return (
    <div className="card h-100">
      <div className="overflow">
        <Image src={image} alt="" className="card-img-top" />
      </div>
      <div className="card-body">
        <h3>{name}</h3>
        <p>{description}</p>
        <Link href="#!">
          <a className="">Know more</a>
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
