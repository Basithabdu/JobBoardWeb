import React from "react";
import { Image, Button, Menu, Dropdown } from "antd";
import { SearchOutlined, PlusOutlined, MenuOutlined, GithubOutlined, FundOutlined, BorderOuterOutlined } from "@ant-design/icons";
import System from "../../assets/images/system.avif"
import System1 from "../../assets/images/system1.jpg"
import System2 from "../../assets/images/system2.jpg"

import Devop from "../../assets/images/devop.png"
import GPS from "../../assets/images/gps.jpeg"
import Paint from "../../assets/images/painting.avif"
import Head from "../../assets/images/heat.png"

import Back from "../../assets/images/back.avif"
import UIUX from "../../assets/images/uiux.jpeg"
import Chief from "../../assets/images/chief.png"
import Product from "../../assets/images/product.webp"

const HomePage = () => {
  const menu = (
    <Menu>
      <Menu.Item key="1">
        <a href="#home">Home</a>
      </Menu.Item>
      <Menu.Item key="2">
        <a href="#findjobs">Find Jobs</a>
      </Menu.Item>
      <Menu.Item key="3">
        <a href="#companies">Companies</a>
      </Menu.Item>
      <Menu.Item key="4">
        <a href="#candidates">Candidates</a>
      </Menu.Item>
      <Menu.Item key="4">
        <a href="#pages">Pages</a>
      </Menu.Item>
      <Menu.Item key="4">
        <a href="#blogs">Blogs</a>
      </Menu.Item>
    </Menu>
  );

  return (
    <div className="container-fluid p-0">
      {/* Navbar */}
      <header className="bg-light py-3">
        <div className="d-flex justify-content-between align-items-center container">
          <div>
            <h1 className="m-0"><i><span className="c-color">C</span>ivi</i></h1>
          </div>
          <div className="d-flex align-items-center">
            <Dropdown overlay={menu} trigger={["click"]}>
              <Button type="link" icon={<MenuOutlined />} />
            </Dropdown>
            <Button type="link text-black" className="me-2">Login</Button>
            <Button className="post-job" icon={<PlusOutlined />}>Post a Job</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-light py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h2>
                Got Talent?<br /> Meet Opportunity
              </h2>
              <p><b>Company reviews. Salaries. Interviews. Jobs.</b></p>
              <div className="input-group my-4">
                <input  type="text" className="form-control" placeholder="Job title or keywords" />
                <input type="text" className="form-control" placeholder="All Location" />
                <button className="success " type="button">
                  <SearchOutlined /> Search
                </button>
              </div>
              <p className="pb-5">
                Popular Searches: <br />
                <b>Data Management, Marketing Manager, Customer Support</b>
              </p>
              <p>Trusted by leading brands and startups</p>
              <div className="d-flex align-items-center mb-5">
                <BorderOuterOutlined style={{ width: '40px', marginRight: '10px' }} />
                <FundOutlined style={{ width: '40px', marginRight: '10px' }} />
                <GithubOutlined style={{ width: '40px', marginRight: '10px' }}/>
              </div>
            </div>

            <div className="col-md-6 d-flex justify-content-center align-items-center">
            <Image
              className="system-image"
              src={System}
              alt={"system"}
              preview={false}
              style={{ width: '100%'}}
              />
            </div>
          </div>
        </div>
      </section>


      {/* Employer & Candidate Section */}
      <section className="container my-5" id="employers">
        <div className="row">
          <div className="col-md-6 mb-2">
            <div className="card p-4" style={{ backgroundColor: '#FEECEB' }}>
              <div className="row">
                <div className="col-sm-6 d-flex flex-column justify-content-center">
                  <h5>For Employers</h5>
                  <p>Find professionals from around<br/> the world across all skills.</p>
                  <Button className="post-free mb-2">
                    Post Jobs for Free
                  </Button>
                </div>
                <div className="col-sm-6 d-flex justify-content-center align-items-center">
                  <Image
                    className="system1"
                    src={System1}
                    alt={"system1"}
                    preview={false}
                    style={{ width: '150px', height: '150px' }}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="card p-4" style={{ backgroundColor: '#FEECEB' }}>
              <div className="row">
                <div className="col-sm-6 d-flex flex-column justify-content-center">
                  <h5>For Candidates</h5>
                  <p>Build your professional profile, <br/>find new job opportunities.</p>
                  <Button className="upload-cv mb-2">
                    Upload your CV
                  </Button>
                </div>
                <div className="col-sm-6 d-flex justify-content-center align-items-center">
                  <Image
                    className="system2"
                    src={System2}
                    alt={"system2"}
                    preview={false}
                    style={{ width: '150px', height: '150px' }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Popular Categories */}
      <section className="bg-light py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h3>Popular Categories</h3>
              <p>2020 jobs live - 293 addes today.</p>
            </div>
            <div className="col-md-6 text-end mb-3">
              <a href="">View all categories</a>
            </div>
          </div>
          <div className="row">
            <div className="card col-md-3 col-6">
              <Image
                    className="develop"
                    src={Devop}
                    alt={"develop"}
                    preview={false}
                    style={{width:'100px'}}
                />
              <h4>Development & IT</h4>
              <p>16 jobs</p>
              <p>Frontend, backend, web and <br/>app developer jobs.</p>
            </div>
            <div className="card col-md-3 col-6">
              <Image
                    className="GPS"
                    src={GPS}
                    alt={"gps"}
                    preview={false}
                    style={{width:'100px'}}
                />
              <h4>Marketing & Sales</h4>
              <p>8 jobs</p>
              <p>Adverdising, digital<br/>marketing and brand...</p>
            </div>
            <div className="card col-md-3 col-6">
              <Image
                    className="paint"
                    src={Paint}
                    alt={"paint"}
                    preview={false}
                    style={{width:'100px'}}
                />
              <h4>Design & Creative</h4>
              <p>13 jobs</p>
              <p>Graphic, digital, web, and<br/>product design jobs.</p>
            </div>
            <div className="card col-md-3 col-6">
              <Image
                    className="headset"
                    src={Head}
                    alt={"headset"}
                    preview={false}
                    style={{width:'100px'}}
                />
              <h4>Customer Service</h4>
              <p>8 jobs</p>
              <p>Customers experience and<br/>account management jobs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Jobs */}
      <section className="container my-5" id="jobs">
        <div className="row">
          <div className="col-md-6">
            <h3>Latest jobs</h3>
              <p>2020 jobs live - 293 addes today.</p>
            </div>
            <div className="col-md-6 text-end mb-3">
              <a href="">View all jobs</a>
            </div>
          </div>
        <div className="row">
          {/* Job Card */}
          <div className="col-md-6 mb-4">
            <div className="card">
              <div className="card-body d-flex align-items-center">
                <Image
                  src={Back}
                  alt="back"
                  preview={false}
                  style={{ width: '50px', height: '50px' }}
                />
                <div className="ms-3">
                  <h5>Sr. Backend Go Developer</h5>
                  <p className="text-muted">by <b>Uxper</b> in <b><span className="develop">Development & IT</span></b></p>
                  <Button className="san mx-2 mb-2"><b>San Francisco</b></Button>
                  <Button className="doller ms-2 mb-3"><b>$100 - $200/month</b></Button>
                  <p><b><span className="develop">150</span></b> days left to apply</p>
                </div>
              </div>
            </div>
          </div>

          {/* Another Job Card */}
          <div className="col-md-6 mb-4">
            <div className="card">
              <div className="card-body d-flex align-items-center">
                <Image
                  src={UIUX}
                  alt="uiux"
                  preview={false}
                  style={{ width: '50px', height: '50px' }}
                />
                <div className="ms-3">
                  <h5>UX/UI Designer</h5>
                  <p className="text-muted">by <b>Uxper</b> in <b><span className="develop">Development & IT</span></b></p>
                  <Button className="remote mx-2 mb-2"><b>Remote</b></Button>
                  <Button className="san ms-2 mx-2 mb-2"><b>San Francisco</b></Button>
                  <Button className="doller ms-2 mb-3"><b>$100 - $200/month</b></Button>
                  <p><b><span className="develop">250</span></b> days left to apply</p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6 mb-4">
            <div className="card">
              <div className="card-body d-flex align-items-center">
                <Image
                  src={Chief}
                  alt="chief"
                  preview={false}
                  style={{ width: '50px', height: '50px' }}
                />
                <div className="ms-3">
                  <h5>Chief of Staff</h5>
                  <p className="text-muted">by <b>Uxper</b> in <b><span className="develop">Development & IT</span></b></p>
                  <Button className="remote mx-2 mb-2"><b>Remote</b></Button>
                  <Button className="san ms-2 mx-2 mb-2"><b>San Francisco</b></Button>
                  <Button className="doller ms-2 mb-3"><b>$100 - $200/month</b></Button>
                  <p><b><span className="develop">150</span></b> days left to apply</p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6 mb-4">
            <div className="card">
              <div className="card-body d-flex align-items-center">
                <Image
                  src={Product}
                  alt="product"
                  preview={false}
                  style={{ width: '50px', height: '50px' }}
                />
                <div className="ms-3">
                  <h5>Senior Product Marketing Manager</h5>
                  <p className="text-muted">by <b>Uxper</b> in <b><span className="develop">Development & IT</span></b></p>
                  <Button className="remote mx-2 mb-2"><b>Remote</b></Button>
                  <Button className="san ms-2 mx-2 mb-2"><b>San Francisco</b></Button>
                  <Button className="doller ms-2 mb-3"><b>$100 - $200/month</b></Button>
                  <p><b><span className="develop">250</span></b> days left to apply</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-white py-3 text-center" id="contact">
        <p>&copy; 2024 Civi Job Board</p>
      </footer>
    </div>
  );
};

export default HomePage;
