window.htmlcssjs = 0;

$(document).ready(() => {
    while (window.htmlcssjs < 1) {

        let HTML_CSS_JS = document.querySelector(".html-css-js");
        let rowHTML_CSS_JS = HTML_CSS_JS.querySelector(".row");


        let countPages = 0;
        let maxRecord = 6;
        let coutRecord = DATA_HTML_CSS_JS.length;
        if (coutRecord % maxRecord == 0) {
            countPages = Math.floor(coutRecord / maxRecord);
        } else {
            countPages = Math.floor(coutRecord / maxRecord) + 1;
        }

        // Update pages
        const createPages = () => {

            let pages = HTML_CSS_JS.querySelector(".hcj");

            for (let i = 0; i < countPages; i++) {
                let a = document.createElement("a");
                a.classList.add("index-page");
                a.classList.add("hjc");
                // a.setAttribute("href", `#hjc-${i}`);
                a.textContent = (i + 1) + " ";
                pages.appendChild(a);
            }

        };
        createPages();

        let as = document.querySelectorAll(".hcj")
        as.forEach(el => {
            el.addEventListener("click", function (e) {
                // console.log(e.target.innerText);
                let index = e.target.innerText;
                let end = index * maxRecord; // 1*6, 2*6, 3*6
                let start = end - maxRecord; // 0-6, 6-12, 12-...

                const DATA_CLONE = JSON.parse(JSON.stringify(DATA_HTML_CSS_JS));
                const DATA_HTML_CSS_JS_CLONE = DATA_CLONE.slice(start, end);
                console.log("PXH: ", DATA_HTML_CSS_JS_CLONE);
                console.log("PXH end: ", index * maxRecord);
                console.log("PXH: start: ", end - maxRecord);
                rowHTML_CSS_JS.innerHTML = "";

                for (let data of DATA_HTML_CSS_JS_CLONE) {
                    rowHTML_CSS_JS.appendChild(createCard(data));
                }
            });
        });

        // Create card
        const createCard = (data) => {

            // console.log(data);
            let dataTooltip = data.tooltip;
            let dataImg = data.img;
            let dataSubTitle = data.subTitle;
            let dataGithubRepo = data.githubRepo;
            let dataLive = data.live;

            // Tạo thẻ div card
            let card = document.createElement("div");
            card.classList.add("card");
            card.setAttribute("data-tooltip", dataTooltip);

            // Tạo thẻ div img
            let img = document.createElement("div");
            img.classList.add("img");
            img.style = `background-image: url('${dataImg}'); background-size: cover, contain; background-position: center center;`

            // Tạo thẻ div sub title
            let subTitle = document.createElement("div");
            subTitle.classList.add("sub-title");
            subTitle.textContent = dataSubTitle;

            // Tạo thẻ div bottom
            let bottom = document.createElement("div");
            bottom.classList.add("bottom");

            // Tạo thẻ div repo
            let repo = document.createElement("div");
            repo.classList.add("repo");

            // Tạo thẻ a repo
            let aRepo = document.createElement("a");
            aRepo.href = dataGithubRepo;
            aRepo.setAttribute("target", "_blank");
            aRepo.textContent = "Github Repo";

            // Tạo thẻ div demo
            let demo = document.createElement("demo");
            demo.classList.add("demo");

            // Tạo thẻ a demo
            let aDemo = document.createElement("a");
            aDemo.href = dataLive;
            aDemo.setAttribute("target", "_blank");
            aDemo.textContent = "Live";

            // Thêm vào thẻ demo
            demo.appendChild(aDemo);

            // Thêm vào thẻ div repo
            repo.appendChild(aRepo);

            // Thêm vào thẻ div bottom
            bottom.appendChild(repo);
            bottom.appendChild(demo);

            // Thêm vào thẻ div card
            card.appendChild(img);
            card.appendChild(subTitle);
            card.appendChild(bottom);

            // console.log(card);

            return card;
        }

        // Update data
        const updateData = (e) => {
            // Đỗ data vào HTML_CSS_JS

            let end = 1 * maxRecord;
            let start = end - maxRecord;

            const DATA_CLONE = JSON.parse(JSON.stringify(DATA_HTML_CSS_JS));
            const DATA_HTML_CSS_JS_CLONE = DATA_CLONE.slice(start, end);
            rowHTML_CSS_JS.innerHTML = "";

            for (let data of DATA_HTML_CSS_JS_CLONE) {
                rowHTML_CSS_JS.appendChild(createCard(data));
            }
        }
        updateData();

        window.htmlcssjs++;
    };
});
