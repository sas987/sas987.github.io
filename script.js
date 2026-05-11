fetch("nav.json")
.then(response => response.json())
.then(data => {

    const nav = document.getElementById("nav");

    data.topics.forEach((topic, topicIndex) => {

        let html = `

            <div class="topic">

                <div class="topic-header"
                     onclick="toggleTopic(${topicIndex})">

                    <div>
                        ${topic.icon} ${topic.name}
                    </div>

                    <div class="arrow"
                         id="topic-arrow-${topicIndex}">
                        ▶
                    </div>

                </div>

                <div class="nested"
                     id="topic-${topicIndex}">
        `;

        topic.sections.forEach((section, sectionIndex) => {

            html += `

                <div class="section">

                    <div class="section-header"
                         onclick="toggleSection(
                         ${topicIndex},
                         ${sectionIndex}
                         )">

                        <div>
                            ${section.title}
                        </div>

                        <div class="arrow"
                             id="section-arrow-${topicIndex}-${sectionIndex}">
                            ▶
                        </div>

                    </div>

                    <div class="nested inner-nested"
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

function loadPage(file){

    document.getElementById("viewer").src = file;

}

function toggleTopic(index){

    const current =
        document.getElementById(`topic-${index}`);

    const currentArrow =
        document.getElementById(`topic-arrow-${index}`);

    document.querySelectorAll(".nested").forEach(el => {

        if(el.id.startsWith("topic-")){

            if(el !== current){

                el.style.display = "none";

            }

        }

    });

    document.querySelectorAll("[id^='topic-arrow-']")
    .forEach(arrow => {

        if(arrow !== currentArrow){

            arrow.innerHTML = "▶";

        }

    });

    if(current.style.display === "block"){

        current.style.display = "none";

        currentArrow.innerHTML = "▶";

    }else{

        current.style.display = "block";

        currentArrow.innerHTML = "▼";

    }

}

function toggleSection(topicIndex, sectionIndex){

    const current =
        document.getElementById(
        `section-${topicIndex}-${sectionIndex}`
        );

    const currentArrow =
        document.getElementById(
        `section-arrow-${topicIndex}-${sectionIndex}`
        );

    document.querySelectorAll(".inner-nested")
    .forEach(el => {

        if(el !== current){

            el.style.display = "none";

        }

    });

    document.querySelectorAll("[id^='section-arrow-']")
    .forEach(arrow => {

        if(arrow !== currentArrow){

            arrow.innerHTML = "▶";

        }

    });

    if(current.style.display === "block"){

        current.style.display = "none";

        currentArrow.innerHTML = "▶";

    }else{

        current.style.display = "block";

        currentArrow.innerHTML = "▼";

    }

}
