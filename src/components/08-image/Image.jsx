import React from 'react';
import project_image from '../../assets/img/project-8.jpg'


const Image = () => {
  return (
    <div>
      {/* If image files in public folder*/}
    <img src="assets/project-2.jpg"></img>
    
        {/* External image veya CDN den alma işlemi */}
        <img src="https://images.unsplash.com/photo-1682687218147-9806132dc697?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwzMXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />

     {/* If image files in src folder burada cashing işlemi yapar */}
    <img src={project_image}></img>

    {/* BAckend ten gelen yada json gelen resimleri require ile almalıyız cunku import edemediğimiz için yani dış kaynaktan gelenler için  */}
    <img src={require("../../assets/img/project-9.jpg")}/>
    </div>
  )
}

export default Image