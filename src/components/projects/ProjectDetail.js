import React from 'react'

const ProjectDetail = (props) => {
    const id = props.match.params.id;
  return (
    <div>
      <div className="container section project-details">
          <div className="card z-depth-0">
              <div className="card-content">
                  <span className="card-title">Project Title - {id}</span>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis minus eligendi officiis eius rem assumenda commodi maxime eum veniam ipsa.</p>
              </div>
              <div className="card-action grey lighten-3 grey-text">
                  <div>Posted by Dani Domínguez</div>
                  <div>22 de Septiembre de 2018</div>
              </div>
          </div>
      </div>
    </div>
  )
}

export default ProjectDetail
