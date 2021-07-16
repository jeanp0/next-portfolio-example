import Layout from "../components/Layout";
import Image from "next/image";
import profilePic from "../public/ryan-ray-profile2.jpeg";
import Link from "next/link";
import { skills, experiences, projects } from "../profile";
import Skill from "../components/Skill";
import Experience from "../components/Experience";
import ProjectCard from "../components/ProjectCard";

const Index = () => (
  <Layout>
    {/* Header */}
    <header className="row">
      <div className="col-md-12">
        <div className="card card-body bg-secondary text-light">
          <div className="row">
            <div className="col-md-4">
              <Image src={profilePic} alt="Rayn Ray photo" />
            </div>
            <div className="col-md-8">
              <h1>Rayn Ray</h1>
              <h3>FullStack Developer</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto
                voluptates iste sed possimus rerum sit, quas odit libero placeat
                illo, corrupti optio harum dignissimos dolorum doloremque
                sapiente. Adipisci, eius officiis.
              </p>
              <Link href="/hireme">
                <a>Hire Me</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>

    {/* Second section */}
    <section className="row py-2">
      {/* Skills */}
      <div className="col-md-4">
        <div className="card bg-light">
          <div className="card-body">
            <h1>Skills</h1>
            {skills.map((skill, index) => (
              <Skill key={index} {...skill} />
            ))}
          </div>
        </div>
      </div>
      {/* Experiences */}
      <div className="col-md-8">
        <div className="card bg-light">
          <div className="card-body">
            <h1>Experience</h1>
            <ul>
              {experiences.map((experience, index) => (
                <Experience key={index} {...experience} />
              ))}
            </ul>
            <Link href="/experiences">
              <a className="btn btn-light">Know more</a>
            </Link>
          </div>
        </div>
      </div>
    </section>

    {/* Porfolio */}
    <div className="row">
      <div className="col-md-12">
        <div className="card card-body bg-dark">
          <div className="row">
            <div className="col-md-12">
              <h1 className="text-center text-light">Portfolio </h1>
            </div>

            {projects.map((project, index) => {
              return (
                <div className="col-md-4 p-2" key={index}>
                  <ProjectCard {...project} />
                </div>
              );
            })}
          </div>
          <div className="text-center mt-4">
            <Link href="/portfolio">
              <a className="btn btn-outline-light">More projects</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </Layout>
);

export default Index;
