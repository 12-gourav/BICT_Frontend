import React from "react";

const Admin = () => {
  return (
    <section className="admin">
      <div className="admin-slider">
        <h3>Data Record Metrics Summary</h3>
        <div className="card-set">
          <div className="card">
            <div className="short">
              <span></span>
              <h5>Updates</h5>
            </div>
            <h2>Latest Addmission Record in this Month</h2>
            <p>
              See Details <i className="bx bx-chevron-right"></i>
            </p>
          </div>
          <div className="card">
            <div className="short">
              <span></span>
              <h5>Uploads</h5>
            </div>
            <h2>Latest Images Upload in this Month</h2>
            <p>
              See Details <i className="bx bx-chevron-right"></i>
            </p>
          </div>
          <div className="card">
            <div className="short">
              <span></span>
              <h5>Updates</h5>
            </div>
            <h2>Latest News and Events Post in this Month</h2>
            <p>
              See Details <i className="bx bx-chevron-right"></i>
            </p>
          </div>
          <div className="card">
            <div className="short">
              <span></span>
              <h5>Upload</h5>
            </div>
            <h2>Latest Certificates Upload in this Month</h2>
            <p>
              See Details <i className="bx bx-chevron-right"></i>
            </p>
          </div>
        </div>
      </div>

      <div className="admin-wrapper">
        <div className="admin-left">
          <div className="sec1">
            <h3>Latest News</h3>
            <ul>
              <li>
                <h5>Events Details</h5>
                <p>Events Details game Changing Enviorenments are applied</p>
                <p className="read">Read More</p>
              </li>
              <li>
                <h5>Events Details</h5>
                <p>Events Details game Changing Enviorenments are applied</p>
                <p className="read">Read More</p>
              </li>
              <li>
                <h5>Events Details</h5>
                <p>Events Details game Changing Enviorenments are applied</p>
                <p className="read">Read More</p>
              </li>
            </ul>
          </div>
          <div className="sec2">
            <h3>Latest Uploads</h3>
            <ul>
              <li>
                <h5>Events Details</h5>
                <p>Events Details game Changing Enviorenments are applied</p>
                <p className="read">Read More</p>
              </li>
              <li>
                <h5>Events Details</h5>
                <p>Events Details game Changing Enviorenments are applied</p>
                <p className="read">Read More</p>
              </li>
              <li>
                <h5>Events Details</h5>
                <p>Events Details game Changing Enviorenments are applied</p>
                <p className="read">Read More</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="admin-right">
          <div className="sec1">
            <h4>Today Addmission Details</h4>
            <div className="table-wrap">
              <table>
                <thead>
                  <th>Date</th>
                  <th>Name</th>
                  <th>Course</th>
                </thead>
                <tbody>
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0]?.map((d) => (
                    <tr>
                      <td>12 Jan 2024</td>
                      <td>Gaurav Bajpai</td>
                      <td>Web Development</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Admin;
