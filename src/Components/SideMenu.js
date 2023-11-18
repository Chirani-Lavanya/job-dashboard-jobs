import "bootstrap/dist/css/bootstrap.min.css";
import "./sidemenu.css";
import SiteLogo from "../Images/FindJob.png";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBDropdown,
  MDBDropdownToggle,
  MDBCollapse,
  MDBBadge,
  MDBInput,
  MDBListGroup,
  MDBListGroupItem,
} from "mdb-react-ui-kit";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";

export default function SideBar() {
  const navigate = useNavigate();
  return (
    <>
      <link
        href="https://use.fontawesome.com/releases/v5.15.1/css/all.css"
        rel="stylesheet"
      />
      <MDBCollapse tag="nav" className="d-lg-block bg-white sidebar">
        <div className="position-sticky">
          <MDBListGroup flush className="mx-3 mt-4">
            <MDBListGroupItem
              tag="a"
              href="#"
              action
              className="border-0 border-bottom rounded rounded"
              active
              aria-current="true"
            >
              <MDBIcon fas icon="suitcase me-3" />
              Jobs
            </MDBListGroupItem>

            <MDBListGroupItem
              tag="a"
              href="#"
              action
              className="border-0 border-bottom rounded"
            >
              <MDBIcon fas icon="chart-pie me-3" />
              Charts
            </MDBListGroupItem>
            <br />
            <Button type="link" onClick={() => navigate("/signup")}>
              Logout
            </Button>
          </MDBListGroup>
        </div>
      </MDBCollapse>

      <MDBNavbar className="position-sticky" expand="lg" light bgColor="light">
        <MDBContainer fluid>
          <MDBNavbarNav className="d-flex flex-row align-items-center w-auto ">
            <MDBNavbarToggler type="button" aria-label="Toggle navigation">
              <MDBIcon icon="bars" fas />
            </MDBNavbarToggler>
            <MDBNavbarBrand href="#">
              <img
                src={SiteLogo}
                height="20"
                width="100"
                alt=""
                loading="lazy"
              />
            </MDBNavbarBrand>
          </MDBNavbarNav>
          <MDBNavbarNav className="d-flex flex-row justify-content-end w-auto">
            <MDBNavbarItem className="me-3 me-lg-0 d-flex align-items-center">
              <MDBCollapse navbar>
                <MDBNavbarItem className="d-flex align-items-center">
                  <MDBInput id="form1" type="text" />
                  <MDBIcon fas icon="search mx-2" />
                </MDBNavbarItem>
              </MDBCollapse>
              <MDBDropdown>
                <MDBDropdownToggle
                  tag="a"
                  href="#!"
                  className="hidden-arrow nav-link"
                >
                  <MDBIcon fas icon="bell" />
                  <MDBBadge color="danger" notification pill>
                    1
                  </MDBBadge>
                </MDBDropdownToggle>
              </MDBDropdown>
            </MDBNavbarItem>

            <MDBNavbarItem className="me-3 me-lg-0 d-flex align-items-center">
              <MDBDropdown>
                <MDBDropdownToggle
                  tag="a"
                  href="#!"
                  className="hidden-arrow nav-link"
                >
                  <img
                    src="https://mdbootstrap.com/img/Photos/Avatars/img (31).jpg"
                    className="rounded-circle"
                    height="22"
                    alt=""
                    loading="lazy"
                  />
                </MDBDropdownToggle>
              </MDBDropdown>
            </MDBNavbarItem>
          </MDBNavbarNav>
        </MDBContainer>
      </MDBNavbar>
    </>
  );
}
