import Link from "next/link";
import Image from "next/image";

const Project = ({ title, description, image, url }) => {
  return (
    <Link href={url ?? "#"} className="project-item">
      <article>
        <div>
          <h4>{title}</h4>
          <p>{description}</p>
        </div>
        <div className="image-container">
          <Image src={image} alt={title} layout="fill" />
        </div>
      </article>
    </Link>
  );
};

export default Project;
