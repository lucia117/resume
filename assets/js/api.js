const getResume= () => {
    fetch("assets/resume.JSON")
    .then((response) => response.json()
      .then((data) => {
        resumeData = data; 
        show(); 
      })
    );
  }
  