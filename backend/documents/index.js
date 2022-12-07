module.exports = ({
    profile,
    name,
    file,
    about,
    experienceList,
    educationList,
    skills
}) => {
    let mySkills = ""

    skills.forEach(element => {
        mySkills = mySkills + `<p class="technology rounded float-left my-1">${element}</p>`
    });

    let myExperience = ""

    experienceList.forEach(element => {
        myExperience = myExperience + `
        
        <div>
            <h3 class="float-left text-secondary">• </h3> <h3 class="ps-3 text-secondary">${element.title}</h3>
            <p class="m-0 ps-3">${element.company} • ${element.startMonth} ${element.startYear} ${`${element.isWorking ? " - Present" : " - "+element.endMonth+" "+element.endYear }`}</p>
            <p class="m-0 ps-3">${element.location}</p>
            <p class=" ps-3">${element.description}</p>
        </div>

        `
    })

    let myEducation = ""

    educationList.forEach(element => {
        myEducation = myEducation + `
        
        <div>
            <h3 class="float-left text-secondary">• </h3> <h3 class="ps-3 text-secondary">${element.institute}</h3>
            <p class="m-0 ps-3">${element.degree} • ${element.fieldOfStudy} </p>
            <p class="ps-3">${element.startYear} - ${element.endYear} • Grade: ${element.grade}</p>
        </div>

        `
    })
    
    return `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <style>
        html,
        body {
        font-family: "Poppins", sans-serif;
        font-size: 1.2em;
        }
        .fs-small {
            font-size: 1em;
        }
        
        .font-bold{
            font-size: 1.3em;
            font-weight: 600;
        }
        .float-left {
            float:left;
        }
        .technology {
            padding: 2px 8px;
            margin-right: 15px;
            display: flex;
            align-items: center;
            background-color: #fff;
        }
        .ls-2 {
            letter-spacing: 2px;
        }
    </style>
    <title>Resume</title>
  </head>
    <body>
        <div>

            <div class="px-4">
                <h2 class="mx-4 font-bold mt-4">${name[0] + " " + name[1] } </h2>
                <p class="mx-4 fs-small mb-2 text-secondary">${profile.tagline}</p>
            </div>

            <hr></hr>
            
            <div class="px-4">

                <div class="col-5 float-left bg-light p-4">

                    <h3 class="mb-3 ls-2">• INFO</h3>

                    <h4 class="m-0 text-secondary">Position:</h4>
                    <p class="m-0 mb-2">${profile.position}</p>
                    <h4 class="m-0 text-secondary">Location:</h4>
                    <p class="m-0 mb-2">${profile.location}</p>
                    <h4 class="m-0 text-secondary">Contact:</h4>
                    <p class="m-0 mb-2">${profile.contact}</p>
                    <h4 class="m-0 text-secondary">E-Mail:</h4>
                    <p class="m-0">${profile.email}</p>

                    <hr></hr>

                    <h3 class="mb-3 ls-2">• LINKS</h3>

                    <h4 class="m-0 text-secondary">LinkedIn:</h4>
                    <p class="m-0 mb-2">${profile.linkedin}</p>
                    <h4 class="m-0 text-secondary">GitHub:</h4>
                    <p class="m-0 mb-2">${profile.github}</p>
                    <h4 class="m-0 text-secondary">Website:</h4>
                    <p class="m-0">${profile.website}</p>

                    <hr></hr>

                    <h3 class="mb-3 ls-2">• SKILLS</h3>

                    <div class="d-flex flex-wrap">
                        ${mySkills}
                    </div>

                </div>

                <div class="col-7 float-left p-4">

                    <h3 class="mb-3 ls-2">• ABOUT</h3>

                    <p class="m-0">${about}</p>

                    <hr></hr>

                    <h3 class="mb-3 ls-2">• WORK EXPERIENCE</h3>

                    ${myExperience}

                    <hr></hr>

                    <h3 class="mb-3 ls-2">• EDUCATION</h3>

                    ${myEducation}

                </div>
            </div>
            
        </div>
    </body>
</html>


`;
};