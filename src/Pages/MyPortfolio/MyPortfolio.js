import React from 'react';

const MyPortfolio = () => {
    return (
    
<div className="mt-16 px-16 text-slate-700">
            <h1 className=" text-5xl font-bold text-center">
              Mynul islam
            </h1>

            <div className="overflow-x-auto">
              <table className="table  w-full my-5">
                <tbody>

                  <tr>
                    <td>
                      <strong>Email: </strong>
                    </td>
                    <td>mynulislamridoy@gmail.com</td>
                    <td>
                      <strong>Mobile: </strong>
                    </td>
                    <td>+88-01976686408</td>
                  </tr>

                  <tr>
                    <td>
                      <strong> Education: </strong>
                    </td>
                    <td>Honours in MatheMatics</td>
                    <td>
                      <strong>University: </strong>
                    </td>
                    <td>National University</td>
                  </tr>
                  
                  <tr>
                    <td>
                      <strong>Frontend Skills: </strong>
                    </td>
                    <td>
                      HTML, CSS, Bootstrap, Tailwind CSS, React<br></br>  NextJS(Basic), Typescript(Basic)<br></br> Material UI, Daisy UI
                    </td>
                    <td>
                      <strong>Backend Skills: </strong>
                    </td>
                    <td>
                      Node JS, Express Js, MongoDB
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <strong>Deployment Skills: </strong>
                    </td>
                    <td>Firebase, Netlify, Heroku</td>
                    <td>
                      <strong>Version Control Skills: </strong>
                    </td>
                    <td>Git</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className='w-96 mx-auto'>
              <a
                href="https://carizabd.web.app/"
                target="_blank"
              >
                <button className="btn btn-primary w-full my-3">
                  VIEW MY MERN PROJECT
                </button>
              </a>

              <a href="https://fitness-trainee.web.app/" target="_blank">
                <button className="btn btn-primary w-full my-3">
                  VIEW MY REACT PROJECT
                </button>
              </a>
            </div>
          </div>
    );
};

export default MyPortfolio;