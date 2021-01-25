const footer = body.querySelector("footer");

function paintIcon() {
  const gitLink = document.createElement("a");
  const blogLink = document.createElement("a");
  const naverLink = document.createElement("a");
  const proLink = document.createElement("a");
  const baekLink = document.createElement("a");
  const nomadLink = document.createElement("a");

  gitLink.href = `https://github.com`;
  blogLink.href = `https://piemonte93.github.io`;
  naverLink.href = `https://naver.com`;
  proLink.href = `https://programmers.co.kr/`;
  baekLink.href = `https://www.acmicpc.net/`;
  nomadLink.href = `https://nomadcoders.co/`;

  const github = document.createElement("img");
  const blog = document.createElement("img");
  const naver = document.createElement("img");
  const programmers = document.createElement("img");
  const baekjoon = document.createElement("img");
  const nomad = document.createElement("img");
  github.src = `https://github.com/fluidicon.png`;
  blog.src = `https://section.blog.naver.com/favicon.ico?3`;
  naver.src = `https://s.pstatic.net/static/www/u/2014/0328/mma_204243574.png`;
  programmers.src = `https://programmers.co.kr/assets/icons/favicon-40b78633b6556a68c3da8e2125c31512fbd01d09906ab76c8a8ff289e494cadb.png`;
  baekjoon.src = `https://www.acmicpc.net/apple-touch-icon.png`;
  nomad.src = `https://nomadcoders.co/m.png`;
  github.classList.add("icon");
  blog.classList.add("icon");
  naver.classList.add("icon");
  programmers.classList.add("icon");
  baekjoon.classList.add("icon");
  nomad.classList.add("icon");

  gitLink.appendChild(github);
  blogLink.appendChild(blog);
  naverLink.appendChild(naver);
  proLink.appendChild(programmers);
  baekLink.appendChild(baekjoon);
  nomadLink.appendChild(nomad);

  footer.appendChild(gitLink);
  footer.appendChild(blogLink);
  footer.appendChild(naverLink);
  footer.appendChild(proLink);
  footer.appendChild(baekLink);
  footer.appendChild(nomadLink);
}
function init() {
  paintIcon();
}

init();
