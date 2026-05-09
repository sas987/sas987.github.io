fetch("nav.json")
.then(response => response.json())
.then(data => {

    const nav = document.getElementById("nav");
    const viewer = document.getElementById("viewer");

    data.topics.forEach(topic => {

        let html = `
            <div class="topic">

                <div class="topic-title">
                    ${topic.icon} ${topic.name}
                </div>
        `;

        topic.pages.forEach(page => {

            html += `
                <a class="page-link"
                   href="#"
                   onclick="loadPage('${page.file}')">

                    ${page.title}

                </a>
            `;

        });

        html += `</div>`;

        nav.innerHTML += html;

    });

    if(data.topics.length > 0 &&
       data.topics[0].pages.length > 0){

        viewer.src = data.topics[0].pages[0].file;
    }

});

function loadPage(file){

    document.getElementById("viewer").src = file;

}
