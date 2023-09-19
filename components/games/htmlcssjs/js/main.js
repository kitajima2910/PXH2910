$(document).ready(() => {

    let HTML_CSS_JS = document.querySelector(".html-css-js");
    let rowHTML_CSS_JS = HTML_CSS_JS.querySelector(".row");

    // Update data
    const updateData = () => {
        // Đỗ data vào HTML_CSS_JS
        for (let data of DATA_HTML_CSS_JS) {
            rowHTML_CSS_JS.appendChild(createCard(data));
        }
    }

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

    updateData();

});
