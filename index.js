/**
 * determines if client is looking at a mobile view
 * @returns bool if mobile
 */
function isMobile(){
  return window.screen.width < 480;
}


// Open and close sidebar
function openNav() {
  if (isMobile) {
    document.getElementById("mySidebar").style.width = "100%";
  } else {
    document.getElementById("mySidebar").style.width = "30%";
  } 
  document.getElementById("mySidebar").style.display = "block";
}

function closeNav() {
  document.getElementById("mySidebar").style.display = "none";
}


/**
 * Calculate values for experience in time
 */
{
  function timeSince(date) {
    const d = new Date();
    let year = d.getFullYear() - date.getFullYear();
    let month_now = d.getMonth();
    let month_then = date.getMonth();
    let month = '';
    if (month_now < month_then){
      month = month_now + 12 - month_then;
      year -= 1;
    }else{
      month = month_now - month_then;
    }
    month += 1;
    return `${year}y ${month}m`;
  }

  document.getElementById('experience-1').innerText = timeSince(new Date(2010, 8, 1));
  document.getElementById('experience-2').innerText = timeSince(new Date(2019, 7, 1));
}

/**
 * Hydrate projects area
 */
{
  const project_area = document.getElementById("projects-area");
  project_area.innerHTML = '';
  for (item of projects_data) {
    const template = `
    <a href="${item.url}">
      <div class="project-item">
        <div class="proj-image-wrapper">
          <img src="${item.image}" />
        </div>
        <p>${item.description}</p>
      </div>
    </a>
    `
    project_area.innerHTML += template;
  }
}
