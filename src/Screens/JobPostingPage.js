import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import SideMenu from "../Components/SideMenu";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
} from "mdb-react-ui-kit";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";

const jobPostings = [
  {
    title: "Front-End Developer",
    description:
      "This position is responsible for developing new user-facing features, determining the structure and design of web pages, building reusable codes, optimizing page loading times, and using a variety of markup languages to create the web pages.",
  },
  {
    title: "UI/UX Designer",
    description:
      "UI UX designers create the user interface for an app, website, or other interactive media. Their work includes collaborating with product managers and engineers to gather requirements from users before designing ideas that can be communicated using storyboards.",
  },
  {
    title: "Back-End Developer",
    description:
      "Responsibilities include creating, maintaining, testing, and debugging the entire back end of an application or system. This includes the core application logic, databases, data and application integration.",
  },
  {
    title: "Graphic Designer",
    description:
      "Create visual concepts, using computer software or by hand, to communicate ideas that inspire, inform, and captivate consumers.",
  },
];

const JobCard = ({ title, description }) => {
  const navigate = useNavigate();
  return (
    <div className="d-flex justify-content-end px-5">
      <MDBCard style={{ width: "65rem" }}>
        <MDBCardBody>
          <MDBCardTitle>{title}</MDBCardTitle>
          <MDBCardText>{description}</MDBCardText>
          <Button
            type="primary"
            size="large"
            onClick={() => navigate("/applyjob")}
          >
            Apply
          </Button>
        </MDBCardBody>
      </MDBCard>
      <br />
    </div>
  );
};

export default function JobPosting() {
  return (
    <div>
      <SideMenu />

      {jobPostings.map((job, index) => (
        <>
          <JobCard
            key={index}
            title={job.title}
            description={job.description}
          />
          <br />
        </>
      ))}
    </div>
  );
}
