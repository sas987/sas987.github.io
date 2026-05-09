fetch("nav.json")
.then(response => response.json())
.then(data => {

    const content = document.getElementById("content");

    data.subjects.forEach(subject => {

        let subjectHTML = `
            <div class="subject">

                <div class="subject-title">
                    ${subject.icon} ${subject.title}
                </div>

                <div class="card-grid">
        `;

        subject.pages.forEach(page => {

            subjectHTML += `
                <a href="${page.path}" class="card">

                    <h2>${page.name}</h2>

                </a>
            `;

        });

        subjectHTML += `
                </div>

            </div>
        `;

        content.innerHTML += subjectHTML;

    });

});
