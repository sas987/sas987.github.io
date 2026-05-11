fetch("nav.json")
.then(response => response.json())
.then(data => {

    const nav = document.getElementById("nav");
    const viewer = document.getElementById("viewer");

    data.topics.forEach((topic, topicIndex) => {

        let html = `

            <div class="topic">

                <div class="topic-header"
                     onclick="toggleElement('topic-${topicIndex}')">

                    <span>
                        ${topic.icon} ${topic.name}
                    </span>

                </div>

                <div class="nested"
                     id="topic-${topicIndex}">
        `;

        topic.sections.forEach((section, sectionIndex) => {

            html += `

                <div class="section">

                    <div class="section-header"
                         onclick="toggleElement(
                         'section-${topicIndex}-${sectionIndex}'
                         )">

                        ${section.title}

                    </div>

                    <div class="nested"
                         id="section-${topicIndex}-${sectionIndex}">
            `;

            section.items.forEach(item => {

                html += `

                    <a class="page-link"
                       href="#"
                       onclick="loadPage('${item.file}')">

                        ${item.name}

                    </a>

                `;

            });

            html += `
                    </div>

                </div>
            `;

        });

        html += `
                </div>

            </div>
        `;

        nav.innerHTML += html;

    });

});

function toggleElement(id){

    const element = document.getElementById(id);

    if(element.style.display === "block"){

        element.style.display = "none";

    }else{

        element.style.display = "block";

    }

}

function loadPage(file){

    document.getElementById("viewer").src = file;

}
